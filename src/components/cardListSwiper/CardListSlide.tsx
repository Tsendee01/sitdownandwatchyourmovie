export const CardListSlide = ({content}: {content: any}) => {
    return (
        <div className="w-full h-full flex justify-center">
            <img src={content.images.webp.large_image_url} alt="..." className="flex flex-1 object-cover rounded-2xl"/>
            <div className="absolute self-center invisible group-hover/card_slide_hover:visible font-bold bg-primary px-2 rounded-md">{content.title}</div>
        </div>
    )
}