const TechSkill = ({ image, skill }: { image: string; skill: string }) => {
  return (
    <div
      className={`gap-2 min-h-[200px] flex items-center rounded-xl group overflow-hidden max-w-full `}
    >
      <img className="w-full object-contain block mx-auto p-4 drop-shadow-2xl drop-shadow-[#00ffff27] " src={image} alt={skill} />
    </div>
  );
};

export default TechSkill;
