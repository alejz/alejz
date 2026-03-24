"use client";

import { useState } from "react";

const professions = [
  { id: 'yazilim', name: 'Yazılım Geliştirici', icon: '💻' },
  { id: 'tasarim', name: 'UI/UX Tasarımcı', icon: '🎨' },
  { id: 'pazarlama', name: 'Dijital Pazarlama', icon: '📢' },
  { id: 'veri', name: 'Veri Analisti', icon: '📊' },
  { id: 'yapayzeka', name: 'Yapay Zeka Mühendisi', icon: '🤖' },
  { id: 'icerik', name: 'İçerik Editörü', icon: '✍️' },
];

const professionTasks: Record<string, { title: string; desc: string; xp: number; token: number; difficulty: string }[]> = {
  yazilim: [
    { title: 'GitHub\'da Repo Oluştur', desc: 'İlk repository\'ni oluştur ve paylaş', xp: 50, token: 10, difficulty: 'Kolay' },
    { title: 'React Komponenti Yaz', desc: 'Fonksiyonel bir React component oluştur', xp: 100, token: 25, difficulty: 'Orta' },
    { title: 'API Entegrasyonu Yap', desc: 'Bir REST API\'ye bağlan ve veri çek', xp: 150, token: 35, difficulty: 'Orta' },
    { title: 'Full Stack Proje Yap', desc: 'Frontend + Backend içeren proje geliştir', xp: 300, token: 75, difficulty: 'Zor' },
  ],
  tasarim: [
    { title: 'Figma\'da Tasarım Yap', desc: 'Basit bir UI tasarımı oluştur', xp: 50, token: 10, difficulty: 'Kolay' },
    { title: 'Prototip Hazırla', desc: 'Interaktif bir prototip yap', xp: 100, token: 25, difficulty: 'Orta' },
    { title: 'Design System Oluştur', desc: 'Kendi component kütüphaneni yaz', xp: 200, token: 50, difficulty: 'Zor' },
  ],
  pazarlama: [
    { title: 'Sosyal Medya Stratejisi', desc: 'Bir marka için sosyal medya planı hazırla', xp: 50, token: 10, difficulty: 'Kolay' },
    { title: 'İçerik Takvimi Oluştur', desc: '1 aylık içerik takvimi planla', xp: 100, token: 25, difficulty: 'Orta' },
    { title: 'Reklam Kampanyası Yönet', desc: 'Google/Facebook ads kampanyası kur', xp: 200, token: 50, difficulty: 'Zor' },
  ],
  veri: [
    { title: 'Excel Dashboard Yap', desc: 'Verileri görselleştir', xp: 50, token: 10, difficulty: 'Kolay' },
    { title: 'SQL Sorgusu Yaz', desc: 'Veritabanından veri çek', xp: 100, token: 25, difficulty: 'Orta' },
    { title: 'Veri Görselleştirme', desc: 'Tableau/PowerBI raporu oluştur', xp: 150, token: 35, difficulty: 'Orta' },
  ],
  yapayzeka: [
    { title: 'ChatGPT Prompt Yaz', desc: 'Etkili prompt oluştur', xp: 50, token: 10, difficulty: 'Kolay' },
    { title: 'Python ile AI Modeli Eğit', desc: 'Basit bir model eğit', xp: 150, token: 35, difficulty: 'Zor' },
    { title: 'AI Entegrasyonu Yap', desc: 'Uygulamaya AI ekle', xp: 250, token: 60, difficulty: 'Zor' },
  ],
  icerik: [
    { title: 'Blog Yazısı Yaz', desc: 'SEO uyumlu makale yaz', xp: 50, token: 10, difficulty: 'Kolay' },
    { title: 'Sosyal Medya İçeriği', desc: 'Post/hikaye içeriği hazırla', xp: 75, token: 15, difficulty: 'Kolay' },
    { title: 'Video Scripti Yaz', desc: 'YouTube/video scripti oluştur', xp: 100, token: 25, difficulty: 'Orta' },
  ],
};

export default function Gorevler() {
  const [selectedProfession, setSelectedProfession] = useState('yazilim');
  const tasks = professionTasks[selectedProfession] || [];

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
            { name: 'Dashboard', icon: '🏠', href: '/dashboard' },
            { name: 'Görevler', icon: '📋', href: '/gorevler', active: true },
            { name: 'Profil', icon: '👤', href: '/profil' },
            { name: 'Ayarlar', icon: '⚙️', href: '#' },
          ].map((item, i) => (
            <a key={i} href={item.href}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '14px 24px', 
                color: item.active ? '#22d3ee' : '#a1a1aa', 
                textDecoration: 'none',
                background: item.active ? 'rgba(34,211,238,0.05)' : 'transparent',
                borderLeft: item.active ? '3px solid #22d3ee' : '3px solid transparent',
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
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Görevler</h1>
        <p style={{ color: '#a1a1aa', marginBottom: '32px' }}>Mesleğine özel görevleri tamamla ve ilerle!</p>

        {/* Profession Selector */}
        <div style={{ marginBottom: '32px' }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#a1a1aa', marginBottom: '12px' }}>Mesleğini Seç</label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {professions.map((prof) => (
              <button
                key={prof.id}
                onClick={() => setSelectedProfession(prof.id)}
                style={{ 
                  padding: '12px 20px', 
                  background: selectedProfession === prof.id ? 'linear-gradient(135deg, #22d3ee, #a855f7)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid ' + (selectedProfession === prof.id ? 'transparent' : 'rgba(255,255,255,0.1)'),
                  borderRadius: '12px', 
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                }}
              >
                <span>{prof.icon}</span>
                <span>{prof.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Profession Info */}
        <div style={{ padding: '20px', background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: '16px', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '32px' }}>{professions.find(p => p.id === selectedProfession)?.icon}</span>
          <div>
            <div style={{ fontWeight: 600, marginBottom: '4px' }}>Seçili Meslek: {professions.find(p => p.id === selectedProfession)?.name}</div>
            <div style={{ fontSize: '14px', color: '#a1a1aa' }}>{tasks.length} görev mevcut</div>
          </div>
        </div>

        {/* Tasks */}
        <div style={{ display: 'grid', gap: '16px' }}>
          {tasks.map((task, i) => (
            <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{task.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '14px' }}>{task.desc}</p>
                </div>
                <span style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', fontSize: '12px', color: '#a1a1aa' }}>{task.difficulty}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ color: '#a855f7', fontSize: '14px' }}>+{task.xp} XP</span>
                  <span style={{ color: '#eab308', fontSize: '14px' }}>+{task.token} Token</span>
                </div>
                <button style={{ padding: '10px 20px', background: '#fff', color: '#0a0a0f', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                  Başla
                </button>
              </div>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#71717a' }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>📋</span>
            Bu meslek için henüz görev yok
          </div>
        )}
      </div>
    </main>
  );
}