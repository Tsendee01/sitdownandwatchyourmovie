"use client"

import { Play } from "lucide-react"
import { Button } from "../ui/button"

export const OwlCarouselSlide = ({content}: any) => {
    return <div className="w-full h-full flex">
        <img src={content.images.webp.large_image_url} alt="..." className="flex flex-1 rounded-[1.8rem] object-cover"/>
        <div className="absolute h-full w-[.] flex flex-col justify-end p-8">
            <div className="text-gray-300">{content.title}</div>

            <Button className="w-[250px] flex gap-4"><Play /> Үзэх</Button>
        </div>
    </div>
}