import { Header } from "@/components/header"

export default function InvestorDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header title="Perfil do Investidor" />
      <div className="flex-1 p-6">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <p className="text-sm text-gray-400">Perfil do investidor {params.id} — em construção.</p>
        </div>
      </div>
    </>
  )
}
