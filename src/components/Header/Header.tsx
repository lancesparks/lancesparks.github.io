import { useState } from "react";
import classes from "./Header.module.css";
import spark from "../../assets/spark.svg";
import HeaderItem from "../HeaderItem/HeaderItem";

interface HeaderProps {
  activeSection: string;
  handleScrollTo: any;
}
const Header = ({ activeSection, handleScrollTo }: HeaderProps) => {
  const [active, setActive] = useState(activeSection);

  const handleSetActive = (linkName: string) => {
    setActive(linkName);
  };

  return (
    <div className={classes.headerContainer}>
      <section className={classes.header}>
        <section className={classes.logoContainer}>
          <img className={classes.header_logo} src={spark} alt="logo" />
          <h1 className={`headingLarge ${classes.header_title}`}>
            spark
            <span className="headingSmall">web designs</span>
          </h1>
        </section>
        <section className={classes.header_items}>
          <ul>
            <HeaderItem
              title="home"
              isActive={active === "home"}
              handleSetActive={handleSetActive}
              handleScrollTo={handleScrollTo}
            />
            <HeaderItem
              title="about"
              isActive={active === "about"}
              handleSetActive={handleSetActive}
              handleScrollTo={handleScrollTo}
            />

            <HeaderItem
              title="portfolio"
              isActive={active === "portfolio"}
              handleSetActive={handleSetActive}
              handleScrollTo={handleScrollTo}
            />

            <li>
              <button className={classes.contact_btn}>contact</button>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Header;
