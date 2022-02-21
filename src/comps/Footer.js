import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Footer(){
    return(
        <React.Fragment>
        <div className="footer flex">
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Popular Categories</h2>
                <Link to="/" className="noul noulh font s14 color">Cars</Link>
                <Link to="/" className="noul noulh font s14 color">Electronic Items</Link>
                <Link to="/" className="noul noulh font s14 color">Fitness-euipment</Link>
                <Link to="/" className="noul noulh font s14 color">Beauty-Product</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Trending Locations</h2>
                <Link to="/" className="noul noulh font s14 color">Jaipur</Link>
                <Link to="/" className="noul noulh font s14 color">Delhi</Link>
                <Link to="/" className="noul noulh font s14 color">Chandigarh</Link>
                <Link to="/" className="noul noulh font s14 color">Mumbai</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">About Us</h2>
                <Link to="/" className="noul noulh font s14 color">About Dukaan</Link>
                <Link to="/" className="noul noulh font s14 color">Careers</Link>
                <Link to="/" className="noul noulh font s14 color">Contact us</Link>
                <Link to="/" className="noul noulh font s14 color">E-mail</Link>
            </div>
            <div className="block flex flex-col">
                <h2 className="title s16 fontb color">Dukaan</h2>
                <Link to="/" className="noul noulh font s14 color">Help</Link>
                <Link to="/" className="noul noulh font s14 color">Team</Link>
                <Link to="/" className="noul noulh font s14 color">Legality</Link>
                <Link to="/" className="noul noulh font s14 color">Join us</Link>
            </div>
        </div>

        <div className="footerb flex">
            <h2 className="cfff font s14">Other countries USA-UK-France</h2>
            <h2 className="cfff font s14">Free classifieds in India copyright 2021-2031 Dukaan</h2>
        </div>
        </React.Fragment>
    )
}
export default Footer;