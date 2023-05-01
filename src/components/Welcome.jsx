import "./CSS/Welcome.css";
import Targets from "./Targets";
import Commands from "./Commands";

const Welcome = () => {
  return (
    <>
      <h1>Welcome</h1>
      <div className="targets">
        <div className="background">
          <Targets></Targets>
        </div>
        <div className="background">
          <Commands></Commands>
        </div>
      </div>
    </>
  );
};

export default Welcome;
