import React from "react";
import cardFoto from "../../img/Frame 9.png";
import cardFoto2 from "../../img/Group 11.png";

import icon1 from "../../img/icon1.png";
import icon2 from "../../img/icon2.png";
import icon3 from "../../img/icon3.png";

import card1 from "../../img/card1.png";
import card2 from "../../img/card2.png";
import card3 from "../../img/card3.png";
import card4 from "../../img/card4.png";

const Home = () => {

  return (
    <div className="home-container">
      <div className="headers">
        <div className="header">
          <h1>Recevie & Transfer Your Money Globally with Cheap & Fast</h1>
          <span>
            Join ower 20 milion peaple who get the real exchange rate with
            Wise.We're on average 5x cheaper than leading UK high street banks.
          </span>
          <div className="buttons">
            <button>Send Money</button>
            <button>Receive Money</button>
          </div>
          <div className="cards">
            <img src={card1} alt="#" />
            <img src={card2} alt="#" />
            <img src={card3} alt="#" />
            <img src={card4} alt="#" />
          </div>
        </div>
        <div className="header-card">
          <img src={cardFoto} alt="#" className="cardfoto" />
          <div className="position-img">
            <div className="spanes">
              <span>Your Money</span>
              <span>$ 889,00</span>
            </div>
            <div className="positon-imges">
              <div className="positon-img-nth1-div">
                <div className="positon-img-nth1">
                  <span>$ 208,00</span>
                </div>
                <span className="text-positon">Last Month</span>
              </div>
              <div className="positon-img-nth1-div">
                <div className="positon-img-nth2">
                  <div className="positon-img-nth2">
                    <span>$ 120,00</span>
                  </div>
                  <span className="text-positon">This Month</span>
                </div>
              </div>
            </div>
          </div>
          <img src={cardFoto2} alt="#" className="foto2" />
          <div className="photo-icons">
            <img src={icon1} alt="#" />
            <img src={icon2} alt="#" />
            <img src={icon3} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
