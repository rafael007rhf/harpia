import { Header } from "@/components/header"
import { Users, Building2, TrendingUp, AlertCircle } from "lucide-react"

const stats = [
  {
    label: "Investidores Ativos",
    value: "24",
    sub: "+3 este mês",
    icon: Users,
    color: "text-[#2E6DA4]",
    bg: "bg-[#2E6DA4]/10",
  },
  {
    label: "Aportes Totais",
    value: "R$ 4,2M",
    sub: "12 aportes",
    icon: TrendingUp,
    color: "text-[#C8A951]",
    bg: "bg-[#C8A951]/10",
  },
  {
    label: "Projetos Ativos",
    value: "5",
    sub: "2 em captação",
    icon: Building2,
    color: "text-[#1A3A5C]",
    bg: "bg-[#1A3A5C]/10",
  },
  {
    label: "Retornos Pendentes",
    value: "8",
    sub: "R$ 620K aguardando",
    icon: AlertCircle,
    color: "text-red-500",
    bg: "bg-red-50",
  },
]

const recentActivity = [
  { type: "Aporte", desc: "João Ferreira — R$ 250.000", date: "Hoje, 14h30", dot: "bg-[#C8A951]" },
  { type: "Novo Investidor", desc: "Maria Souza cadastrada", date: "Hoje, 11h00", dot: "bg-[#2E6DA4]" },
  { type: "Retorno Pago", desc: "Projeto Vila Nova — R$ 80.000", date: "Ontem, 16h45", dot: "bg-green-500" },
  { type: "Reunião", desc: "Carlos Lima — follow-up contrato", date: "Ontem, 10h00", dot: "bg-[#1A3A5C]" },
  { type: "Aporte", desc: "Ana Paula — R$ 500.000", date: "22/06/2026", dot: "bg-[#C8A951]" },
]

export default function DashboardPage() {
  return (
    <>
      <Header title="Dashboard" />
      <div className="flex-1 p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ label, value, sub, icon: Icon, color, bg }) => (
            <div key={label} className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{label}</p>
                  <p className="mt-1 text-2xl font-bold text-[#2C3E50]">{value}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{sub}</p>
                </div>
                <div className={`${bg} p-2.5 rounded`}>
                  <Icon size={20} className={color} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-[#2C3E50]">Atividade Recente</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3.5">
                <div className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                    {item.type}
                  </span>
                  <p className="text-sm text-[#2C3E50] truncate">{item.desc}</p>
                </div>
                <span className="text-xs text-gray-400 shrink-0">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h2 className="text-sm font-semibold text-[#2C3E50] mb-4">Projetos em Destaque</h2>
            <div className="space-y-3">
              {[
                { name: "Vila Nova Residencial", status: "EM CAPTAÇÃO", pct: 68 },
                { name: "Edifício Central Park", status: "EM OBRA", pct: 42 },
                { name: "Residencial Horizonte", status: "EM CAPTAÇÃO", pct: 25 },
              ].map((p) => (
                <div key={p.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-medium text-[#2C3E50]">{p.name}</span>
                    <span className="text-gray-400">{p.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2E6DA4] rounded-full"
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-gray-400">{p.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h2 className="text-sm font-semibold text-[#2C3E50] mb-4">Próximos Retornos</h2>
            <div className="space-y-3">
              {[
                { investor: "João Ferreira", amount: "R$ 80.000", date: "30/06/2026", status: "PENDENTE" },
                { investor: "Ana Paula", amount: "R$ 150.000", date: "15/07/2026", status: "PENDENTE" },
                { investor: "Carlos Lima", amount: "R$ 200.000", date: "01/08/2026", status: "ATRASADO" },
              ].map((r) => (
                <div key={r.investor} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-medium text-[#2C3E50]">{r.investor}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-[#2C3E50]">{r.amount}</p>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      r.status === "ATRASADO"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-50 text-yellow-600"
                    }`}>
                      {r.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
