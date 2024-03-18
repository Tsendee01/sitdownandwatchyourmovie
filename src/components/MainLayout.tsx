import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { ScrollArea } from "./ui/scroll-area";
import { MobileTabBar } from "./MobileTabBar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <ScrollArea className="flex-1 bg-white dark:bg-dark-backround mb-16 md:mb-0">
          {children}
        </ScrollArea>
      </div>
      <MobileTabBar />
    </div>
  );
};
