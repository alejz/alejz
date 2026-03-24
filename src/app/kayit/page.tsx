"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Kayit() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/giris");
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#logoGrad)"/>
            </svg>
            <span className="text-2xl font-bold">CareerQuest</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Hesap Oluştur</h1>
          <p className="text-neutral-400">Yolculuğuna başla</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input name="name" type="text" required placeholder="İsim" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-500" />
          </div>
          <div>
            <input name="email" type="email" required placeholder="E-posta" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-500" />
          </div>
          <div>
            <input name="password" type="password" required minLength={6} placeholder="Şifre" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-neutral-500" />
          </div>
          <button disabled={loading} className="w-full py-4 bg-white text-black font-semibold rounded-xl disabled:opacity-50">
            {loading ? "Hesap oluşturuluyor..." : "Hesap Oluştur"}
          </button>
        </form>

        <p className="text-center text-neutral-400 mt-6">
          Hesabın var mı? <Link href="/giris" className="text-cyan-400">Giriş yap</Link>
        </p>
      </div>
    </main>
  );
}
