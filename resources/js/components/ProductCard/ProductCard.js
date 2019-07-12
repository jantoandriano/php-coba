import React from 'react'
import './productcard.scss'


export default function ProductCard(props) {
    return (
        <div className='container col-sm mt-4 p-0'>
            <div className="card border-rounded shadow">
                <img src='/public/img/house-1.jpg' className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title text-info">{props.product_title}</h5>
                        <p className="card-text">{props.product_desc}</p>
                        <a href="#" className="btn btn-sm btn-dark">Details</a>
                    </div>
            </div>
        </div>
    )
}
