import { Header } from "@/components/header"
import Link from "next/link"
import { Plus } from "lucide-react"

export default function ReturnsPage() {
  return (
    <>
      <Header title="Retornos" />
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500">Acompanhe os retornos prometidos e realizados</p>
          <Link
            href="/returns/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3A5C] text-white text-sm font-medium rounded hover:bg-[#2E6DA4] transition-colors"
          >
            <Plus size={16} />
            Novo Retorno
          </Link>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-12 text-center text-gray-400 text-sm">
          Nenhum retorno registrado ainda.
        </div>
      </div>
    </>
  )
}
