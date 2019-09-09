import React, { useState } from "react";

const HomeData = (props) => {
    const [coltsScore, setColtsScore] = useState(0);

return (
<div className="container">
<section className="buttons">
    <div className="homeButtons">
        <div className="home">
            <h2 className="home__name">Colts</h2>
            <div className="home__score">{coltsScore}</div>
        </div>

        <button className="homeButtons__touchdown" onClick= {() => setColtsScore(coltsScore +7)}>{props.coltsValue}</button>
        
        <button className="homeButtons__fieldGoal" onClick= {() => setColtsScore(coltsScore +3)}>{props.coltsValue2}</button>
    </div>
</section>
</div>
);
}

export default HomeData;