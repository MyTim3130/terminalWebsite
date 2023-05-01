import "./CSS/TerminalCMD.css";
import { useEffect, useState, useContext } from "react";
import { terminalContext } from "../App";

const TerminalCMD = ({ setShowWelcome }) => {
  const body = document.querySelector("body");
  useEffect(() => {
    // body.style.cursor = "none";
  }, []);

  const context = useContext(terminalContext);

  const [inputArr, setInputArr] = useState([0]);

  function newLine(e, index) {
    const input = e.target;
    const terminalText = document.querySelector(".terminalText");
    const terminalPath = document.querySelector(".terminalPath");
    if (e.key === "Enter") {
      context.setCheckEnter(!context.checkEnter);
      context.setTempInput(context.termInput);
      console.log("Working");
      setInputArr([...inputArr, inputArr.length]);
      terminalText.append(terminalPath.innerText + " " + input.value);
      const newInput = document.createElement("input");
      newInput.classList.add("terminalInput");

      terminalPath.remove();
      input.remove();

      if (input.value === "cd Introduction") {
        setShowWelcome("Website1");
      } else if (input.value === "start") {
        const beginning = document.createElement("div");
        beginning.innerText = "beginning Animation...";
        terminalText.appendChild(beginning); // Append helpCommands div to the terminalText div
      } else if (input.value === "") {
        //NOTHING
      } else if (input.value === "changeMode") {
        console.log("changing...");
        body.style.removeProperty("cursor");
      } else if (input.value === "exit()") {
        window.close();
      } else if (input.value === "cd Website2") {
        setShowWelcome("Website2");
      } else if (input.value === "cd Website3") {
        setShowWelcome("Website3");
      } else if (input.value === "cd Website4") {
        setShowWelcome("Website4");
      } else if (input.value === "cd Website5") {
        setShowWelcome("Website5");
      } else if (input.value === "cd Home") {
        setShowWelcome("");
      } else if (input.value === "help") {
        const helpCommands = document.createElement("div");
        helpCommands.innerText = "cd, exit(), start, pause, changeMode, help";
        terminalText.appendChild(helpCommands); // Append helpCommands div to the terminalText div
      } else {
        const unknown = document.createElement("div");
        unknown.innerText = "Unknown Command";
        terminalText.appendChild(unknown); // Append helpCommands div to the terminalText div
      }
      context.setTermInput("");
    }
  }

  useEffect(() => {
    const input = document.querySelector(
      `#terminalInput-${inputArr.length - 1}`
    );
    if (!input) return;
    input.focus();
  }, [inputArr]);
  return (
    <>
      <div className="cover">
        <div className="terminalContainer">
          <div>
            <span className="terminalHeadding">TERMINAL</span>
          </div>

          <div>
            <div className="terminalText">
              {inputArr.map((number, index) => {
                return (
                  <div className={`alignPath alignPath-${index}`} key={number}>
                    <span className="terminalPath">
                      C:\Users\REACT\basics\5\terminalWebsite:
                    </span>
                    <input
                      type="text"
                      className="terminalInput"
                      onKeyDown={(e) => newLine(e, index)}
                      id={`terminalInput-${index}`}
                      value={context.termInput}
                      onChange={(e) => {
                        context.setTermInput(e.target.value);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TerminalCMD;
