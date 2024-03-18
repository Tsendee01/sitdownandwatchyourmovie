"use client";

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import { LogoIcon, LogoutIcon } from "./icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  useFunctionContext,
  useIsExpandSidebarContext,
} from "@/context/UserContext";
import { Film, Heart, Home, Save } from "lucide-react";

const menuItems = [
  { id: 1, label: "Нүүр", icon: Home, link: "/" },
  { id: 2, label: "Series", icon: Film, link: "/series-list" },
  { id: 3, label: "Like", icon: Heart, link: "/like" },
  { id: 4, label: "Watch Later", icon: Save, link: "/watch" },
];

export const Sidebar = () => {
  const isExpandSidebar = useIsExpandSidebarContext();

  const router = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router),
    [router]
  );

  return (
    <div className="hidden md:block">
      <div
        className={cn(
          "h-screen px-2 pt-8 pb-4 flex justify-between flex-col border-r-[1px] shadow-xl z-50",
          {
            ["w-[200px]"]: !isExpandSidebar,
            ["w-[70px]"]: isExpandSidebar,
          }
        )}
        style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between relative">
            <div className="flex items-center pl-1 gap-4">
              <LogoIcon />
              <span
                className={cn("mt-2 text-lg font-medium text-text", {
                  hidden: isExpandSidebar,
                })}
              >
                Logo
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start mt-24">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              return (
                <div
                  key={menu.id}
                  className={cn(
                    "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
                    {
                      ["bg-red-500"]: activeMenu?.id === menu.id,
                    },
                    {
                      "justify-center": isExpandSidebar,
                    }
                  )}
                >
                  <Link href={menu.link}>
                    <div className="flex py-4 px-3 items-center w-full h-full">
                      <div style={{}}>
                        <Icon />
                      </div>
                      {!isExpandSidebar && (
                        <span
                          className={cn(
                            "text-md font-medium text-text-light pl-2"
                          )}
                        >
                          {menu.label}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
