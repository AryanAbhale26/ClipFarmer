import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Video, Zap, Clock, ChevronRight, Plus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const firstName = user.firstName || "Creator";

  return (
    <div className="flex-1 p-8 bg-[#040409] min-h-screen text-foreground">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 mt-8 md:mt-0">
        <div className="flex flex-col gap-4">
          <div className="flex items-center text-sm text-muted-foreground font-medium">
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-[4px] bg-white/10 flex items-center justify-center">
                <span className="w-2 h-2 rounded-[2px] border border-white/40" />
              </span>
              Dashboard
            </span>
            <ChevronRight size={14} className="mx-2 opacity-50" />
            <span className="text-foreground">Overview</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back, {firstName}!</h1>
            <p className="text-muted-foreground text-sm font-medium italic">
              Manage your projects and create viral short clips from your long-form content.
            </p>
          </div>
        </div>

        <Button className="bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/20 font-medium rounded-lg px-6 h-11 w-full md:w-auto">
          <Plus size={18} className="mr-2" />
          New Clip
        </Button>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-10">
        <div className="rounded-2xl border border-white/5 bg-[#0a0a0f] p-6 shadow-sm">
          <div className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
              <Video className="h-6 w-6 text-blue-500" />
            </div>
            <div className="space-y-1 flex-1">
              <p className="text-sm font-medium text-muted-foreground">Total Clips</p>
              <p className="text-3xl font-bold text-white">0</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#0a0a0f] p-6 shadow-sm">
          <div className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
              <Zap className="h-6 w-6 text-orange-500" />
            </div>
            <div className="space-y-1 flex-1">
              <p className="text-sm font-medium text-muted-foreground">AI Generations</p>
              <p className="text-3xl font-bold text-white">0</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-white/5 bg-[#0a0a0f] p-6 shadow-sm">
          <div className="flex flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="space-y-1 flex-1">
              <p className="text-sm font-medium text-muted-foreground">Minutes Saved</p>
              <p className="text-3xl font-bold text-white">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="rounded-3xl border border-white/5 bg-[#0a0a0f] p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
          <Video className="h-8 w-8 text-muted-foreground opacity-50" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">No projects yet</h3>
        <p className="text-muted-foreground max-w-[450px] mx-auto text-sm leading-relaxed mb-8">
          Upload your first video and let our AI handle the rest. We'll find the most engaging moments and turn them into viral shorts.
        </p>
        <Button className="bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-600/20 font-medium rounded-lg px-8 h-12 text-base">
          Create Your First Clip
        </Button>
      </div>
    </div>
  );
}
