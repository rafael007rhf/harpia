import { Header } from "@/components/header"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header title="Detalhes do Projeto" />
      <div className="flex-1 p-6">
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <p className="text-sm text-gray-400">Detalhes do projeto {params.id} — em construção.</p>
        </div>
      </div>
    </>
  )
}
