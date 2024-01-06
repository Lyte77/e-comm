import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import {  faMedal  } from '@fortawesome/free-solid-svg-icons'
import {  faTag  } from '@fortawesome/free-solid-svg-icons'
import {  faShield  } from '@fortawesome/free-solid-svg-icons'

const CompanyServices = () => {
    return(
        <section id="company-services" className="padding-large pt-5" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 pb-3">
                        <div className="icon-box d-flex">
                            <div className="icon-box-icon pe-3 pb-3">
                            <FontAwesomeIcon icon={faCartShopping} />
                            </div>
                            <div className="icon-box-content">
                                <h3 className="card-title text-uppercase text-dark">
                                    Free delivery
                                </h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                                     Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 pb-3">
                        <div className="icon-box d-flex">
                            <div className="icon-box-icon pe-3 pb-3">
                            <FontAwesomeIcon icon={faMedal} />
                            </div>
                            <div className="icon-box-content">
                                <h3 className="card-title text-uppercase text-dark">
                                    Quality Gurantee
                                </h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                                     Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 pb-3">
                        <div className="icon-box d-flex">
                            <div className="icon-box-icon pe-3 pb-3">
                            <FontAwesomeIcon icon={faTag} />
                            </div>
                            <div className="icon-box-content">
                                <h3 className="card-title text-uppercase text-dark">
                                    Daily Offers
                                </h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                                     Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 pb-3">
                        <div className="icon-box d-flex">
                            <div className="icon-box-icon pe-3 pb-3">
                            <FontAwesomeIcon icon={faShield} />
                            </div>
                            <div className="icon-box-content">
                                <h3 className="card-title text-uppercase text-dark">
                                    100%Secure payment
                                </h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at lectus a velit auctor dapibus.
                                     Integer suscipit sem mi, eget posuere urna pretium eget.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>
    )
}

export default CompanyServices