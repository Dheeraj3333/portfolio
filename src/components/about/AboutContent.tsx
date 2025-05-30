import Heading from "../common/Heading";
import LineAnimator from "../common/LineAnimater";

const AboutContent = () => {
  return (
    <div>
      <Heading secondLevelHeading={"About Me"} />

      <div className="content-card-holder flex sm:gap-20 gap-10 pb-5 max-sm:pb-4 flex-wrap text-shadow-[0_0_10px_#000]">
        <ContentCard1 />
      </div>
    </div>
  );
};

export default AboutContent;

function ContentCard1() {
  return (
    <LineAnimator classNotation=".mask-para">
      <p className="mask-para text-3xl max-md:text-2xl text-[#dadada]">
        My name is Dheeraj Patel and i'm a passionate MERN Stack Developer and a
        dedicated mentor with hands-on experience in building real-world web
        applications and guiding aspiring developers into the industry. With a
        strong foundation in MongoDB, Express.js, React, and Node.js, I’ve
        worked on several live projects for real-life industry clients, helping
        solve complex business problems through scalable and efficient
        full-stack solutions.
      </p>
    </LineAnimator>
  );
}
