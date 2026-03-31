import { useParams, Link } from 'react-router-dom'
import { ExternalLink, GitFork, ArrowLeft, Bug, Clock, AlertTriangle } from 'lucide-react'
import { projects, tasks } from '../data'

const statusStyle: Record<string, string> = {
  'LIVE': 'bg-green-900/50 text-green-300 border-green-800',
  'BUILDING': 'bg-yellow-900/50 text-yellow-300 border-yellow-800',
  'NEEDS WORK': 'bg-red-900/50 text-red-300 border-red-800',
  'DOWN': 'bg-gray-900/50 text-gray-300 border-gray-800',
}

const priorityDot: Record<string, string> = {
  'urgent': 'bg-red-500',
  'high': 'bg-orange-500',
  'medium': 'bg-yellow-500',
  'low': 'bg-blue-500',
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)
  if (!project) return <div className="text-gray-400">Project not found</div>

  const projectTasks = tasks.filter(t => t.projectId === id)
  const inProgress = projectTasks.filter(t => t.status === 'in-progress')
  const todo = projectTasks.filter(t => t.status === 'todo')
  const blocked = projectTasks.filter(t => t.status === 'blocked')
  const done = projectTasks.filter(t => t.status === 'done')
  const pct = projectTasks.length > 0 ? Math.round((done.length / projectTasks.length) * 100) : 0

  return (
    <div>
      {/* Breadcrumb */}
      <Link to="/projects" className="inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 mb-4">
        <ArrowLeft size={14} /> Projects
      </Link>

      {/* Header */}
      <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-6 mb-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: project.color + '20', color: project.color }}>
              <span className="text-lg font-bold">{project.name[0]}</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{project.name}</h1>
              <p className="text-sm text-gray-400 mt-0.5">{project.description}</p>
            </div>
          </div>
          <span className={`text-xs px-3 py-1 rounded-full font-medium border ${statusStyle[project.status]}`}>{project.status}</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1"><Clock size={12} /> Updated {project.lastUpdated}</span>
          <span>$ {project.revenue}/mo</span>
          {project.revenueTarget && <span>Target: {project.revenueTarget}</span>}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-2 mb-4">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium px-3 py-1.5 rounded-md">
            <ExternalLink size={12} /> Live Site
          </a>
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs font-medium px-3 py-1.5 rounded-md">
              <GitFork size={12} /> GitHub
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 bg-gray-800 text-gray-400 text-xs font-medium px-3 py-1.5 rounded-md cursor-default border border-gray-700">
              <GitFork size={12} /> {project.githubNote || 'Not yet pushed'}
            </span>
          )}
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-[#2d2d4d] rounded-full">
            <div className="h-2 rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: project.color }} />
          </div>
          <span className="text-sm text-gray-400">{pct}%</span>
        </div>
      </div>

      {/* Bugs */}
      {project.bugs && project.bugs.length > 0 && (
        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Bug size={16} className="text-red-400" />
            <h3 className="text-sm font-semibold text-red-300">Known Bugs ({project.bugs.length})</h3>
          </div>
          <ul className="space-y-1">
            {project.bugs.map((bug, i) => (
              <li key={i} className="text-sm text-red-200/80 flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span> {bug}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tasks */}
        <div className="lg:col-span-2">
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
            <div className="px-4 py-3 border-b border-[#2d2d4d] flex items-center justify-between">
              <h2 className="text-base font-semibold text-white">Tasks</h2>
            </div>
            <div className="p-4 space-y-4">
              <TaskGroup title="In Progress" count={inProgress.length} tasks={inProgress} color="text-blue-400" />
              <TaskGroup title="Blocked" count={blocked.length} tasks={blocked} color="text-red-400" />
              <TaskGroup title="To Do" count={todo.length} tasks={todo} color="text-gray-400" />
              <TaskGroup title="Done" count={done.length} tasks={done} color="text-green-400" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notes */}
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-4">
            <h3 className="text-sm font-semibold text-white mb-2">Notes</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{project.notes}</p>
          </div>

          {/* Deal Status (if applicable) */}
          {project.dealStatus && (
            <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Deal Status</h3>
              <p className="text-sm text-gray-400">{project.dealStatus}</p>
              {project.dealValue && <p className="text-lg font-bold text-green-400 mt-2">{project.dealValue}</p>}
            </div>
          )}

          {/* Pages (for CMO OS) */}
          {project.pages && project.pages.length > 0 && (
            <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Pages ({project.pages.length})</h3>
              <ul className="space-y-1">
                {project.pages.map((page, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="text-indigo-400">•</span> {page}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Details */}
          <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Details</h3>
            <div className="space-y-2.5 text-sm">
              <DetailRow label="Category" value={project.category} />
              <DetailRow label="Revenue" value={`$${project.revenue}/mo`} />
              {project.revenueTarget && <DetailRow label="Target" value={project.revenueTarget} />}
              <DetailRow label="Last Updated" value={project.lastUpdated} />
              <div className="flex justify-between items-start">
                <span className="text-gray-500 text-xs uppercase">URL</span>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-xs truncate max-w-[180px]">
                  {project.url.replace('https://', '')}
                </a>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-gray-500 text-xs uppercase">GitHub</span>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 text-xs truncate max-w-[180px]">
                    {project.github.replace('https://github.com/', '')}
                  </a>
                ) : (
                  <span className="text-gray-500 text-xs">{project.githubNote || 'Not yet pushed'}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TaskGroup({ title, count, tasks: taskList, color }: { title: string; count: number; tasks: any[]; color: string }) {
  if (count === 0) return null
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold ${color}`}>{title}</span>
        <span className="text-xs text-gray-500">{count}</span>
      </div>
      <div className="space-y-1">
        {taskList.map(task => (
          <div key={task.id} className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-[#ffffff05]">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${task.status === 'done' ? 'bg-green-500' : task.status === 'blocked' ? 'bg-red-500' : 'bg-gray-500'}`} />
              <span className={`text-sm ${task.status === 'done' ? 'text-gray-500 line-through' : 'text-gray-300'}`}>{task.title}</span>
            </div>
            <div className="flex items-center gap-2">
              {task.tags.map((tag: string) => (
                <span key={tag} className="text-xs bg-[#2d2d4d] text-gray-400 px-1.5 py-0.5 rounded hidden sm:inline">{tag}</span>
              ))}
              <span className={`w-2 h-2 rounded-full ${priorityDot[task.priority]}`} />
              <span className="text-xs text-gray-500">{task.dueDate.slice(5)}</span>
              <span className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-white text-[9px] font-bold">LS</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-500 text-xs uppercase">{label}</span>
      <span className="text-gray-300 text-xs">{value}</span>
    </div>
  )
}
