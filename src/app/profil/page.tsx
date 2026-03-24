import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Link from "next/link";

export default async function ProfilePage() {
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
            <Link href="/dashboard" className="text-neutral-400 hover:text-white text-sm">Dashboard</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center gap-6 mb-10">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[3px]">
            <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center text-3xl font-bold">
              {session.user.name?.charAt(0) || "K"}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold">{session.user.name || "Kullanıcı"}</h1>
            <p className="text-neutral-400">{session.user.email}</p>
            <div className="flex gap-4 mt-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-sm">Level 5</span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm">2,500 XP</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-xl font-semibold mb-6">Beceriler</h2>
            <div className="space-y-4">
              {[
                { name: "Python", level: 8, progress: 80 },
                { name: "JavaScript", level: 7, progress: 70 },
                { name: "Tasarım", level: 5, progress: 50 },
                { name: "İletişim", level: 6, progress: 60 },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-neutral-400">Seviye {skill.level}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" style={{ width: `${skill.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <h2 className="text-xl font-semibold mb-6">İstatistikler</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 text-center">
                <div className="text-3xl font-bold text-cyan-400">12</div>
                <div className="text-neutral-400 text-sm">Tamamlanan Görev</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 text-center">
                <div className="text-3xl font-bold text-purple-400">4</div>
                <div className="text-neutral-400 text-sm">Rozet</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 text-center">
                <div className="text-3xl font-bold text-yellow-400">150</div>
                <div className="text-neutral-400 text-sm">Token</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 text-center">
                <div className="text-3xl font-bold text-green-400">45</div>
                <div className="text-neutral-400 text-sm">Gün Aktif</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
