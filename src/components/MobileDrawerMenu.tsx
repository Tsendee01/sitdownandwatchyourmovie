import { Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { LogoIcon } from "./icons";

export const MoblieDrawerMenu = () => {

  return (
    <div>
      <Drawer direction="left">
        <DrawerTrigger asChild>
            <div className="cursor-pointer">
                <LogoIcon />
            </div>
        </DrawerTrigger>
        <DrawerContent className="w-[300px] h-full rounded-none">
          {/* <div className="mx-auto h-full w-full"> */}
            <DrawerHeader>
              <DrawerTitle>Гарчиг</DrawerTitle>
              <DrawerDescription>
                Тайлбар хэсэг
              </DrawerDescription>
            </DrawerHeader>
             Энд үндсэн хэсэг байрлана
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Арилгах товч</Button>
              </DrawerClose>
            </DrawerFooter>
          {/* </div> */}
        </DrawerContent>
      </Drawer>
    </div>
  );
};
