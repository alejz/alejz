"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { completeTask } from "@/lib/dashboard-actions";

interface Task {
  id: number;
  title: string;
  xpReward: number | null;
  tokenReward: number | null;
  status: string | null;
}

interface Skill {
  id: number;
  name: string;
  category: string | null;
  level: number | null;
  progress: number | null;
}

interface Goal {
  id: number;
  title: string;
  targetRole: string | null;
  status: string | null;
}

interface DashboardClientProps {
  user: {
    id: number;
    name: string | null;
    surname: string | null;
    email: string;
    level: number | null;
    xp: number | null;
    token: number | null;
  };
  skills: Skill[];
  tasks: Task[];
  goals: Goal[];
  stats: {
    completedTasks: number;
    xpForNextLevel: number;
    xpProgress: number;
  };
}

export default function DashboardClient({ user, skills, tasks, goals, stats }: DashboardClientProps) {
  const [localTasks, setLocalTasks] = useState(tasks);
  const [localUser, setLocalUser] = useState(user);
  const [localStats, setLocalStats] = useState(stats);
  const [isPending, startTransition] = useTransition();
  const [completingTask, setCompletingTask] = useState<number | null>(null);
  const [showToast, setShowToast] = useState<{ message: string; type: string } | null>(null);

  const showNotification = (message: string, type: string) => {
    setShowToast({ message, type });
    setTimeout(() => setShowToast(null), 3000);
  };

  const handleCompleteTask = (taskId: number) => {
    startTransition(async () => {
      setCompletingTask(taskId);
      const result = await completeTask(taskId);
      
      if (result.success) {
        setLocalTasks(prev => prev.map(t => 
          t.id === taskId ? { ...t, status: "completed" } : t
        ));
        setLocalUser(prev => ({
          ...prev,
          xp: result.newXp,
          token: result.newToken,
          level: result.newLevel,
        }));
        setLocalStats(prev => ({
          ...prev,
          completedTasks: prev.completedTasks + 1,
          xpProgress: Math.min((result.newXp / ((result.newLevel) * 500)) * 100, 100),
        }));
        showNotification(`+${result.xpEarned} XP, +${result.tokenEarned} Token kazandın! 🎉`, "success");
      } else {
        showNotification(result.error || "Bir hata oluştu", "error");
      }
      setCompletingTask(null);
    });
  };

  const pendingTasks = localTasks.filter(t => t.status !== "completed");
  const completedCount = localTasks.filter(t => t.status === "completed").length;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {showToast && (
        <div className={`fixed top-20 right-6 z-50 px-6 py-3 rounded-xl shadow-2xl animate-slide-in ${
          showToast.type === "success" 
            ? "bg-gradient-to-r from-cyan-500/90 to-purple-500/90" 
            : "bg-red-500/90"
        }`}>
          <span className="font-medium">{showToast.message}</span>
        </div>
      )}

      <nav className="border-b border-white/5 backdrop-blur-xl bg-[#0a0a0f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="group-hover:scale-110 transition-transform duration-300">
              <defs>
                <linearGradient id="dashLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#dashLogo)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#dashLogo)"/>
            </svg>
            <span className="font-bold text-lg">CareerQuest</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400 text-sm hidden sm:block">
              Hoş geldin, <span className="text-white font-medium">{user.name || "Kullanıcı"}</span>
            </span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] cursor-pointer group">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform duration-300">
                {(user.name || "K").charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hoş Geldin! 👋
          </h1>
          <p className="text-neutral-400">Kariyer yolculuğuna genel bakış</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-neutral-400 text-sm">Level</span>
              </div>
              <div className="text-4xl font-bold text-cyan-400">{localUser.level}</div>
              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-500"
                  style={{ width: `${localStats.xpProgress}%` }}
                ></div>
              </div>
              <span className="text-xs text-neutral-500 mt-1 block">
                {localUser.xp} / {localStats.xpForNextLevel} XP
              </span>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-neutral-400 text-sm">XP</span>
              </div>
              <div className="text-4xl font-bold text-purple-400">{(localUser.xp || 0).toLocaleString()}</div>
              <div className="mt-3 text-xs text-neutral-500">Toplam XP</div>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-neutral-400 text-sm">Token</span>
              </div>
              <div className="text-4xl font-bold text-yellow-400">{localUser.token}</div>
              <div className="mt-3 text-xs text-neutral-500">Harcanabilir</div>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-neutral-400 text-sm">Tamamlanan</span>
              </div>
              <div className="text-4xl font-bold text-green-400">{localStats.completedTasks}</div>
              <div className="mt-3 text-xs text-neutral-500">Görev</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Bugünkü Görevler</h2>
                <span className="text-sm text-neutral-500">{completedCount}/{localTasks.length} tamamlandı</span>
              </div>
              <div className="space-y-3">
                {pendingTasks.length === 0 && localTasks.length === 0 ? (
                  <div className="text-neutral-500 text-center py-8">
                    <p>Henüz görev yok</p>
                    <Link href="/gorevler" className="text-cyan-400 hover:underline text-sm mt-2 inline-block">
                      Yeni görev oluştur
                    </Link>
                  </div>
                ) : pendingTasks.length > 0 ? (
                  pendingTasks.map((task) => (
                    <div 
                      key={task.id}
                      className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group/item"
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          completingTask === task.id 
                            ? "border-cyan-500 animate-pulse" 
                            : "border-neutral-600 group-hover/item:border-cyan-500"
                        }`}>
                          {completingTask === task.id ? (
                            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-spin"></div>
                          ) : (
                            <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                          )}
                        </div>
                        <span className="text-neutral-300 group-hover/item:text-white transition-colors">{task.title}</span>
                      </div>
                      <span className="text-sm text-cyan-400">+{task.xpReward} XP</span>
                    </div>
                  ))
                ) : (
                  <div className="text-neutral-500 text-center py-8">
                    <p>Tüm görevler tamamlandı! 🎉</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-6">Beceriler</h2>
              {skills.length === 0 ? (
                <div className="text-neutral-500 text-center py-8">
                  <p>Henüz beceri eklenmemiş</p>
                  <Link href="/beceriler" className="text-purple-400 hover:underline text-sm mt-2 inline-block">
                    Beceri ekle
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill) => (
                    <div key={skill.id} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group/card">
                      <div className="text-2xl mb-2">
                        {skill.category === "Teknik" && "💻"}
                        {skill.category === "Tasarım" && "🎨"}
                        {skill.category === "İletişim" && "📢"}
                        {skill.category === "Analitik" && "📊"}
                        {skill.category === "Dil" && "🌍"}
                        {!skill.category && "⭐"}
                      </div>
                      <div className="font-medium">{skill.name}</div>
                      <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-500"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-neutral-500">Seviye {skill.level} - %{skill.progress}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Kariyer Hedefi</h2>
                <p className="text-neutral-400 text-sm mt-1">Uzun vadeli hedefin</p>
              </div>
              {goals.length > 0 && (
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                  <span className="text-sm text-cyan-400 font-medium">{goals[0].targetRole}</span>
                </div>
              )}
            </div>
            {goals.length === 0 ? (
              <div className="text-neutral-500 text-center py-8">
                <p>Henüz hedef belirlenmemiş</p>
                <Link href="/hedefler" className="text-cyan-400 hover:underline text-sm mt-2 inline-block">
                  Hedef oluştur
                </Link>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-neutral-400 text-sm">{goals[0].title}</span>
                  <span className="text-white font-medium">{goals[0].status === "active" ? "Aktif" : "Tamamlandı"}</span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between mt-4 text-sm text-neutral-500">
                  <span>Başlangıç: {new Date().toLocaleDateString("tr-TR", { month: "short", year: "numeric" })}</span>
                  <span>Hedef: 2026</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </main>
  );
}