"use client"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsExpandSidebarContext } from "@/context/UserContext";
import { OwlCarouselSlide } from "./OwlCarouselSlide";

export const OwlCarousel = ({contents} : {contents: any}) => {
    const isExpandSidebar = useIsExpandSidebarContext();
  return (
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        // className="p-4"
      >
        <CarouselContent>
          {contents?.map((content: any, index: number) => (
            <CarouselItem key={index}>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center max-h-[600px] w-full p-0">
                    {/* <span className="text-3xl font-semibold">{content.title}</span> */}
                    <OwlCarouselSlide content={content}/>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
  );
};
