"use client";

import type { Listing } from "@/types";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNav from "./ui/swiper-nav";

const Listing = ({ title, images, category }: Listing) => {
  return (
    <div className="relative">
      <Swiper
        className="h-full relative group"
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
      >
        {images.map(({ id, url }) => (
          <SwiperSlide key={id}>
            <div className="relative rounded-xl h-full overflow-hidden clamp-[max-h,60,17.85rem] cursor-pointer">
              <div className="absolute pointer-events-none inset-0 bg-[linear-gradient(183deg,rgba(0,0,0,0.05)_41.18%,rgba(0,0,0,0.60)_100.3%)] z-1" />
              <Image
                src={url}
                alt={title}
                className="size-full object-cover relative z-2 hover:scale-105 transition-transform duration-300"
                placeholder="blur"
              />

              <div className="flex flex-col z-3 text-white absolute bottom-5 start-4 px-3 py-2 rounded-md">
                <h3 className="text-sm uppercase">{category}</h3>
                <p className="clamp-[text,base,lg] font-semibold">{title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <SwiperNav />
      </Swiper>
    </div>
  );
};
export default Listing;
