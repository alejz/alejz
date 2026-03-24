"use client";

import { useState } from "react";
import Link from "next/link";

const professions = [
  { id: 'yazilim', name: 'Yazılım Geliştirici', icon: '💻' },
  { id: 'tasarim', name: 'UI/UX Tasarımcı', icon: '🎨' },
  { id: 'pazarlama', name: 'Dijital Pazarlama', icon: '📢' },
  { id: 'veri', name: 'Veri Analisti', icon: '📊' },
  { id: 'yapayzeka', name: 'Yapay Zeka Mühendisi', icon: '🤖' },
  { id: 'icerik', name: 'İçerik Editörü', icon: '✍️' },
];

const difficultyColors: Record<string, string> = {
  'Kolay': '#22c55e',
  'Orta': '#eab308',
  'Zor': '#f97316',
  'Extreme': '#ef4444',
};

const professionTasks: Record<string, { title: string; desc: string; xp: number; token: number; difficulty: string; requirements: string[] }[]> = {
  yazilim: [
    { title: 'GitHub\'da Repo Oluştur', desc: 'İlk repository\'ni oluştur ve paylaş', xp: 50, token: 10, difficulty: 'Kolay', requirements: ['GitHub hesabı oluştur', 'Yeni repo oluştur', 'İlk commit yap'] },
    { title: 'React Komponenti Yaz', desc: 'Fonksiyonel bir React component oluştur', xp: 100, token: 25, difficulty: 'Orta', requirements: ['Function component oluştur', 'Props tanımla', 'useState kullan'] },
    { title: 'API Entegrasyonu Yap', desc: 'Bir REST API\'ye bağlan ve veri çek', xp: 150, token: 35, difficulty: 'Orta', requirements: ['Fetch/axios kur', 'GET isteği at', 'Veriyi ekranda göster'] },
    { title: 'Full Stack Proje Yap', desc: 'Frontend + Backend içeren proje geliştir', xp: 300, token: 75, difficulty: 'Zor', requirements: ['Frontend kur', 'Backend API yaz', 'Veritabanı bağla'] },
    { title: 'Microservice Mimarisi', desc: 'Mikroservis tabanlı sistem kur', xp: 500, token: 150, difficulty: 'Extreme', requirements: ['Docker container oluştur', 'K8s cluster kur', 'Service mesh impl'] },
  ],
  tasarim: [
    { title: 'Figma\'da Tasarım Yap', desc: 'Basit bir UI tasarımı oluştur', xp: 50, token: 10, difficulty: 'Kolay', requirements: ['Figma hesabı aç', 'Frame oluştur', 'Temel shape\'ler ekle'] },
    { title: 'Prototip Hazırla', desc: 'Interaktif bir prototip yap', xp: 100, token: 25, difficulty: 'Orta', requirements: ['Wireframe çiz', 'Prototype modunu aç', 'Animasyon ekle'] },
    { title: 'Design System Oluştur', desc: 'Kendi component kütüphaneni yaz', xp: 200, token: 50, difficulty: 'Zor', requirements: ['Component library kur', 'Renk/font sistemi kur', 'Dokümantasyon yaz'] },
  ],
  pazarlama: [
    { title: 'Sosyal Medya Stratejisi', desc: 'Bir marka için sosyal medya planı hazırla', xp: 50, token: 10, difficulty: 'Kolay', requirements: ['Hedef kitle belirle', 'Platform seç', 'İçerik türleri planla'] },
    { title: 'İçerik Takvimi Oluştur', desc: '1 aylık içerik takvimi planla', xp: 100, token: 25, difficulty: 'Orta', requirements: ['Konuları belirle', 'Takvim oluştur', 'Post zamanlaması yap'] },
    { title: 'Reklam Kampanyası Yönet', desc: 'Google/Facebook ads kampanyası kur', xp: 200, token: 50, difficulty: 'Zor', requirements: ['Hedefleme kur', 'Bütçe ayarla', 'A/B test yap'] },
  ],
  veri: [
    { title: 'Excel Dashboard Yap', desc: 'Verileri görselleştir', xp: 50, token: 10, difficulty: 'Kolay', requirements: ['Veri seti hazırla', 'Pivot table oluştur', 'Grafik ekle'] },
    { title: 'SQL Sorgusu Yaz', desc: 'Veritabanından veri çek', xp: 100, token: 25, difficulty: 'Orta', requirements: ['SELECT yaz', 'JOIN kullan', 'FILTER ekle'] },
    { title: 'Veri Görselleştirme', desc: 'Tableau/PowerBI raporu oluştur', xp: 150, token: 35, difficulty: 'Orta', requirements: ['Dataset bağla', 'Dashboard oluştur', 'Filtre ekle'] },
  ],
  yapayzeka: [
    { title: 'ChatGPT Prompt Yaz', desc: 'Etkili prompt oluştur', xp: 50, token: 10, difficulty: 'Kolay', requirements: ['Role tanımla', 'Çıktı formatı belirle', 'Örnek ver'] },
    { title: 'Python ile AI Modeli Eğit', desc: 'Basit bir model eğit', xp: 150, token: 35, difficulty: 'Zor', requirements: ['Veri hazırla', 'Model seç', 'Eğitim çalıştır'] },
    { title: 'AI Entegrasyonu Yap', desc: 'Uygulamaya AI ekle', xp: 250, token: 60, difficulty: 'Extreme', requirements: ['API anahtar al', 'Endpoint kur', 'Stream response yap'] },
  ],
  icerik: [
    { title: 'Blog Yazısı Yaz', desc: 'SEO uyumlu makale yaz', xp: 50, token: 10, difficulty: 'Kolay', requirements: ['Konu seç', 'Anahtar kelime ara', 'Yapı oluştur'] },
    { title: 'Sosyal Medya İçeriği', desc: 'Post/hikaye içeriği hazırla', xp: 75, token: 15, difficulty: 'Kolay', requirements: ['Caption yaz', 'Hashtag ekle', 'Görsel seç'] },
    { title: 'Video Scripti Yaz', desc: 'YouTube/video scripti oluştur', xp: 100, token: 25, difficulty: 'Orta', requirements: ['Hook yaz', 'Bölümler planla', 'CTA ekle'] },
  ],
};

