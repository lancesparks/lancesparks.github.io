import classes from "./HeaderItem.module.css";

interface HeaderItemProps {
  title: string;
  isActive: boolean;
  handleSetActive: any;
  handleScrollTo: any;
}

const HeaderItem = ({
  title,
  isActive,
  handleSetActive,
  handleScrollTo,
}: HeaderItemProps) => {
  const handleClick = () => {
    const scrollToSection = title === "home" ? "main" : title;
    handleSetActive(title);
    handleScrollTo(scrollToSection);
  };

  return (
    <>
      <li
        className={isActive ? `${classes.activeHeading} headingM` : "headingM"}
        onClick={handleClick}
      >
        {title}
      </li>
    </>
  );
};

export default HeaderItem;
