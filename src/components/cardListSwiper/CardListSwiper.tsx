"use client";
import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle"
import { CardListSlide } from "./CardListSlide";

export const CardListSwiper = ({slides, title=""}: {slides: any, title?: string | undefined}) => {
  return (
    <div className="my-8 h-[250px] w-full flex flex-col">
        <div className="p-4 text-2xl font-bold text-gray-600">
            {title}
        </div>
        <Swiper
          navigation
          // pagination={{ type: "bullets", clickable: true }}
          slidesPerView={"auto"}
        //   spaceBetween={30}
          // autoplay={true}
          // loop={true}
          modules={[Navigation]}
          className="flex-1"
        >
            {
                slides.map((slide: any, index:number)=> (
                    <SwiperSlide key={index} className={`${index === 0 && "ml-2"} px-1 hover:opacity-80 cursor-pointer group/card_slide_hover`}>
                        <CardListSlide content={slide} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  );
};
