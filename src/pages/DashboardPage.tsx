import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Cell, PieChart, Pie } from 'recharts';
import { PLATFORM_DATA, TIMELINE_DATA } from '../lib/mockData';
import { Activity, ShieldAlert, MonitorPlay, Globe2 } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold font-display tracking-wide mb-1">DETECTION OVERVIEW</h1>
          <p className="text-neutral-400 text-sm">Real-time monitoring statistics across all global channels.</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono bg-sport-card border border-sport-border px-3 py-1.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          SCANNER ACTIVE
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard title="Total Assets Monitored" value="1,248" trend="+12" icon={MonitorPlay} />
        <KPICard title="Detections Today" value="150" trend="+34%" icon={Activity} />
        <KPICard title="High Risk Incidents" value="42" trend="-5%" icon={ShieldAlert} alert />
        <KPICard title="Platforms Active" value="14" trend="0" icon={Globe2} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
        <div className="glass-panel rounded-3xl p-6 lg:col-span-2">
          <h3 className="text-sm font-semibold text-neutral-400 mb-6 uppercase tracking-wider">Detection Timeline</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={TIMELINE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorDetections" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00F0FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" vertical={false} />
                <XAxis dataKey="time" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141414', borderColor: '#262626', borderRadius: '12px' }}
                  itemStyle={{ color: '#00F0FF' }}
                />
                <Area type="monotone" dataKey="detections" stroke="#00F0FF" strokeWidth={2} fillOpacity={1} fill="url(#colorDetections)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-6 flex flex-col">
          <h3 className="text-sm font-semibold text-neutral-400 mb-2 uppercase tracking-wider">Platform Breakdown</h3>
          <div className="flex-1 flex items-center justify-center -ml-4">
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={PLATFORM_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {PLATFORM_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#141414', borderColor: '#262626', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
            {PLATFORM_DATA.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.fill }}></span>
                <span className="text-neutral-400 truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KPICard({ title, value, trend, icon: Icon, alert = false }: any) {
  const isPositiveTrend = trend.startsWith('+');
  const isNeutral = trend === '0';
  return (
    <div className="glass-panel p-6 rounded-3xl relative overflow-hidden group">
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300">
          <Icon className="w-5 h-5" />
        </div>
        {!isNeutral && (
          <span className={`text-xs font-medium px-2 py-1 rounded-lg ${
            alert ? 'bg-red-500/10 text-red-500' : isPositiveTrend ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
          }`}>
            {trend}
          </span>
        )}
      </div>
      <div className="relative z-10">
        <h4 className="text-3xl font-display font-bold mb-1">{value}</h4>
        <p className="text-sm text-neutral-400 font-medium">{title}</p>
      </div>
    </div>
  );
}
