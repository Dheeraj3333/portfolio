import HighlightSlide from "./HighlightSlide";

const FeaturesSlider = () => {
  return (
    <>
    <div className="flex gap-[100px] max-w-full overflow-hidden bg-black mt-10 rounded-t-2xl py-4">
      <HighlightSlide />
      <HighlightSlide />
    </div>
    <div className="flex justify-end gap-[100px] max-w-full overflow-hidden bg-black mb-10 rounded-b-2xl py-4">
      <HighlightSlide slideClass="animate-slide-right" />
      <HighlightSlide slideClass="animate-slide-right" />
    </div>
    </>
  );
};

export default FeaturesSlider;
