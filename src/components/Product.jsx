import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';

const Product = () => {
    const cardItem = (item) => {
        return (
            <div className="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="lead">${item.price}</p>
                    <NavLink to={`/product/${item.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="buttons d-flex justify-content-center pb-5">
                        <button className="btn btn-outline-dark me-2" >All</button>
                        <button className="btn btn-outline-dark me-2" >Men's Clothing</button>
                        <button className="btn btn-outline-dark me-2" >Women's Clothing</button>
                        <button className="btn btn-outline-dark me-2" >Jewelery</button>
                    </div>
                    {DATA.map(cardItem)}
                </div>
            </div>
        </>
    )
}

export default Product;