export default function Dashboard() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: '240px', background: 'rgba(10,10,15,0.95)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '24px 0', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh' }}>
        <div style={{ padding: '0 24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '10px' }}></div>
            <span style={{ fontSize: '20px', fontWeight: 700 }}>CareerQuest</span>
          </div>
        </div>
        
        <nav style={{ flex: 1 }}>
          {[
            { name: 'Dashboard', icon: '🏠', active: true },
            { name: 'Görevler', icon: '📋', active: false },
            { name: 'Profil', icon: '👤', active: false },
            { name: 'Ayarlar', icon: '⚙️', active: false },
          ].map((item, i) => (
            <a key={i} href={item.active ? '#' : item.name === 'Görevler' ? '/gorevler' : item.name === 'Profil' ? '/profil' : '#'} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '14px 24px', 
                color: item.active ? '#22d3ee' : '#a1a1aa', 
                textDecoration: 'none',
                background: item.active ? 'rgba(34,211,238,0.05)' : 'transparent',
                borderLeft: item.active ? '3px solid #22d3ee' : '3px solid transparent',
                transition: 'all 0.2s'
              }}>
              <span>{item.icon}</span>
              <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</span>
            </a>
          ))}
        </nav>
        
        <div style={{ padding: '24px' }}>
          <button style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: '#a1a1aa', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span>🚪</span>
            <span>Çıkış</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div style={{ marginLeft: '240px', flex: 1, padding: '32px 40px' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '4px' }}>Hoş Geldin! 👋</h1>
            <p style={{ color: '#a1a1aa' }}>Kariyer yolculuğuna genel bakış</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🔔</button>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 600, cursor: 'pointer' }}>K</div>
          </div>
        </header>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
          {[
            { title: 'Level', value: '5', color: '#22d3ee', icon: '⚡', progress: 80, xp: '2500/3000' },
            { title: 'XP', value: '2,500', color: '#a855f7', icon: '⭐', desc: 'Toplam XP' },
            { title: 'Token', value: '150', color: '#eab308', icon: '🪙', desc: 'Harcanabilir' },
            { title: 'Tamamlanan', value: '12', color: '#22c55e', icon: '✓', desc: 'Görev' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', transition: 'all 0.3s', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', color: stat.color }}>{stat.icon}</span>
                <span style={{ fontSize: '14px', color: '#a1a1aa' }}>{stat.title}</span>
              </div>
              <div style={{ fontSize: '36px', fontWeight: 700, color: stat.color, marginBottom: '8px' }}>{stat.value}</div>
              {stat.progress !== undefined ? (
                <>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '4px' }}>
                    <div style={{ width: `${stat.progress}%`, height: '100%', background: `linear-gradient(90deg, ${stat.color}, #a855f7)`, borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ fontSize: '12px', color: '#71717a' }}>{stat.xp}</span>
                </>
              ) : (
                <span style={{ fontSize: '12px', color: '#71717a' }}>{stat.desc}</span>
              )}
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {/* Görevler */}
          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 600 }}>Aktif Görevler</h2>
              <button style={{ padding: '8px 16px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>+ Yeni Görev</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { title: 'AI Araştırması Yap', xp: 50, status: 'devam' },
                { title: 'Kod Yaz', xp: 100, status: 'devam' },
                { title: 'LinkedIn Profil Güncelle', xp: 30, status: 'devam' },
              ].map((task, i) => (
                <div key={i} style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #52525b', background: 'transparent' }}></div>
                    <span style={{ color: '#d4d4d8' }}>{task.title}</span>
                  </div>
                  <span style={{ color: '#22d3ee', fontSize: '14px' }}>+{task.xp} XP</span>
                </div>
              ))}
            </div>
          </div>

          {/* Beceriler */}
          <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '20px' }}>Beceriler</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'Python', progress: 75, icon: '💻' },
                { name: 'Tasarım', progress: 60, icon: '🎨' },
                { name: 'İletişim', progress: 45, icon: '📢' },
                { name: 'Analitik', progress: 80, icon: '📊' },
              ].map((skill, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span>{skill.icon}</span>
                      <span style={{ fontSize: '14px' }}>{skill.name}</span>
                    </div>
                    <span style={{ fontSize: '14px', color: '#a1a1aa' }}>%{skill.progress}</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                    <div style={{ width: `${skill.progress}%`, height: '100%', background: 'linear-gradient(90deg, #a855f7, #ec4899)', borderRadius: '4px' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kariyer Hedefi */}
          <div style={{ gridColumn: 'span 2', padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <h2 style={{ fontSize: '18px', fontWeight: 600 }}>Kariyer Hedefi</h2>
                <p style={{ color: '#71717a', fontSize: '14px', marginTop: '4px' }}>Uzun vadeli hedefin</p>
              </div>
              <span style={{ padding: '6px 14px', background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)', borderRadius: '100px', fontSize: '13px', color: '#22d3ee' }}>Aktif</span>
            </div>
            <div style={{ padding: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#d4d4d8' }}>Yazılım Geliştirici Ol</span>
                <span style={{ fontWeight: 600 }}>45%</span>
              </div>
              <div style={{ height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
                <div style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg, #22d3ee, #a855f7, #ec4899)', borderRadius: '6px' }}></div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', fontSize: '13px', color: '#71717a' }}>
                <span>Başlangıç: Mar 2026</span>
                <span>Hedef: 2027</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}