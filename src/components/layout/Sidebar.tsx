import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { 
  ShieldCheck, 
  Upload, 
  LayoutDashboard, 
  AlertTriangle, 
  Map as MapIcon, 
  FileBarChart,
  LogOut,
  Bell,
  Search,
  UserCircle
} from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const location = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/app/dashboard", icon: LayoutDashboard },
    { name: "Upload Media", path: "/app/upload", icon: Upload },
    { name: "Live Incidents", path: "/app/incidents", icon: AlertTriangle },
    { name: "Global Map", path: "/app/map", icon: MapIcon },
    { name: "Reports", path: "/app/reports", icon: FileBarChart },
  ];

  return (
    <aside className="w-64 border-r border-sport-border bg-sport-bg/95 flex flex-col h-full">
      <div className="p-6 flex items-center gap-3">
        <ShieldCheck className="w-8 h-8 text-sport-accent-blue" />
        <span className="font-display font-bold text-lg tracking-wider">SportShield</span>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-6">
        {navItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group text-sm font-medium",
                isActive 
                  ? "bg-sport-card border border-sport-border text-white shadow-[0_0_15px_rgba(0,240,255,0.1)]" 
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-sport-accent-blue" : "group-hover:text-sport-accent-blue transition-colors")} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sport-border">
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer text-sm font-medium">
          <LogOut className="w-5 h-5" />
          Sign Out
        </div>
      </div>
    </aside>
  );
}

export function Topbar() {
  return (
    <header className="h-20 border-b border-sport-border bg-sport-bg/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="relative w-96">
        <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
        <input 
          type="text" 
          placeholder="Search hashes, URLs, or matches..." 
          className="w-full bg-sport-card border border-sport-border rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-sport-accent-blue/50 transition-colors placeholder:text-neutral-600"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative text-neutral-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-sport-bg"></span>
        </button>
        <div className="flex items-center gap-3 pl-6 border-l border-sport-border">
          <div className="text-right hidden md:block">
            <div className="text-sm font-medium text-white">Admin User</div>
            <div className="text-xs text-sport-accent-blue font-mono mt-0.5">Premier League Org</div>
          </div>
          <UserCircle className="w-8 h-8 text-neutral-400" />
        </div>
      </div>
    </header>
  );
}
