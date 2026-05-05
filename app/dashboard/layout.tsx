import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 overflow-y-auto relative">
          <SidebarTrigger className="absolute top-4 left-4 z-50 md:hidden" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
