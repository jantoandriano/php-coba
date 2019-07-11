import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar/Navbar';
// import Headers from './Headers/Headers'
// import Products from './Products/Products';
// import Footer from './Footer/Footer';


export default class Main extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                {/* <Headers/>
                <Products/>
                <Footer/> */}
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Main />, document.getElementById('root'));
}
