"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Kayit() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/giris");
    }, 1000);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '32px', textDecoration: 'none', color: '#fff' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #22d3ee, #a855f7)', borderRadius: '8px' }}></div>
            <span style={{ fontSize: '24px', fontWeight: 700 }}>CareerQuest</span>
          </Link>
          <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>Hesap Oluştur</h1>
          <p style={{ color: '#a1a1aa' }}>Yolculuğuna başla</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleSubmit}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#a1a1aa', marginBottom: '8px' }}>İsim</label>
            <input 
              name="name"
              type="text" 
              required
              placeholder="Adın"
              style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '16px', outline: 'none' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#a1a1aa', marginBottom: '8px' }}>E-posta</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="ornek@email.com"
              style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '16px', outline: 'none' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#a1a1aa', marginBottom: '8px' }}>Şifre</label>
            <input 
              name="password"
              type="password" 
              required
              placeholder="••••••••"
              style={{ width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '16px', outline: 'none' }}
            />
          </div>

          <button 
            disabled={loading}
            style={{ width: '100%', padding: '16px', background: '#fff', color: '#0a0a0f', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', opacity: loading ? 0.5 : 1 }}
          >
            {loading ? "Hesap oluşturuluyor..." : "Hesap Oluştur"}
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#a1a1aa', marginTop: '24px' }}>
          Zaten hesabın var mı? <Link href="/giris" style={{ color: '#22d3ee' }}>Giriş yap</Link>
        </p>
      </div>
    </main>
  );
}