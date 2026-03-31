import { Link } from 'react-router-dom'
import { ExternalLink, GitFork } from 'lucide-react'
import { projects, tasks } from '../data'

const statusStyle: Record<string, string> = {
  'LIVE': 'bg-green-900/50 text-green-300',
  'BUILDING': 'bg-yellow-900/50 text-yellow-300',
  'NEEDS WORK': 'bg-red-900/50 text-red-300',
  'DOWN': 'bg-gray-900/50 text-gray-300',
}

const healthDot: Record<string, string> = {
  'green': 'bg-green-500',
  'yellow': 'bg-yellow-500',
  'red': 'bg-red-500',
}

export default function Projects() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Projects</h1>
          <p className="text-sm text-gray-400">{projects.length} projects total</p>
        </div>
      </div>

      {/* Table header */}
      <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase border-b border-[#2d2d4d]">
          <div className="col-span-4">Project</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-1 text-center">Health</div>
          <div className="col-span-2">Progress</div>
          <div className="col-span-1">Revenue</div>
          <div className="col-span-1">Updated</div>
          <div className="col-span-2 text-right">Links</div>
        </div>

        {projects.map(p => {
          const done = tasks.filter(t => t.projectId === p.id && t.status === 'done').length
          const total = tasks.filter(t => t.projectId === p.id).length
          const pct = total > 0 ? Math.round((done / total) * 100) : 0

          return (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="grid grid-cols-12 gap-2 px-4 py-3 items-center border-b border-[#2d2d4d] hover:bg-[#ffffff05] transition-colors"
            >
              <div className="col-span-4 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">{p.name}</p>
                  <p className="text-xs text-gray-500 truncate">{p.description.substring(0, 60)}...</p>
                </div>
              </div>
              <div className="col-span-1">
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${statusStyle[p.status]}`}>{p.status}</span>
              </div>
              <div className="col-span-1 flex justify-center">
                <span className={`w-3 h-3 rounded-full ${healthDot[p.health]}`} />
              </div>
              <div className="col-span-2 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-[#2d2d4d] rounded-full">
                  <div className="h-1.5 rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: p.color }} />
                </div>
                <span className="text-xs text-gray-500">{pct}%</span>
              </div>
              <div className="col-span-1 text-sm text-gray-400">${p.revenue}</div>
              <div className="col-span-1 text-xs text-gray-500">{new Date(p.lastUpdated).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
              <div className="col-span-2 flex justify-end gap-2" onClick={e => e.preventDefault()}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400" title="Live Site">
                  <ExternalLink size={14} />
                </a>
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" title="GitHub">
                    <GitFork size={14} />
                  </a>
                ) : (
                  <span className="text-gray-600" title={p.githubNote || 'No repo'}>
                    <GitFork size={14} />
                  </span>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
