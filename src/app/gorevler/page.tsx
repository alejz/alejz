"use client";

import { useState } from "react";
import Link from "next/link";

const proofTypes = {
  github: { label: 'GitHub', icon: '🐙', placeholder: 'github.com/kullanici/proje', description: 'GitHub repo linki' },
  file: { label: 'Dosya', icon: '📁', placeholder: 'Dosya açıklaması yaz', description: 'Excel, PDF, Figma vb.' },
  link: { label: 'Link', icon: '🔗', placeholder: 'https://...', description: 'Web sitesi, portföy' },
  text: { label: 'Yazılı', icon: '✍️', placeholder: 'İçerik metnini yaz...', description: 'Blog, script, plan' },
  photo: { label: 'Fotoğraf', icon: '📸', placeholder: 'Fotoğraf açıklaması yaz veya link ekle', description: 'Yemek, tasarım, ürün fotoğrafı' },
  video: { label: 'Video', icon: '🎥', placeholder: 'Video linki (YouTube, TikTok)', description: 'Demo video' },
};

const professions = [
  { id: 'yazilim', name: 'Yazılım Geliştirici', icon: '💻' },
  { id: 'tasarim', name: 'UI/UX Tasarımcı', icon: '🎨' },
  { id: 'pazarlama', name: 'Dijital Pazarlama', icon: '📢' },
  { id: 'veri', name: 'Veri Analisti', icon: '📊' },
  { id: 'yapayzeka', name: 'Yapay Zeka Mühendisi', icon: '🤖' },
  { id: 'icerik', name: 'İçerik Editörü', icon: '✍️' },
  { id: 'asci', name: 'Aşçı', icon: '👨‍🍳' },
  { id: 'terzi', name: 'Terzi', icon: '🧵' },
  { id: 'kuafor', name: 'Kuaför', icon: '✂️' },
  { id: 'elektrikci', name: 'Elektrikçi', icon: '⚡' },
];

const difficultyColors: Record<string, string> = {
  'Kolay': '#22c55e',
  'Orta': '#eab308',
  'Zor': '#f97316',
  'Extreme': '#ef4444',
};

