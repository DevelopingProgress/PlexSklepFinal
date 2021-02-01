import React from 'react'
import CheckoutSteps from "../components/CheckoutSteps";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveAddress} from "../actions/cartActions";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
require('../components/Product/product.css');

const AddressPage = (props) => {
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    if(!userInfo) {
        props.history.push("/login");
    }
    const cart = useSelector(state => state.cart);
    const {shippingAddress} = cart;
    const [name, setName] = useState(shippingAddress.name);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveAddress({name, address, city, postalCode, country}));
        props.history.push('/payment');

    }


    return (

            <div className="address">
                <SecondaryNavbar/>
                <br/>
                <CheckoutSteps step1/>
                <form className="form" onSubmit={submitHandler}>
                    <div>
                        <h1>Dane Adresowe</h1>
                    </div>
                    <div>
                        <label htmlFor="name">Imię i Nazwisko</label>
                        <input type="text" id="name" placeholder="Jan Kowalski" value={name} onChange={event => setName(event.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="address">Adres</label>
                        <input type="text" id="address" placeholder="Prosta 2/3" value={address} onChange={event => setAddress(event.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="city">Miasto</label>
                        <input type="text" id="city" placeholder="Warszawa" value={city} onChange={event => setCity(event.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="postalCode">Kod Pocztowy</label>
                        <input type="text" id="postalCode" placeholder="00-001" value={postalCode} onChange={event => setPostalCode(event.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="country">Kraj</label>
                        <input type="text" id="country" placeholder="Polska" value={country} onChange={event => setCountry(event.target.value)} required/>
                    </div>
                    <div>
                        <label/>
                        <button className="primary whitened hoverwhite" type="submit">Kontynuuj</button>
                    </div>
                </form>
            </div>
    )
}

export default AddressPage
