"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-900/20 to-transparent rounded-full"></div>
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="shrink-0">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#logoGrad)"/>
            </svg>
            <span className="text-xl font-bold">CareerQuest</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block">Özellikler</a>
            <a href="#nasil-calisir" className="text-sm text-neutral-400 hover:text-white transition-colors hidden sm:block">Nasıl Çalışır</a>
            <a href="#contact" className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-all border border-white/10 hover:border-white/20">
              Erken Erişim
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-neutral-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 animate-pulse-glow"></span>
            Geleceğin Kariyer Sistemi
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            Kariyerini <span className="gradient-text">Yeniden Keşfet</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Yapay zeka destekli akıllı bir gelişim sistemi. Senin için kariyer yolculuğunu 
            planlar, becerilerini analiz eder ve <span className="text-white font-medium">gerçek ilerlemeyi ölçer</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-white hover:bg-gray-100 text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
              Erken Erişim İste
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#nasil-calisir" className="px-8 py-4 border border-neutral-700 hover:border-neutral-500 text-white font-semibold rounded-xl text-lg transition-colors flex items-center gap-2">
              Nasıl Çalışır?
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b from-cyan-500/20 via-purple-500/10 to-transparent blur-3xl opacity-30"></div>
      </section>

      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden CareerQuest?</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">Sıradan bir uygulama değil. Kariyerini dönüştüren akıllı bir sistem.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 2L26 8v12l-12 6L2 20V8l12-6z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 10l6 3v6l-6 3-6-3v-6l6-3z" fill="currentColor"/>
                </svg>
              ), 
              title: "Kariyer Planlama", 
              desc: "Yapay zeka destekli kariyer yolculuğu planlaması ve iş eşleştirme algoritmaları",
              gradient: "from-cyan-500 to-cyan-600"
              },
              { icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M4 20h20M7 14l4 4 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 24h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ), 
              title: "Beceri Gelişimi", 
              desc: "Skill gap analizi ve kişiselleştirilmiş gelişim yol haritası ile eksiklerini kapat",
              gradient: "from-purple-500 to-purple-600"
              },
              { icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="14" cy="14" r="2" fill="currentColor"/>
                </svg>
              ), 
              title: "Akıllı Rehberlik", 
              desc: "AI asistan senin için önerir, analiz eder ve kariyer hedeflerine yönlendirir",
              gradient: "from-pink-500 to-pink-600"
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="nasil-calisir" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasıl Çalışır?</h2>
            <p className="text-neutral-400">Sürekli öğrenen, büyüyen akıllı sistem</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent hidden md:block"></div>
            
            {[
              { step: "01", title: "Input", desc: "Profilini, hedeflerini ve mevcut becerilerini sisteme gir" },
              { step: "02", title: "Understand", desc: "AI senin kariyer profilini derinlemesine analiz eder" },
              { step: "03", title: "Decide", desc: "Kurallar + AI birlikte en uygun kararları alır" },
              { step: "04", title: "Act", desc: "Kişiselleştirilmiş görev ve içeriklerle harekete geç" },
              { step: "05", title: "Learn & Improve", desc: "Geri bildirimlerle sistem öğrenir ve kendini geliştirir" }
            ].map((item, i) => (
              <div key={i} className={`flex items-center gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 text-right">
                  <div className="text-cyan-400 font-mono text-sm mb-1">STEP {item.step}</div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-neutral-400 mt-2">{item.desc}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-cyan-500 relative z-10 shrink-0"></div>
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sistem Mimarisi</h2>
            <p className="text-neutral-400">Güçlü altyapı, akıllı kararlar</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "AI + Rule Engine", desc: "Yapay zeka ve kurallar birlikte çalışır, karar mekanizması tamamen AI değildir" },
              { title: "Decision Engine", desc: "Akıllı karar alma sistemi senin için en uygun yolu seçer" },
              { title: "Memory System", desc: "Tüm ilerleme kaydedilir, sistem senin geçmişini hatırlar" },
              { title: "Feedback Loop", desc: "Sürekli geri bildirim ile sürekli gelişim" },
              { title: "Skill System", desc: "Beceri ağacı ve seviye sistemi ile ilerlemeni gör" },
              { title: "Token Economy", desc: "Görev tamamla, geliş, token kazan" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/50 transition-colors">
                <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gamification</h2>
            <p className="text-neutral-400">İlerlemeyi görünür kılan sistem</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "XP Sistemi", desc: "Her başarı XP kazandırır" },
              { icon: "📊", title: "Level Sistemi", desc: "Seviye atla ve yeni unlock'lar aç" },
              { icon: "🌳", title: "Skill Tree", desc: "Beceri ağacında ilerle" },
              { icon: "🏆", title: "Başarılar", desc: "Başarıları tamamla ödül kazan" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-neutral-500 text-sm mt-8">
            Amaç: eğlence değil, <span className="text-cyan-400">ilerlemeyi görünür kılmak</span>
          </p>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">CareerQuest&apos;e Katıl</h2>
          <p className="text-neutral-400 mb-8">
            Erken erişim ile kariyerini dönüştüren bu yolculuğa ilk sen başla.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="E-posta adresin" 
              className="flex-1 px-6 py-4 bg-neutral-900 border border-neutral-700 rounded-xl focus:border-cyan-500 focus:outline-none transition-colors"
            />
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-bold rounded-xl transition-all hover:scale-105">
              Kayıt Ol
            </button>
          </form>
          
          <p className="text-neutral-500 text-sm mt-8">
            Küçük başla • Ölç • Öğren • Geliştir • Genişlet
          </p>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            CareerQuest
          </span>
          <p className="text-neutral-500 text-sm">
            © 2026 CareerQuest. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </main>
  );
}