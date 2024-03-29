"use client"
import { useRouter } from 'next/navigation'

export const CardListSlide = ({ content }: { content: any }) => {
  const router = useRouter()

  const onClickCard = () => {
    router.push(`/series/${content.mal_id}`)
  }

  return (
    <div
      className="w-full h-full flex justify-center hover:opacity-80 cursor-pointer group/card_slide_hover"
      onClick={() => onClickCard()}
    >
      <img
        src={content.images.webp.large_image_url}
        alt="..."
        className="flex flex-1 object-cover rounded-xl"
      />
      <div className="absolute self-center invisible group-hover/card_slide_hover:visible font-bold bg-primary px-2 rounded-md text-sm mx-2 text-center">
        {content.title}
      </div>
    </div>
  );
};
