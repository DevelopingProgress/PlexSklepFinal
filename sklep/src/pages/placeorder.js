import React from 'react'
import CheckoutSteps from "../components/CheckoutSteps";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {createOrder} from "../actions/orderActions";
import {useEffect} from "react";
import {ORDER_CREATE_RESET} from "../constants/orderConstants";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";

const PlaceOrderPage = (props) => {
    const cart = useSelector(state => state.cart);
    if(!cart.paymentMethod){
        props.history.push('/payment');
    }
    const orderCreate = useSelector(state => state.orderCreate);
    const {loading, success, error, order} = orderCreate;
    const dispatch = useDispatch();
    const toPrice = (num) => Number(num.toFixed(2));
    cart.itemsPrice = toPrice(cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0));
    cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
    cart.taxPrice = toPrice(0.23 * cart.itemsPrice);
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;

    const placeOrderHolder = () => {
        dispatch(createOrder({...cart, orderItems: cart.cartItems}))
    }

    useEffect(() => {
        if(success){
            props.history.push(`/order/${order._id}`);
            dispatch({type: ORDER_CREATE_RESET});
        }
    }, [dispatch, order, props.history, success])

    return (
        <div>
            <SecondaryNavbar/>
            <br/>
            <CheckoutSteps step1 step2 step3/>
            <div className="container">
                <div className="row top">
                    <div className="col-2">
                        <ul>
                            <li>
                                <div className="card card-body">
                                    <h2>Dostawa</h2>
                                    <p>
                                        <strong>Imię i Nazwisko: </strong> {cart.shippingAddress.name} <br/>
                                        <strong>Adres Wysyłki: </strong> {cart.shippingAddress.address}, &nbsp;
                                        {cart.shippingAddress.city}, &nbsp;
                                        {cart.shippingAddress.postalCode}, &nbsp;
                                        {cart.shippingAddress.country}
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Metoda Płatności</h2>
                                    <p>
                                        {cart.paymentMethod} <br/>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Zamówienie</h2>
                                    <ul>
                                        {cart.cartItems.map((item) => (
                                            <li key={item.product}>
                                                <div className="row  borderwhite">
                                                    <div>
                                                        <Link to={`/product/${item.product}`}> <img
                                                            className="small hoverbig"
                                                            src={process.env.PUBLIC_URL + item.image}
                                                            alt={item.name}
                                                        /></Link>
                                                    </div>
                                                    <div className="min-30">
                                                        <h2><Link to={`/product/${item.product}`} className="hoverred blacked" >{item.name}</Link></h2>
                                                    </div>
                                                    <div className="blacked"><p>{item.qty} x {item.price} zł = {item.qty * item.price} zł</p></div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <h2>Podsumowanie Zamówienia</h2>
                                </li>
                                <li>
                                        <div className="row">
                                            <div>Suma</div>
                                            <div>{cart.itemsPrice.toFixed(2)} zł</div>
                                        </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Koszt Dostawy</div>
                                        <div>{cart.shippingPrice.toFixed(2)} zł</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>VAT</div>
                                        <div>{cart.taxPrice.toFixed(2)} zł</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div><strong>Razem</strong></div>
                                        <div><strong> {cart.totalPrice.toFixed(2)} zł</strong></div>
                                    </div>
                                </li>
                                <li>
                                    { loading && <LoadingBox className="blacked"/> }
                                    { error && <MessageBox variant="danger">{error}</MessageBox> }
                                    <button type="button" className="primary block whitened hoverblack" disabled={cart.cartItems.length === 0} onClick={placeOrderHolder}>
                                        <h3>Zamów</h3>
                                    </button>
                                    <Link to="/" style={{marginTop: '30px', textDecoration: 'none'}}>
                                        <button
                                            type="button"
                                            className="block hoverblack"
                                        >
                                            Powrót do zakupów
                                        </button></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PlaceOrderPage
