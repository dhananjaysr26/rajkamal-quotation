import React from 'react';
import "./Footer.css";
function Footer() {
    return (
        <div className="container">
            <footer style={{ backgroundColor: '#deded5' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#818963' }}>footer content</h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
                                voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>


                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2021 Copyright:
                    <a className="text-dark" href="http://www.rajkamalbarscan.com/" style={{ marginLeft: "0.25rem" }}>Rajkamal Barscan</a>
                </div>

            </footer>
        </div>
    )
}

export default Footer
