import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import TechSkill from "./TechSkill";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SkillsArray {
  skillset: {
    image: string;
    skill: string;
  }[];
}

const SkillsMapper = ({ skillset }: SkillsArray) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      breakpoints={{
        200: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      loop
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="swiper select-none  mt-4 max-w-full transition-all duration-300  overflow-auto rounded-2xl shadow-2xl shadow-primary/30 p-4"
    >
      {skillset.map((skill, index) => {
        return (
          <SwiperSlide key={index} className="cursor-pointer">
            <TechSkill image={skill.image} skill={skill.skill} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SkillsMapper;
