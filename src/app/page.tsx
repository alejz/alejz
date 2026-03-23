"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      <style jsx>{`
        .font-sans { font-family: var(--font-jakarta), system-ui, sans-serif; }
        .font-display { font-family: var(--font-outfit), system-ui, sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes float-xy {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, -10px); }
          50% { transform: translate(-5px, 15px); }
          75% { transform: translate(-15px, -5px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-float-xy { animation: float-xy 12s ease-in-out infinite; }
        .card-glow:hover {
          box-shadow: 0 0 40px -10px rgba(34, 211, 238, 0.3);
          border-color: rgba(34, 211, 238, 0.3);
        }
      `}</style>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float-xy"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-xy delay-[-4s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-900/10 to-transparent rounded-full"></div>
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
            <span className="text-xl font-display font-bold">CareerQuest</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors hidden md:block">Özellikler</a>
            <a href="#sistem" className="text-sm text-neutral-400 hover:text-white transition-colors hidden md:block">Sistem</a>
            <a href="#gamification" className="text-sm text-neutral-400 hover:text-white transition-colors hidden md:block">Gamification</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="px-4 py-2 text-sm text-neutral-300 hover:text-white font-medium transition-colors">Giriş Yap</a>
            <a href="#" className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform">
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
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Kariyerini <span className="gradient-text">Yeniden Keşfet</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Yapay zeka destekli akıllı bir gelişim sistemi. Senin için kariyer yolculuğunu planlar, becerilerini analiz eder ve <span className="text-white font-medium">gerçek ilerlemeyi ölçer</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <a href="#" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Hemen Başla
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          
          <p className="text-neutral-500 text-sm">
            Zaten hesabın var mı? <a href="#" className="text-cyan-400 hover:underline">Giriş yap</a>
          </p>
        </div>

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl opacity-30"></div>
      </section>

      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Neden CareerQuest?</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Sıradan bir uygulama değil. Kariyerini dönüştüren akıllı bir sistem.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 4L28 12v8l-12 8-12-8v-8L16 4z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 12l8 4v4l-8 4-8-4v-4l8-4z" fill="currentColor"/>
                  </svg>
                ),
                title: "Kariyer Planlama", 
                desc: "Yapay zeka destekli kariyer yolculuğu planlaması ve iş eşleştirme algoritmaları ile doğru işi bul",
                gradient: "from-cyan-500 to-cyan-600"
              },
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 24h24M8 16l6 6 12-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 28h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: "Beceri Gelişimi", 
                desc: "Skill gap analizi ve kişiselleştirilmiş gelişim yol haritası ile eksiklerini kapat",
                gradient: "from-purple-500 to-purple-600"
              },
              { 
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 10v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                  </svg>
                ),
                title: "Akıllı Rehberlik", 
                desc: "AI asistan senin için önerir, analiz eder ve kariyer hedeflerine yönlendirir",
                gradient: "from-pink-500 to-pink-600"
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-2 card-glow">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sistem" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Sistem Mimarisi</h2>
            <p className="text-neutral-400">Güçlü altyapı, akıllı kararlar</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🧠", title: "AI + Rule Engine", desc: "Yapay zeka ve kurallar birlikte çalışır" },
              { icon: "🎯", title: "Decision Engine", desc: "Akıllı karar alma sistemi" },
              { icon: "💾", title: "Memory System", desc: "Tüm ilerleme kaydedilir" },
              { icon: "🔄", title: "Feedback Loop", desc: "Sürekli gelişim döngüsü" },
              { icon: "🌳", title: "Skill System", desc: "Beceri ağacı sistemi" },
              { icon: "🪙", title: "Token Economy", desc: "Görev tamamla, token kazan" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 card-glow">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-cyan-400 mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gamification" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Gamification</h2>
            <p className="text-neutral-400">İlerlemeyi görünür kılan sistem</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "⚡", title: "XP Sistemi", desc: "Her başarı XP kazandırır" },
              { icon: "📊", title: "Level Sistemi", desc: "Seviye atla, yeni unlock'lar aç" },
              { icon: "🌳", title: "Skill Tree", desc: "Beceri ağacında ilerle" },
              { icon: "🏆", title: "Başarılar", desc: "Başarıları tamamla, ödül kazan" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 card-glow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-neutral-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-neutral-600 text-sm mt-8">
            Amaç: eğlence değil, <span className="text-cyan-400">ilerlemeyi görünür kılmak</span>
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Hazır mısın?</h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Kariyerini dönüştüren bu yolculuğa ilk adımı at.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform">
              Kayıt Ol
            </a>
            <a href="#" className="px-8 py-4 text-neutral-400 hover:text-white font-medium transition-colors">
              Daha fazla bilgi
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#footerLogo)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#footerLogo)"/>
              <defs>
                <linearGradient id="footerLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <span className="font-display font-bold">CareerQuest</span>
          </div>
          <p className="text-neutral-500 text-sm">
            © 2026 CareerQuest. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </main>
  );
}