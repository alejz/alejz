"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

const professionTasks: Record<string, { id: string; title: string; desc: string; xp: number; token: number; difficulty: string; requirements: { task: string; guide: string }[] }[]> = {
  yazilim: [
    { id: 'repo', title: 'GitHub\'da Repo Oluştur', desc: 'İlk repository\'ni oluştur ve paylaş', xp: 50, token: 10, difficulty: 'Kolay', requirements: [
      { task: 'GitHub hesabı oluştur', guide: 'github.com adresinden ücretsiz hesap aç' },
      { task: 'Yeni repo oluştur', guide: 'New Repository butonuna tıkla, proje adı ver, public/private seç' },
      { task: 'İlk commit yap', guide: 'README.md dosyası ekle, commit mesajı yaz, push et' },
    ]},
    { id: 'react', title: 'React Komponenti Yaz', desc: 'Fonksiyonel bir React component oluştur', xp: 100, token: 25, difficulty: 'Orta', requirements: [
      { task: 'Function component oluştur', guide: 'function MyComponent() { return <div>Merhaba</div> } şeklinde yaz' },
      { task: 'Props tanımla', guide: 'function MyComponent({ name }) şeklinde props al' },
      { task: 'useState kullan', guide: 'const [deger, setDeger] = useState(0) ile state oluştur' },
    ]},
    { id: 'api', title: 'API Entegrasyonu Yap', desc: 'Bir REST API\'ye bağlan ve veri çek', xp: 150, token: 35, difficulty: 'Orta', requirements: [
      { task: 'Fetch/axios kur', guide: 'npm install axios veya fetch API kullan' },
      { task: 'GET isteği at', guide: 'axios.get("https://api.example.com/data") yaz' },
      { task: 'Veriyi ekranda göster', guide: 'useEffect ile veriyi çek, useState ile sakla' },
    ]},
    { id: 'fullstack', title: 'Full Stack Proje Yap', desc: 'Frontend + Backend içeren proje geliştir', xp: 300, token: 75, difficulty: 'Zor', requirements: [
      { task: 'Frontend kur', guide: 'Next.js veya React projesi oluştur' },
      { task: 'Backend API yaz', guide: '/api/users gibi endpoint oluştur' },
      { task: 'Veritabanı bağla', guide: 'SQLite, MongoDB veya PostgreSQL bağla' },
    ]},
  ],
  tasarim: [
    { id: 'figma', title: 'Figma\'da Tasarım Yap', desc: 'Basit bir UI tasarımı oluştur', xp: 50, token: 10, difficulty: 'Kolay', requirements: [
      { task: 'Figma hesabı aç', guide: 'figma.com ücretsiz hesap oluştur' },
      { task: 'Frame oluştur', guide: 'Sayfa boyutunda bir frame ekle' },
      { task: 'Temel shape\'ler ekle', guide: 'Rectangle, Circle, Line ile tasarım yap' },
    ]},
    { id: 'proto', title: 'Prototip Hazırla', desc: 'Interaktif bir prototip yap', xp: 100, token: 25, difficulty: 'Orta', requirements: [
      { task: 'Wireframe çiz', guide: 'Basitlayout çerçevelerini oluştur' },
      { task: 'Prototype modunu aç', guide: 'Sağ panelden Prototype sekmesine geç' },
      { task: 'Animasyon ekle', guide: 'Frame arasında bağlantı kur, otomatik geçiş ayarla' },
    ]},
    { id: 'system', title: 'Design System Oluştur', desc: 'Kendi component kütüphaneni yaz', xp: 200, token: 50, difficulty: 'Zor', requirements: [
      { task: 'Component library kur', guide: 'Storybook veya Style Dictionary kur' },
      { task: 'Renk/font sistemi kur', guide: 'Primary, secondary, accent renkleri tanımla' },
      { task: 'Dokümantasyon yaz', guide: 'Her component için kullanım örneği yaz' },
    ]},
  ],
  pazarlama: [
    { id: 'sosyal', title: 'Sosyal Medya Stratejisi', desc: 'Bir marka için sosyal medya planı hazırla', xp: 50, token: 10, difficulty: 'Kolay', requirements: [
      { task: 'Hedef kitle belirle', guide: 'Yaş, cinsiyet, ilgi alanı tanımla' },
      { task: 'Platform seç', guide: 'LinkedIn, Instagram, Twitter\'dan hedef kitleye uygun olanı seç' },
      { task: 'İçerik türleri planla', guide: 'Video, görsel, yazı oranlarını belirle' },
    ]},
    { id: 'takvim', title: 'İçerik Takvimi Oluştur', desc: '1 aylık içerik takvimi planla', xp: 100, token: 25, difficulty: 'Orta', requirements: [
      { task: 'Konuları belirle', guide: '4 haftalık farklı konu başlıkları yaz' },
      { task: 'Takvim oluştur', guide: 'Hangi gün hangi içerik yayınlanacak' },
      { task: 'Post zamanlaması yap', guide: 'Saatleri ve platformları planla' },
    ]},
    { id: 'reklam', title: 'Reklam Kampanyası Yönet', desc: 'Google/Facebook ads kampanyası kur', xp: 200, token: 50, difficulty: 'Zor', requirements: [
      { task: 'Hedefleme kur', guide: 'Demografik ve ilgi alanı hedeflemesi ayarla' },
      { task: 'Bütçe ayır', guide: 'Günlük/aylık bütçe belirle' },
      { task: 'A/B test yap', guide: 'İki farklı görsel ile test et' },
    ]},
  ],
  veri: [
    { id: 'excel', title: 'Excel Dashboard Yap', desc: 'Verileri görselleştir', xp: 50, token: 10, difficulty: 'Kolay', requirements: [
      { task: 'Veri seti hazırla', guide: 'Excel\'de verileri düzenle, sütun başlıkları koy' },
      { task: 'Pivot table oluştur', guide: 'Verileri grupla, özetle' },
      { task: 'Grafik ekle', guide: 'Pivot table üzerinden grafik oluştur' },
    ]},
    { id: 'sql', title: 'SQL Sorgusu Yaz', desc: 'Veritabanından veri çek', xp: 100, token: 25, difficulty: 'Orta', requirements: [
      { task: 'SELECT yaz', guide: 'SELECT * FROM tablo' },
      { task: 'JOIN kullan', guide: 'İki tablodan birleşik veri çek' },
      { task: 'FILTER ekle', guide: 'WHERE ile koşul ekle' },
    ]},
    { id: 'viz', title: 'Veri Görselleştirme', desc: 'Tableau/PowerBI raporu oluştur', xp: 150, token: 35, difficulty: 'Orta', requirements: [
      { task: 'Dataset bağla', guide: 'Excel veya veritabanını bağla' },
      { task: 'Dashboard oluştur', guide: 'Grafikler yerleştir' },
      { task: 'Filtre ekle', guide: 'Tarih ve kategori filtresi ekle' },
    ]},
  ],
  yapayzeka: [
    { id: 'prompt', title: 'ChatGPT Prompt Yaz', desc: 'Etkili prompt oluştur', xp: 50, token: 10, difficulty: 'Kolay', requirements: [
      { task: 'Role tanımla', guide: 'Sen bir uzmanıs, yardımcı asistan gibi başla' },
      { task: 'Çıktı formatı belirle', guide: 'JSON, liste veya paragraf olarak iste' },
      { task: 'Örnek ver', guide: 'Örnek girdi ve çıktı göster' },
    ]},
    { id: 'model', title: 'Python ile AI Modeli Eğit', desc: 'Basit bir model eğit', xp: 150, token: 35, difficulty: 'Zor', requirements: [
      { task: 'Veri hazırla', guide: 'CSV dosyası ile veri seti oluştur' },
      { task: 'Model seç', guide: 'scikit-learn ile LinearRegression veya RandomForest seç' },
      { task: 'Eğitim çalıştır', guide: 'model.fit() ile eğit, model.predict() ile test et' },
    ]},
    { id: 'integrate', title: 'AI Entegrasyonu Yap', desc: 'Uygulamaya AI ekle', xp: 250, token: 60, difficulty: 'Extreme', requirements: [
      { task: 'API anahtar al', guide: 'OpenAI veya HuggingFace API al' },
      { task: 'Endpoint kur', guide: '/api/ai endpoint oluştur' },
      { task: 'Stream response yap', guide: 'Gerçek zamanlı yanıt göster' },
    ]},
  ],
  icerik: [
    { id: 'blog', title: 'Blog Yazısı Yaz', desc: 'SEO uyumlu makale yaz', xp: 50, token: 10, difficulty: 'Kolay', requirements: [
      { task: 'Konu seç', guide: 'Arama hacmi yüksek konu bul' },
      { task: 'Anahtar kelime ara', guide: 'Google Keyword Planner kullan' },
      { task: 'Yapı oluştur', guide: 'Başlık, alt başlık, paragraf düzeni kur' },
    ]},
    { id: 'sosyal', title: 'Sosyal Medya İçeriği', desc: 'Post/hikaye içeriği hazırla', xp: 75, token: 15, difficulty: 'Kolay', requirements: [
      { task: 'Caption yaz', guide: 'Etkileyici, kısa yazı yaz' },
      { task: 'Hashtag ekle', guide: 'İlgili ve popüler hashtagler kullan' },
      { task: 'Görsel seç', guide: 'Marka ile uygun görsel bul' },
    ]},
    { id: 'script', title: 'Video Scripti Yaz', desc: 'YouTube/video scripti oluştur', xp: 100, token: 25, difficulty: 'Orta', requirements: [
      { task: 'Hook yaz', guide: 'İlk 3 saniyede dikkat çek' },
      { task: 'Bölümler planla', guide: 'Giriş, gelişme, sonuç bölümleri' },
      { task: 'CTA ekle', guide: 'Abone ol, beğen, yorum yap çağrısı' },
    ]},
  ],
};

