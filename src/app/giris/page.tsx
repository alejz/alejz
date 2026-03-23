import Link from "next/link";

export default function Giris() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <style jsx>{`
        .font-sans { font-family: var(--font-jakarta), system-ui, sans-serif; }
        .font-display { font-family: var(--font-outfit), system-ui, sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, #22d3ee 0%, #a855f7 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

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
            <span className="text-2xl font-display font-bold">CareerQuest</span>
          </Link>
          <h1 className="font-display text-3xl font-bold mb-2">Hoş Geldin</h1>
          <p className="text-neutral-400">Devam etmek için giriş yap</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm text-neutral-400 mb-2">E-posta</label>
            <input 
              type="email" 
              placeholder="ornek@email.com"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:bg-white/10 transition-all text-white placeholder:text-neutral-500"
            />
          </div>
          
          <div>
            <label className="block text-sm text-neutral-400 mb-2">Şifre</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:border-cyan-500 focus:outline-none focus:bg-white/10 transition-all text-white placeholder:text-neutral-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-neutral-400">
              <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-cyan-500" />
              Benı hatırla
            </label>
            <a href="#" className="text-sm text-cyan-400 hover:underline">Şifremi unuttum</a>
          </div>

          <button className="w-full py-4 bg-white text-black font-semibold rounded-xl hover:scale-[1.02] transition-transform">
            Giriş Yap
          </button>
        </form>

        <p className="text-center text-neutral-400 mt-6">
          Hesabın yok mu? <a href="/kayit" className="text-cyan-400 hover:underline">Kayıt ol</a>
        </p>
      </div>
    </main>
  );
}