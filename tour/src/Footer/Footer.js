import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer >
            <div className="footer1">

                <div className="row1">

                    <div className="column1">
                        <ul className="ul">
                            <li> <Link to="/Services">Services</Link > </li>
                            <li> <Link to="/ContactUs">ContactUs</Link > </li>
                            <li> <Link to="/Feedback">Feedback</Link > </li>
                        </ul>
                    </div>

                    <div className="column1">
                        <ul className="ul">
                            <li> <Link to="/PrivacyPolicy">PrivacyPolicy</Link > </li>
                            <li> <Link to="/StarRating">StarRating</Link > </li>
                            <li> <Link to="/Help">Help</Link > </li>
                        </ul>
                    </div>

                    <div className="column1">
                        <img className='imgLogo' src='maxresdefault.jpg'></img>
                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer

