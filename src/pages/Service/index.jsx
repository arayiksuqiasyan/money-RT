import React from "react";
import payment from "../../img/payment.png";

const Service = () => {

    return (
        <div className="service">
            <div className="service-text">
                <h1>Global Payment Service With Local Bank Account</h1>
                <span>
          Register to Money RT and get your local receiving accounts.Send
          costumers the details of your receiving accounts.Costumers pay via
          local bank trancfer to your receiving accounts.
        </span>
            </div>
            <div className="service-payment">
                <div>
                    <img src={payment} alt={'#'}/>
                </div>
                <span>
                     *Only ACH transfers(US local bank transfer) in USD are acceepted.
                     Wiretransderr are not supportted{" "}
                 </span>
                <button>Create a Payment Request</button>
            </div>
        </div>
    );
}
export default Service;
