"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Heart, Info, Play, Plus, CircleFadingPlus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export const SeriesListCard = ({ content }: { content: any }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isAddWatchList, setIsAddWatchList] = useState(false)
    const router = useRouter();
    
    const addWatchList = () => {
        // TODO: Add Wathc List
        setIsAddWatchList(true);
        console.log("addWatchList")
    }

    const showMovieModal = () => {
        // TODO: showMovieModal
        router.push(`/series/${content.mal_id}`)
        console.log("showMovieModal")
    }

    const addFavoriteList = () => {
        // TODO: addFavoriteList
        setIsFavorite(!isFavorite);
        console.log("addFavoriteList")
    }

    const removeWatchList = () => {
        // TODO: removeWatchList
        setIsAddWatchList(false);
        console.log("removeWatchList")
    }

  return (
    <div className="relative h-full">
        <div className="absolute w-full flex justify-end  mt-3 pr-3 gap-3">
            {isAddWatchList ? <Minus color="#e5e7eb" width={20} height={20} className={cn("cursor-pointer bg-primary rounded-full self-center")} onClick={() => removeWatchList()}/> : <CircleFadingPlus className={cn("cursor-pointer")} color="#22c55e" onClick={() => addWatchList()}/>}
            <Heart className={cn("cursor-pointer", {"fill-primary": isFavorite})} color="#dc2626" onClick={() => addFavoriteList()}/>
        </div>
        <Card className="flex flex-col justify-between h-full">
        <CardHeader>
            <CardTitle className="line-clamp-1 text-xl mt-3">{content.title}</CardTitle>
            <CardDescription className="line-clamp-2">{content.synopsis}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex max-h-[450px]">
            <img src={content.images.webp.large_image_url} alt="..." className="object-cover flex-1 rounded-xl"/>
        </CardContent>
        <CardFooter className="flex justify-between flex-col gap-2 md:flex-row">
                <Button className="flex gap-1 w-full sm:min-w-fit dark:border-foreground dark:text-foreground"  variant="outline" onClick={() => showMovieModal()}><Info /> Дэлгэрэнгүй</Button>
                <Button className="flex gap-1 w-full sm:min-w-fit" onClick={() => showMovieModal()}><Play /> Үзэх</Button>
        </CardFooter>
        </Card>
    </div>
  );
};
