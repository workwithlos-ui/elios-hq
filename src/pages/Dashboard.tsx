import { Link } from 'react-router-dom'
import { AlertTriangle, Briefcase, CheckCircle, XCircle, DollarSign, ListChecks, ExternalLink } from 'lucide-react'
import { projects, tasks, priorityQueue, recentlyCompleted } from '../data'

const statusCounts = {
  live: projects.filter(p => p.status === 'LIVE').length,
  building: projects.filter(p => p.status === 'BUILDING').length,
  needsWork: projects.filter(p => p.status === 'NEEDS WORK').length,
  down: projects.filter(p => p.status === 'DOWN').length,
}

const tasksDone = tasks.filter(t => t.status === 'done').length
const totalTasks = tasks.length

const activeBlocked = tasks.filter(t => t.status === 'in-progress' || t.status === 'blocked')

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Status Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <StatCard icon="●" color="text-green-400" label="Live" value={statusCounts.live} />
        <StatCard icon="●" color="text-yellow-400" label="Building" value={statusCounts.building} />
        <StatCard icon="●" color="text-orange-400" label="Needs Work" value={statusCounts.needsWork} />
        <StatCard icon="●" color="text-red-400" label="Down" value={statusCounts.down} />
        <div className="bg-[#1e1e3a] rounded-lg p-3 border border-[#2d2d4d]">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-1"><DollarSign size={12} /> MRR</div>
          <div className="text-xl font-bold text-white">$0</div>
        </div>
        <div className="bg-[#1e1e3a] rounded-lg p-3 border border-[#2d2d4d]">
          <div className="flex items-center gap-2 text-gray-400 text-xs mb-1"><ListChecks size={12} /> Tasks Done</div>
          <div className="text-xl font-bold text-white">{tasksDone}/{totalTasks}</div>
        </div>
      </div>

      {/* Alerts */}
      <div className="space-y-2">
        <div className="bg-red-900/30 border border-red-800/50 rounded-lg px-4 py-2.5 flex items-start gap-3">
          <AlertTriangle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-red-200"><strong>6 critical bugs</strong> need fixing before customer use. TradesBot: Total Squares inflated 60%, Generate Estimate broken.</p>
        </div>
        <div className="bg-yellow-900/30 border border-yellow-800/50 rounded-lg px-4 py-2.5 flex items-start gap-3">
          <Briefcase size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-yellow-200"><strong>Boardroom Brain deal:</strong> Contract ready. $35,000 - $45,000 on the table. Waiting on Ed Rosenfield for demo scheduling.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Priority Queue */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2d2d4d]">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-white">Priority Queue</span>
                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">{priorityQueue.length}</span>
              </div>
              <Link to="/tasks" className="text-xs text-indigo-400 hover:text-indigo-300">View all</Link>
            </div>
            <div className="divide-y divide-[#2d2d4d]">
              {priorityQueue.map((item, i) => (
                <div key={item.id} className="px-4 py-2.5 flex items-center gap-3 hover:bg-[#ffffff05]">
                  <span className="text-xs text-gray-500 w-4">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-200 truncate">{item.action}</p>
                    <p className="text-xs text-gray-500">{item.project} &middot; {item.estimatedTime}</p>
                  </div>
                  <span className="text-xs text-gray-400 hidden sm:block">{item.revenueImpact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active and Blocked */}
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
            <div className="px-4 py-3 border-b border-[#2d2d4d]">
              <span className="text-base font-semibold text-white">Active and Blocked</span>
            </div>
            <div className="divide-y divide-[#2d2d4d]">
              {activeBlocked.map(task => (
                <div key={task.id} className="px-4 py-2.5 flex items-center justify-between hover:bg-[#ffffff05]">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${task.status === 'blocked' ? 'bg-red-500' : 'bg-yellow-500'}`} />
                    <div>
                      <p className="text-sm text-gray-200">{task.title}</p>
                      <p className="text-xs text-gray-500">{projects.find(p => p.id === task.projectId)?.name}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded ${task.status === 'blocked' ? 'bg-red-900/50 text-red-300' : 'bg-yellow-900/50 text-yellow-300'}`}>
                      {task.status === 'blocked' ? 'Blocked' : 'In Progress'}
                    </span>
                    <span className={`w-2.5 h-2.5 rounded-full ${task.priority === 'urgent' ? 'bg-red-500' : 'bg-orange-500'}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Completed */}
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2d2d4d]">
              <div className="flex items-center gap-2">
                <span className="text-base font-semibold text-white">Recently Completed</span>
                <span className="bg-green-700 text-white text-xs px-2 py-0.5 rounded-full">{recentlyCompleted.length}</span>
              </div>
            </div>
            <div className="divide-y divide-[#2d2d4d]">
              {recentlyCompleted.map((item, i) => (
                <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-[#ffffff05]">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                    <p className="text-sm text-gray-300">{item.item}</p>
                  </div>
                  <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* All Projects */}
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2d2d4d]">
              <span className="text-base font-semibold text-white">All Projects</span>
              <Link to="/projects" className="text-xs text-indigo-400 hover:text-indigo-300">View all</Link>
            </div>
            <div className="divide-y divide-[#2d2d4d]">
              {projects.map(p => {
                const done = tasks.filter(t => t.projectId === p.id && t.status === 'done').length
                const total = tasks.filter(t => t.projectId === p.id).length
                const pct = total > 0 ? Math.round((done / total) * 100) : 0
                return (
                  <Link key={p.id} to={`/projects/${p.id}`} className="px-4 py-2.5 flex items-center gap-3 hover:bg-[#ffffff05] block">
                    <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0`} style={{ backgroundColor: p.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-200 truncate">{p.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded font-medium ml-2 flex-shrink-0 ${p.status === 'LIVE' ? 'bg-green-900/50 text-green-300' : p.status === 'BUILDING' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-red-900/50 text-red-300'}`}>
                          {p.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 h-1 bg-[#2d2d4d] rounded-full">
                          <div className="h-1 rounded-full" style={{ width: `${pct}%`, backgroundColor: p.color }} />
                        </div>
                        <span className="text-xs text-gray-500">{done}/{total}</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Revenue */}
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#2d2d4d]">
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-green-400" />
                <span className="text-base font-semibold text-white">Revenue</span>
              </div>
              <Link to="/revenue" className="text-xs text-indigo-400 hover:text-indigo-300">Details</Link>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs text-gray-500 uppercase">Current MRR</p>
                  <p className="text-2xl font-bold text-white">$0</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 uppercase">Target</p>
                  <p className="text-lg font-semibold text-white">$10,000</p>
                </div>
              </div>
              <div className="h-2 bg-[#2d2d4d] rounded-full">
                <div className="h-2 bg-indigo-500 rounded-full" style={{ width: '0%' }} />
              </div>
              <p className="text-xs text-gray-500">$10,000 remaining to target</p>
              <div className="mt-3 space-y-2">
                <p className="text-xs text-gray-400 uppercase font-semibold">Nearest Revenue Unlocks</p>
                {[
                  { name: 'Acquisition OS', value: '$10K product', color: '#2563EB' },
                  { name: 'Boardroom Brain', value: '$35K-45K deal', color: '#DC2626' },
                  { name: 'Content Factory', value: '$900/mo per customer', color: '#7C3AED' },
                  { name: 'FundingHub', value: '$100K/mo target', color: '#0EA5E9' },
                ].map(item => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-xs text-gray-300">{item.name}</span>
                    </div>
                    <span className="text-xs text-gray-400">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, color, label, value }: { icon: string; color: string; label: string; value: number }) {
  return (
    <div className="bg-[#1e1e3a] rounded-lg p-3 border border-[#2d2d4d]">
      <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
        <span className={color}>{icon}</span> {label}
      </div>
      <div className="text-xl font-bold text-white">{value}</div>
    </div>
  )
}
