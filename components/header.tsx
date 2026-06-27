"use client"

import { useSession } from "next-auth/react"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const { data: session } = useSession()

  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
      <h1 className="text-base font-semibold text-[#2C3E50]">{title}</h1>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#1A3A5C] rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-medium">
            {session?.user?.name?.[0]?.toUpperCase() ?? "U"}
          </span>
        </div>
        <span className="text-sm text-gray-600">{session?.user?.name}</span>
      </div>
    </header>
  )
}
