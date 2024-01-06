import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

import './Testimonials.css'

const TestimonialComponent = () =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        swipeToSlide: true,
        responsive: [
           
         {
            breakpoint:768,
            settings:{
                slidesToShow:1
            }
           }
        ]    
     
    };
    return(
        <section id="testimonials" className="position-relative">
            <div className="container">
                <div className="row">
                    <div className="review-content position-relative">
                        <Slider {...settings}>
                            <div className="swiper-slide text-center
                            d-flex justify-content-center">
                                <div className="review-item
                                col-md-10">
                                    <blockquote>
                                        "Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi."
                                    </blockquote>
                                    <div className="rating"></div>
                                    <div className="author-detail">
                                        <div className="name text-dark
                                        text-uppercase pt-2">
                                            John Doe
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="swiper-slide text-center
                            d-flex justify-content-center">
                                <div className="review-item
                                col-md-10">
                                    <blockquote>
    .                                   "A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content."
                                    </blockquote>
                                    <div className="rating"></div>
                                    <div className="author-detail">
                                        <div className="name text-dark
                                        text-uppercase pt-2">
                                            Chris Will
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )

    
}
export default TestimonialComponent