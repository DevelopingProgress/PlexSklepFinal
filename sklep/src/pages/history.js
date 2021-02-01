import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listMyOrders} from '../actions/orderActions';
import MessageBox from '../components/MessageBox';
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
import LoadingBoxWhite from "../components/LoadingBoxWhite";


export default function HistoryPage(props) {



    const myOrdersList = useSelector(state => state.myOrdersList);
    const { loading, error, orders } = myOrdersList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listMyOrders());

    }, [dispatch]);



    return (
        <div className="grid-container">
            <SecondaryNavbar/>
            <h1 style={{margin: '10px'}}>Historia Zamówień</h1>
            <div>
                {loading ? (<LoadingBoxWhite/>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>NUMER</th>
                            <th>DATA</th>
                            <th>KWOTA</th>
                            <th>ZAPŁACONE</th>
                            <th>DOSTARCZONE</th>
                            <th>AKCJE</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice.toFixed(2)} zł</td>
                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'Nieopłacone'}</td>
                                <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'Niedostarczone'}</td>
                                <td><button type="button" className="small" onClick={() => {props.history.push(`/order/${order._id}`);}}>Szczegóły</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>

    );
}
