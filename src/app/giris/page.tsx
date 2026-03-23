"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Giris() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("E-posta veya şifre hatalı");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
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
          <h1 className="text-3xl font-bold mb-2">Hoş Geldin</h1>
          <p className="text-neutral-400">Devam etmek için giriş yap</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-neutral-400 mb-2">E-posta</label>
            <input 
              name="email"
              type="email" 
              required
              placeholder="ornek@email.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder:text-neutral-500"
            />
          </div>
          
          <div>
            <label className="block text-sm text-neutral-400 mb-2">Şifre</label>
            <input 
              name="password"
              type="password" 
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder:text-neutral-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-neutral-400">
              <input type="checkbox" className="w-4 h-4 rounded bg-white/5" />
              Benı hatırla
            </label>
            <Link href="/sifre-sifirla" className="text-sm text-cyan-400 hover:underline">
              Şifremi unuttum
            </Link>
          </div>

          <button 
            disabled={loading}
            className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>

        <p className="text-center text-neutral-400 mt-6">
          Hesabın yok mu? <Link href="/kayit" className="text-cyan-400">Kayıt ol</Link>
        </p>
      </div>
    </main>
  );
}