import React from "react";
import Data from "./Data";
import "./Travel.css";

function Travel(props) {
  return (
    <div className="travel-div">
      <div className="navBar">
        <h2>my Travel Journal</h2>
      </div>
      {Data.map((place) => {
        return (
          <div className="data-div">
            <div className="img-section">
              <img src={place.img} className="travel-img" />
            </div>
            <div className="section">
              <h5 className="travel-place">{place.location}</h5>
              <h3 className="travel-title">{place.title}</h3>
              <h5 className="travel-date">
                {place.datefrom} - {place.dateto}
              </h5>
              <p className="travel-view">{place.view}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Travel;
