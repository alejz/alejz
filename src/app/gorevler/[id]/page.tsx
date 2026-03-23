import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getTaskById, getProfessionById } from "@/lib/task-actions";
import TaskDetailClient from "../task-detail-client";

export default async function TaskDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { profession?: string };
}) {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/giris");
  }

  const taskId = parseInt(params.id);
  const professionId = searchParams.profession ? parseInt(searchParams.profession) : 1;

  const task = await getTaskById(taskId);
  if (!task) {
    redirect("/gorevler");
  }

  return <TaskDetailClient task={task} professionId={professionId} />;
}