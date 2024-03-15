"use client"

import { Play, Plus } from "lucide-react"
import { Button } from "../ui/button"

export const OwlCarouselSlide = ({content}: any) => {
    const addWatchList = () => {
        // TODO: Add Wathc List
        console.log("addWatchList")
    }

    const showMovieModal = () => {
        // TODO: showMovieModal
        console.log("showMovieModal")
    }
    console.log("content======>", content);
    return <div className="w-full h-full flex">
        <img src={content.images.webp.large_image_url} alt="..." className="flex flex-1 rounded-xl object-cover opacity-90"/>
        <div className="absolute h-full lg:w-[500px] flex flex-col justify-end p-12 cursor-default">
            <div className="text-5xl text-muted dark:text-foreground">{content.title}</div>
            <div className="line-clamp-6 text-sm my-8 text-muted dark:text-foreground">{content.synopsis}</div>
            <div className="flex gap-4">
                <Button className="w-2/4 flex gap-4" onClick={() => showMovieModal()}><Play /> Үзэх</Button>
                <Button className="w-2/4 flex gap-4 border border-background dark:border-foreground dark:text-foreground hover:opacity-50 text-background" onClick={() => addWatchList()} variant="ghost"><Plus /> Дараа үзэх</Button>
            </div>
        </div>
    </div>
}