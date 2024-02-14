import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


export default class Navbar extends Component {


    render() {
        return (
            <>
                <div>
                    <nav className="navbar navbar-expand-lg bg-dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand text-warning fw-bold" to="/">New'zWorld</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/business">Business</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/health">Health</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/science">Science</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/sports">Sports</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/technology">Technology</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}
