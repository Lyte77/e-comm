import React from "react";
import Image12 from './images/post-item1.jpg'
import Image13 from './images/post-item2.jpg'
import Image14 from './images/post-item3.jpg'

import './Blog.css'

const BlogSection = () =>{
    return(
        <section className=" blog-section padding-large ">
            <div className="container">
                <div className="row">
                    <div className="display-header
                    d-flex justify-content-between pb-3">
                        <h2 className="display-7 text-dark
                        text-uppercase">Latest Posts</h2>
                        <div className="btn-right">
                            <a href="#" className="btn btn-medium btn-normal
                            text-uppercase">Read Blog</a>
                        </div>
                    </div>
                    <div className="post-grid d-flex flex-wrap 
                    justify-content-between">
                        <div className="col-lg-4 col-sm-12 pt-4">
                            <div className="card border-none me-3 ">
                                <div className="card-image">
                                    <img src={Image12} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-uppercase">
                                <div className="card-meta text-muted">
                                    <span className="meta-date">January 8, 2024</span>
                                    <span className="meta-category">- Gadgets</span>
                                </div>
                                <h3 className="card-title">
                                    <a href="#"> Get some cool gadgets in 2024</a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pt-4">
                            <div className="card border-none me-3">
                                <div className="card-image">
                                    <img src={Image13} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-uppercase">
                                <div className="card-meta texr-muted">
                                    <span className="meta-date">January 9, 2024</span>
                                    <span className="meta-categorey">Technology</span>
                                </div>
                                <h3 className="card-title">
                                    <a href="#"> Technology Hack You Wont Get</a>
                                </h3>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 pt-4">
                            <div className="card border-none me-3">
                                <div className="card-image">
                                    <img src={Image14} alt="" className="img-fluid"/>
                                </div>
                            </div>
                            <div className="card-body text-uppercase">
                                <div className="card-meta texr-muted">
                                    <span className="meta-date">January 9, 2024</span>
                                    <span className="meta-categorey">Technology</span>
                                </div>
                                <h3 className="card-title">
                                    <a href="#"> Technology Hack You Wont Get</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default BlogSection