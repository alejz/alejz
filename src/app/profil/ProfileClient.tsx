"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { updateProfile } from "@/lib/profile-actions";

interface Skill {
  id: number;
  name: string;
  category: string | null;
  level: number | null;
  progress: number | null;
}

interface Achievement {
  id: number;
  name: string;
  description: string | null;
  unlockedAt: Date | null;
}

interface ProfileClientProps {
  user: {
    id: number;
    name: string | null;
    surname: string | null;
    email: string;
    age: number | null;
    profession: string | null;
    bio: string | null;
    level: number | null;
    xp: number | null;
    token: number | null;
    createdAt: Date | null;
  };
  skills: Skill[];
  stats: {
    completedTasks: number;
    totalXpEarned: number;
    totalTasks: number;
  };
  achievements: Achievement[];
}

const PROFESSIONS = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Mobile Developer",
  "Data Scientist",
  "Data Analyst",
  "DevOps Engineer",
  "UI/UX Designer",
  "Product Manager",
  "Software Architect",
  "Security Specialist",
  "Cloud Engineer",
  "AI/ML Engineer",
  "Game Developer",
  "Other",
];

export default function ProfileClient({ user, skills, stats, achievements }: ProfileClientProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [showToast, setShowToast] = useState<{ message: string; type: string } | null>(null);

  const showNotification = (message: string, type: string) => {
    setShowToast({ message, type });
    setTimeout(() => setShowToast(null), 3000);
  };

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await updateProfile(formData);
      if (result.success) {
        showNotification("Profil güncellendi!", "success");
        setIsEditing(false);
      } else {
        showNotification(result.error || "Hata oluştu", "error");
      }
    });
  };

  const joinDate = user.createdAt 
    ? new Date(user.createdAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
    : "-";

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
          <Link href="/dashboard" className="flex items-center gap-3 group">
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
            <Link href="/dashboard" className="text-neutral-400 hover:text-white transition-colors text-sm">
              ← Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Profil
          </h1>
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Düzenle
            </button>
          )}
        </div>

        <div className="grid gap-6">
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[3px] flex-shrink-0">
                <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center text-3xl font-bold">
                  {(user.name || "K").charAt(0).toUpperCase()}{(user.surname || "").charAt(0).toUpperCase()}
                </div>
              </div>
              
              <div className="flex-1">
                {isEditing ? (
                  <form action={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">İsim</label>
                        <input 
                          name="name" 
                          defaultValue={user.name || ""}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">Soyisim</label>
                        <input 
                          name="surname" 
                          defaultValue={user.surname || ""}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">Yaş</label>
                        <input 
                          name="age" 
                          type="number"
                          defaultValue={user.age || ""}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-400 mb-1">Meslek</label>
                        <select 
                          name="profession"
                          defaultValue={user.profession || ""}
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none"
                        >
                          <option value="">Seç...</option>
                          {PROFESSIONS.map(p => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-neutral-400 mb-1">Bio</label>
                      <textarea 
                        name="bio" 
                        rows={3}
                        defaultValue={user.bio || ""}
                        placeholder="Kendini kısaca tanıt..."
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:border-cyan-500 focus:outline-none resize-none"
                      />
                    </div>
                    <div className="flex gap-3">
                      <button 
                        type="submit"
                        disabled={isPending}
                        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                      >
                        {isPending ? "Kaydediliyor..." : "Kaydet"}
                      </button>
                      <button 
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 rounded-lg border border-white/20 text-neutral-400 hover:text-white transition-colors"
                      >
                        İptal
                      </button>
                    </div>
                  </form>
                ) : (
                  <div>
                    <h2 className="text-2xl font-bold mb-1">
                      {user.name} {user.surname}
                    </h2>
                    <p className="text-neutral-400 text-sm mb-3">{user.email}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {user.profession && (
                        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">
                          {user.profession}
                        </span>
                      )}
                      {user.age && (
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">
                          {user.age} yaş
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                        Level {user.level}
                      </span>
                    </div>
                    {user.bio && (
                      <p className="text-neutral-300">{user.bio}</p>
                    )}
                    <p className="text-neutral-500 text-sm mt-3">
                      Katılım: {joinDate}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
              <div className="text-neutral-400 text-sm mb-1">Toplam XP</div>
              <div className="text-3xl font-bold text-purple-400">{(user.xp || 0).toLocaleString()}</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
              <div className="text-neutral-400 text-sm mb-1">Tamamlanan Görev</div>
              <div className="text-3xl font-bold text-green-400">{stats.completedTasks}</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
              <div className="text-neutral-400 text-sm mb-1">Token</div>
              <div className="text-3xl font-bold text-yellow-400">{user.token || 0}</div>
            </div>
          </div>

          {skills.length > 0 && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Beceriler</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-neutral-400">Seviye {skill.level || 1}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.progress || 0}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {achievements.length > 0 && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Rozetler</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="font-medium text-sm">{achievement.name}</div>
                    {achievement.description && (
                      <div className="text-xs text-neutral-500 mt-1">{achievement.description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {skills.length === 0 && achievements.length === 0 && (
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 text-center">
              <p className="text-neutral-400 mb-4">Henüz beceri veya rozet eklenmemiş</p>
              <Link 
                href="/dashboard"
                className="text-cyan-400 hover:underline"
              >
                Dashboard&apos;a git ve görevleri tamamla
              </Link>
            </div>
          )}
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