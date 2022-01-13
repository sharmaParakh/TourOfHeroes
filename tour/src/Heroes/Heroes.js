import './Heroes.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Heroes() {
    return (
        <div>
            <nav className="Nav2">
                <Link to="/Bollywood">
                    <button className="button3"> Bollywood </button>
                </Link>
                <Link to="/Hollywood">
                    <button className="button4"> Hollywood </button>
                </Link>
            </nav>
        </div>
    )
}

export default Heroes
