export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
      <nav style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(20px)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold', fontSize: '20px' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '8px' }}></div>
            <span>CareerQuest</span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#features" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Özellikler</a>
            <a href="#sistem" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Sistem</a>
            <a href="#gamification" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Gamification</a>
          </div>
          <div>
            <a href="/giris" style={{ padding: '10px 20px', borderRadius: '8px', fontWeight: 600, background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa', textDecoration: 'none', marginRight: '12px', display: 'inline-block' }}>Giriş Yap</a>
            <a href="/kayit" style={{ padding: '10px 20px', borderRadius: '8px', fontWeight: 600, background: '#fff', color: '#0a0a0f', textDecoration: 'none', display: 'inline-block' }}>Kayıt Ol</a>
          </div>
        </div>
      </nav>
      
      <main style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <section style={{ textAlign: 'center', padding: '80px 0' }}>
            <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
              Kariyerini <span style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Yeniden Keşfet</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 32px' }}>
              Yapay zeka destekli akıllı bir gelişim sistemi. Senin için kariyer yolculuğunu planlar, becerilerini analiz eder ve gerçek ilerlemeyi ölçer.
            </p>
            <a href="/kayit" style={{ padding: '16px 32px', borderRadius: '8px', fontWeight: 600, background: '#fff', color: '#0a0a0f', textDecoration: 'none', display: 'inline-block' }}>Hemen Başla →</a>
          </section>
          
          <section id="features" style={{ padding: '40px 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(34,211,238,0.2), rgba(34,211,238,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px' }}>🧠</div>
                <h3 style={{ color: '#22d3ee', marginBottom: '12px', fontSize: '20px' }}>Kariyer Planlama</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>Yapay zeka destekli kariyer yolculuğu planlaması ve iş eşleştirme algoritmaları ile doğru işi bul.</p>
              </div>
              <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(168,85,247,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px' }}>✨</div>
                <h3 style={{ color: '#a855f7', marginBottom: '12px', fontSize: '20px' }}>Beceri Gelişimi</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>Skill gap analizi ve kişiselleştirilmiş gelişim yol haritası ile eksiklerini kapat.</p>
              </div>
              <div style={{ padding: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(236,72,153,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px' }}>🤖</div>
                <h3 style={{ color: '#ec4899', marginBottom: '12px', fontSize: '20px' }}>Akıllı Rehberlik</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px', lineHeight: 1.6 }}>AI asistan senin için önerir, analiz eder ve kariyer hedeflerine yönlendirir.</p>
              </div>
            </div>
          </section>
          
          <section id="sistem" style={{ padding: '60px 0' }}>
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Sistem Mimarisi</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <h3 style={{ color: '#22d3ee', marginBottom: '8px' }}>🧠 AI + Rule Engine</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Yapay zeka ve kurallar birlikte çalışır</p>
              </div>
              <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <h3 style={{ color: '#a855f7', marginBottom: '8px' }}>🎯 Decision Engine</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Akıllı karar alma sistemi</p>
              </div>
              <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <h3 style={{ color: '#ec4899', marginBottom: '8px' }}>🪙 Token Economy</h3>
                <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Görev tamamla, token kazan</p>
              </div>
            </div>
          </section>
          
          <section style={{ textAlign: 'center', padding: '80px 0' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Hazır mısın?</h2>
            <p style={{ color: '#a1a1aa', marginBottom: '32px' }}>Kariyerini dönüştüren bu yolculuğa ilk adımı at.</p>
            <a href="/kayit" style={{ padding: '16px 32px', borderRadius: '8px', fontWeight: 600, background: '#fff', color: '#0a0a0f', textDecoration: 'none', display: 'inline-block' }}>Kayıt Ol</a>
          </section>
        </div>
      </main>
      
      <footer style={{ padding: '32px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#71717a', fontSize: '14px' }}>
        <p>© 2026 CareerQuest. Tüm hakları saklıdır.</p>
      </footer>
    </main>
  );
}