const professionTasks: Record<string, { id: string; title: string; desc: string; xp: number; token: number; difficulty: string; proofType: keyof typeof proofTypes; requirements: { task: string; guide: string }[] }[]> = {
  yazilim: [
    { id: 'repo', title: 'GitHub\'da Repo Oluştur', desc: 'İlk repository\'ni oluştur', xp: 50, token: 10, difficulty: 'Kolay', proofType: 'github', requirements: [
      { task: 'GitHub hesabı aç', guide: 'github.com ücretsiz hesap aç' },
      { task: 'Yeni repo oluştur', guide: 'New Repository tıkla' },
      { task: 'İlk commit yap', guide: 'README.md ekle ve push et' },
    ]},
    { id: 'react', title: 'React Komponenti Yaz', desc: 'Fonksiyonel component oluştur', xp: 100, token: 25, difficulty: 'Orta', proofType: 'github', requirements: [
      { task: 'Component oluştur', guide: 'function component yaz' },
      { task: 'Props tanımla', guide: 'Props ile veri al' },
      { task: 'useState kullan', guide: 'State oluştur' },
    ]},
    { id: 'fullstack', title: 'Full Stack Proje', desc: 'Frontend + Backend proje', xp: 300, token: 75, difficulty: 'Zor', proofType: 'github', requirements: [
      { task: 'Frontend kur', guide: 'Next.js veya React' },
      { task: 'Backend API yaz', guide: 'Endpoint oluştur' },
      { task: 'Veritabanı bağla', guide: 'SQLite veya MongoDB' },
    ]},
  ],
  tasarim: [
    { id: 'figma', title: 'Figma\'da Tasarım', desc: 'Basit UI tasarımı oluştur', xp: 50, token: 10, difficulty: 'Kolay', proofType: 'photo', requirements: [
      { task: 'Figma hesabı aç', guide: 'figma.com hesap oluştur' },
      { task: 'Frame oluştur', guide: 'Sayfa frame ekle' },
      { task: 'Tasarım yap', guide: 'Shape\'ler ile tasarla' },
    ]},
    { id: 'proto', title: 'Prototip Hazırla', desc: 'Interaktif prototip yap', xp: 100, token: 25, difficulty: 'Orta', proofType: 'link', requirements: [
      { task: 'Wireframe çiz', guide: 'Layout çerçeveleri oluştur' },
      { task: 'Prototype kur', guide: 'Frame\'leri bağla' },
      { task: 'Animasyon ekle', guide: 'Geçiş ekle' },
    ]},
  ],
  pazarlama: [
    { id: 'sosyal', title: 'Sosyal Medya Stratejisi', desc: 'Sosyal medya planı hazırla', xp: 50, token: 10, difficulty: 'Kolay', proofType: 'text', requirements: [
      { task: 'Hedef kitle belirle', guide: 'Yaş, cinsiyet, ilgi' },
      { task: 'Platform seç', guide: 'Uygun platform' },
      { task: 'İçerik türleri planla', guide: 'Video, görsel, yazı' },
    ]},
    { id: 'reklam', title: 'Reklam Kampanyası', desc: 'Ads kampanyası kur', xp: 200, token: 50, difficulty: 'Zor', proofType: 'photo', requirements: [
      { task: 'Hedefleme kur', guide: 'Demografik hedefleme' },
      { task: 'Bütçe belirle', guide: 'Günlük/aylık bütçe' },
      { task: 'Görsel hazırla', guide: 'Reklam görseli' },
    ]},
  ],
  veri: [
    { id: 'excel', title: 'Excel Dashboard', desc: 'Verileri görselleştir', xp: 50, token: 10, difficulty: 'Kolay', proofType: 'photo', requirements: [
      { task: 'Veri düzenle', guide: 'Excel\'de verileri düzenle' },
      { task: 'Pivot table', guide: 'Verileri grupla' },
      { task: 'Grafik ekle', guide: 'Grafik oluştur' },
    ]},
    { id: 'sql', title: 'SQL Sorgusu', desc: 'Veritabanından veri çek', xp: 100, token: 25, difficulty: 'Orta', proofType: 'text', requirements: [
      { task: 'SELECT yaz', guide: 'SELECT * FROM tablo' },
      { task: 'JOIN kullan', guide: 'İki tablo birleştir' },
      { task: 'WHERE ekle', guide: 'Koşul ile filtrele' },
    ]},
  ],
  yapayzeka: [
    { id: 'prompt', title: 'ChatGPT Prompt', desc: 'Etkili prompt yaz', xp: 50, token: 10, difficulty: 'Kolay', proofType: 'text', requirements: [
      { task: 'Role tanımla', guide: 'Uzman rolü belirle' },
      { task: 'Format belirle', guide: 'Çıktı formatı' },
      { task: 'Örnek ver', guide: 'Örnek girdi/çıktı' },
    ]},
    { id: 'model', title: 'Python AI Modeli', desc: 'Basit model eğit', xp: 150, token: 35, difficulty: 'Zor', proofType: 'github', requirements: [
      { task: 'Veri hazırla', guide: 'CSV veri seti' },
      { task: 'Model seç', guide: 'scikit-learn' },
      { task: 'Eğit', guide: 'model.fit()' },
    ]},
  ],
  icerik: [
    { id: 'blog', title: 'Blog Yazısı', desc: 'SEO uyumlu makale', xp: 50, token: 10, difficulty: 'Kolay', proofType: 'text', requirements: [
      { task: 'Konu seç', guide: 'Araştır ve konu bul' },
      { task: 'Anahtar kelime', guide: 'SEO kelimeleri' },
      { task: 'Yazıyı yaz', guide: 'Başlık ve paragraf' },
    ]},
    { id: 'sosyal', title: 'Sosyal Medya İçeriği', desc: 'Post içeriği hazırla', xp: 75, token: 15, difficulty: 'Kolay', proofType: 'photo', requirements: [
      { task: 'Caption yaz', guide: 'Etkileyici metin' },
      { task: 'Hashtag ekle', guide: 'İlgili hashtagler' },
      { task: 'Görsel seç', guide: 'Uygun görsel bul' },
    ]},
  ],
  asci: [
    { id: 'yemek', title: 'Yemek Pişir ve Fotoğrafla', desc: 'Bir yemek hazırla ve fotoğrafını çek', xp: 50, token: 10, difficulty: 'Kolay', proofType: 'photo', requirements: [
      { task: 'Tarif seç', guide: 'Evde yapılabilir tarif seç' },
      { task: 'Pişir', guide: 'Yemeği hazırla' },
      { task: 'Fotoğraf çek', guide: 'Güzel bir şekilde fotoğrafla' },
    ]},
    { id: 'menu', title: 'Menü Planla', desc: 'Haftalık menü hazırla', xp: 100, token: 25, difficulty: 'Orta', proofType: 'text', requirements: [
      { task: '7 gün seç', guide: 'Günlere göre yemekler' },
      { task: 'Alışveriş listesi', guide: 'Malzemeleri yaz' },
      { task: 'Besin değeri kontrol', guide: 'Dengeli beslenme' },
    ]},
  ],
  terzi: [
    { id: 'dikim', title: 'Kıyafet Dik', desc: 'Basit bir kıyafet dik ve fotoğrafla', xp: 100, token: 25, difficulty: 'Orta', proofType: 'photo', requirements: [
      { task: 'Kumaş seç', guide: 'Kumaş türünü belirle' },
      { task: 'Kesim yap', guide: 'Kalıp çıkar ve kes' },
      { task: 'Dikiş at', guide: 'Makine ile dik' },
    ]},
  ],
  kuafor: [
    { id: 'model', title: 'Saç Modeli Yap', desc: 'Saç modeli oluştur ve fotoğrafla', xp: 100, token: 25, difficulty: 'Orta', proofType: 'photo', requirements: [
      { task: 'Model seç', guide: 'Müşteri için öner' },
      { task: 'Kesim yap', guide: 'Saç kesimi uygula' },
      { task: 'Şekillendir', guide: 'Fön veya maşa' },
    ]},
  ],
  elektrikci: [
    { id: 'tesisat', title: 'Elektrik Tesisatı', desc: 'Basit tesisat projesi yap ve belgeleme', xp: 100, token: 25, difficulty: 'Orta', proofType: 'photo', requirements: [
      { task: 'Plan çiz', guide: 'Şema çiz' },
      { task: 'Malzeme listesi', guide: 'Malzemeleri belirle' },
      { task: 'Uygula ve fotoğrafla', guide: 'Çalışmayı belgeleme' },
    ]},
  ],
};

