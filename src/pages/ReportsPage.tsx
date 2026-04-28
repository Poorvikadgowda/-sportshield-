import { FileText, Download, Calendar, Filter } from 'lucide-react';

export default function ReportsPage() {
  const reports = [
    { title: "Weekly Piracy Overview", date: "April 21 - April 28, 2026", type: "PDF", size: "2.4 MB" },
    { title: "Asset Usage & Detections", date: "April 2026", type: "CSV", size: "18.1 MB" },
    { title: "Evidence Log (DMCA Prep)", date: "Current Week", type: "PDF", size: "5.7 MB" },
    { title: "Platform Distribution Analysis", date: "Q1 2026", type: "PDF", size: "4.2 MB" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold font-display tracking-wide mb-1">REPORTS & EXPORTS</h1>
          <p className="text-neutral-400 text-sm">Download aggregated data and legal evidence logs.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-sport-border bg-sport-card rounded-xl text-sm font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Date Range
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-xl text-sm font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-2">
            Generate Custom Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reports.map((report, idx) => (
          <div key={idx} className="glass-panel p-6 rounded-3xl flex flex-col group hover:border-sport-accent-blue/30 transition-colors">
            <div className="w-12 h-12 bg-sport-card border border-sport-border rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-sport-accent-blue" />
            </div>
            
            <h3 className="text-lg font-bold mb-1">{report.title}</h3>
            <p className="text-sm text-neutral-400 mb-6">{report.date}</p>
            
            <div className="mt-auto pt-6 border-t border-sport-border flex items-center justify-between">
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/5 text-xs font-mono rounded text-neutral-300">{report.type}</span>
                <span className="px-2 py-1 bg-white/5 text-xs font-mono rounded text-neutral-400">{report.size}</span>
              </div>
              <button className="p-2 bg-sport-card border border-sport-border rounded-full hover:bg-sport-accent-blue hover:text-black transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
