import React, { Component } from 'react'
import ProductDetails from '../ProductDetails/ProductDetails';

export default class Products extends Component {
    render() {
        return (
            <div>
                <h3>Products components</h3>
                <ProductDetails/>
            </div>
        )
    }
}
