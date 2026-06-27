import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { Sidebar } from "@/components/sidebar"
import { SessionProvider } from "@/components/session-provider"

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <SessionProvider>
      <div className="flex h-full min-h-screen">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-auto">
          {children}
        </main>
      </div>
    </SessionProvider>
  )
}
