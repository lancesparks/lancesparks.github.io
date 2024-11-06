import classes from "./Portfolio.module.css";
import kanban from "../../assets/portfolio-1.jpg";

const Portfolio = () => {
  return (
    <section className={classes.portfolio} id="portfolio">
      <div className={classes.portfolioContainer}>
        <h1 className="headingXLarge">Work</h1>
        <div className={classes.portfolioItems}>
          <div className={classes.portfolioItem}>
            <span className={classes.portfolioItemContainer}>
              <img className={classes.portfolioImage} src={kanban} alt="" />

              <p className={classes.portfolioDescription}>copyright</p>
              <div className={classes.overlay}></div>
            </span>
          </div>
          <div className={classes.portfolioItem}>
            <span className={classes.portfolioItemContainer}>
              <p className={classes.portfolioDescription}>copyright</p>
              <img className={classes.portfolioImage} src={kanban} alt="" />
              <div className={classes.overlay}></div>
            </span>
          </div>
          <div className={classes.portfolioItem}>
            <span className={classes.portfolioItemContainer}>
              <p className={classes.portfolioDescription}>copyright</p>
              <img className={classes.portfolioImage} src={kanban} alt="" />
              <div className={classes.overlay}></div>
            </span>
          </div>
          <div className={classes.portfolioItem}>
            <span className={classes.portfolioItemContainer}>
              <p className={classes.portfolioDescription}>copyright</p>
              <img className={classes.portfolioImage} src={kanban} alt="" />
              <div className={classes.overlay}></div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
