import Terminal from "./components/TerminalCMD.jsx";
import Welcome from "./components/Welcome.jsx";
import React, { useState, createContext } from "react";
import Website1 from "./components/Sites/Website1.jsx";
import Website2 from "./components/Sites/Website2.jsx";
import Website3 from "./components/Sites/Website3.jsx";
import Website4 from "./components/Sites/Website4.jsx";
import Website5 from "./components/Sites/Website5.jsx";

import "./App.css";
export const terminalContext = createContext(null);
function App() {
  const [termInput, setTermInput] = useState("");
  const [showWelcome, setShowWelcome] = useState("");

const  [checkEnter, setCheckEnter] = useState(false);

const [tempInput, setTempInput] = useState('');
  return (
    <>
      <terminalContext.Provider value={{
          termInput, setTermInput, checkEnter, setCheckEnter, tempInput, setTempInput
      }}>
        <div className="app-container">
          {showWelcome === "" && <Welcome />}

          {showWelcome === "Website1" && <Website1 />}
          {showWelcome === "Website2" && <Website2 />}
          {showWelcome === "Website3" && <Website3 />}
          {showWelcome === "Website4" && <Website4 />}
          {showWelcome === "Website5" && <Website5 />}
          <Terminal
            setShowWelcome={setShowWelcome}
          ></Terminal>
        </div>
      </terminalContext.Provider>
    </>
  );
}

export default App;
