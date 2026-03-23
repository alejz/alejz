import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
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
            <span className="text-neutral-400 text-sm hidden sm:block">Hoş geldin, <span className="text-white font-medium">Kullanıcı</span></span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 p-[2px] cursor-pointer group">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center font-bold text-sm group-hover:scale-105 transition-transform duration-300">
                K
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
              <div className="text-4xl font-bold text-cyan-400">5</div>
              <div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[65%] bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
              </div>
              <span className="text-xs text-neutral-500 mt-1 block">65% ilerleme</span>
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
              <div className="text-4xl font-bold text-purple-400">2,450</div>
              <div className="mt-3 text-xs text-neutral-500">+450 bu hafta</div>
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
              <div className="text-4xl font-bold text-yellow-400">150</div>
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
              <div className="text-4xl font-bold text-green-400">12</div>
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
                <span className="text-sm text-neutral-500">3/5 tamamlandı</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-cyan-500 flex items-center justify-center">
                      <svg className="w-3 h-3 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors">CV oluştur</span>
                  </div>
                  <span className="text-sm text-cyan-400">+50 XP</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-neutral-600 group-hover/item:border-purple-500 transition-colors"></div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors">Skill test çöz</span>
                  </div>
                  <span className="text-sm text-purple-400">+30 XP</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-pink-500/30 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-neutral-600 group-hover/item:border-pink-500 transition-colors"></div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors">Kariyer hedefi belirle</span>
                  </div>
                  <span className="text-sm text-pink-400">+100 XP</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-neutral-600 group-hover/item:border-cyan-500 transition-colors"></div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors">Mentor ile randevu</span>
                  </div>
                  <span className="text-sm text-cyan-400">+75 XP</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-neutral-600 group-hover/item:border-yellow-500 transition-colors"></div>
                    <span className="text-neutral-300 group-hover/item:text-white transition-colors">İş ilanı ara</span>
                  </div>
                  <span className="text-sm text-yellow-400">+25 XP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-semibold mb-6">Beceriler</h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 cursor-pointer group/card">
                  <div className="text-2xl mb-2">💻</div>
                  <div className="font-medium">JavaScript</div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[75%] bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-neutral-500">%75</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/30 transition-all duration-300 cursor-pointer group/card">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="font-medium">UI/UX</div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-neutral-500">%60</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-green-500/30 transition-all duration-300 cursor-pointer group/card">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-medium">Analitik</div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-neutral-500">%85</span>
                </div>
                <div className="p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-pink-500/30 transition-all duration-300 cursor-pointer group/card">
                  <div className="text-2xl mb-2">📢</div>
                  <div className="font-medium">İletişim</div>
                  <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[70%] bg-gradient-to-r from-pink-500 to-pink-400 rounded-full"></div>
                  </div>
                  <span className="text-xs text-neutral-500">%70</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Kariyer Hedefi</h2>
                <p className="text-neutral-400 text-sm mt-1">2026 yılı hedefin</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                <span className="text-sm text-cyan-400 font-medium">Senior Developer</span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-neutral-400 text-sm">İlerleme</span>
                <span className="text-white font-medium">45%</span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[45%] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex justify-between mt-4 text-sm text-neutral-500">
                <span>Başlangıç: Oca 2026</span>
                <span>Hedef: Ara 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}