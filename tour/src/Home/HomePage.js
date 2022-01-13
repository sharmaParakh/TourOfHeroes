import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

function HomePage() {
    return (
        <div>
            <nav className="Nav1">
                {/* <img className='img1' src="/maxresdefault.jpg" alt="" width="50" height="50"></img> */}{" "}
                <Link to="/Dashboard">
                    <button className="button1"> Dashboard </button>
                </Link>
                <Link to="/Heroes">
                    <button className="button2"> Heroes </button>
                </Link>
            </nav>

            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img className="pic" src="11.jpeg" />
                    </div>
                    <div className="flip-box-back">
                        <h2>HERO</h2>
                        <p>What a Hero</p>
                    </div>
                </div>
            </div>

            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img className="pic" src="12.jpeg" />
                    </div>
                    <div className="flip-box-back">
                        <h2>HERO</h2>
                        <p>What a Hero</p>
                    </div>
                </div>
            </div>

            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img className="pic" src="13.jpeg" />
                    </div>
                    <div className="flip-box-back">
                        <h2>HERO</h2>
                        <p>What a Hero</p>
                    </div>
                </div>
            </div>

            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img className="pic" src="14.jpeg" />
                    </div>
                    <div className="flip-box-back">
                        <h2>HERO</h2>
                        <p>What a Hero</p>
                    </div>
                </div>
            </div>

            <div className="flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img className="pic" src="15.jpeg" />
                    </div>
                    <div className="flip-box-back">
                        <h2>HERO</h2>
                        <p>What a Hero</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default HomePage;
