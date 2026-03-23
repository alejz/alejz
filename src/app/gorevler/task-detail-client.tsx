"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { submitTask } from "@/lib/task-actions";

interface Task {
  id: number;
  title: string;
  description: string | null;
  taskType: string | null;
  difficulty: string | null;
  xpReward: number | null;
  tokenReward: number | null;
  category: string | null;
}

interface TaskDetailProps {
  task: Task;
  professionId: number;
}

export default function TaskDetailClient({ task, professionId }: TaskDetailProps) {
  const [submission, setSubmission] = useState("");
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; isCorrect: boolean; feedback: string; xpEarned: number; tokenEarned: number } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submission.trim()) return;

    startTransition(async () => {
      const res = await submitTask(task.id, submission);
      if (res.success) {
        setResult(res as any);
      }
    });
  };

  const difficultyColors: Record<string, string> = {
    kolay: "from-green-500 to-green-400",
    orta: "from-yellow-500 to-yellow-400",
    zor: "from-orange-500 to-orange-400",
    extreme: "from-red-500 to-red-400",
  };
  const diffKey = task.difficulty || "kolay";

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="border-b border-white/5 backdrop-blur-xl bg-[#0a0a0f]/80 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href={`/gorevler?profession=${professionId}`} className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
            ← Geri
          </Link>
          <span className="text-sm text-neutral-500">Görev Detayı</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {!result ? (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${difficultyColors[diffKey]} text-black`}>
                  {(task.difficulty || "kolay").toUpperCase()}
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  {task.category || "-"}
                </span>
                <span className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  {task.taskType || "learning"}
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-4">{task.title}</h1>
              <p className="text-neutral-300 mb-6">{task.description || "-"}</p>

              <div className="flex items-center gap-6 p-4 rounded-xl bg-white/5">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">+{task.xpReward || 0}</div>
                  <div className="text-xs text-neutral-500">XP</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">+{task.tokenReward || 0}</div>
                  <div className="text-xs text-neutral-500">Token</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Cevabını / Calışmanı Yaz
                </label>
                <textarea
                  value={submission}
                  onChange={(e) => setSubmission(e.target.value)}
                  placeholder={getPlaceholder(task.taskType || "learning")}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:border-cyan-500 focus:outline-none min-h-[200px]"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isPending || !submission.trim()}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isPending ? "Değerlendiriliyor..." : "Görevi Tamamla"}
              </button>
            </form>

            <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-300">
              💡 <strong>Nasil calisir:</strong> Görevi tamamladiginda AI degerlendirir. Dogru cevap verirsen XP ve token kazanirsin!
            </div>
          </div>
        ) : (
          <div className={`p-8 rounded-2xl border text-center ${
            result.isCorrect 
              ? "bg-gradient-to-br from-green-500/20 to-cyan-500/20 border-green-500/50" 
              : "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50"
          }`}>
            <div className="text-6xl mb-4">
              {result.isCorrect ? "🎉" : "💪"}
            </div>
            
            <h2 className={`text-3xl font-bold mb-4 ${
              result.isCorrect ? "text-green-400" : "text-yellow-400"
            }`}>
              {result.isCorrect ? "Tebrikler!" : "Baska Bir Dene!"}
            </h2>

            <p className="text-lg mb-6">{result.feedback}</p>

            {result.isCorrect && (
              <div className="flex justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400">+{result.xpEarned}</div>
                  <div className="text-sm text-neutral-400">XP</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400">+{result.tokenEarned}</div>
                  <div className="text-sm text-neutral-400">Token</div>
                </div>
              </div>
            )}

            <div className="flex gap-4 justify-center">
              <Link
                href={`/gorevler?profession=${professionId}`}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              >
                Diger Görevlere Git
              </Link>
              <Link
                href="/dashboard"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:opacity-90 transition-opacity"
              >
                Dashboarda Dön
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function getPlaceholder(taskType: string): string {
  const placeholders = {
    learning: "Ögrendigin konuyu özetle veya anladigini açikla...",
    practice: "Yaptigin çalismayi açikla veya kod/link ekle...",
    homework: "Projenin detaylarini ve sonucu anlat...",
    quiz: "Sorunun cevabini yaz...",
  };
  return placeholders[taskType as keyof typeof placeholders] || "Cevabini yaz...";
}