import { ExternalLink, GitFork, Settings as SettingsIcon, Globe, User, FolderGit2 } from 'lucide-react'
import { projects, githubRepos } from '../data'

export default function Settings() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
      <p className="text-sm text-gray-400 mb-6">Workspace configuration</p>

      <div className="space-y-6">
        {/* Workspace */}
        <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
          <div className="px-4 py-3 border-b border-[#2d2d4d] flex items-center gap-2">
            <SettingsIcon size={16} className="text-gray-400" />
            <h2 className="text-base font-semibold text-white">Workspace</h2>
          </div>
          <div className="divide-y divide-[#2d2d4d]">
            <SettingRow label="Name" value="Elios HQ" />
            <SettingRow label="Owner" value="Los Silva" />
            <SettingRow label="Projects" value={`${projects.length} total`} />
            <SettingRow label="Version" value="3.1.0" />
          </div>
        </div>

        {/* Live URLs */}
        <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
          <div className="px-4 py-3 border-b border-[#2d2d4d] flex items-center gap-2">
            <Globe size={16} className="text-indigo-400" />
            <h2 className="text-base font-semibold text-white">Live URLs</h2>
          </div>
          <div className="divide-y divide-[#2d2d4d]">
            {projects.map(p => (
              <div key={p.id} className="px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: p.color }} />
                  <span className="text-sm text-gray-300">{p.name}</span>
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  {p.url.replace('https://', '')}
                  <ExternalLink size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Repos */}
        <div className="bg-[#1e1e3a] rounded-lg border border-[#2d2d4d]">
          <div className="px-4 py-3 border-b border-[#2d2d4d] flex items-center gap-2">
            <FolderGit2 size={16} className="text-gray-400" />
            <h2 className="text-base font-semibold text-white">GitHub Repos</h2>
          </div>
          <div className="divide-y divide-[#2d2d4d]">
            {githubRepos.map(repo => (
              <div key={repo.name} className="px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GitFork size={14} className="text-gray-500" />
                  <div>
                    <span className="text-sm text-gray-300">{repo.project}</span>
                    <span className="text-xs text-gray-500 ml-2">workwithlos-ui/{repo.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {repo.url ? (
                    <a href={repo.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                      View <ExternalLink size={10} />
                    </a>
                  ) : (
                    <span className="text-xs text-gray-600 bg-gray-800 px-2 py-0.5 rounded">{repo.status}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-4 py-2.5 flex items-center justify-between">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm text-white">{value}</span>
    </div>
  )
}
