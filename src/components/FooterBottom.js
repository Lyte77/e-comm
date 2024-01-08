import React from "react";
import Image1 from './images/dhl.png'
import Image2 from './images/shippingcard.png'
import Image3 from './images/visa.jpg'
import Image4 from './images/mastercard.jpg'
import Image5 from './images/paypal.jpg'

const FooterBottom = () =>{
    return(
        <div id="footer-bottom">
            <div className="container">
                <div className="row d-flex flex-wrap
                justify-content-between">
                    <div className="col-md-4 col-sm-6">
                        <div className="Shipping d-flex">
                            <p>We ship with</p>
                            <div className="card-wrap ps-2">
                                <img src={Image1} alt="visa" />
                                <img  src={Image2} alt="mastercard" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="payment-method d-flex">
                            <p>Payment options:</p>
                            <div className="card-wrap ps-2">
                                <img src={Image3} alt="visa"/>
                                <img src={Image4}  alt="mastercard"/>
                                <img src={Image5} alt="paypal"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md col-sm-6">
                        <div className="copyright">
                            <p>Copyright 2024 Ministore. Design by LiteCode</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom