"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { verifyEmail } from "@/lib/email-actions";
import { useEffect, useState } from "react";

export default function Dogrula() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error" | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }

    verifyEmail(token).then((result) => {
      if (result.success) {
        setStatus("success");
        setMessage(result.message || "Email başarıyla doğrulandı!");
      } else {
        setStatus("error");
        setMessage(result.error || "Doğrulama başarısız");
      }
    });
  }, [token]);

  if (!token) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <svg width="64" height="64" viewBox="0 0 40 40" fill="none" className="mx-auto mb-4">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#logoGrad)"/>
            </svg>
            <h1 className="text-2xl font-bold">CareerQuest</h1>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-red-500">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="text-red-400 font-semibold mb-4">Token bulunamadı</p>
            <Link href="/" className="text-cyan-400 hover:underline">
              Ana sayfaya dön
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!status) {
    return (
      <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="mb-8">
            <svg width="64" height="64" viewBox="0 0 40 40" fill="none" className="mx-auto mb-4">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#logoGrad)"/>
            </svg>
            <h1 className="text-2xl font-bold">CareerQuest</h1>
          </div>

          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-neutral-400">Email doğrulanıyor...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <svg width="64" height="64" viewBox="0 0 40 40" fill="none" className="mx-auto mb-4">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#logoGrad)" strokeWidth="2" fill="none"/>
            <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#logoGrad)"/>
          </svg>
          <h1 className="text-2xl font-bold">CareerQuest</h1>
        </div>

        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
          {status === "success" && (
            <>
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-500">
                  <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-green-400 font-semibold mb-4">{message}</p>
              <Link href="/giris" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-xl">
                Giriş Yap
              </Link>
            </>
          )}

          {status === "error" && (
            <>
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-red-500">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-red-400 font-semibold mb-4">{message}</p>
              <Link href="/" className="text-cyan-400 hover:underline">
                Ana sayfaya dön
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}