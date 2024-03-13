"use client";
import {
  useFunctionContext,
  useIsExpandSidebarContext,
} from "@/context/UserContext";
import { CollapsIcon } from "./icons";
import { cn } from "@/lib/utils";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const Header = () => {
  const functionContext = useFunctionContext();
  const isExpandSidebar = useIsExpandSidebarContext();
  const { setTheme } = useTheme();

  const handleSidebarToggle = () => {
    functionContext.setIsExpandSidebar();
  };

  return (
    <div className="flex items-center h-[60px] border-b-[1px] shadow-md justify-between w-full z-10 dark:bg-dark-high">
      {/* Toggle buuton */}
      <button
        className={cn("h-full w-[60px] flex justify-center items-center", {
          "rotate-180": isExpandSidebar,
        })}
        onClick={handleSidebarToggle}
      >
        <ArrowLeft />
      </button>
      {/* Toggle button end */}
      <div className="mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

