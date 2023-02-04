import React from "react";
import "../public/components.css";

function Rightcolumn() {
  return (
    <div className="right-container col-sm-12 col-md-6 py-5">
      <div className="news-container p-3 h-100">
        <h3>News</h3>
        <div className="news row gap-5">
          <div className="new col-12 py-3">
            <h4>Some title</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              tempora nam molestias
            </p>
          </div>
          <div className="new col-12 py-3">
            <h4>Some title</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              tempora nam molestias adipisicing elit. Dolorem tempora nam
              molestias
            </p>
          </div>
          <div className="new col-12 py-3">
            <h4>Some title</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              tempora nam molestias adipisicing elit. Dolorem tempora nam
              molestias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rightcolumn;
