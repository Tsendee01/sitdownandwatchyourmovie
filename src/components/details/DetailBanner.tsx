import { Card, CardContent } from "@/components/ui/card";
export const DetailBanner = ({ content }: { content: any }) => {
  return (
    <div className="relative">
      <div className="flex aspect-square items-center justify-center max-h-[600px] w-full p-0">
        <div className="w-full h-full flex max-h-[600px]">
          <img
            src={content.images.webp.large_image_url}
            alt="..."
            className="flex flex-1 object-cover opacity-90"
          />
          <div className="absolute h-full w-full cursor-default bg-gradient-to-t from-[#FFFFFF] dark:from-dark-backround to-30% z-10">
            <div className="dark:bg-gradient-to-tr dark:from-dark-backround h-full w-full flex flex-col justify-end">
            </div>
          </div>
        </div>
       </div>
    </div>
  );
};
