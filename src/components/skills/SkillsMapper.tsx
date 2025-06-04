import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import TechSkill from "./TechSkill";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SkillsArray {
  skillset: {
    image: string;
    skill: string;
  }[];
  id: string;
}

const SkillsMapper = ({ skillset, id }: SkillsArray) => {
  return (
    <div className="relative w-full pb-10">
      
      {/* Navigation Buttons Positioned Below the Swiper */}
      <NavigationButtons id={id} />

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        breakpoints={{
          200: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        navigation={{
          nextEl: `.swiper-button-next-${id}`,
          prevEl: `.swiper-button-prev-${id}`,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop
        scrollbar={{ draggable: true }}
        className="swiper select-none mt-4 max-w-full transition-all duration-300 overflow-hidden rounded-2xl shadow-2xl shadow-primary/30 p-4"
      >
        {skillset.map((skill, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <TechSkill image={skill.image} skill={skill.skill} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsMapper;

function NavigationButtons({ id }: { id: string }) {
  return (
    <div className="absolute z-10 top-full mt-2 left-[10px] translate-y-[-10px] flex gap-4">
      <div
        className={`swiper-button-prev-${id} group cursor-pointer py-2 bg-white text-white px-[30px] translate-y-[-15px] rounded-full shadow-lg hover:bg-primary/90 transition`}
      >
        <ChevronLeft className="text-black group-hover:text-white" size={20} />
      </div>
      <div
        className={`swiper-button-next-${id} group cursor-pointer py-2 bg-white text-white px-[30px] translate-y-[-15px] rounded-full shadow-lg hover:bg-primary/90 transition`}
      >
        <ChevronRight className="text-black group-hover:text-white" size={20} />
      </div>
    </div>
  );
}
