"use client";

import {
  Calendar,
  FileVideo2,
  Home,
  Inbox,
  LampDesk,
  MonitorPlay,
  Presentation,
  Search,
  Settings,
  Video,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Upcoming",
    url: "/upcoming",
    icon: Presentation,
  },
  {
    title: "Previous",
    url: "/previous",
    icon: FileVideo2,
  },
  {
    title: "Recordings",
    url: "/recordings",
    icon: MonitorPlay,
  },
  {
    title: "Personal Room",
    url: "/personal-room",
    icon: Video,
  },
];

//bg-[#1c1a1a]

export function AppSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (

    <>


    <Sidebar className=" transition-all duration-300 z-50">
      <SidebarContent className="bg-[#001011] text-white px-3  ">
        <SidebarGroup>
          <SidebarGroupLabel className=" text-white my-8 text-xl">
            <span className="mb-4">
              {" "}
              <LampDesk width="64" height="64" />
            </span>

            <h1 className="text-2xl px-2">Easy Meet</h1>
          </SidebarGroupLabel>
          <SidebarGroupLabel className=" text-white text-xl">
            <div className="-mt-8 w-full h-1 bg-white">
            </div>

          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4 p-3  ">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn({
                    "bg-blue-600 rounded-md  text-white": pathname === item.url,
                  },  )}
                >
                  <SidebarMenuButton
                    asChild
                    className=" hover:bg-blue-600  text-lg hover:text-white"
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </>
  );
}
