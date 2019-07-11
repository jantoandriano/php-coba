import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar';
import Products from './Products/Products';
import Headers from './Headers/Headers'
// import Footer from './Footer/Footer';


export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Headers/>
                <Products/>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
