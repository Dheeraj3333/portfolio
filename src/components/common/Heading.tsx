

const Heading = ({ secondLevelHeading }: { secondLevelHeading: string }) => {
  return <h2 className="font-heads text-5xl max-sm:text-4xl relative w-fit my-6 mb-14 max-sm:mb-12">{secondLevelHeading}
  <span className="absolute w-2/3 p-1 bg-primary rounded-xl -bottom-3 left-0"></span>
  </h2>;
};

export default Heading;
