import React from "react";
import './instagram.css'

import Image1 from './images/insta-item1.jpg'
import Image2 from './images/insta-item2.jpg'
import Image3 from './images/insta-item3.jpg'
import Image4 from './images/insta-item4.jpg'
import Image5 from './images/insta-item5.jpg'

const InstaComponent = () =>{
    return(
        <section id="ínstagram" className="padding-large overflow-hidden
        no-padding-top ">
            <div className="container">
                <div className="row">
                    <div className="display-header text-uppercase
                    text-dark text-center pb-3">
                        <h2 className="display-7 mt-5"> Shop Our Insta</h2>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image1} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>
                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image2} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>

                        </figure>
                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image3} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>

                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image4} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>

                        <figure className="instagram-item pe-2">
                            <a href="#" className="image-link 
                            position-relative">
                                <img src={Image5} alt="instagram" 
                                className="insta-image"/>
                                <div className="icon-overlay
                                position-absolute d-flex 
                                justify-content-center">

                                {/* The icon goes here */}
                                </div>
                            </a>
                        </figure>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default InstaComponent