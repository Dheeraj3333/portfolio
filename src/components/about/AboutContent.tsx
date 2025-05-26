import Heading from "../common/Heading";

const AboutContent = () => {
  return (
    <div>
      <Heading secondLevelHeading={"About Me"} />

      <div className="content-card-holder flex sm:gap-20 gap-10 pb-20 max-sm:pb-4 flex-wrap">
        <ContentCard1 />
        <ContentCard2 />
      </div>
    </div>
  );
};

export default AboutContent;

const commonClass = " w-fit rounded-2xl p-6 text-2xl max-h-fit transition-all duration-500 sm:hover:scale-110 sm:hover:translate-y-4 sm:hover:translate-x-4 ";

function ContentCard1() {
  return (
    <div className={`card1 ${commonClass}  bg-[#5abc14]  max-w-[500px]`}>
      <p>
        <span className="flex items-center">
          Hello there !{" "}
          <img
            className="scale-90"
            src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
            alt="hello image"
          />{" "}
          ,
        </span>
        My name is Dheeraj Patel and i'm a passionate MERN Stack Developer and a
        dedicated mentor with hands-on experience in building real-world web
        applications and guiding aspiring developers into the industry.
      </p>
    </div>
  );
}

function ContentCard2() {
  return (
    <div className={`card2 ${commonClass} bg-red-500 max-w-[400px] sm:translate-y-20`}>
      <p>
        {" "}
        With a strong foundation in MongoDB, Express.js, React, and Node.js,
        I’ve worked on several live projects for real-life industry clients,
        helping solve complex business problems through scalable and efficient
        full-stack solutions.
      </p>
    </div>
  );
}
