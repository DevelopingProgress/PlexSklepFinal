import React from 'react';
import {useEffect} from "react";
import {addToCart, removeFromCart} from "../actions/cartActions";
import {useDispatch, useSelector} from "react-redux";
import MessageBox from "../components/MessageBox";
import {Link} from "react-router-dom";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
import {SecondarySidebar} from "../components/Sidebar/secondarySidebar";
import {useState} from "react";
require('../components/Product/product.css');

export default function CartPage(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = () => {
        props.history.push(`/login?redirect=shipping`);
    }

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen)
    };

    return(
        <div className="grid-container">
            <SecondarySidebar isOpen={isOpen} toggle={toggle}/>
            <SecondaryNavbar  toggle={toggle}/>
            <div className="container">
            <div className="cart">
                <div className="row top">
                    <div className="col-2">
                        <h1>Koszyk</h1>
                        {cartItems.length === 0 ? <MessageBox>Koszyk jest pusty!</MessageBox>
                            :
                            (
                                <ul>
                                    {cartItems.map((item) => (
                                        <li key={item.product}>
                                            <div className="row  borderwhite">
                                                <div>
                                                    <Link to={`/product/${item.product}`}> <img
                                                        className="small hoverbig"
                                                        src={process.env.PUBLIC_URL  + item.image}
                                                        alt={item.name}
                                                    /></Link>
                                                </div>
                                                <div className="min-30">
                                                    <h2><Link to={`/product/${item.product}`} className="hoverred whitened" >{item.name}</Link></h2>
                                                </div>
                                                <div>
                                                    <select
                                                        value={item.qty}
                                                        onChange={(e) =>
                                                            dispatch(
                                                                addToCart(item.product, Number(e.target.value))
                                                            )
                                                        }
                                                    >
                                                        {[...Array(item.countInStock).keys()].map((x) => (
                                                            <option maxValue={10} key={x + 1} value={x + 1}>
                                                                {x + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="whitened"><h3>{item.price.toFixed(2)} zł</h3></div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        onClick={() => removeFromCartHandler(item.product)}
                                                        style={{color: "#de354c"}}
                                                        className="hoverborderred"
                                                    >
                                                        Usuń
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                    </div>
                    <div className="col-1" style={{}}>
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <h2>
                                        Razem({cartItems.reduce((a, c) => a + c.qty, 0)} produkty) :  {cartItems.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2)} zł
                                    </h2>
                                </li>
                                <li>
                                    <button
                                        type="button"
                                        onClick={checkoutHandler}
                                        className="primary block hoverblack whitened"
                                        disabled={cartItems.length === 0}
                                    >
                                        Złóż Zamówienie
                                    </button>
                                    <Link to="/" style={{marginTop: '30px', textDecoration: 'none'}}>
                                        <button
                                            type="button"
                                            className="block hoverblack"
                                        >
                                            Kontynuuj zakupy
                                        </button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>

    );

}