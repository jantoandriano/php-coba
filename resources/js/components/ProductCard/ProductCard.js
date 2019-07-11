import React from 'react'

export default function ProductCard(props) {
    return (
        <div className='container col-sm mt-4'>
            <div class="card" style={{width: '18rem'}}>
                <img class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title text-info">{props.product_title}</h5>
                        <p class="card-text">{props.product_desc}</p>
                        <a href="#" class="btn btn-dark">Details</a>
                    </div>
            </div>
        </div>
    )
}
