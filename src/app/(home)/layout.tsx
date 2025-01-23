
import { AppSidebar } from "@/components/Sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SignedIn, UserButton } from "@clerk/nextjs";
import StreamVideoProvider from "../../../providers/StreamClientProvider";
import { LampDesk } from "lucide-react";
import { ReactNode } from "react";



const HomeLayout = ({ children } : {children: ReactNode}) => {
  return (
    <StreamVideoProvider>
    <SidebarProvider>
      <AppSidebar />
     
      <main className="flex flex-col min-h-screen w-full" >
      <div className="flex justify-between items-center h-10 bg-[#001011] border border-white  text-white px-4 rounded-md m-2 mx-4">
      <SidebarTrigger />
          <div className="text-xl font-mono flex items-center gap-3 "> 
            <span>
            <LampDesk width="24" height="24" />
            </span>
            Meetings made easy!</div>
          <div className="space-x-4 mt-2">
          <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
        
        {children}
      </main>
    </SidebarProvider>
    </StreamVideoProvider>
  );
}


export default HomeLayout;