interface TaskProgress {
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  completedSteps: boolean[];
  notes: string[];
  proof?: string;
}

async function verifyGitHubProof(proof: string): Promise<{ valid: boolean; message: string }> {
  try {
    let username = proof;
    let repo = '';
    if (proof.includes('github.com')) {
      const parts = proof.replace('https://', '').replace('http://', '').replace('github.com/', '').split('/');
      username = parts[0];
      repo = parts[1] || '';
    }
    if (!username) return { valid: false, message: 'GitHub kullanıcı adı veya link girin' };
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    if (!userResponse.ok) return { valid: false, message: 'GitHub hesabı bulunamadı!' };
    if (repo) {
      const repoResponse = await fetch(`https://api.github.com/repos/${username}/${repo}`);
      if (!repoResponse.ok) return { valid: false, message: 'Repository bulunamadı!' };
      const repoData = await repoResponse.json();
      if (repoData.size === 0 && repoData.pushed_at === null) return { valid: false, message: 'Repo boş, en az 1 commit atın!' };
      return { valid: true, message: `✅ Repo doğrulandı: ${repoData.name}` };
    }
    return { valid: true, message: `✅ GitHub hesabı: @${username}` };
  } catch { return { valid: false, message: 'GitHub API hatası' }; }
}

async function verifyLinkProof(proof: string): Promise<{ valid: boolean; message: string }> {
  try {
    if (!proof.startsWith('http://') && !proof.startsWith('https://')) return { valid: false, message: 'Link https:// ile başlamalı' };
    return { valid: true, message: '✅ Link erişilebilir' };
  } catch { return { valid: false, message: 'Link doğrulanamadı' }; }
}

