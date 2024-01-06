import React from "react";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

import Image7 from './images/product-item6.jpg'
import Image8 from './images/product-item7.jpg'
import Image9 from './images/product-item8.jpg'
import Image10 from './images/product-item9.jpg'


const WatchesComponent = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        
        swipeToSlide: true,
        responsive: [
           
         {
            breakpoint:768,
            settings:{
                slidesToShow:2
            }
           }
        ]    
     
    };

    return(
        
        <section id="watches-products" className="product-store 
        position-relative padding-large pt-5">
            <div className="container">
                <div className="row">
                    <div className="display-header d-flex
                    jusyify-content-between pb-3">
                        <h2 className="display-7 text-dark 
                        text-uppercase"> Watches </h2>
                        <div className="btn-right">
                            <a href="#" className="btn btn medium
                            btn-normal text-uppercase">Go to store</a>
                        </div>
                    </div>
                        <Slider {...settings}>
                            <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image7} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a> 

                                        </div>
                                       
                                            
                                        <div className="card-detail d-flex justify-content-between
                                        align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#"> Iphone 13</a>
                                            </h3>
                                          
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                             <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image8} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a> 

                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                                
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between
                                        align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#"> Iphone 11</a>
                                            </h3>
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image9} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a>

                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                               
                                            </div>
                                        </div>
                                        <div className="card-detail d-flex justify-content-between
                                        align-items-baseline pt-3">
                                            <h3 className="card-title text-uppercase">
                                                <a href="#"> Iphone 11</a>
                                            </h3>
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-slide">
                                <div className="container">
                                
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img src={Image10} alt="phone1" className="img-fluid" />
                                             <a href="#" className="button">
                                                    Add to cart
                                             </a>

                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                               
                                            </div>
                                        </div>
                                        <div className="card-detail">
                                            <h3 className="card-title text-uppercase text-warning">
                                                <a href="#"> Iphone 11</a>
                                            </h3>
                                            <span className="item-price text-primary">$1100</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                             
  

                            

                        </Slider>
                </div>
            </div>

       </section>
    )
}

export default WatchesComponent