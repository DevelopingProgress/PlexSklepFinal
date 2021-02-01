import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import MessageBox from '../components/MessageBox';
import {IoMdArrowRoundBack} from "react-icons/all";
import LoadingBoxWhite from "../components/LoadingBoxWhite";
require('../components/Product/product.css');


export default function ProductPage(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };


    useEffect(() => {

        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);


    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return (

        <div>
            {loading ? (
                <LoadingBoxWhite style={{color: "#f8f8f8"}}/>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <div>
                    <Link to="/"><IoMdArrowRoundBack className="arrow hoverarrow" style={{color:'white'}}/></Link>
                    <div className="row top">
                        <div className="col-2">
                            <img
                                className="large"
                                src={process.env.PUBLIC_URL + product.image}
                                alt={product.name}
                            />

                        </div>
                        <div className="col-1" style={{margin: '20px'}}>
                            <ul>
                                <li>
                                    <h1>{product.name}</h1>
                                </li>
                                <li>
                                    <h4 style={{color:'white'}}>Opis Produktu:</h4>
                                    <p style={{color:'white'}}>{product.description}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        <div className="row">
                                            <div>Cena</div>
                                            <div className="price">{product.price} zł</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="row">
                                            <div>Status</div>
                                            <div>
                                                {product.countInStock > 0 ? (
                                                    <span className="success">Produkt Dostępny</span>
                                                ) : (
                                                    <span className="danger">Produkt Niedostępny</span>
                                                )}
                                            </div>
                                        </div>
                                    </li>
                                    {product.countInStock > 0 && (
                                        <>
                                            <li>
                                                <div className="row">
                                                    <div>Ilość</div>
                                                    <div>
                                                        <select
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                        >
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={addToCartHandler}
                                                    className="primary block whitened hoverblack"
                                                >
                                                    Do Koszyka
                                                </button>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}