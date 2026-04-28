import { useState } from 'react';
import { UploadCloud, File, Shield, CheckCircle2 } from 'lucide-react';
import { MOCK_ASSETS } from '../lib/mockData';

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold font-display tracking-wide mb-1">UPLOAD & FINGERPRINT</h1>
        <p className="text-neutral-400 text-sm">Upload official media. Our engine will generate an immutable AI fingerprint for tracking.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Upload Zone */}
        <div className="lg:col-span-2">
          <div 
            className={`border-2 border-dashed rounded-3xl p-12 flex flex-col items-center justify-center text-center transition-all bg-sport-card/50 min-h-[400px]
              ${isUploading ? 'border-sport-accent-blue bg-sport-accent-blue/5' : 'border-sport-border hover:border-sport-accent-blue hover:bg-sport-card'}`}
          >
            {isUploading ? (
              <div className="flex flex-col items-center">
                <Shield className="w-16 h-16 text-sport-accent-blue animate-bounce mb-6" />
                <h3 className="text-xl font-bold mb-2">Fingerprinting Asset...</h3>
                <p className="text-neutral-400 text-sm mb-6">Analyzing frame-by-frame data</p>
                <div className="w-64 h-1.5 bg-sport-border rounded-full overflow-hidden">
                  <div className="h-full bg-sport-accent-blue w-1/2 animate-pulse rounded-full"></div>
                </div>
              </div>
            ) : showSuccess ? (
              <div className="flex flex-col items-center text-green-500">
                <CheckCircle2 className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold">Successfully Protected</h3>
                <p className="text-neutral-400 text-sm mt-2">Asset is now being monitored globally.</p>
              </div>
            ) : (
              <>
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                  <UploadCloud className="w-10 h-10 text-neutral-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Drag & Drop Media Files</h3>
                <p className="text-neutral-500 text-sm mb-8 max-w-sm">Support for MP4, MOV, TS, JPG, PNG up to 10GB per file.</p>
                <button 
                  onClick={handleUpload}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors"
                >
                  Select Files
                </button>
              </>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div className="glass-panel p-6 rounded-3xl h-fit">
          <h3 className="text-sm font-semibold text-neutral-400 mb-6 uppercase tracking-wider">How it works</h3>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-sport-accent-blue/20 text-sport-accent-blue flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Upload Source</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">Provide the highest quality source file. Shorter clips are processed faster.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-sport-accent-purple/20 text-sport-accent-purple flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-sm mb-1">AI Fingerprint</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">We generate a perceptual hash immune to cropping, color shifting, or watermarks.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-sm mb-1">Live Monitoring</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">The asset is immediately added to our global scanning queue.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Uploaded Assets Table */}
      <div className="glass-panel rounded-3xl overflow-hidden mt-8">
        <div className="p-6 border-b border-sport-border">
          <h3 className="text-lg font-semibold">Protected Assets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-sport-card/50 text-xs text-neutral-400 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Asset</th>
                <th className="px-6 py-4 font-medium">Upload Date</th>
                <th className="px-6 py-4 font-medium">Hash ID</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sport-border text-neutral-300">
              {MOCK_ASSETS.map((asset) => (
                <tr key={asset.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-sport-border flex-shrink-0">
                        <img src={asset.thumbnail} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium text-white max-w-[200px] truncate">{asset.fileName}</div>
                        <div className="text-xs text-neutral-500">{asset.type} • {asset.owner}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{asset.uploadDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap font-mono text-xs text-sport-accent-blue">{asset.hash}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {asset.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
