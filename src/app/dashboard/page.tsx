import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Link from "next/link";

export default async function Dashboard() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/giris");
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
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
            <span className="text-neutral-400 text-sm hidden sm:block">
              Hoş geldin, <span className="text-white font-medium">{session.user.name || "Kullanıcı"}</span>
            </span>
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
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <span className="text-cyan-400">⚡</span>
                </div>
                <span className="text-neutral-400 text-sm">Level</span>
              </div>
              <div className="text-4xl font-bold text-cyan-400">5</div>
              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <span className="text-xs text-neutral-500 mt-1 block">2500 / 3000 XP</span>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-purple-400">⭐</span>
                </div>
                <span className="text-neutral-400 text-sm">XP</span>
              </div>
              <div className="text-4xl font-bold text-purple-400">2,500</div>
              <div className="mt-3 text-xs text-neutral-500">Toplam XP</div>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                  <span className="text-yellow-400">🪙</span>
                </div>
                <span className="text-neutral-400 text-sm">Token</span>
              </div>
              <div className="text-4xl font-bold text-yellow-400">150</div>
              <div className="mt-3 text-xs text-neutral-500">Harcanabilir</div>
            </div>
          </div>

          <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-1">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-400">✓</span>
                </div>
                <span className="text-neutral-400 text-sm">Tamamlanan</span>
              </div>
              <div className="text-4xl font-bold text-green-400">12</div>
              <div className="mt-3 text-xs text-neutral-500">Görev</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group">
            <h2 className="text-xl font-semibold mb-6">Aktif Görevler</h2>
            <div className="space-y-3">
              {[
                { title: "AI Araştırması Yap", xp: 50, status: "devam" },
                { title: "Kod Yaz", xp: 100, status: "devam" },
                { title: "LinkedIn Profil Güncelle", xp: 30, status: "devam" },
              ].map((task, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-neutral-600"></div>
                    <span className="text-neutral-300">{task.title}</span>
                  </div>
                  <span className="text-sm text-cyan-400">+{task.xp} XP</span>
                </div>
              ))}
            </div>
            <Link href="/gorevler" className="block text-center text-cyan-400 hover:underline mt-4">Tüm görevler</Link>
          </div>

          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
            <h2 className="text-xl font-semibold mb-6">Beceriler</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Python", progress: 75, icon: "💻" },
                { name: "Tasarım", progress: 60, icon: "🎨" },
                { name: "İletişim", progress: 45, icon: "📢" },
                { name: "Analitik", progress: 80, icon: "📊" },
              ].map((skill, i) => (
                <div key={i} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all">
                  <div className="text-2xl mb-2">{skill.icon}</div>
                  <div className="font-medium">{skill.name}</div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                  <span className="text-xs text-neutral-500">%{skill.progress}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
          <h2 className="text-xl font-semibold mb-6">Kariyer Hedefi</h2>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-neutral-400 text-sm">Yazılım Geliştirici Ol</span>
              <span className="text-white font-medium">Aktif</span>
            </div>
            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full w-[45%] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <div className="flex justify-between mt-4 text-sm text-neutral-500">
              <span>Başlangıç: Mar 2026</span>
              <span>Hedef: 2027</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
