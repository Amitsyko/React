import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Navbar extends Component {


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-warning fw-bold" href="/">New'zWorld</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link text-white" aria-current="page" href="/">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Business</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Entertainment</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">General</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Health</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Science</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Sports</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Technology</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
