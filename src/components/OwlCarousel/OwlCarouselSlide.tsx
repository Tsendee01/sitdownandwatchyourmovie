"use client"

import { Play, Plus } from "lucide-react"
import { Button } from "../ui/button"

export const OwlCarouselSlide = ({content}: {content: any}) => {
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
        <img src={content.images.webp.large_image_url} alt="..." className="flex flex-1 object-cover opacity-90"/>
        <div className="absolute h-full w-full cursor-default bg-gradient-to-t from-[#FFFFFF] dark:from-dark-backround to-30% rounded-2xl">
            <div className="dark:bg-gradient-to-tr dark:from-dark-backround h-full w-full flex flex-col justify-end">
                <div className="w-2/3 xl:w-2/5 p-8 sm:pb-16">
                    <div className="text-3xl text-muted dark:text-foreground xl:text-5xl">{content.title}</div>
                    <div className="line-clamp-4 text-sm my-8 text-muted dark:text-foreground">{content.synopsis}</div>
                </div>
            </div>
            {/* <div className="flex gap-4">
                <Button className="w-2/4 flex gap-4" onClick={() => showMovieModal()}><Play /> Үзэх</Button>
                <Button className="w-2/4 flex gap-4 border border-background dark:border-foreground dark:text-foreground hover:opacity-50 text-background" onClick={() => addWatchList()} variant="ghost"><Plus /> Дараа үзэх</Button>
            </div> */}
        </div>
    </div>
}