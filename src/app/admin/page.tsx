import { auth } from "@/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

async function getUsers() {
  const allUsers = await db.select({
    id: users.id,
    name: users.name,
    surname: users.surname,
    email: users.email,
    level: users.level,
    xp: users.xp,
    emailVerified: users.emailVerified,
    isActive: users.isActive,
    createdAt: users.createdAt,
  }).from(users);
  
  return allUsers;
}

export default async function AdminPanel() {
  const session = await auth();
  
  if (!session?.user?.email || session.user.email !== "admin@careerquest.com") {
    return (
      <main className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Erişim Reddedildi</h1>
          <p className="text-neutral-400">Bu sayfaya erişim yetkiniz yok.</p>
        </div>
      </main>
    );
  }

  const userList = await getUsers();

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <nav className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="font-bold">← Dashboard</Link>
          <span className="text-cyan-400">Admin Panel</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-8">Kullanıcılar</h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-neutral-400">ID</th>
                <th className="text-left py-3 px-4 text-neutral-400">İsim</th>
                <th className="text-left py-3 px-4 text-neutral-400">Email</th>
                <th className="text-left py-3 px-4 text-neutral-400">Level</th>
                <th className="text-left py-3 px-4 text-neutral-400">XP</th>
                <th className="text-left py-3 px-4 text-neutral-400">Durum</th>
                <th className="text-left py-3 px-4 text-neutral-400">Kayıt Tarihi</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-4">{user.id}</td>
                  <td className="py-3 px-4">{user.name} {user.surname}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4 text-cyan-400">{user.level}</td>
                  <td className="py-3 px-4">{user.xp}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs ${user.isActive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {user.isActive ? "Aktif" : "Pasif"}
                    </span>
                    {!user.emailVerified && (
                      <span className="ml-2 px-2 py-1 rounded text-xs bg-yellow-500/20 text-yellow-400">
                        Doğrulanmamış
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-neutral-400">
                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString("tr-TR") : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {userList.length === 0 && (
          <p className="text-center text-neutral-400 py-8">Henüz kayıtlı kullanıcı yok.</p>
        )}
      </div>
    </main>
  );
}