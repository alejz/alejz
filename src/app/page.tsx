"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white font-sans">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-xy"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-xy delay-[-4s]"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="shrink-0">
              <defs>
                <linearGradient id="navLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#navLogo)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#navLogo)"/>
            </svg>
            <span className="text-xl font-bold">CareerQuest</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="/giris" className="px-4 py-2 text-sm text-neutral-300 hover:text-white font-medium transition-colors">Giriş Yap</a>
            <a href="/kayit" className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform">
              Kayıt Ol
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-44 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse-glow"></span>
            Geleceğin Kariyer Sistemi
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Kariyerini <span className="gradient-text">Yeniden Keşfet</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Yapay zeka destekli akıllı bir gelişim sistemi. Senin için kariyer yolculuğunu planlar, becerilerini analiz eder ve <span className="text-white font-medium">gerçek ilerlemeyi ölçer</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="/kayit" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Hemen Başla
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <p className="text-neutral-500 text-sm">
            Zaten hesabın var mı? <a href="/giris" className="text-cyan-400 hover:underline">Giriş yap</a>
          </p>
        </div>
      </section>

      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden CareerQuest?</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Sıradan bir uygulama değil. Kariyerini dönüştüren akıllı bir sistem.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Kariyer Planlama", desc: "Yapay zeka destekli kariyer yolculuğu planlaması", gradient: "from-cyan-500 to-cyan-600" },
              { title: "Beceri Gelişimi", desc: "Skill gap analizi ve kişiselleştirilmiş gelişim yol haritası", gradient: "from-purple-500 to-purple-600" },
              { title: "Akıllı Rehberlik", desc: "AI asistan kariyer hedeflerine yönlendirir", gradient: "from-pink-500 to-pink-600" }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2 card-glow">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2L26 8v12l-12 6L2 20V8l12-6z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 10l6 3v6l-6 3-6-3v-6l6-3z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold">CareerQuest</span>
          <p className="text-neutral-500 text-sm">© 2026 CareerQuest</p>
        </div>
      </footer>
    </main>
  );
}