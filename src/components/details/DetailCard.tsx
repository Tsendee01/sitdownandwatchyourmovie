"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Play } from "lucide-react";

export const DetailCard = ({ content, eps }: { content: any; eps: any }) => {
  return (
    <Card className="m-4 md:m-16 md:-mt-96 -mt-48 z-50 relative">
      {/* <CardHeader> */}
      <Tabs defaultValue="account" className="w-full relative">
        <CardHeader>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Мэдээлэл</TabsTrigger>
            <TabsTrigger value="password">Ангиуд</TabsTrigger>
          </TabsList>
        </CardHeader>
        <TabsContent value="account">
          {/* </CardHeader> */}
          <CardContent className="flex flex-col md:flex-row gap-4 items-start w-full px-8">
            <div className="flex-1 flex max-w-full md:max-w-[400px]">
              <img
                src={content.images.webp.large_image_url}
                alt="..."
                className="flex-1 object-cover opacity-90 rounded-md"
              />
            </div>
            <div className="flex-1 w-full h-full flex flex-col gap-2 md:gap-4 px-4">
              <div className="font-bold text-xl md:text-3xl">
                {content.title}
              </div>
              <div className="text-pretty text-sm md:text-base">
                {content.synopsis}
              </div>
            </div>
          </CardContent>
        </TabsContent>
        <TabsContent value="password">
          {/* </CardHeader> */}
          <CardContent className="flex flex-col xl:flex-row gap-4 w-full">
            <div className="flex-1 aspect-video">
              <iframe
                className="w-full aspect-video max-h-[calc(100vh-100px)] rounded"
                src={content.trailer.embed_url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              ></iframe>
            </div>
            <ScrollArea className="w-full md:flex-1 rounded bg-dark-backround p-1 aspect-video">
              {eps.map((episode: any, index: number) => {
                return (
                  <Card className="h-8 md:h-12 m-1 flex justify-start items-center pl-4 hover:opacity-50 cursor-pointer text-sm rounded" key={index}>
                    <CardContent className="p-0">
                      <div className="flex gap-2 justify-start items-center">
                      <Play className="w-4 h-4"/> <div className="line-clamp-1">{episode.mal_id}-р анги : {episode.title}</div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </ScrollArea>
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  );
};
