import React from 'react'
import CheckoutSteps from "../components/CheckoutSteps";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {savePaymentMethod} from "../actions/cartActions";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";

const PaymentMethodPage = (props) => {

    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping');
    }
    const[paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }

    return (
        <div className="address">
            <SecondaryNavbar/>
            <br/>
            <CheckoutSteps step1 step2/>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Wybierz Metodę Płatności</h1>
                </div>
                <div>
                    <div>
                        <input type="radio"  id="paypal" value="PayPal" name="paymentMethod" required checked onChange={event => setPaymentMethod(event.target.value)}/>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                    <div>
                        <input type="radio"  id="stripe" value="Stripe" name="paymentMethod" required onChange={event => setPaymentMethod(event.target.value)}/>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                    <div>
                        <button className="primary whitened hoverwhite" type="submit">Kontynuuj</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PaymentMethodPage
