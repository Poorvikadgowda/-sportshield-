import { useState } from 'react';
import { MOCK_INCIDENTS } from '../lib/mockData';
import { ShieldAlert, SplitSquareHorizontal, CheckCircle2, XCircle, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IncidentsPage() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold font-display tracking-wide mb-1">LIVE INCIDENTS</h1>
          <p className="text-neutral-400 text-sm">Unauthorized matches detected across the web.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input 
              type="text" 
              placeholder="Filter by ID..." 
              className="bg-sport-card border border-sport-border rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-sport-accent-blue w-full sm:w-48"
            />
          </div>
          <button className="px-4 py-2 border border-sport-border rounded-full flex items-center gap-2 hover:bg-sport-card text-sm">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['All', 'High Risk', 'Pending Action', 'Resolved'].map(tab => (
          <button 
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === tab ? 'bg-white text-black' : 'bg-sport-card border border-sport-border text-neutral-400 hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {MOCK_INCIDENTS.map((incident) => (
          <div key={incident.id} className="glass-panel p-4 md:p-6 rounded-2xl flex flex-col lg:flex-row gap-6 items-start lg:items-center group">
            
            <div className="relative w-full lg:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0 bg-sport-border border border-white/10">
              <img src={incident.thumbnail} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 <Link to={`/app/compare/${incident.id}`} className="px-3 py-1.5 bg-sport-accent-blue text-black text-xs font-bold rounded-full flex items-center gap-1.5">
                   <SplitSquareHorizontal className="w-3.5 h-3.5" /> Compare
                 </Link>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs text-sport-accent-blue font-semibold">{incident.id}</span>
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border ${
                  incident.riskLevel === 'High' ? 'bg-red-500/10 text-red-500 border-red-500/20' : 
                  incident.riskLevel === 'Medium' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' : 
                  'bg-green-500/10 text-green-500 border-green-500/20'
                }`}>
                  {incident.riskLevel} Risk
                </span>
                <span className="text-xs text-neutral-500 ml-auto">{incident.timeDetected}</span>
              </div>
              
              <h3 className="text-lg font-bold truncate mb-1">{incident.url}</h3>
              <p className="text-sm text-neutral-400 mb-4 line-clamp-1">Matched Asset: {incident.originalAsset}</p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full border-2 border-sport-border flex items-center justify-center relative">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2" fill="none" className="text-sport-border" />
                      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2" fill="none" className={incident.matchConfidence > 90 ? 'text-red-500' : 'text-yellow-500'} strokeDasharray="100" strokeDashoffset={100 - incident.matchConfidence} />
                    </svg>
                    <span className="absolute text-xs font-bold">{incident.matchConfidence}%</span>
                  </div>
                  <span className="text-xs text-neutral-400 font-medium">Confidence Score</span>
                </div>
                
                <div className="hidden sm:block w-px h-8 bg-sport-border"></div>
                
                <div className="text-sm">
                  <span className="text-neutral-500 text-xs block mb-0.5">Platform</span>
                  <span className="font-medium">{incident.platform}</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto flex flex-row lg:flex-col gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 border-sport-border mt-4 lg:mt-0">
               <button className="flex-1 lg:flex-none px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2">
                 <ShieldAlert className="w-4 h-4" /> Takedown
               </button>
               <button className="flex-1 lg:flex-none px-4 py-2 bg-sport-card border border-sport-border hover:bg-white/5 text-white text-sm font-medium rounded-xl transition-colors flex items-center justify-center gap-2">
                 <CheckCircle2 className="w-4 h-4" /> Legitimate
               </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
