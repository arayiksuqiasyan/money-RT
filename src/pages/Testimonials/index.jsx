import React from "react";
import testimonials from "../../img/testimonials.png";
import onlinepayment from "../../img/onlinepayment.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials1">
        <div>
          <img src={testimonials} alt={'#'} />
        </div>
        <div>
          <h1>Receive & Transfer Your Freelance Money</h1>
          <span>
            To using Money RT you can received send your freelance money.You can
            use it to your all freelancing olatform like Upwork,Fiverr,99
            Design,Freelancer,etc.
          </span>
        </div>
      </div>
      <div className="testimonials1">
        <div>
          <h1>You Can Manage All Kinds of Online Payment</h1>
          <span>
            To using our olatform you can do all kinds of online payment,Like
            you can purchase anything from online,pay your college fess,pay
            utility bill etc.
          </span>
        </div>
        <div>
          <img src={onlinepayment} alt={'#'} />
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
