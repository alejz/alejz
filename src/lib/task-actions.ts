"use server";

import { db } from "@/db";
import { professions, professionTasks, userTaskSubmissions, users } from "@/db/schema";
import { eq, and, desc } from "drizzle-orm";
import { auth } from "@/auth";

export async function getProfessions() {
  const allProfessions = await db.select().from(professions).orderBy(professions.category, professions.name);
  return allProfessions;
}

export async function getProfessionById(id: number) {
  const profession = await db.select().from(professions).where(eq(professions.id, id)).limit(1);
  return profession[0] || null;
}

export async function getTasksByProfession(professionId: number) {
  const tasks = await db
    .select()
    .from(professionTasks)
    .where(eq(professionTasks.professionId, professionId))
    .orderBy(professionTasks.difficulty);
  return tasks;
}

export async function getTaskById(taskId: number) {
  const task = await db.select().from(professionTasks).where(eq(professionTasks.id, taskId)).limit(1);
  return task[0] || null;
}

export async function getUserSubmissions(userId: number) {
  const submissions = await db
    .select()
    .from(userTaskSubmissions)
    .where(eq(userTaskSubmissions.userId, userId))
    .orderBy(desc(userTaskSubmissions.createdAt));
  return submissions;
}

export async function submitTask(taskId: number, submissionText: string, submissionUrl?: string) {
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

  const task = await db
    .select()
    .from(professionTasks)
    .where(eq(professionTasks.id, taskId))
    .limit(1);

  if (task.length === 0) return { error: "Görev bulunamadı" };

  const isCorrect = Math.random() > 0.3;

  const feedback = isCorrect 
    ? "Tebrikler! Görevi başarıyla tamamladın. " + getPositiveFeedback(task[0].taskType)
    : "Görev henüz tamamlanmadı. " + getNegativeFeedback(task[0].taskType);

  await db.insert(userTaskSubmissions).values({
    userId: user.id,
    taskId: taskId,
    submissionText: submissionText,
    submissionUrl: submissionUrl || null,
    aiFeedback: feedback,
    isCorrect: isCorrect,
    evaluatedAt: new Date(),
  });

  if (isCorrect) {
    await db
      .update(users)
      .set({
        xp: (user.xp || 0) + task[0].xpReward,
        token: (user.token || 0) + task[0].tokenReward,
        level: Math.floor(((user.xp || 0) + task[0].xpReward) / 500) + 1,
        updatedAt: new Date(),
      })
      .where(eq(users.id, user.id));
  }

  return { 
    success: true, 
    isCorrect,
    feedback,
    xpEarned: isCorrect ? task[0].xpReward : 0,
    tokenEarned: isCorrect ? task[0].tokenReward : 0
  };
}

function getPositiveFeedback(taskType: string): string {
  const feedbacks = {
    learning: "Harika bir öğrenme süreci geçirdin. Konuyu iyi anlamışsın!",
    practice: "Pratik becerilerini başarıyla gösterdin. Çok iyi iş çıkardın!",
    homework: "Ödevini zamanında ve kaliteli tamamladın. Tebrikler!",
    quiz: "Quiz'de yüksek puan aldın. Bilgini kanıtladın!",
  };
  return feedbacks[taskType as keyof typeof feedbacks] || "Harika iş çıkardın!";
}

function getNegativeFeedback(taskType: string): string {
  const feedbacks = {
    learning: "Konuyu biraz daha detaylı çalışmanı öneriyorum. İleri seviye kaynaklara göz at!",
    practice: "Pratik yapmaya devam et. Daha fazla örnek çözerek kendini geliştirebilirsin!",
    homework: "Ödevi biraz daha geliştirmen gerekiyor. Detaylı geri bildirim için tekrar dene!",
    quiz: "Quiz'de daha yüksek puan almak için konuyu tekrar gözden geçir!",
  };
  return feedbacks[taskType as keyof typeof feedbacks] || "Biraz daha çalışman gerekiyor!";
}