import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getProfileData } from "@/lib/profile-actions";
import ProfileClient from "./ProfileClient";

export default async function ProfilePage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/giris");
  }

  const profileData = await getProfileData();

  if (!profileData) {
    redirect("/giris");
  }

  return (
    <ProfileClient 
      user={profileData.user}
      skills={profileData.skills}
      stats={profileData.stats}
      achievements={profileData.achievements}
    />
  );
}