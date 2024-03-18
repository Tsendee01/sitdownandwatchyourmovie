"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsExpandSidebarContext } from "@/context/UserContext";
import { cn } from "@/lib/utils";
import { CardListSlide } from "./CardListSlide";

export const CardListCarousel = ({ contents, title }: { contents: any, title: string }) => {
  const isExpandSidebar = useIsExpandSidebarContext();
  return (
    <div className="mt-4">
        <div className="font-bold text-muted-foreground pl-4 text-2xl">
            {title}
        </div>
      <Carousel
        opts={{
          align: "center",
        }}
        className={cn("max-w-[calc(100vw)]", {
          "md:max-w-[calc(100vw-70px)]": isExpandSidebar,
          "md:max-w-[calc(100vw-200px)]": !isExpandSidebar,
        })}
      >
        <CarouselContent className="p-4">
          {contents?.map((content: any, index: number) => (
            <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
              <div className="">
                <Card className={`rounded-2xl`}>
                  <CardContent
                    className={`flex aspect-[1/1.5] items-center justify-center p-0`}
                  >
                    <CardListSlide content={content}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5 h-8 w-8 md:w-12 md:h-12 opacity-30 hover:opacity-50"/>
        <CarouselNext className="right-5 h-8 w-8 md:w-12 md:h-12 opacity-30 hover:opacity-50"/>
      </Carousel>
    </div>
  );
};
