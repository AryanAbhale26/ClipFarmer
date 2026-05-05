import { UserButton, auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="flex-1 p-8 pt-16 mt-16 md:mt-0">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-white/10 bg-background/50 p-6 glass-card">
            <h3 className="font-semibold text-muted-foreground mb-2">Total Videos</h3>
            <p className="text-3xl font-black gradient-text">0</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-background/50 p-6 glass-card">
            <h3 className="font-semibold text-muted-foreground mb-2">Available Credits</h3>
            <p className="text-3xl font-black gradient-text">10</p>
          </div>
        </div>
      </div>
    </div>
  );
}
