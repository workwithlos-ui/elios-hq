import { Rocket, TrendingUp, AlertCircle } from 'lucide-react'
import { timelineEvents } from '../data'

const typeConfig: Record<string, { icon: any; color: string; bg: string }> = {
  milestone: { icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-900/30 border-green-800/50' },
  update: { icon: AlertCircle, color: 'text-yellow-400', bg: 'bg-yellow-900/30 border-yellow-800/50' },
  launch: { icon: Rocket, color: 'text-blue-400', bg: 'bg-blue-900/30 border-blue-800/50' },
}

export default function Timeline() {
  // Group by date
  const grouped = timelineEvents.reduce((acc, event) => {
    if (!acc[event.date]) acc[event.date] = []
    acc[event.date].push(event)
    return acc
  }, {} as Record<string, typeof timelineEvents>)

  const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a))

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-1">Timeline</h1>
      <p className="text-sm text-gray-400 mb-6">Project milestones and updates</p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#2d2d4d]" />

        <div className="space-y-8">
          {sortedDates.map(date => (
            <div key={date}>
              {/* Date marker */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold relative z-10">
                  {new Date(date).getDate()}
                </div>
                <span className="text-sm font-semibold text-white">
                  {new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
              </div>

              {/* Events */}
              <div className="ml-12 space-y-3">
                {grouped[date].map((event, i) => {
                  const config = typeConfig[event.type] || typeConfig.update
                  const Icon = config.icon
                  return (
                    <div key={i} className={`rounded-lg border p-4 ${config.bg}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} className={config.color} />
                        <span className="text-sm font-semibold text-white">{event.title}</span>
                        <span className="text-xs text-gray-500 ml-auto">{event.project}</span>
                      </div>
                      <p className="text-sm text-gray-400">{event.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
