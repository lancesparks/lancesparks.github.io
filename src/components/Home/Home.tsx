import classes from "./Home.module.css";
import llama from "../../assets/llamas.jpg";
import github from "../../assets/github-mark.svg";
import linkedIn from "../../assets/linkedin.svg";
interface HomeProps {
  handleScrollTo: any;
}

const Home = ({ handleScrollTo }: HomeProps) => {
  return (
    <section className={classes.home} id="main">
      <div className={classes.homeOverlay}></div>
      <div className={classes.homeMain}>
        <img className={classes.homeImage} src={llama} alt="Logo" />
        <h1 className={classes.homeHeader}>Lance Sparks</h1>
        <section className={classes.homeSubHeader}>
          <h3 className={`${classes.mlm} headingM`}>
            Senior Fullstack Developer
          </h3>
        </section>
        <ul className={classes.homeList}>
          <li onClick={() => handleScrollTo("about")}>About</li>
          <span className={classes.listDivider}></span>
          <li onClick={() => handleScrollTo("portfolio")}>Portfolio</li>
          <span className={classes.listDivider}></span>
          <li onClick={() => handleScrollTo("contact")}>Contact</li>
        </ul>
        <ul className={classes.homeSocial}>
          <li>
            <a href="https://github.com/lancesparks" target="_blank">
              <img
                className={`${classes.homeSocialLink} ${classes.mlm}  ${classes.mrm}`}
                src={github}
                alt="github"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lance-sparks/" target="_blank">
              <img
                className={`${classes.homeSocialLink} ${classes.mlm}  ${classes.mrm}`}
                src={linkedIn}
                alt="linkedIn"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