interface TaskProgress {
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  completedSteps: boolean[];
  notes: string[];
}

export default function Gorevler() {
  const router = useRouter();
  const [selectedProfession, setSelectedProfession] = useState('yazilim');
  const [activeTab, setActiveTab] = useState('all');
  const [taskProgress, setTaskProgress] = useState<Record<string, TaskProgress>>({});
  const [taskNotes, setTaskNotes] = useState<Record<string, string>>({});
  
  const tasks = professionTasks[selectedProfession] || [];
  const filteredTasks = activeTab === 'all' ? tasks : tasks.filter(t => t.difficulty === activeTab);
  
  const tabs = [
    { id: 'all', label: 'Tümü' },
    { id: 'Kolay', label: 'Kolay' },
    { id: 'Orta', label: 'Orta' },
    { id: 'Zor', label: 'Zor' },
    { id: 'Extreme', label: 'Extreme' },
  ];

  const handleStartTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    setTaskProgress(prev => ({
      ...prev,
      [taskId]: {
        status: 'in_progress',
        completedSteps: new Array(task.requirements.length).fill(false),
        notes: new Array(task.requirements.length).fill(''),
      }
    }));
  };

  const handleStepComplete = (taskId: string, stepIndex: number, completed: boolean) => {
    setTaskProgress(prev => {
      const current = prev[taskId] || { status: 'pending', completedSteps: [], notes: [] };
      const newCompletedSteps = [...current.completedSteps];
      newCompletedSteps[stepIndex] = completed;
      
      return {
        ...prev,
        [taskId]: { ...current, completedSteps: newCompletedSteps }
      };
    });
  };

  const handleStepNote = (taskId: string, stepIndex: string, note: string) => {
    setTaskNotes(prev => ({
      ...prev,
      [`${taskId}_${stepIndex}`]: note
    }));
  };

  const handleCompleteTask = (taskId: string) => {
    const progress = taskProgress[taskId];
    const task = tasks.find(t => t.id === taskId);
    
    if (!task || !progress) return;
    
    const allStepsDone = progress.completedSteps.every(s => s);
    const newStatus = allStepsDone ? 'completed' : 'failed';
    
    setTaskProgress(prev => ({
      ...prev,
      [taskId]: { ...prev[taskId], status: newStatus }
    }));
  };

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
      {/* Top Bar */}
      <header style={{ padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#fff' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '10px' }}></div>
          <span style={{ fontSize: '20px', fontWeight: 700 }}>CareerQuest</span>
        </Link>
        <Link href="/profil" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, textDecoration: 'none', color: '#fff' }}>K</Link>
      </header>

      <div style={{ padding: '32px 40px' }}>
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
        <div style={{ display: 'grid', gap: '20px' }}>
          {filteredTasks.map((task) => {
            const progress = taskProgress[task.id];
            const isActive = progress?.status === 'in_progress';
            
            return (
              <div key={task.id} style={{ padding: '28px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ padding: '6px 14px', background: `${difficultyColors[task.difficulty]}20`, color: difficultyColors[task.difficulty], borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>{task.difficulty}</span>
                      {progress?.status === 'completed' && <span style={{ padding: '6px 14px', background: 'rgba(34,197,94,0.2)', color: '#22c55e', borderRadius: '100px', fontSize: '12px' }}>✓ Tamamlandı</span>}
                      {progress?.status === 'failed' && <span style={{ padding: '6px 14px', background: 'rgba(239,68,68,0.2)', color: '#ef4444', borderRadius: '100px', fontSize: '12px' }}>✗ Eksik Kaldı</span>}
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>{task.title}</h3>
                    <p style={{ color: '#a1a1aa', fontSize: '14px' }}>{task.desc}</p>
                  </div>
                </div>

                {/* XP/Token */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: '#a855f7', fontSize: '16px', fontWeight: 600 }}>+{task.xp} XP</span>
                  <span style={{ color: '#eab308', fontSize: '16px', fontWeight: 600 }}>+{task.token} Token</span>
                </div>

                {!isActive ? (
                  <button 
                    onClick={() => handleStartTask(task.id)}
                    style={{ padding: '14px 28px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}
                  >
                    🚀 Göreve Başla
                  </button>
                ) : (
                  <div>
                    {/* Steps */}
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Adımları Tamamla:</h4>
                      {task.requirements.map((req, i) => (
                        <div key={i} style={{ marginBottom: '16px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <input 
                              type="checkbox" 
                              checked={progress?.completedSteps[i] || false}
                              onChange={(e) => handleStepComplete(task.id, i, e.target.checked)}
                              style={{ width: '20px', height: '20px', accentColor: '#22d3ee', cursor: 'pointer' }}
                            />
                            <div>
                              <div style={{ fontWeight: 500, marginBottom: '4px' }}>{i + 1}. {req.task}</div>
                              <div style={{ fontSize: '13px', color: '#71717a' }}>{req.guide}</div>
                            </div>
                          </div>
                          <textarea
                            placeholder="Bu adım için notlarını yaz (opsiyonel)..."
                            value={taskNotes[`${task.id}_${i}`] || ''}
                            onChange={(e) => handleStepNote(task.id, String(i), e.target.value)}
                            style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '13px', minHeight: '60px', resize: 'none' }}
                          />
                        </div>
                      ))}
                    </div>

                    {/* AI Evaluation Preview */}
                    <div style={{ padding: '20px', background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: '16px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>🤖</span>
                        <div>
                          <div style={{ fontWeight: 600, color: '#22d3ee' }}>AI Değerlendirmesi</div>
                          <div style={{ fontSize: '12px', color: '#71717a' }}>Görev tamamlandığında otomatik kontrol edilecek</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {task.requirements.map((req, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ 
                              width: '24px', height: '24px', 
                              borderRadius: '50%', 
                              border: progress?.completedSteps[i] ? '2px solid #22c55e' : '2px dashed #52525b',
                              background: progress?.completedSteps[i] ? '#22c55e' : 'transparent',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              color: progress?.completedSteps[i] ? '#fff' : '#71717a',
                              fontSize: '12px'
                            }}>
                              {progress?.completedSteps[i] ? '✓' : i + 1}
                            </div>
                            <span style={{ color: progress?.completedSteps[i] ? '#22c55e' : '#a1a1aa', fontSize: '14px', textDecoration: progress?.completedSteps[i] ? 'none' : 'none' }}>
                              {req.task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Complete Button */}
                    <button 
                      onClick={() => handleCompleteTask(task.id)}
                      style={{ 
                        width: '100%', 
                        padding: '16px', 
                        background: 'linear-gradient(135deg, #22c55e, #16a34a)', 
                        border: 'none', 
                        borderRadius: '12px', 
                        color: '#fff', 
                        fontWeight: 700, 
                        fontSize: '16px', 
                        cursor: 'pointer' 
                      }}
                    >
                      ✅ Görevi Tamamla ve AI Kontrol Et
                    </button>
                  </div>
                )}
              </div>
            );
          })}
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