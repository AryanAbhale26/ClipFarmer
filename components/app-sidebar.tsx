import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LayoutGrid, Video, CalendarClock, FileText, Settings, Scissors } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/5 bg-[#040409]">
      <SidebarHeader className="border-b border-white/5 p-4 py-6">
        <Link href="/" className="flex items-center gap-3 w-full">
          <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center">
            <Scissors size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight leading-tight">ClipFarmer</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Creator Studio</span>
          </div>
        </Link>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <div className="px-2 pb-2">
            <h4 className="text-xs font-medium text-muted-foreground">Main Menu</h4>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Home" render={<Link href="/dashboard" />} className="bg-white/5 text-foreground hover:bg-white/10 hover:text-foreground flex items-center gap-3">
                  <LayoutGrid size={18} className="text-violet-500" />
                  <span className="font-medium">Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="My Videos" render={<Link href="/dashboard/videos" />} className="text-muted-foreground hover:text-foreground hover:bg-white/5 flex items-center gap-3">
                  <Video size={18} />
                  <span className="font-medium">My Videos</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Schedule Post" render={<Link href="/dashboard/schedule" />} className="text-muted-foreground hover:text-foreground hover:bg-white/5 flex items-center gap-3">
                  <CalendarClock size={18} />
                  <span className="font-medium">Schedule Post</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Pricing" render={<Link href="/#pricing" />} className="text-muted-foreground hover:text-foreground hover:bg-white/5 flex items-center gap-3">
                  <FileText size={18} />
                  <span className="font-medium">Pricing</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-white/5 p-4">
        <div className="flex items-center gap-3 w-full px-2 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer border border-transparent hover:border-white/5">
          <UserButton appearance={{ elements: { userButtonAvatarBox: "w-9 h-9" } }} />
          <div className="flex flex-col flex-1 text-left overflow-hidden">
            <span className="text-sm font-medium text-foreground truncate">User Settings</span>
            <span className="text-xs text-muted-foreground truncate">Manage account</span>
          </div>
          <Settings size={16} className="text-muted-foreground ml-auto" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
