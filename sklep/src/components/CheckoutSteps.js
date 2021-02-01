import React from 'react'

export default function CheckoutSteps(props) {
    return (
        <div className="container">
            <div className="row top checkout-steps">
                <div className={props.step1 ? 'active': ''}>Logowanie</div>
                <div className={props.step2 ? 'active': ''}>Szczegóły Dostawy</div>
                <div className={props.step3 ? 'active': ''}>Metoda Płatności</div>
                <div className={props.step4 ? 'active': ''}>Złożenie Zamówienia</div>
            </div>
        </div>

    )
}
