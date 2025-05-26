const TechSkill = ({ image, skill }: { image: string; skill: string }) => {
  return (


    <div
      className={`flex items-center justify-between gap-2 bg-primary rounded-full pr-8 group overflow-hidden max-w-full w-[120px] max-sm:w-[80px] sm:hover:w-[400px] transition-all duration-800`}
    >
      <span className="w-[120px] max-sm:w-[80px] overflow-hidden h-[120px] max-sm:h-[80px] rounded-full bg-white flex items-center justify-center shrink-0">
        <img className="w-[80px] max-sm:w-[50px]" src={image} alt={skill} />
      </span>
      <span className="text-5xl font-head block h-full grow text-nowrap text-center">
        {skill}
      </span>
    </div>
  );
};

export default TechSkill;
