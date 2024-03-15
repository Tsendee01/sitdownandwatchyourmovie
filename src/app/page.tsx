import OwlCarousel from "@/components/OwlCarousel/OwlCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import axios from "axios"
import { getOwlCarouselData } from "@/actions/action";
import { CardListSwiper } from "@/components/cardListSwiper/CardListSwiper";

const OPTIONS: EmblaOptionsType = { loop: true }

export default async function Home() {

  const SLIDES = await getOwlCarouselData();
  
  return (
    <div>
       <OwlCarousel slides={SLIDES} options={OPTIONS}/>
       <CardListSwiper slides={SLIDES} title="Өмнө үзсэн"/>
       <CardListSwiper slides={SLIDES} title="Шинээр нэмэгдсэн"/>
    </div>
  );
}
