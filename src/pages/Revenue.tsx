import { DollarSign, TrendingUp, Target, Zap } from 'lucide-react'
import { projects, priorityQueue } from '../data'

export default function Revenue() {
  const currentMRR = 0
  const targetMRR = 10000

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Revenue</h1>
      <p className="text-sm text-gray-400 mb-6">MRR tracking and revenue roadmap</p>

      {/* MRR Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-5">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-2"><DollarSign size={14} /> Current MRR</div>
          <p className="text-3xl font-bold text-white">${currentMRR.toLocaleString()}</p>
        </div>
        <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-5">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-2"><Target size={14} /> MRR Target</div>
          <p className="text-3xl font-bold text-white">${targetMRR.toLocaleString()}</p>
        </div>
        <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-5">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-2"><TrendingUp size={14} /> Remaining</div>
          <p className="text-3xl font-bold text-white">${(targetMRR - currentMRR).toLocaleString()}</p>
          <div className="mt-2 h-2 bg-[#2d2d4d] rounded-full">
            <div className="h-2 bg-indigo-500 rounded-full" style={{ width: `${(currentMRR / targetMRR) * 100}%` }} />
          </div>
        </div>
      </div>

      {/* Revenue by Product */}
      <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] mb-6">
        <div className="px-4 py-3 border-b border-[#2d2d4d]">
          <h2 className="text-base font-semibold text-white">Revenue by Product</h2>
        </div>
        <div className="divide-y divide-[#2d2d4d]">
          {projects.filter(p => p.revenueTarget).map(p => (
            <div key={p.id} className="px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                <div>
                  <p className="text-sm text-white font-medium">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-white font-medium">${p.revenue}/mo</p>
                <p className="text-xs text-gray-500">Target: {p.revenueTarget}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Unlock Roadmap */}
      <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
        <div className="px-4 py-3 border-b border-[#2d2d4d] flex items-center gap-2">
          <Zap size={16} className="text-yellow-400" />
          <h2 className="text-base font-semibold text-white">Revenue Unlock Roadmap</h2>
        </div>
        <div className="divide-y divide-[#2d2d4d]">
          {priorityQueue.filter(item => item.revenueImpact && !item.revenueImpact.includes('Blocks')).map(item => (
            <div key={item.id} className="px-4 py-3 flex items-center justify-between hover:bg-[#ffffff05]">
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${item.priority === 'critical' ? 'bg-red-900/50 text-red-300' : item.priority === 'high' ? 'bg-orange-900/50 text-orange-300' : 'bg-yellow-900/50 text-yellow-300'}`}>
                  {item.id}
                </span>
                <div>
                  <p className="text-sm text-gray-200">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.project} &middot; {item.estimatedTime}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-green-400">{item.revenueImpact}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
