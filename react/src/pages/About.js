import React from 'react';

const About = () => {
    return (
        <section className='flex-grow-1'>
            <div className="page-section pt-5 text-center mt-5" id="about">
                <div className="container">


                    <h1 className="fw-semibold h1 my-5">We create awesome products</h1>

                    <p className=" mb-5 mx-auto w-responsive lead">
                        In our relentless pursuit of excellence, we dedicate ourselves
                        to creating remarkable products that resonate with innovation and
                        quality. We prioritize the seamless integration of cutting-edge
                        technology.
                    </p>


                    <div className="row">


                        <div className="col-md-4 mb-4">
                            <i className="fas fa-4x fa-chart-area" style={{ color: "#E91E63" }}></i>
                            <h4 className="fw-semibold my-4">Analytics</h4>
                            <p className="">
                                With a keen focus on data-driven decision-making, our
                                analytics team plays a pivotal role in shaping the success of our products.
                            </p>
                        </div>



                        <div className="col-md-4 mb-4">
                            <i className="fas fa-4x fa-pencil-alt" style={{ color: "#00BCD4" }}></i>
                            <h4 className="fw-semibold my-4">Design</h4>
                            <p className="">
                                With a keen focus on data-driven decision-making, our
                                analytics team plays a pivotal role in shaping the success of our products.
                            </p>
                        </div>



                        <div className="col-md-4 mb-4">
                            <i className="fas fa-4x fa-laptop" style={{ color: "#3F51B5" }}></i>
                            <h4 className="fw-semibold my-4">Development</h4>
                            <p className="">
                                With a keen focus on data-driven decision-making, our
                                analytics team plays a pivotal role in shaping the success of our products.
                            </p>
                        </div>


                    </div>

                </div>
            </div>

            <hr className="my-5" />
            <div className="container my-5">



                <div className="text-center">
                    <h3 className="fw-bold mb-4 pb-2"></h3>
                    <h1 className="fw-semibold text-center h1 my-5">Our best projects</h1>
                    <p className=" mb-5 mx-auto w-responsive lead">
                        In our relentless pursuit of excellence, we dedicate ourselves
                        to creating remarkable products that resonate with innovation and
                        quality. We prioritize the seamless integration of cutting-edge
                        technology.
                    </p>

                    <div className="row mb-3">
                        <div className="col-md-4 mb-4">

                            <div className="rounded">
                                <img src="assets/work2.png" className="img-fluid" height={"100%"} alt="Sample project image" />
                            </div>

                            <div className="px-3 pt-3 mx-1 mt-1 pb-0">
                                <h4 className="fw-semibold mt-1 mb-3">News Website</h4>
                                <p className="mb-5 mx-auto w-responsive">
                                    A web platform that aggregates news articles from various sources.
                                    Users can browse through different categories and read headlines with
                                    a brief summary.
                                </p>
                                <a className="btn btn-outline-primary btn-sm btn-rounded"><i className="fas fa-clone left"></i> View project</a>
                            </div>

                        </div>
                        <div className="col-md-4 mb-4">

                            <div className="rounded">
                                <img src="assets/work2.png" className="img-fluid" height={"100%"} alt="Sample project image" />
                            </div>

                            <div className="px-3 pt-3 mx-1 mt-1 pb-0">
                                <h4 className="fw-semibold mt-1 mb-3">Blogs Website</h4>
                                <p className="mb-5 mx-auto w-responsive">
                                    A personal blog website  where the owner shares thoughts,
                                    and insights. The site will have a clean and moderndesign, with a focus
                                    on responsive layouts.
                                </p>
                                <a className="btn btn-outline-primary btn-sm btn-rounded"><i className="fas fa-clone left"></i> View project</a>
                            </div>

                        </div>

                        <div className="col-md-4 mb-4">

                            <div className="rounded">
                                <img src="assets/work2.png" className="img-fluid" height={"100%"} alt="Sample project image" />
                            </div>

                            <div className="px-3 pt-3 mx-1 mt-1 pb-0">
                                <h4 className="fw-semibold mt-1 mb-3">Ecommerce Store</h4>
                                <p className="mb-5 mx-auto w-responsive">
                                    An e-commerce website  that features a grid of products
                                    with titles and descriptions.
                                    Users can click on a product to view more details and make a purchase.
                                </p>
                                <a className="btn btn-outline-primary btn-sm btn-rounded"><i className="fas fa-clone left"></i> View project</a>
                            </div>

                        </div>


                    </div>


                </div>



            </div>

        </section>

    );
}

export default About;
