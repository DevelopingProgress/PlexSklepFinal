import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {deleteOrder, listOrders, orderDelete} from "../actions/orderActions";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
import LoadingBoxWhite from "../components/LoadingBoxWhite";
import MessageBox from "../components/MessageBox";
import {deleteProduct} from "../actions/productActions";
import {ORDER_DELETE_RESET} from "../constants/orderConstants";

export default function OrderListPage(props) {

    const orderList = useSelector(state => state.orderList);
    const {loading, error, orders} = orderList;
    const deleteOrder = useSelector(state => state.deleteOrder);
    const {loading: loadingDelete, error: errorDelete, success: successDelete} = deleteOrder;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: ORDER_DELETE_RESET});
        dispatch(listOrders());
    }, [dispatch, successDelete]);

    function deleteHandler(order) {
        if(window.confirm(`Jesteś pawny/a, że chcesz usunąć zamówienie numer ${order._id}?`)){
            dispatch(orderDelete(order._id));
        }
    }

    return (
        <div className="grid-container">
            <SecondaryNavbar/>
            <h1 style={{margin: '10px'}}>Zamówienia</h1>
            {loadingDelete && <LoadingBoxWhite/>}
            {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            <div>
                {loading ? (<LoadingBoxWhite/>) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
                    <table className="table">
                        <thead>
                        <tr>
                            <th>NUMER</th>
                            <th>EMAIL</th>
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
                                <td>{order.user.email}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice.toFixed(2)} zł</td>
                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'Nieopłacone'}</td>
                                <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'Niedostarczone'}</td>
                                <td>
                                    <button type="button" className="small" onClick={() => {props.history.push(`/order/${order._id}`);}}>Szczegóły</button>
                                    <button type="button" className="small" onClick={() => deleteHandler(order)}>Usuń</button>
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