import React from 'react'

function Contact() {
    return (
        <div className="container-fluid mx-auto my-5 py-5">
            <section className="px-md-5 mx-md-5 text-lg-left mt-3 dark-grey-text">

                <div id="map-container-google-1 bg-secondary" style={{ height: '200px', position: 'relative' }}
                    className="z-depth-1 map-container mb-5">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1741.5933878795538!2d-10.037306173804968!3d29.58043478618361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb48f77ddf514fd%3A0xdc1ba4c5b7c616e3!2sOFPPT%20ISTA%20Mirleft!5e0!3m2!1sfr!2sma!4v1707327616994!5m2!1sfr!2sma"
                        width={600}
                        height={450}
                        allowFullScreen
                        style={{ left: '0', top: '0', height: '100%', width: '100%', position: 'absolute' }}
                    />
                </div>

                <div className="row px-md-2 mx-md-2">
                    <div className="col-lg-5 col-md-12 text-start fs-5 mb-0 mb-md-0">

                        <h3 className="font-weight-bold fs-1 fw-bold">Contact Us</h3>

                        <p className="text-muted">Our dedicated support team is here to assist you with any questions
                            or concerns you may have. Whether it's a product inquiry, technical support, or just a friendly
                            hello, we look forward to hearing from you!</p>

                        <p className="text-muted ">We value your feedback and inquiries. Feel free to get in touch with
                            us through the following channels:</p>

                        <p>
                            <strong className='font-weight-bold mr-2'>Email: </strong>
                            <a href="mailto:contact@react_laravel_api.com">contact@reactlaravelapi.com</a>
                        </p>
                        <p>
                            <strong className="font-weight-bold mr-2">Phone: </strong>
                            <span href="">+1 (123) 456-7890</span>
                        </p>
                        <p>
                            <strong className="font-weight-bold mr-2">Adress: </strong>
                            <span>123 Main Street,Manhattan,New York, 663123</span>
                        </p>
                    </div>

                    <div className="col-lg-7 card col-md-12 mb-4">

                        <form className='pt-5 px-3'>
                            {/* first & last name input */}
                            <div className="row gx-3 mb-3">
                                <div className="col-md-6">
                                    <label className="fs-6 mb-1">First name</label>
                                    <input className="form-control" type="text" placeholder='enter your first name...' />
                                </div>
                                <div className="col-md-6">
                                    <label className="fs-6 mb-1">Last name</label>
                                    <input className="form-control" type="text" placeholder='enter your lasr name...' />
                                </div>
                            </div>
                            {/* email input */}
                            <div className="mb-3">
                                <label className="fs-6 mb-1">Email Adress </label>
                                <input className="form-control" type="text" placeholder='enter your first email...' />
                            </div>
                            {/* enter password input */}
                            <div className="">
                                <label className="fs-6 mb-1">Enter Message</label>
                                {/* <input className="form-control" type="password" /> */}
                                <textarea className='form-control' rows="4" placeholder='Enter your message...'></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-lg btn-success mt-4 mb-3">Send</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Contact
