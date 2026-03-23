export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            CareerQuest
          </span>
          <a href="#contact" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-semibold rounded-lg transition-colors">
            Erken Erişim
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Akıllı Kariyer Gelişim Sistemi
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Kariyerini <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Anlayan</span>, 
            <br />Geliştiren & Yönlendiren
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            CareerQuest bir uygulama değil. Yapay zeka destekli akıllı bir karar ve gelişim sistemi. 
            Senin için kariyer yolculuğunu planlar, becerilerini analiz eder ve gerçek ilerlemeyi ölçer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-neutral-900 font-bold rounded-xl text-lg transition-all hover:scale-105">
              Erken Erişim İste
            </a>
            <a href="#features" className="px-8 py-4 border border-neutral-700 hover:border-neutral-500 text-white font-semibold rounded-xl text-lg transition-colors">
              Özellikleri Keşfet
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Kariyer Planlama", desc: "Yapay zeka destekli kariyer yolculuğu planlaması ve job matching" },
              { icon: "📈", title: "Beceri Gelişimi", desc: "Skill gap analizi ve kişiselleştirilmiş gelişim yol haritası" },
              { icon: "🧠", title: "Akıllı Rehberlik", desc: "AI asistan senin için önerir, analiz eder ve yönlendirir" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 transition-colors">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nasıl Çalışır?</h2>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden md:block"></div>
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

      <section className="py-20 px-6 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Sistem Mimarisi</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "AI + Rule Engine", desc: "Yapay zeka ve kurallar birlikte çalışır, karar mekanizması tamamen AI değildir" },
              { title: "Decision Engine", desc: "Akıllı karar alma sistemi senin için en uygun yolu seçer" },
              { title: "Memory System", desc: "Tüm ilerleme kaydedilir, sistem senin geçmişini hatırlar" },
              { title: "Feedback Loop", desc: "Sürekli geri bildirim ile sürekli gelişim" },
              { title: "Skill System", desc: "Beceri ağacı ve seviye sistemi ile ilerlemeni gör" },
              { title: "Token Economy", desc: "Görev tamamla, geliş, token kazan" }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 transition-colors">
                <h3 className="text-lg font-bold text-blue-400 mb-2">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Gamification</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "XP Sistemi", desc: "Her başarı XP kazandırır" },
              { icon: "📊", title: "Level Sistemi", desc: "Seviye atla ve yeni unlock'lar aç" },
              { icon: "🌳", title: "Skill Tree", desc: "Beceri ağacında ilerle" },
              { icon: "🏆", title: "Başarılar", desc: "Başarıları tamamla ödül kazan" }
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-neutral-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-neutral-500 mt-8">
            Amaç: eğlence değil, <span className="text-cyan-400">ilerlemeyi görünür kılmak</span>
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">CareerQuest{"'"}e Katıl</h2>
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
          
          <p className="text-neutral-500 text-sm mt-4">
            Küçük başla • Ölç • Öğren • Geliştir • Genişlet
          </p>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-neutral-800">
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
