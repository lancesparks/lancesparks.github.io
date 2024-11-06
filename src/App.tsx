import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("main");

  const handleScrollTo = (section: string) => {
    const sectionToScroll = document.getElementById(section);
    if (sectionToScroll) {
      sectionToScroll.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(section);
  };
  useEffect(() => {
    handleScrollTo("main");
  }, []);

  const detectScroll = () => {
    setActiveSection("any");
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
  }, []);

  return (
    <main
      className="main"
      id="main"
      onWheel={detectScroll}
      onScroll={detectScroll}
    >
      <Home handleScrollTo={handleScrollTo} />

      <About activeSection={activeSection}></About>
      {/* <Portfolio></Portfolio> */}
      <Contact></Contact>
    </main>
  );
}

export default App;
