"use client";
import { cn } from "@/lib/utils";
import { Film, Heart, Home, Save } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const menuItems = [
  { id: 1, label: "Нүүр", icon: Home, link: "/" },
  { id: 2, label: "Series", icon: Film, link: "/series-list" },
  { id: 3, label: "Like", icon: Heart, link: "/like" },
  { id: 4, label: "Watch Later", icon: Save, link: "/watch" },
];

export const MobileTabBar = () => {
  const router = usePathname();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router),
    [router]
  );

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-background">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {menuItems.map(({ icon: Icon, ...menu }) => {
          return (
            <Link
              href={menu.link}
              key={menu.id}
              className={cn(
                "inline-flex flex-col items-center justify-center px-5",
                {
                  ["border-t-4 border-primary"]: activeMenu?.id === menu.id,
                }
              )}
            >
              <div
                className="flex flex-col justify-center items-center"
                aria-hidden="true"
              >
                <Icon
                  color={activeMenu?.id === menu.id ? "#dc2626" : undefined}
                />
                <span
                  className={cn("text-sm", {
                    ["text-primary"]: activeMenu?.id === menu.id,
                  })}
                >
                  {menu.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
