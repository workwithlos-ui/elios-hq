import { useState } from 'react'
import { tasks, projects } from '../data'

const statusFilters = ['All', 'In Progress', 'To Do', 'Blocked', 'Done'] as const
const statusMap: Record<string, string> = { 'In Progress': 'in-progress', 'To Do': 'todo', 'Blocked': 'blocked', 'Done': 'done' }

const statusStyle: Record<string, string> = {
  'in-progress': 'bg-blue-900/50 text-blue-300',
  'todo': 'bg-gray-800 text-gray-300',
  'blocked': 'bg-red-900/50 text-red-300',
  'done': 'bg-green-900/50 text-green-300',
}

const priorityDot: Record<string, string> = {
  'urgent': 'bg-red-500',
  'high': 'bg-orange-500',
  'medium': 'bg-yellow-500',
  'low': 'bg-blue-500',
}

export default function Tasks() {
  const [statusFilter, setStatusFilter] = useState('All')
  const [projectFilter, setProjectFilter] = useState('All')

  const filtered = tasks.filter(t => {
    if (statusFilter !== 'All' && t.status !== statusMap[statusFilter]) return false
    if (projectFilter !== 'All' && t.projectId !== projectFilter) return false
    return true
  })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Tasks</h1>
          <p className="text-sm text-gray-400">{tasks.length} tasks across all projects</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-1 bg-[#1e1e3a] rounded-lg p-1 border border-[#2d2d4d]">
          {statusFilters.map(f => (
            <button
              key={f}
              onClick={() => setStatusFilter(f)}
              className={`text-xs px-3 py-1.5 rounded-md transition-colors ${statusFilter === f ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
        <select
          value={projectFilter}
          onChange={e => setProjectFilter(e.target.value)}
          className="text-xs bg-[#1e1e3a] border border-[#2d2d4d] text-gray-300 rounded-lg px-3 py-1.5 outline-none"
        >
          <option value="All">All Projects</option>
          {projects.map(p => (
            <option key={p.id} value={p.id}>{p.name}</option>
          ))}
        </select>
      </div>

      {/* Tasks table */}
      <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase border-b border-[#2d2d4d]">
          <div className="col-span-1">Status</div>
          <div className="col-span-4">Task</div>
          <div className="col-span-2">Project</div>
          <div className="col-span-1">Priority</div>
          <div className="col-span-1">Assignee</div>
          <div className="col-span-1">Due</div>
          <div className="col-span-2">Tags</div>
        </div>
        {filtered.map(task => {
          const project = projects.find(p => p.id === task.projectId)
          return (
            <div key={task.id} className="grid grid-cols-12 gap-2 px-4 py-2.5 items-center border-b border-[#2d2d4d] hover:bg-[#ffffff05]">
              <div className="col-span-1">
                <span className={`text-xs px-2 py-0.5 rounded ${statusStyle[task.status]}`}>
                  {task.status === 'in-progress' ? 'Active' : task.status === 'todo' ? 'To Do' : task.status === 'blocked' ? 'Blocked' : 'Done'}
                </span>
              </div>
              <div className="col-span-4">
                <span className={`text-sm ${task.status === 'done' ? 'text-gray-500 line-through' : 'text-gray-200'}`}>{task.title}</span>
              </div>
              <div className="col-span-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: project?.color }} />
                <span className="text-xs text-gray-400 truncate">{project?.name}</span>
              </div>
              <div className="col-span-1 flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${priorityDot[task.priority]}`} />
                <span className="text-xs text-gray-400 capitalize">{task.priority}</span>
              </div>
              <div className="col-span-1">
                <span className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-[9px] font-bold inline-flex">{task.assignee.substring(0, 2).toUpperCase()}</span>
              </div>
              <div className="col-span-1 text-xs text-gray-500">{task.dueDate.slice(5)}</div>
              <div className="col-span-2 flex flex-wrap gap-1">
                {task.tags.map(tag => (
                  <span key={tag} className="text-xs bg-[#2d2d4d] text-gray-400 px-1.5 py-0.5 rounded">{tag}</span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
