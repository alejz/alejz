import Link from "next/link";

export default function Dashboard() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50, padding: '16px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#fff' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '8px' }}></div>
            <span style={{ fontWeight: 700, fontSize: '18px' }}>CareerQuest</span>
          </Link>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/profil" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Profil</Link>
            <Link href="/gorevler" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: '14px' }}>Görevler</Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '8px' }}>Hoş Geldin! 👋</h1>
        <p style={{ color: '#a1a1aa', marginBottom: '32px' }}>Kariyer yolculuğuna genel bakış</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
            <div style={{ color: '#22d3ee', fontSize: '14px', marginBottom: '8px' }}>Level</div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#22d3ee' }}>5</div>
            <div style={{ marginTop: '12px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
              <div style={{ width: '80%', height: '100%', background: 'linear-gradient(90deg, #22d3ee, #a855f7)', borderRadius: '4px' }}></div>
            </div>
            <div style={{ fontSize: '12px', color: '#71717a', marginTop: '4px' }}>2500 / 3000 XP</div>
          </div>

          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
            <div style={{ color: '#a855f7', fontSize: '14px', marginBottom: '8px' }}>XP</div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#a855f7' }}>2,500</div>
            <div style={{ fontSize: '12px', color: '#71717a', marginTop: '12px' }}>Toplam XP</div>
          </div>

          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
            <div style={{ color: '#eab308', fontSize: '14px', marginBottom: '8px' }}>Token</div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#eab308' }}>150</div>
            <div style={{ fontSize: '12px', color: '#71717a', marginTop: '12px' }}>Harcanabilir</div>
          </div>

          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px' }}>
            <div style={{ color: '#22c55e', fontSize: '14px', marginBottom: '8px' }}>Tamamlanan</div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: '#22c55e' }}>12</div>
            <div style={{ fontSize: '12px', color: '#71717a', marginTop: '12px' }}>Görev</div>
          </div>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Aktif Görevler</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { title: "AI Araştırması Yap", xp: 50 },
            { title: "Kod Yaz", xp: 100 },
            { title: "LinkedIn Profil Güncelle", xp: 30 },
          ].map((task, i) => (
            <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: '#d4d4d8' }}>{task.title}</span>
              <span style={{ color: '#22d3ee', fontSize: '14px' }}>+{task.xp} XP</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}