export default function Gorevler() {
  const [selectedProfession, setSelectedProfession] = useState('yazilim');
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [taskProgress, setTaskProgress] = useState<Record<number, string>>({});
  
  const tasks = professionTasks[selectedProfession] || [];
  
  const filteredTasks = activeTab === 'all' ? tasks : tasks.filter(t => t.difficulty === activeTab);
  
  const tabs = [
    { id: 'all', label: 'Tümü' },
    { id: 'Kolay', label: 'Kolay' },
    { id: 'Orta', label: 'Orta' },
    { id: 'Zor', label: 'Zor' },
    { id: 'Extreme', label: 'Extreme' },
  ];

  const handleStartTask = (task: any, index: number) => {
    setSelectedTask({ ...task, index });
    setTaskProgress(prev => ({ ...prev, [index]: 'in_progress' }));
  };

  const handleCompleteTask = (index: number) => {
    setTaskProgress(prev => ({ ...prev, [index]: 'completed' }));
  };

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
      </aside>

      {/* Main Content */}
      <div style={{ marginLeft: '240px', flex: 1, padding: '32px 40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Görevler</h1>
        <p style={{ color: '#a1a1aa', marginBottom: '32px' }}>Mesleğine özel görevleri tamamla ve ilerle!</p>

        {/* Profession Selector */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#a1a1aa', marginBottom: '12px' }}>Mesleğini Seç</label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {professions.map((prof) => (
              <button
                key={prof.id}
                onClick={() => { setSelectedProfession(prof.id); setActiveTab('all'); }}
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

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{ 
                padding: '10px 20px', 
                background: activeTab === tab.id ? 'rgba(34,211,238,0.1)' : 'transparent',
                border: 'none',
                borderRadius: '8px',
                color: activeTab === tab.id ? '#22d3ee' : '#a1a1aa',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tasks */}
        <div style={{ display: 'grid', gap: '16px' }}>
          {filteredTasks.map((task, i) => (
            <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ padding: '6px 14px', background: `${difficultyColors[task.difficulty]}20`, color: difficultyColors[task.difficulty], borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>{task.difficulty}</span>
                    {taskProgress[i] === 'completed' && <span style={{ padding: '6px 14px', background: 'rgba(34,197,94,0.2)', color: '#22c55e', borderRadius: '100px', fontSize: '12px' }}>✓ Tamamlandı</span>}
                    {taskProgress[i] === 'in_progress' && <span style={{ padding: '6px 14px', background: 'rgba(234,179,8,0.2)', color: '#eab308', borderRadius: '100px', fontSize: '12px' }}>⏳ Devam Ediyor</span>}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{task.title}</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '14px' }}>{task.desc}</p>
                </div>
              </div>

              {/* Requirements */}
              <div style={{ marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', color: '#71717a', marginBottom: '8px' }}>Gereksinimler:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {task.requirements.map((req, j) => (
                    <span key={j} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', fontSize: '12px', color: '#a1a1aa' }}>
                      {j + 1}. {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <span style={{ color: '#a855f7', fontSize: '15px', fontWeight: 600 }}>+{task.xp} XP</span>
                  <span style={{ color: '#eab308', fontSize: '15px', fontWeight: 600 }}>+{task.token} Token</span>
                </div>
                
                {taskProgress[i] === 'completed' ? (
                  <button style={{ padding: '12px 24px', background: 'rgba(34,197,94,0.2)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '10px', color: '#22c55e', fontWeight: 600, cursor: 'pointer' }}>
                    ✓ Tamamlandı
                  </button>
                ) : taskProgress[i] === 'in_progress' ? (
                  <button 
                    onClick={() => handleCompleteTask(i)}
                    style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #22c55e, #16a34a)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Görevi Tamamla
                  </button>
                ) : (
                  <button 
                    onClick={() => handleStartTask(task, i)}
                    style={{ padding: '12px 24px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', border: 'none', borderRadius: '10px', color: '#fff', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Başla
                  </button>
                )}
              </div>

              {/* AI Evaluation Section - Show when in progress */}
              {taskProgress[i] === 'in_progress' && (
                <div style={{ marginTop: '20px', padding: '20px', background: 'rgba(234,179,8,0.05)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span style={{ fontSize: '24px' }}>🤖</span>
                    <div>
                      <div style={{ fontWeight: 600, color: '#eab308' }}>AI Değerlendirme</div>
                      <div style={{ fontSize: '12px', color: '#71717a' }}>Görevini yaptıktan sonra AI kontrol edecek</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {task.requirements.map((req, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px dashed #52525b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>?</div>
                        <span style={{ color: '#a1a1aa', fontSize: '14px' }}>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredTasks.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px', color: '#71717a' }}>
            <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>📋</span>
            Bu seviyede görev yok
          </div>
        )}
      </div>
    </main>
  );
}