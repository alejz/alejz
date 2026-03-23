"use server";

import { db } from "@/db";
import { users, skills, tasks, achievements } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";

export async function getProfileData() {
  const session = await auth();
  
  if (!session?.user?.email) {
    return null;
  }

  const userData = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email))
    .limit(1);

  if (userData.length === 0) return null;

  const user = userData[0];

  const userSkills = await db
    .select()
    .from(skills)
    .where(eq(skills.userId, user.id));

  const userTasks = await db
    .select()
    .from(tasks)
    .where(eq(tasks.userId, user.id));

  const userAchievements = await db
    .select()
    .from(achievements)
    .where(eq(achievements.userId, user.id));

  const completedTasks = userTasks.filter(t => t.status === "completed").length;
  const totalXpEarned = userTasks
    .filter(t => t.status === "completed")
    .reduce((sum, t) => sum + (t.xpReward || 0), 0);

  return {
    user: {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      age: user.age,
      profession: user.profession,
      bio: user.bio,
      level: user.level || 1,
      xp: user.xp || 0,
      token: user.token || 0,
      createdAt: user.createdAt,
    },
    skills: userSkills,
    stats: {
      completedTasks,
      totalXpEarned,
      totalTasks: userTasks.length,
    },
    achievements: userAchievements,
  };
}

export async function updateProfile(formData: FormData) {
  const session = await auth();
  
  if (!session?.user?.email) {
    return { error: "Oturum açmanız gerekiyor" };
  }

  const name = formData.get("name") as string;
  const surname = formData.get("surname") as string;
  const age = formData.get("age") ? parseInt(formData.get("age") as string) : null;
  const profession = formData.get("profession") as string;
  const bio = formData.get("bio") as string;

  await db
    .update(users)
    .set({
      name,
      surname,
      age,
      profession,
      bio,
      updatedAt: new Date(),
    })
    .where(eq(users.email, session.user.email));

  return { success: true };
}