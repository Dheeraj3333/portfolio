import { projectsData } from "@/utils/data";

const Counter = () => {
  return (
    <div className="counter w-fit scale-120 max-lg:scale-100 overflow-hidden sticky top-10 flex gap-1 font-heads justify-start max-h-[200px]">
      <span className="text-[200px] max-h-[200px] h-[200px] w-[120px] flex justify-center items-center relative">
        0
      </span>
      <ul
        className={`numbers-list will-change-transform flex flex-col min-h-fit relative top-[0px]`}
      >
        {projectsData.map((_, index) => (
          <li
            key={index}
            className="text-[200px] max-h-[200px] h-[200px] w-[120px] flex justify-center items-center relative"
          >
            <span className="absolute">{index + 1}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
