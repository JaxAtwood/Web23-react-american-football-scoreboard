import React, { useState } from "react";

const AwayData = (props) => {
    const [eaglesScore, setEaglesScore] = useState(0);

return (
<div className="container">
<section className="buttons">
    <div className="awayButtons">
        <div className="away">
            <h2 className="away__name">Eagles</h2>
            <div className="away__score">{eaglesScore}</div>
        </div>

        <button className="awayButtons__touchdown" onClick= {() => setEaglesScore(eaglesScore +7)}>{props.eaglesValue}</button>
        
        <button className="awayButtons__fieldGoal" onClick= {() => setEaglesScore(eaglesScore +3)}>{props.eaglesValue2}</button>
    </div>
</section>
</div>
);
}

export default AwayData;