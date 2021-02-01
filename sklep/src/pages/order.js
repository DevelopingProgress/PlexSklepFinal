import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {deliverOrder, detailsOrder, payOrder} from "../actions/orderActions";
import LoadingBoxWhite from "../components/LoadingBoxWhite";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
import {useState} from "react";
import axios from "axios";
import {PayPalButton} from "react-paypal-button-v2";
import {ORDER_DELIVER_RESET, ORDER_PAY_RESET} from "../constants/orderConstants";

export default function OrderPage (props) {

    const orderId = props.match.params.id;
    const [sdkReady, setSdkReady] = useState(false);
    const orderDetails = useSelector((state) => state.orderDetails);
    const { order, loading, error } = orderDetails;
    const orderPay = useSelector((state) => state.orderPay);
    const { loading: loadingPay, error: errorPay, success: successPay,} = orderPay;
    const orderDeliver = useSelector((state) => state.orderDeliver);
    const { loading: loadingDeliver, error: errorDeliver, success: successDeliver,} = orderDeliver;
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();


    useEffect(() => {
        const addPayPalScript = async () => {
                const { data } = await axios.get('/api/config/paypal');
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = `https://www.paypal.com/sdk/js?client-id=${data}&currency=PLN`;
                script.async = true;
                script.onload = () => {
                    setSdkReady(true);
                };
                document.body.appendChild(script);
        };
        if (!order || successPay || successDeliver || (order && order._id !== orderId)) {
            dispatch({type:ORDER_PAY_RESET});
            dispatch({type:ORDER_DELIVER_RESET});
            dispatch(detailsOrder(orderId));
        } else {
            if (!order.isPaid) {
                if (!window.paypal) {
                    addPayPalScript();
                } else {
                    setSdkReady(true);
                }
            }
        }
    }, [dispatch, orderId, sdkReady, successPay, order, successDeliver]);

    const successPaymentHandler = (paymentResult) => {
        dispatch(payOrder(order, paymentResult));
    }


    const deliverHandler = () => {
        dispatch(deliverOrder(order._id));
    }

    return loading ? (<LoadingBoxWhite/>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
        <div>
            <SecondaryNavbar/>
            <div className="container">
                <div className="row top">
                    <div className="col-2">
                        <ul>
                            <li>
                                <div className="card card-body">
                                    <h1 style={{marginBottom: '10px', color: 'black'}}>Numer Zamówienia: {order._id}</h1>
                                    <h2>Dostawa</h2>
                                    <p>
                                        <strong>Imię i Nazwisko: </strong> {order.shippingAddress.name} <br/>
                                        <strong>Adres Wysyłki: </strong> {order.shippingAddress.address}, &nbsp;
                                        {order.shippingAddress.city}, &nbsp;
                                        {order.shippingAddress.postalCode}, &nbsp;
                                        {order.shippingAddress.country}
                                    </p>

                                    {order.isDelivered ? <MessageBox variant="success">Dostarczono: {order.deliveredAt}</MessageBox>: <MessageBox variant="danger">Zamówienie Niedostarczone</MessageBox>}
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Metoda Płatności</h2>
                                    <p>
                                        {order.paymentMethod} <br/>
                                    </p>
                                    {order.isPaid ? <MessageBox variant="success">Zapłacono: {order.paidAt}</MessageBox>: <MessageBox variant="danger">Zamówienie Nieopłacone</MessageBox>}
                                </div>
                            </li>
                            <li>
                                <div className="card card-body">
                                    <h2>Zamówienie</h2>
                                    <ul>
                                        {order.orderItems.map((item) => (
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
                                            <div>{order.itemsPrice.toFixed(2)} zł</div>
                                        </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>Koszt Dostawy</div>
                                        <div>{order.shippingPrice.toFixed(2)} zł</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div>VAT</div>
                                        <div>{order.taxPrice.toFixed(2)} zł</div>
                                    </div>
                                </li>
                                <li>
                                    <div className="row">
                                        <div><strong>Razem</strong></div>
                                        <div><strong> {order.totalPrice.toFixed(2)} zł</strong></div>
                                    </div>
                                </li>
                                {!order.isPaid && (
                                    <li>
                                        {!sdkReady ? (
                                            <LoadingBox/>
                                        ) : (
                                            <div>
                                                {errorPay && (
                                                    <MessageBox variant="danger">{errorPay}</MessageBox>
                                                )}
                                                {loadingPay && <LoadingBox/>}

                                                <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} currency="PLN"/>
                                            </div>
                                        )}
                                    </li>
                                )}
                                {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                    <li>
                                        <button type="button" className="primary block whitened hoverblack" onClick={deliverHandler}>Dostarcz Zamówienie</button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

