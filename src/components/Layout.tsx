import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { LayoutDashboard, FolderKanban, CheckSquare, FileText, DollarSign, Clock, Settings, ChevronDown, ChevronRight, Search, Bell, Plus, PanelLeftClose, PanelLeft } from 'lucide-react'
import { projects } from '../data'

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/projects', label: 'Projects', icon: FolderKanban },
  { path: '/tasks', label: 'Tasks', icon: CheckSquare },
  { path: '/docs', label: 'Docs', icon: FileText },
  { path: '/revenue', label: 'Revenue', icon: DollarSign },
  { path: '/timeline', label: 'Timeline', icon: Clock },
  { path: '/settings', label: 'Settings', icon: Settings },
]

const statusColors: Record<string, string> = {
  'green': 'bg-green-500',
  'yellow': 'bg-yellow-500',
  'red': 'bg-red-500',
}

export default function Layout() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(true)

  const breadcrumbs = () => {
    const parts = location.pathname.split('/').filter(Boolean)
    if (parts.length === 0) return [{ label: 'Dashboard', path: '/' }]
    const crumbs = [{ label: 'Elios HQ', path: '/' }]
    if (parts[0] === 'projects') {
      crumbs.push({ label: 'Projects', path: '/projects' })
      if (parts[1]) {
        const p = projects.find(pr => pr.id === parts[1])
        if (p) crumbs.push({ label: p.name, path: `/projects/${p.id}` })
      }
    } else {
      const nav = navItems.find(n => n.path === '/' + parts[0])
      if (nav) crumbs.push({ label: nav.label, path: nav.path })
    }
    return crumbs
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className={`${collapsed ? 'w-16' : 'w-56'} bg-[#1a1a2e] border-r border-[#2d2d4d] flex flex-col transition-all duration-200 flex-shrink-0`}>
        {/* Logo */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2d2d4d]">
          <div className="w-7 h-7 bg-indigo-500 rounded-md flex items-center justify-center text-white font-bold text-sm flex-shrink-0">E</div>
          {!collapsed && <span className="font-semibold text-white text-sm">Elios HQ</span>}
          <button onClick={() => setCollapsed(!collapsed)} className="ml-auto text-gray-400 hover:text-white">
            {collapsed ? <PanelLeft size={16} /> : <PanelLeftClose size={16} />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-2">
          {navItems.map(item => {
            const Icon = item.icon
            const active = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path))
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors ${active ? 'bg-[#2a2a4a] text-white' : 'text-gray-400 hover:text-white hover:bg-[#ffffff0a]'}`}
              >
                <Icon size={16} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}

          {/* Projects section */}
          {!collapsed && (
            <div className="mt-4 border-t border-[#2d2d4d] pt-2">
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="flex items-center gap-1 px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider w-full hover:text-gray-300"
              >
                {projectsOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                PROJECTS
              </button>
              {projectsOpen && projects.map(p => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className={`flex items-center gap-2 px-6 py-1.5 text-xs transition-colors ${location.pathname === `/projects/${p.id}` ? 'text-white bg-[#2a2a4a]' : 'text-gray-400 hover:text-white'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${statusColors[p.health] || 'bg-gray-500'}`} />
                  <span className="truncate">{p.name}</span>
                </Link>
              ))}
            </div>
          )}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-12 bg-[#1a1a2e] border-b border-[#2d2d4d] flex items-center px-4 gap-4 flex-shrink-0">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            {breadcrumbs().map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-600">/</span>}
                <Link to={crumb.path} className={`hover:text-white ${i === breadcrumbs().length - 1 ? 'text-white font-medium' : ''}`}>
                  {crumb.label}
                </Link>
              </span>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#0f0f23] rounded-md px-3 py-1.5">
              <Search size={14} className="text-gray-500" />
              <input placeholder="Search..." className="bg-transparent text-sm text-gray-300 outline-none w-32 placeholder-gray-600" />
            </div>
            <button className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-medium px-3 py-1.5 rounded-md">
              <Plus size={14} />
              New
            </button>
            <button className="text-gray-400 hover:text-white relative">
              <Bell size={16} />
            </button>
            <div className="w-7 h-7 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">LS</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#0f0f23]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
