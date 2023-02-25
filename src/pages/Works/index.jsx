import React from "react";

import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import logo4 from "../../img/logo4.png";
import logo5 from "../../img/logo5.png";

const CARDS = [
    {
        logo: logo1,
        title: "1. Register",
        text: "Sign up online or in our app free.",
    },
    {
        logo: logo2,
        title: "2. Choose an amount ",
        text: "How much you want to send.We'll show your our fees app front and tell you when uour money should arrive.",
    },
    {
        logo: logo3,
        title: "3. Add reciptient's bank",
        text: "Feel in the details of your reciptient's bank account",
    },
    {
        logo: logo4,
        title: "4. Verify your identty",
        text: "For some currencies,or for large transfers,we need a photo of ypur ID, This help us keep your money safe",
    },
    {
        logo: logo5,
        title: "5. Pay for your transfer",
        text: "Send your money with a bank transfer,or a debit or credit card",
    },
]

const Works = () => {
    return (
        <div className="works-section">
            <div className="works-section1">
                <h1>How to Work Money RT</h1>
                <span>Join ower 20 milion peaple who get the real exchange rate withWise.We're on average 5x
                    cheaper than leading UK high street banks.
                </span>
            </div>

            <div className="cards-container">
                {CARDS.map((card, i) => {
                    return (
                        <div className="card-fon" key={i}>
                            <img src={card.logo} alt="#"/>
                            <h2>{card.title}</h2>
                            <span>{card.text}</span>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default Works;