export default function Gorevler() {
  const [selectedProfession, setSelectedProfession] = useState('yazilim');
  const [activeTab, setActiveTab] = useState('all');
  const [taskProgress, setTaskProgress] = useState<Record<string, TaskProgress>>({});
  const [taskNotes, setTaskNotes] = useState<Record<string, string>>({});
  const [verifying, setVerifying] = useState<string | null>(null);
  const [verificationResult, setVerificationResult] = useState<Record<string, { valid: boolean; message: string }>>({});
  
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
      [taskId]: { status: 'in_progress', completedSteps: new Array(task.requirements.length).fill(false), notes: new Array(task.requirements.length).fill('') }
    }));
  };

  const handleStepComplete = (taskId: string, stepIndex: number, completed: boolean) => {
    setTaskProgress(prev => {
      const current = prev[taskId] || { status: 'pending', completedSteps: [], notes: [] };
      const newCompletedSteps = [...current.completedSteps];
      newCompletedSteps[stepIndex] = completed;
      return { ...prev, [taskId]: { ...current, completedSteps: newCompletedSteps } };
    });
  };

  const handleStepNote = (taskId: string, stepIndex: string, note: string) => {
    setTaskNotes(prev => ({ ...prev, [`${taskId}_${stepIndex}`]: note }));
  };

  const handleProofChange = (taskId: string, proof: string) => {
    setTaskProgress(prev => ({ ...prev, [taskId]: { ...prev[taskId], proof } }));
    setVerificationResult(prev => ({ ...prev, [taskId]: { valid: false, message: '' } }));
  };

  const handleCompleteTask = async (taskId: string) => {
    const progress = taskProgress[taskId];
    const task = tasks.find(t => t.id === taskId);
    if (!task || !progress) return;
    
    setVerifying(taskId);
    let isValid = true;
    let verificationMessage = '';
    
    if (task.proofType === 'github') {
      const result = await verifyGitHubProof(progress.proof || '');
      isValid = result.valid;
      verificationMessage = result.message;
    } else if (task.proofType === 'link') {
      const result = await verifyLinkProof(progress.proof || '');
      isValid = result.valid;
      verificationMessage = result.message;
    } else if (task.proofType === 'text') {
      isValid = (progress.proof || '').length >= 20;
      verificationMessage = isValid ? '✅ İçerik kaydedildi' : '❌ En az 20 karakter';
    } else if (task.proofType === 'photo' || task.proofType === 'video') {
      isValid = (progress.proof || '').length > 0;
      verificationMessage = isValid ? '✅ Kanıt kaydedildi - inceleme bekleniyor' : '❌ Fotoğraf açıklaması veya link girin';
    } else if (task.proofType === 'file') {
      isValid = (progress.proof || '').length > 0;
      verificationMessage = isValid ? '✅ Dosya bilgisi kaydedildi' : '❌ Bilgi girin';
    }
    
    setVerificationResult(prev => ({ ...prev, [taskId]: { valid: isValid, message: verificationMessage } }));
    const allStepsDone = progress.completedSteps.every(s => s);
    const newStatus = (allStepsDone && isValid) ? 'completed' : 'failed';
    setTaskProgress(prev => ({ ...prev, [taskId]: { ...prev[taskId], status: newStatus } }));
    setVerifying(null);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff' }}>
      <header style={{ padding: '20px 40px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: '#fff' }}>
          <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '10px' }}></div>
          <span style={{ fontSize: '20px', fontWeight: 700 }}>CareerQuest</span>
        </Link>
        <Link href="/profil" style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, textDecoration: 'none', color: '#fff' }}>K</Link>
      </header>

      <div style={{ padding: '32px 40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Görevler</h1>
        <p style={{ color: '#a1a1aa', marginBottom: '32px' }}>Mesleğine özel görevleri tamamla!</p>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', fontSize: '14px', color: '#a1a1aa', marginBottom: '12px' }}>Mesleğini Seç</label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {professions.map((prof) => (
              <button key={prof.id} onClick={() => { setSelectedProfession(prof.id); setActiveTab('all'); }}
                style={{ padding: '12px 20px', background: selectedProfession === prof.id ? 'linear-gradient(135deg, #22d3ee, #a855f7)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid ' + (selectedProfession === prof.id ? 'transparent' : 'rgba(255,255,255,0.1)'), borderRadius: '12px', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <span>{prof.icon}</span>
                <span>{prof.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
              style={{ padding: '10px 20px', background: activeTab === tab.id ? 'rgba(34,211,238,0.1)' : 'transparent', border: 'none', borderRadius: '8px', color: activeTab === tab.id ? '#22d3ee' : '#a1a1aa', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gap: '20px' }}>
          {filteredTasks.map((task) => {
            const progress = taskProgress[task.id];
            const isActive = progress?.status === 'in_progress';
            const proofConfig = proofTypes[task.proofType];
            const verification = verificationResult[task.id];
            
            return (
              <div key={task.id} style={{ padding: '28px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                      <span style={{ padding: '6px 14px', background: `${difficultyColors[task.difficulty]}20`, color: difficultyColors[task.difficulty], borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>{task.difficulty}</span>
                      <span style={{ padding: '6px 14px', background: 'rgba(255,255,255,0.05)', color: '#a1a1aa', borderRadius: '100px', fontSize: '12px' }}>{proofConfig.icon} {proofConfig.label}</span>
                      {progress?.status === 'completed' && <span style={{ padding: '6px 14px', background: 'rgba(34,197,94,0.2)', color: '#22c55e', borderRadius: '100px', fontSize: '12px' }}>✓ Tamamlandı</span>}
                      {progress?.status === 'failed' && <span style={{ padding: '6px 14px', background: 'rgba(239,68,68,0.2)', color: '#ef4444', borderRadius: '100px', fontSize: '12px' }}>✗ Tamamlanamadı</span>}
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>{task.title}</h3>
                    <p style={{ color: '#a1a1aa', fontSize: '14px' }}>{task.desc}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: '#a855f7', fontSize: '16px', fontWeight: 600 }}>+{task.xp} XP</span>
                  <span style={{ color: '#eab308', fontSize: '16px', fontWeight: 600 }}>+{task.token} Token</span>
                </div>

                {!isActive ? (
                  <button onClick={() => handleStartTask(task.id)} style={{ padding: '14px 28px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 600, fontSize: '15px', cursor: 'pointer' }}>
                    🚀 Göreve Başla
                  </button>
                ) : (
                  <div>
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Adımları Tamamla:</h4>
                      {task.requirements.map((req, i) => (
                        <div key={i} style={{ marginBottom: '16px', padding: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <input type="checkbox" checked={progress?.completedSteps[i] || false} onChange={(e) => handleStepComplete(task.id, i, e.target.checked)}
                              style={{ width: '20px', height: '20px', accentColor: '#22d3ee', cursor: 'pointer' }} />
                            <div>
                              <div style={{ fontWeight: 500, marginBottom: '4px' }}>{i + 1}. {req.task}</div>
                              <div style={{ fontSize: '13px', color: '#71717a' }}>{req.guide}</div>
                            </div>
                          </div>
                          <textarea placeholder="Not yaz..." value={taskNotes[`${task.id}_${i}`] || ''} onChange={(e) => handleStepNote(task.id, String(i), e.target.value)}
                            style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '13px', minHeight: '60px', resize: 'none' }} />
                        </div>
                      ))}
                    </div>

                    <div style={{ padding: '20px', background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.2)', borderRadius: '16px', marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '24px' }}>{proofConfig.icon}</span>
                        <div>
                          <div style={{ fontWeight: 600, color: '#a855f7' }}>Kanıt Göster</div>
                          <div style={{ fontSize: '12px', color: '#71717a' }}>{proofConfig.description}</div>
                        </div>
                      </div>
                      <input type={task.proofType === 'link' ? 'url' : 'text'} placeholder={proofConfig.placeholder} value={progress?.proof || ''} onChange={(e) => handleProofChange(task.id, e.target.value)}
                        style={{ width: '100%', padding: '14px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '14px' }} />
                      {verification && (
                        <div style={{ marginTop: '12px', padding: '12px', background: verification.valid ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', borderRadius: '8px', color: verification.valid ? '#22c55e' : '#ef4444', fontSize: '14px' }}>
                          {verification.message}
                        </div>
                      )}
                    </div>

                    <button onClick={() => handleCompleteTask(task.id)} disabled={verifying === task.id}
                      style={{ width: '100%', padding: '16px', background: verifying === task.id ? '#71717a' : 'linear-gradient(135deg, #22c55e, #16a34a)', border: 'none', borderRadius: '12px', color: '#fff', fontWeight: 700, fontSize: '16px', cursor: verifying === task.id ? 'not-allowed' : 'pointer', opacity: verifying === task.id ? 0.7 : 1 }}>
                      {verifying === task.id ? '🔄 Doğrulanıyor...' : '✅ Görevi Tamamla ve Kontrol Et'}
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