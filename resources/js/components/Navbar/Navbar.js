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
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Sign Up</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Log In</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            
        )
    }
}
