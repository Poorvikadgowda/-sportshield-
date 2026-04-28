import { Map as MapIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { PLATFORM_DATA } from '../lib/mockData';

export default function HeatmapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-display tracking-wide mb-1">GLOBAL THREAT MAP</h1>
        <p className="text-neutral-400 text-sm">Geographic distribution of unauthorized broadcasts and media sharing.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Map Container */}
        <div className="glass-panel rounded-3xl p-6 lg:col-span-2 min-h-[500px] flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-center mb-4 z-10 relative">
            <h3 className="font-semibold text-neutral-300 uppercase tracking-wider text-sm">Live Hotspots</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold">High: 50+</span>
              <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 text-xs font-bold">Med: 10-50</span>
            </div>
          </div>
          
          <div className="flex-1 bg-sport-card rounded-2xl border border-sport-border relative flex items-center justify-center overflow-hidden">
             {/* Fake Map Graphic */}
             <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sport-accent-blue/20 via-transparent to-transparent"></div>
             
             {/* Simplified SVG Map representation */}
             <svg viewBox="0 0 1000 500" className="w-full text-sport-border/50 fill-current opacity-40">
               {/* Rough continents approximations just for visual flair in prototype */}
               <path d="M200,100 C250,80 300,120 350,100 C360,150 250,250 200,300 C180,250 150,150 200,100 Z" />
               <path d="M450,80 C550,50 650,80 700,150 C650,200 550,150 450,200 C400,150 420,100 450,80 Z" />
               <path d="M480,220 C550,200 580,280 520,380 C480,350 450,280 480,220 Z" />
               <path d="M720,180 C800,150 850,200 820,300 C750,320 700,250 720,180 Z" />
             </svg>
             
             {/* Blinking Hotspots */}
             <div className="absolute top-[30%] left-[25%]">
               <div className="w-4 h-4 bg-red-500 rounded-full animate-ping opacity-75 absolute"></div>
               <div className="w-4 h-4 bg-red-500 rounded-full absolute border-2 border-black"></div>
             </div>
             
             <div className="absolute top-[40%] left-[50%]">
               <div className="w-3 h-3 bg-yellow-500 rounded-full animate-ping opacity-75 absolute delay-100"></div>
               <div className="w-3 h-3 bg-yellow-500 rounded-full absolute border-2 border-black"></div>
             </div>
             
             <div className="absolute top-[45%] left-[75%]">
               <div className="w-5 h-5 bg-red-500 rounded-full animate-ping opacity-75 absolute delay-300 drop-shadow-[0_0_15px_rgba(239,68,68,1)]"></div>
               <div className="w-5 h-5 bg-red-500 rounded-full absolute border-2 border-black"></div>
               <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-1 rounded text-[10px] text-white whitespace-nowrap border border-white/10 z-10">High Activity</div>
             </div>
             
             <div className="absolute top-[60%] left-[30%]">
               <div className="w-2 h-2 bg-sport-accent-blue rounded-full animate-ping opacity-75 absolute"></div>
               <div className="w-2 h-2 bg-sport-accent-blue rounded-full absolute border cursor-pointer border-black"></div>
             </div>
          </div>
        </div>

        {/* Regions Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl">
            <h3 className="font-semibold text-neutral-300 uppercase tracking-wider text-sm mb-4">Top Regions</h3>
            <div className="space-y-4">
              <RegionRow name="Southeast Asia" value="45%" count="512" color="bg-red-500" />
              <RegionRow name="Eastern Europe" value="25%" count="285" color="bg-orange-500" />
              <RegionRow name="South America" value="18%" count="204" color="bg-yellow-500" />
              <RegionRow name="North America" value="8%" count="91" color="bg-sport-accent-blue" />
              <RegionRow name="Other" value="4%" count="45" color="bg-neutral-500" />
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-3xl">
            <h3 className="font-semibold text-neutral-300 uppercase tracking-wider text-sm mb-4">Platform Share</h3>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PLATFORM_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
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
          </div>
        </div>

      </div>
    </div>
  );
}

function RegionRow({ name, value, count, color }: any) {
  return (
    <div>
      <div className="flex justify-between items-end mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-neutral-400">{count} incidents</span>
      </div>
      <div className="h-2 w-full bg-sport-card rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: value }}></div>
      </div>
    </div>
  );
}
