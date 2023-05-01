import gsap from "gsap";
import { useEffect, useContext, useState } from "react";
import { terminalContext } from "../../../App";
import "../../CSS/Website1.css";
import definitionImg from "./img/terminal.png";

const TerminalDefinition = () => {
  const context = useContext(terminalContext);
  const [opacitySet, setOpacitySet] = useState(false);
  useEffect(() => {
    if (context.tempInput != "start") return;
    setOpacitySet(true);
    const tl = gsap.timeline();

    tl.fromTo(".definitionContainer", { y: 500 }, { y: -200, duration: 3 });
    tl.fromTo(".definitionContainer", { x: 200, duration: 1 }, { x: 100 });
    tl.fromTo(".definitionImg", { x: -400, duration: 2 }, { x: -200 }, "<");
    tl.to(".cmdDefinition", { opacity: 1, duration: 1 });
  }, [context.checkEnter]);
  return (
    <>
      
        <div
          className="definitionContainer"
          style={{ opacity: opacitySet ? "1" : "0" }}
        >
          <h1>Definition</h1>
          <div className="imgWrapper">
            <img src={definitionImg} className="definitionImg" />
          </div>
        </div>
        <div className="definitionText">
          <span className="noOpacity cmdDefinition">
            A terminal, also known as the command-line interface (CLI), is a
            text-based tool used to interact with a computer's operating system.
            Instead of using graphical elements like buttons and icons, users
            type in commands to perform tasks such as navigating directories,
            managing files, and running programs. The terminal provides a
            powerful and efficient way to control a computer, especially for
            advanced users and developers.
          </span>
        </div>
     
    </>
  );
};

export default TerminalDefinition;
