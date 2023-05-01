import "../CSS/Website2.css";

const Website2 = () => {
  return (
    <>
      <h1>The Terminal Basics</h1>
      <div className="openTerminal">
        <h2>Open the Terminal</h2>
        <div className="terminalOpenFlex">
          <div className="windows">
            <h3>Windows</h3>
            <span>
              1.Press the Windows key or click on the Start button to open the
              Start menu. <br></br> <br></br> 2.Type "cmd" or "Command Prompt" in the
              search bar and press Enter. This will open the default Windows
              terminal, Command Prompt. <br></br> <br></br> 3.Alternatively, you can open
              the more powerful Windows terminal, PowerShell, by typing
              "PowerShell" in the search bar and pressing Enter.
            </span>
          </div>
          <div className="macOS">
            <h3>macOS</h3>
            <span>
              1. Click on the magnifying glass icon in the top right corner of the
              screen to open Spotlight Search. <br></br> <br></br>2. Type "Terminal" in the search bar
              and press Enter. This will open the default macOS terminal
              application. <br></br>  <br></br>3. Alternatively, you can open the Terminal by
              navigating to Finder → Applications → Utilities → Terminal.
            </span>
          </div>
        </div>
      </div>
      
      <div className="listWrapper">
    
        <div className="commandList">
          <ol>
            <li>ls - Lists the contents of the current directory</li>
            <li>cd - Changes the current directory to a specified directory</li>
            <li>mkdir - Creates a new directory with a specified name</li>
            <li>
              cp - Copies files or directories from one location to another
            </li>
            <li>rm - Removes files or directories</li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Website2;
