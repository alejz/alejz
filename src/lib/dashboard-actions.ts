"use server";

import { db } from "@/db";
import { users, skills, tasks, careerGoals, achievements } from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/auth";

export async function getDashboardData() {
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

  const userGoals = await db
    .select()
    .from(careerGoals)
    .where(eq(careerGoals.userId, user.id));

  const userAchievements = await db
    .select()
    .from(achievements)
    .where(eq(achievements.userId, user.id));

  const completedTasks = userTasks.filter(t => t.status === "completed").length;

  const xpForNextLevel = (user.level || 1) * 500;
  const xpProgress = ((user.xp || 0) / xpForNextLevel) * 100;

  return {
    user: {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      level: user.level || 1,
      xp: user.xp || 0,
      token: user.token || 0,
    },
    skills: userSkills,
    tasks: userTasks,
    goals: userGoals,
    achievements: userAchievements,
    stats: {
      completedTasks,
      xpForNextLevel,
      xpProgress: Math.min(xpProgress, 100),
    },
  };
}

export async function completeTask(taskId: number) {
  const session = await auth();
  
  if (!session?.user?.email) {
    return { error: "Oturum açmanız gerekiyor" };
  }

  const userData = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email))
    .limit(1);

  if (userData.length === 0) return { error: "Kullanıcı bulunamadı" };

  const user = userData[0];

  const taskData = await db
    .select()
    .from(tasks)
    .where(eq(tasks.id, taskId))
    .limit(1);

  if (taskData.length === 0) return { error: "Görev bulunamadı" };

  const task = taskData[0];

  if (task.status === "completed") {
    return { error: "Görev zaten tamamlandı" };
  }

  const newXp = (user.xp || 0) + (task.xpReward || 0);
  const newToken = (user.token || 0) + (task.tokenReward || 0);
  const newLevel = Math.floor(newXp / 500) + 1;

  await db
    .update(tasks)
    .set({ 
      status: "completed", 
      completedAt: new Date() 
    })
    .where(eq(tasks.id, taskId));

  await db
    .update(users)
    .set({ 
      xp: newXp,
      token: newToken,
      level: newLevel,
      updatedAt: new Date()
    })
    .where(eq(users.id, user.id));

  return { 
    success: true, 
    newXp, 
    newToken, 
    newLevel,
    xpEarned: task.xpReward || 0,
    tokenEarned: task.tokenReward || 0
  };
}

export async function updateSkillProgress(skillId: number, progress: number) {
  const session = await auth();
  
  if (!session?.user?.email) {
    return { error: "Oturum açmanız gerekiyor" };
  }

  const userData = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email))
    .limit(1);

  if (userData.length === 0) return { error: "Kullanıcı bulunamadı" };

  const newLevel = Math.floor(progress / 25) + 1;

  await db
    .update(skills)
    .set({ 
      progress,
      level: newLevel,
    })
    .where(eq(skills.id, skillId));

  return { success: true, newLevel };
}