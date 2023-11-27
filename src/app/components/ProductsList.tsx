"use client";
import Product from "./Product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
export default function ProductsList({ data }: any) {
  return (
    <div className="mt-32">
      <p className="font-bold text-sm text-blue-700 text-center mb-3">
        PRODUCTS
      </p>
      <h2 className="font-extrabold text-3xl font-sans text-center mb-10">
        Check What We Have
      </h2>
      <Swiper
        slidesPerView={3}
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        {data.map((item: any) => (
          <SwiperSlide>
            <Product title={item.title} price={item.price} image={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
