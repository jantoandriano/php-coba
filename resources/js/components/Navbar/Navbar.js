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
           <div className='container'>
               <h1 className='nav-title'>NAVBAR</h1>
           </div>
        )
    }
}
