import { Outlet } from "react-router-dom";
import { Sidebar, Topbar } from "./Sidebar";

export function AppLayout() {
  return (
    <div className="flex h-screen bg-sport-bg overflow-hidden text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mx-auto max-w-7xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
