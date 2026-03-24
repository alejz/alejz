import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";

export default async function TasksPage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/giris");
  }

  const tasks = [
    { id: 1, title: "AI Araçlarını Keşfet", description: "En az 3 farklı AI aracını araştır ve özelliklerini yaz", xpReward: 50, tokenReward: 10, difficulty: "kolay", category: "Yapay Zeka" },
    { id: 2, title: "Kod Yaz", description: "Python veya JavaScript ile basit bir program yaz", xpReward: 100, tokenReward: 25, difficulty: "orta", category: "Yazılım" },
    { id: 3, title: "Proje Tamamla", description: "Küçük bir tam teşekküllü proje geliştir", xpReward: 200, tokenReward: 50, difficulty: "zor", category: "Proje" },
    { id: 4, title: "Staj Başvurusu", description: "Bir şirkete staj başvurusu yap", xpReward: 150, tokenReward: 30, difficulty: "orta", category: "Kariyer" },
    { id: 5, title: "LinkedIn Profil", description: "LinkedIn profilini güncelle", xpReward: 30, tokenReward: 5, difficulty: "kolay", category: "Kariyer" },
  ];

  const difficultyColors: any = {
    kolay: "text-green-400 border-green-500/30",
    orta: "text-yellow-400 border-yellow-500/30",
    zor: "text-orange-400 border-orange-500/30",
  };

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="border-b border-white/5 backdrop-blur-xl bg-[#0a0a0f]/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="group-hover:scale-110 transition-transform duration-300">
              <defs>
                <linearGradient id="dashLogo" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#dashLogo)" strokeWidth="2" fill="none"/>
              <path d="M20 12L28 16V24L20 28L12 24V16L20 12Z" fill="url(#dashLogo)"/>
            </svg>
            <span className="font-bold text-lg">CareerQuest</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-neutral-400 hover:text-white text-sm">Dashboard</Link>
            <Link href="/profil" className="text-neutral-400 hover:text-white text-sm">Profil</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Görevler
        </h1>
        <p className="text-neutral-400 mb-8">Görevleri tamamlayarak XP ve token kazan!</p>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-xs border ${difficultyColors[task.difficulty]}`}>
                      {task.difficulty.toUpperCase()}
                    </span>
                    <span className="px-2 py-0.5 rounded text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30">
                      {task.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{task.title}</h3>
                  <p className="text-neutral-400 text-sm mt-1">{task.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <span className="text-purple-400">+{task.xpReward} XP</span>
                    <span className="text-yellow-400">+{task.tokenReward} Token</span>
                  </div>
                </div>
                <button className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:opacity-90">
                  Başla
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
