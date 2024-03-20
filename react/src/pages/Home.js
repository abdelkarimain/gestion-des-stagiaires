import React from 'react';

const Home = () => {

    return (
        <div className="container px-4 py-3 mb-5 mt-4">
            <div className="row flex-lg-row-reverse align-items-center g-5">
                <div className="col d-flex">
                    <img src="assets/hero_image.svg" className="d-block mx-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6 text-center text-md-left">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-2">Get Started</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Join Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
