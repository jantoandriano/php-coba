import React, { Component } from 'react'
import './navbar.scss'



export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">LOGO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Log In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        )
    }
}
