import { EmblaOptionsType } from 'embla-carousel'
import axios from "axios"
import { getOwlCarouselData } from "@/actions/action";
import { OwlCarousel } from "@/components/OwlCarousel/OwlCarousel";
import { CardListCarousel } from '@/components/cardListSwiper/CardListCarousel';

export default async function Home() {

  const SLIDES = await getOwlCarouselData();
  
  return (
    <div>
       <OwlCarousel contents={SLIDES}/>
       <CardListCarousel contents={SLIDES} title={"Шинэ гаралт"}/>
       <CardListCarousel contents={SLIDES} title={"Өндөр үнэлгээтэй"}/>
    </div>
  );
}
