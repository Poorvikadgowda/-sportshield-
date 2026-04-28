import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShieldAlert, BadgeCheck, Zap } from 'lucide-react';
import { MOCK_INCIDENTS } from '../lib/mockData';

export default function CompareViewerPage() {
  const { id } = useParams();
  const incident = MOCK_INCIDENTS.find(inc => inc.id === id) || MOCK_INCIDENTS[0];

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link to="/app/incidents" className="p-2 bg-sport-card border border-sport-border rounded-full hover:text-sport-accent-blue transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold font-display tracking-wide">{incident.id} Analysis</h1>
            <p className="text-neutral-400 text-sm">Forensic frame matching</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-sport-border bg-sport-card rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">
            Ignore (False Positive)
          </button>
          <button className="px-4 py-2 bg-red-600 rounded-xl text-sm font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
            <ShieldAlert className="w-4 h-4" /> Issue DMCA Takedown
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 flex-1 min-h-0">
        
        {/* Source Media */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3 px-1">
            <BadgeCheck className="w-5 h-5 text-green-500" />
            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-300">Official Source Media</h3>
          </div>
          <div className="flex-1 glass-panel rounded-3xl p-1 relative overflow-hidden flex items-center justify-center min-h-[300px]">
             {/* Simulated video player wrapper */}
             <div className="absolute inset-0 bg-black/60 rounded-3xl overflow-hidden m-1">
               <img src={incident.thumbnail} alt="" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
               <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono">
                 {incident.originalAsset}
               </div>
               
               {/* Overlay elements to look like analysis tool */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-green-500/50 rounded-lg">
                 <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-green-500"></div>
                 <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-green-500"></div>
                 <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-green-500"></div>
                 <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-green-500"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Suspected Media */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-3 px-1">
            <Zap className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold text-sm uppercase tracking-wider text-neutral-300">Detected Incident</h3>
          </div>
          <div className="flex-1 glass-panel rounded-3xl p-1 relative overflow-hidden flex items-center justify-center min-h-[300px] border-red-500/30">
            {/* Simulated video player wrapper */}
            <div className="absolute inset-0 bg-black/60 rounded-3xl overflow-hidden m-1">
               <img src={incident.thumbnail} alt="" className="w-full h-full object-cover transform scale-110 object-right-bottom" />
               <div className="absolute top-4 left-4 bg-red-900/80 backdrop-blur px-3 py-1.5 rounded-lg border border-red-500/50 text-xs font-mono flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                 URL: {incident.url}
               </div>

               {/* Overlay elements to look like analysis tool */}
               <div className="absolute top-[40%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-72 h-64 border-2 border-red-500/80 bg-red-500/10 rounded-lg">
                 <div className="absolute top-2 left-2 bg-red-500 text-black text-[10px] font-bold px-1 py-0.5 rounded">MATCH: {incident.matchConfidence}%</div>
               </div>
             </div>
          </div>
        </div>

      </div>

      {/* Timeline Analysis Tool */}
      <div className="h-32 mt-6 glass-panel rounded-2xl p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center text-xs text-neutral-400 font-mono">
          <span>00:00:00</span>
          <span>Analysis Timeline</span>
          <span>00:04:20</span>
        </div>
        <div className="relative h-12 w-full bg-sport-card/80 rounded-lg border border-white/5 overflow-hidden">
          <div className="absolute top-0 bottom-0 left-[20%] right-[30%] bg-red-500/20 border-l border-r border-red-500"></div>
          <div className="absolute top-0 bottom-0 left-[45%] right-[40%] bg-red-500/20 border-l border-r border-red-500"></div>
          
          {/* Playhead */}
          <div className="absolute top-0 bottom-0 left-[25%] w-0.5 bg-sport-accent-blue z-10 shadow-[0_0_10px_#00F0FF]">
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-sport-accent-blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
