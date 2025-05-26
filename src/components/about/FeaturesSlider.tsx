import HighlightToSlide from "./FeaturesToSlide";

const FeaturesSlider = () => {
  return (
    <div className="flex gap-[100px] max-w-full overflow-hidden bg-black my-10 rounded-2xl py-4">
      <HighlightToSlide />
      <HighlightToSlide />
    </div>
  );
};

export default FeaturesSlider;
