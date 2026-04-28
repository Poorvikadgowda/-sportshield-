import { Link } from "react-router-dom";
import { ShieldCheck, PlayCircle, Fingerprint, Globe, BellRing } from "lucide-react";
import { cn } from "../lib/utils";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-sport-bg text-white selection:bg-sport-accent-blue/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6 absolute w-full z-10">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-sport-accent-blue" />
          <span className="font-display font-bold text-xl tracking-wider">SportShield <span className="text-sport-accent-blue">AI</span></span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors hidden md:block">Features</a>
          <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors hidden md:block">Technology</a>
          <a href="#" className="text-sm text-neutral-300 hover:text-white transition-colors hidden md:block">Pricing</a>
          <Link to="/app" className="text-sm font-semibold bg-white text-black px-6 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-8 md:px-16 flex flex-col items-center justify-center text-center">
        {/* Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sport-accent-blue/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-sport-accent-purple/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sport-accent-purple/30 bg-sport-accent-purple/10 text-sport-accent-purple text-xs font-mono font-medium tracking-wide mb-8">
          <span className="w-2 h-2 rounded-full bg-sport-accent-purple animate-pulse"></span>
          NEW: AI FINGERPRINT ENGINE V2.0
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight max-w-5xl leading-[1.1] mb-6">
          TRACK. VERIFY. <br />
          <span className="text-gradient">PROTECT EVERY PLAY.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 font-light">
          The ultimate AI-driven security platform for sports organizations. Stop piracy, track unauthorized redistributions, and protect your official media assets in real-time.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link to="/app" className="w-full sm:w-auto px-8 py-4 bg-sport-accent-blue text-black font-semibold rounded-full hover:bg-sport-accent-blue/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all flex items-center justify-center gap-2">
            Access Demo Hub <PlayCircle className="w-5 h-5" />
          </Link>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-sport-card border border-sport-border text-white font-semibold rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            Explore Features
          </a>
        </div>
      </main>

      {/* Feature Highlights Grid */}
      <section id="features" className="py-24 px-8 md:px-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <FeatureCard 
          icon={Fingerprint} 
          title="Digital Fingerprinting" 
          desc="AI hashes every frame of your video assets, making it impossible for pirates to bypass detection through cropping or filters."
        />
        <FeatureCard 
          icon={Globe} 
          title="Global Live Scanning" 
          desc="Our crawlers monitor YouTube, X, Instagram, TikTok, and thousands of illegal streaming domains 24/7."
        />
        <FeatureCard 
          icon={BellRing} 
          title="Automated Takedowns" 
          desc="Instantly issue DMCA notices or take action directly from your dashboard when high-match confidence incidents occur."
        />
      </section>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="glass-panel p-8 rounded-3xl group hover:border-sport-accent-blue/30 transition-colors">
      <div className="w-14 h-14 rounded-2xl bg-sport-card border border-sport-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white group-hover:text-sport-accent-blue transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-neutral-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
