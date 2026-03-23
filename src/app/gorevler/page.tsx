import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/auth";
import { getProfessions, getTasksByProfession, getUserSubmissions, getProfessionById } from "@/lib/task-actions";

export default async function TasksPage({
  searchParams,
}: {
  searchParams: { profession?: string; task?: string };
}) {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/giris");
  }

  const professions = await getProfessions();
  const userId = parseInt(session.user.id);
  const submissions = await getUserSubmissions(userId);

  const selectedProfessionId = searchParams.profession ? parseInt(searchParams.profession) : null;
  const selectedTaskId = searchParams.task ? parseInt(searchParams.task) : null;

  let tasks: any[] = [];
  let profession: any = null;

  if (selectedProfessionId) {
    tasks = await getTasksByProfession(selectedProfessionId);
    profession = await getProfessionById(selectedProfessionId);
  }

  const completedTaskIds = submissions.filter(s => s.isCorrect).map(s => s.taskId);

  const groupedProfessions = professions.reduce((acc: any, p) => {
    if (!acc[p.category]) acc[p.category] = [];
    acc[p.category].push(p);
    return acc;
  }, {});

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
            <Link href="/dashboard" className="text-neutral-400 hover:text-white text-sm">
              Dashboard
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Mesleki Görevler
        </h1>
        <p className="text-neutral-400 mb-8">Mesleğini seç ve görevleri tamamlayarak XP kazan!</p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-semibold mb-4">Kategoriler</h2>
            {Object.entries(groupedProfessions).map(([category, prods]: [string, any]) => (
              <div key={category} className="mb-4">
                <h3 className="text-sm font-medium text-neutral-400 mb-2">{category}</h3>
                <div className="space-y-1">
                  {prods.map((p: any) => (
                    <Link
                      key={p.id}
                      href={`/gorevler?profession=${p.id}`}
                      className={`block px-4 py-2 rounded-lg transition-all ${
                        selectedProfessionId === p.id
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-white"
                          : "bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white"
                      }`}
                    >
                      <span className="mr-2">{p.icon}</span>
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2">
            {selectedProfessionId && profession ? (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{profession.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold">{profession.name}</h2>
                    <p className="text-neutral-400 text-sm">{profession.description}</p>
                  </div>
                </div>

                {tasks.length === 0 ? (
                  <div className="text-center py-12 text-neutral-400">
                    <p>Bu meslek için henüz görev yok.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {tasks.map((task) => {
                      const isCompleted = completedTaskIds.includes(task.id);
                      const difficultyColors = {
                        kolay: "text-green-400 border-green-500/30",
                        orta: "text-yellow-400 border-yellow-500/30",
                        zor: "text-orange-400 border-orange-500/30",
                        extreme: "text-red-400 border-red-500/30",
                      };

                      return (
                        <div
                          key={task.id}
                          className={`p-4 rounded-xl border transition-all ${
                            isCompleted
                              ? "bg-green-500/10 border-green-500/30"
                              : "bg-white/5 border-white/10 hover:border-cyan-500/30"
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-0.5 rounded text-xs border ${difficultyColors[task.difficulty as keyof typeof difficultyColors]}`}>
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
                            {isCompleted ? (
                              <div className="ml-4 px-4 py-2 rounded-lg bg-green-500/20 text-green-400 text-sm font-medium">
                                ✓ Tamamlandı
                              </div>
                            ) : (
                              <Link
                                href={`/gorevler?profession=${selectedProfessionId}&task=${task.id}`}
                                className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:opacity-90"
                              >
                                Başla
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20 text-neutral-400">
                <div className="text-6xl mb-4">🎯</div>
                <p className="text-lg">Mesleğini seçerek başla!</p>
                <p className="text-sm mt-2">Görevleri tamamla, XP ve token kazan.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}