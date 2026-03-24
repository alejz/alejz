export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '20px', fontWeight: 700 }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '8px' }}></div>
            <span>CareerQuest</span>
          </div>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a href="#features" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Özellikler</a>
            <a href="#sistem" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Sistem</a>
            <a href="#gamification" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Gamification</a>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="/giris" style={{ padding: '10px 20px', borderRadius: '8px', fontWeight: 600, background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa', textDecoration: 'none', display: 'inline-block' }}>Giriş Yap</a>
            <a href="/kayit" style={{ padding: '10px 20px', borderRadius: '8px', fontWeight: 600, background: '#fff', color: '#0a0a0f', textDecoration: 'none', display: 'inline-block' }}>Kayıt Ol</a>
          </div>
        </div>
      </nav>
      
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', width: '300px', height: '300px', background: '#22d3ee', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.1, top: '100px', left: '-100px' }}></div>
        <div style={{ position: 'absolute', width: '400px', height: '400px', background: '#a855f7', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.1, bottom: '100px', right: '-100px' }}></div>
      </div>
      
      <div style={{ paddingTop: '120px', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '14px', color: '#a1a1aa', marginBottom: '32px' }}>
            <span style={{ width: '8px', height: '8px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '50%' }}></span>
            Geleceğin Kariyer Sistemi
          </div>
          
          <h1 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1 }}>
            Kariyerini<br/>
            <span style={{ background: 'linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Yeniden Keşfet</span>
          </h1>
          
          <p style={{ fontSize: '18px', color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 32px' }}>
            Yapay zeka destekli akıllı bir gelişim sistemi. Senin için kariyer yolculuğunu planlar, becerilerini analiz eder ve <strong style={{ color: '#fff' }}>gerçek ilerlemeyi ölçer</strong>.
          </p>
          
          <a href="/kayit" style={{ padding: '16px 32px', borderRadius: '8px', fontWeight: 600, background: 'linear-gradient(135deg, #22d3ee, #a855f7, #ec4899)', backgroundSize: '200% 200%', color: '#0a0a0f', textDecoration: 'none', display: 'inline-block', animation: 'gradient-shift 3s ease infinite' }}>Hemen Başla →</a>
          
          <p style={{ color: '#a1a1aa', fontSize: '14px', marginTop: '16px' }}>Zaten hesabın var mı? <a href="/giris" style={{ color: '#22d3ee' }}>Giriş yap</a></p>
        </div>
      </div>
    </main>
  );
}
