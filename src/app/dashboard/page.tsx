import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getDashboardData } from "@/lib/dashboard-actions";
import DashboardClient from "./DashboardClient";

export default async function Dashboard() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/giris");
  }

  const dashboardData = await getDashboardData();

  if (!dashboardData) {
    redirect("/giris");
  }

  return (
    <DashboardClient 
      user={dashboardData.user}
      skills={dashboardData.skills}
      tasks={dashboardData.tasks}
      goals={dashboardData.goals}
      stats={dashboardData.stats}
    />
  );
}