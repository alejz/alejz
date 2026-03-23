"use client";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <style jsx>{`
        .font-sans { font-family: var(--font-jakarta), system-ui, sans-serif; }
        .font-display { font-family: var(--font-outfit), system-ui, sans-serif; }
      `}</style>

      <nav className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#logoGrad)"/>
            </svg>
            <span className="font-display font-bold">CareerQuest</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-neutral-400">Hoş geldin, Kullanıcı</span>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center font-bold">
              K
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="font-display text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-neutral-400 mb-8">Kariyer yolculuğuna genel bakış</p>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-neutral-400 text-sm mb-2">Level</div>
            <div className="font-display text-3xl font-bold text-cyan-400">5</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-neutral-400 text-sm mb-2">XP</div>
            <div className="font-display text-3xl font-bold text-purple-400">2,450</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-neutral-400 text-sm mb-2">Token</div>
            <div className="font-display text-3xl font-bold text-yellow-400">150</div>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="text-neutral-400 text-sm mb-2">Tamamlanan Görev</div>
            <div className="font-display text-3xl font-bold text-green-400">12</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h2 className="font-display text-xl font-semibold mb-4">Aktif Görevler</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <span>CV oluştur</span>
                <span className="text-sm text-cyan-400">+50 XP</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <span>Skill test çöz</span>
                <span className="text-sm text-cyan-400">+30 XP</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <span>Kariyer hedefi belirle</span>
                <span className="text-sm text-cyan-400">+100 XP</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h2 className="font-display text-xl font-semibold mb-4">Son Başarılar</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <span>🌟</span>
                <span>İlk adım</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <span>📚</span>
                <span>Öğrenmeye başla</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                <span>🎯</span>
                <span>Hedef koy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}