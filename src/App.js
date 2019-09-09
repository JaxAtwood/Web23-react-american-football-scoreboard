import React from "react";
import AwayScore from "./Components/AwayScore";
// import HomeScore from "./Components/HomeScore";
import BottomRow from "./BottomRow";
import HomeData from "./Components/HomeData";

const App = () => (

  <div className="container">
      <section className="scoreboard">
      
        <div className="topRow">
            
            <div className="home">
              {/* <HomeScore /> */}
              <HomeData />
            </div>
            <div className="timer">00:03</div>
            <div className="away">
              <AwayScore />
            </div>
            
        </div>
       <BottomRow />
      </section>
      
  </div>
);

export default App;