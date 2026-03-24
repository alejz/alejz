"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { requestPasswordReset, resetPassword } from "@/lib/email-actions";
import { useState, Suspense } from "react";

function RequestForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    const result = await requestPasswordReset(email);

    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error || "Bir hata oluştu");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-500">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-green-400 font-semibold mb-2">Email gönderildi!</p>
        <p className="text-neutral-400 text-sm">Şifre sıfırlama linki email adresinize gönderildi.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-neutral-400 mb-2">Email Adresin</label>
        <input 
          name="email"
          type="email" 
          required
          placeholder="ornek@email.com"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder:text-neutral-500"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <button 
        disabled={loading}
        className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50"
      >
        {loading ? "Gönderiliyor..." : "Şifre Sıfırlama Linki Gönder"}
      </button>
    </form>
  );
}

function ResetForm({ token }: { token: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Şifreler eşleşmiyor");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Şifre en az 8 karakter olmalı");
      setLoading(false);
      return;
    }

    const result = await resetPassword(token, password);

    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error || "Bir hata oluştu");
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-500">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="text-green-400 font-semibold mb-2">Şifre değiştirildi!</p>
        <Link href="/giris" className="text-cyan-400 hover:underline">
          Giriş yap
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-neutral-400 mb-2">Yeni Şifre</label>
        <input 
          name="password"
          type="password" 
          required
          minLength={8}
          placeholder="En az 8 karakter"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder:text-neutral-500"
        />
      </div>

      <div>
        <label className="block text-sm text-neutral-400 mb-2">Şifre Tekrar</label>
        <input 
          name="confirmPassword"
          type="password" 
          required
          minLength={8}
          placeholder="Şifreni tekrar gir"
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none text-white placeholder:text-neutral-500"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      <button 
        disabled={loading}
        className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:scale-[1.02] transition-transform disabled:opacity-50"
      >
        {loading ? "Değiştiriliyor..." : "Şifreyi Değiştir"}
      </button>
    </form>
  );
}

function SifreSifirlaContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
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
          <h1 className="text-3xl font-bold">
            {token ? "Şifreyi Sıfırla" : "Şifremi Unuttum"}
          </h1>
        </div>

        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          {token ? (
            <ResetForm token={token} />
          ) : (
            <RequestForm />
          )}
        </div>

        {!token && (
          <p className="text-center text-neutral-400 mt-6">
            <Link href="/giris" className="text-cyan-400 hover:underline">
              Giriş sayfasına dön
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}

export default function SifreSifirla() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md text-center">
          <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </main>
    }>
      <SifreSifirlaContent />
    </Suspense>
  );
}
