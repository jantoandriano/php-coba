import React, { Component } from 'react'
import ProductCard from '../ProductCard/ProductCard';

export default class Products extends Component {
    render() {
        return (
            <div className='container mt-4'>
                <h3>Products Component</h3>
                <div className='row'>
                    <ProductCard
                        product_title='Product Title'
                        product_desc='Some quick example text to build on the card title and make up the bulk of the card contents'
                    />
                    <ProductCard 
                        product_title='Product Title'
                        product_desc='Some quick example text to build on the card title and make up the bulk of the card contents'
                    />
                    <ProductCard 
                        product_title='Product Title'
                        product_desc='Some quick example text to build on the card title and make up the bulk of the card contents'
                    />
                    <ProductCard
                        product_title='Product Title'
                        product_desc='Some quick example text to build on the card title and make up the bulk of the card contents'
                    />
                    <ProductCard 
                        product_title='Product Title'
                        product_desc='Some quick example text to build on the card title and make up the bulk of the card contents'
                    />
                    <ProductCard 
                        product_title='Product Title'
                        product_desc='Some quick example text to build on the card title and make up the bulk of the card contents'
                    />
                </div>
            </div>
        )
    }
}
