import classes from "./About.module.css";
import CustomizedTimeline from "../TimeLine/Timeline.component";
import Carousel from "react-material-ui-carousel";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";

interface AboutProps {
  activeSection: string;
}

const About = ({ activeSection }: AboutProps) => {
  const isActive = activeSection != "main";
  const images = [image1, image2, image3, image4, image5];
  return (
    <section className={`${classes.about} fadeInUp`} id="about">
      {isActive && (
        <>
          <h1 className="headingXLarge">About Me</h1>
          <div className={`${classes.aboutMe} fadeInUp animatedFast`}>
            <span className={classes.images}>
              <Carousel indicators={false} navButtonsAlwaysInvisible={true}>
                {images.map((item, i) => (
                  <img key={i} className={classes.carouselImg} src={item}></img>
                ))}
              </Carousel>
            </span>

            <p className={`${classes.aboutMe} headingSmall`}>
              I am a skilled front-end developer with expertise in a wide range
              of technologies, including Angular, React, JavaScript, TypeScript,
              Node.js, SCSS, CSS, MongoDB, and SQL. My passion for
              problem-solving drives me to consistently deliver high-quality,
              efficient solutions.
              <br /> <br />
              My passion for programming has grown through a deep love of
              tackling challenges. At work, I thrive on solving complex
              problems, debugging intricate issues, and constantly expanding my
              technical skills. Outside of work, I apply that same drive to
              other pursuits. Im dedicated to Muay Thai and weightlifting, enjoy
              exploring new destinations through travel, and value spending
              quality time with family and friends.
            </p>
          </div>

          <div className={`${classes.aboutSection} ${classes.resume}`}>
            <CustomizedTimeline></CustomizedTimeline>
          </div>
        </>
      )}
    </section>
  );
};

export default About;
