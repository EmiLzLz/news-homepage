import React from "react";
import '../public/components.css'
import img01 from '../assets/images/img01.jpg'
import img02 from '../assets/images/img02.jpg'
import img03 from '../assets/images/img03.jpg'

function Bottomcontent() {
  return (
    <div className="bottom-container container-fluid w-100 py-5">
      <div className="moreinfo-container row w-100 m-0 justify-content-around">
        <div className="moreinfo col-md-12 col-lg-3 d-flex">
          <div className="moreinfo-image">
          <img src={img01} alt="01" />
          </div>
          <div className="moreinfo-text p-2">
            <div className="number">01</div>
            <div className="moreinfo-title">
                <h3>SOME TITLE</h3>
            </div>
            <div className="moreinfo-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="moreinfo col-md-12 col-lg-3 d-flex">
          <div className="moreinfo-image">
            <img src={img02} alt="02" />
          </div>
          <div className="moreinfo-text p-2">
            <div className="number">02</div>
            <div className="moreinfo-title">
                <h3>SOME TITLE</h3>
            </div>
            <div className="moreinfo-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
        <div className="moreinfo col-md-12 col-lg-3 d-flex">
          <div className="moreinfo-image">
          <img src={img03} alt="03" />
          </div>
          <div className="moreinfo-text p-2">
            <div className="number">03</div>
            <div className="moreinfo-title">
                <h3>SOME TITLE</h3>
            </div>
            <div className="moreinfo-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bottomcontent;
