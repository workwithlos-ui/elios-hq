import { useState } from 'react'
import { ChevronDown, ChevronRight, Folder, FileText, ExternalLink, GitFork, Code, Wrench, AlertTriangle, Terminal } from 'lucide-react'
import { projects, empireNavigator, githubRepos } from '../data'

interface TreeNode {
  name: string;
  type: 'folder' | 'link' | 'file';
  url?: string;
  children?: TreeNode[];
}

function TreeItem({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 2)

  if (node.type === 'folder') {
    return (
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1.5 py-1 px-1 text-sm text-gray-300 hover:text-white w-full text-left"
          style={{ paddingLeft: `${depth * 16 + 4}px` }}
        >
          {open ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
          <Folder size={14} className="text-yellow-500" />
          <span className="font-medium">{node.name}</span>
          {node.children && <span className="text-xs text-gray-500 ml-1">{node.children.length}</span>}
        </button>
        {open && node.children?.map((child, i) => (
          <TreeItem key={i} node={child} depth={depth + 1} />
        ))}
      </div>
    )
  }

  if (node.type === 'link' && node.url) {
    return (
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 py-1 px-1 text-sm text-indigo-400 hover:text-indigo-300"
        style={{ paddingLeft: `${depth * 16 + 20}px` }}
      >
        <ExternalLink size={12} />
        <span>{node.name}</span>
      </a>
    )
  }

  return (
    <div
      className="flex items-center gap-1.5 py-1 px-1 text-sm text-gray-500"
      style={{ paddingLeft: `${depth * 16 + 20}px` }}
    >
      <FileText size={12} />
      <span>{node.name}</span>
    </div>
  )
}

export default function Docs() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Docs</h1>
      <p className="text-sm text-gray-400 mb-6">Empire structure and project documentation</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Empire Navigator */}
        <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-4">
          <div className="flex items-center gap-2 mb-3">
            <Folder size={16} className="text-yellow-500" />
            <h2 className="text-sm font-semibold text-white">Empire Navigator</h2>
          </div>
          {empireNavigator.map((node, i) => (
            <TreeItem key={i} node={node} />
          ))}
        </div>

        {/* Project Documentation */}
        <div className="lg:col-span-2 space-y-4">
          {/* Project selector tabs */}
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={() => setSelectedProject(null)}
              className={`text-xs px-3 py-1.5 rounded-md transition-colors ${!selectedProject ? 'bg-indigo-600 text-white' : 'bg-[#1e1e3a] text-gray-400 hover:text-white border border-[#2d2d4d]'}`}
            >
              All Projects
            </button>
            {projects.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedProject(p.id)}
                className={`text-xs px-3 py-1.5 rounded-md transition-colors ${selectedProject === p.id ? 'bg-indigo-600 text-white' : 'bg-[#1e1e3a] text-gray-400 hover:text-white border border-[#2d2d4d]'}`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Project docs */}
          {projects
            .filter(p => !selectedProject || p.id === selectedProject)
            .map(p => (
              <div key={p.id} className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d] p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                    <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${p.status === 'LIVE' ? 'bg-green-900/50 text-green-300' : p.status === 'BUILDING' ? 'bg-yellow-900/50 text-yellow-300' : 'bg-red-900/50 text-red-300'}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                      <ExternalLink size={12} /> Live
                    </a>
                    {p.github ? (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
                        <GitFork size={12} /> Repo
                      </a>
                    ) : (
                      <span className="text-xs text-gray-600 flex items-center gap-1">
                        <GitFork size={12} /> {p.githubNote || 'Not pushed'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {p.detailedDescription || p.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Tech Stack */}
                  {p.techStack && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Code size={14} className="text-purple-400" />
                        <h4 className="text-xs font-semibold text-gray-400 uppercase">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.techStack.map(tech => (
                          <span key={tech} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-0.5 rounded border border-purple-800/30">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features */}
                  {p.keyFeatures && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Wrench size={14} className="text-blue-400" />
                        <h4 className="text-xs font-semibold text-gray-400 uppercase">Key Features</h4>
                      </div>
                      <ul className="space-y-0.5">
                        {p.keyFeatures.map((f, i) => (
                          <li key={i} className="text-xs text-gray-400 flex items-start gap-1.5">
                            <span className="text-blue-400 mt-0.5">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Known Issues */}
                  {p.knownIssues && p.knownIssues.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <AlertTriangle size={14} className="text-red-400" />
                        <h4 className="text-xs font-semibold text-gray-400 uppercase">Known Issues</h4>
                      </div>
                      <ul className="space-y-0.5">
                        {p.knownIssues.map((issue, i) => (
                          <li key={i} className="text-xs text-red-300/70 flex items-start gap-1.5">
                            <span className="text-red-400 mt-0.5">•</span> {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Setup Instructions */}
                  {p.setupInstructions && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <Terminal size={14} className="text-green-400" />
                        <h4 className="text-xs font-semibold text-gray-400 uppercase">Setup Instructions</h4>
                      </div>
                      <pre className="text-xs text-green-300/70 bg-[#0f0f23] rounded p-2 overflow-x-auto whitespace-pre-wrap font-mono">
                        {p.setupInstructions}
                      </pre>
                    </div>
                  )}
                </div>

                {/* Links row */}
                <div className="mt-4 pt-3 border-t border-[#2d2d4d] flex items-center gap-4 text-xs text-gray-500">
                  <span>Category: {p.category}</span>
                  <span>Updated: {p.lastUpdated}</span>
                  <span>URL: <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">{p.url.replace('https://', '')}</a></span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
