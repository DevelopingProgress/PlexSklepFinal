import {
    CREATE_PRODUCT_FAIL,
    CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS, PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS
} from "../constants/productConstants";
import axios from "axios";


export const listProducts = () => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_LIST_REQUEST});
        const {data} = await axios.get("/api/products");
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
    }catch (error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
}

export const detailsProduct = (productId) => async (dispatch) => {

    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });
        const { data } = await axios.get('/api/products/' + productId);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,});
    }
};

export const createProduct = () => async (dispatch, getState) => {
    dispatch({type: CREATE_PRODUCT_REQUEST});
    const {userSignin: { userInfo },} = getState();
    try {
        const { data } = await axios.post('/api/products/', {}, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                },
            });
        dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data.product });
    } catch (error) {
        dispatch({type: CREATE_PRODUCT_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,});
    }
}

export const updateProduct = (product) => async (dispatch, getState) => {
    dispatch({type: PRODUCT_UPDATE_REQUEST});
    const {userSignin: { userInfo },} = getState();
    try {
        const { data } = await axios.put(`/api/products/${product._id}`, product, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: PRODUCT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type: PRODUCT_UPDATE_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,});
    }
}

export const deleteProduct = (productId) => async(dispatch, getState) => {
    dispatch({type: PRODUCT_DELETE_REQUEST, payload: productId});
    const {userSignin: { userInfo },} = getState();
    try {
        await axios.delete(`/api/products/${productId}`, {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        });
        dispatch({ type: PRODUCT_DELETE_SUCCESS });
    } catch (error) {
        dispatch({type: PRODUCT_DELETE_FAIL, payload: error.response && error.response.data.message ?
                error.response.data.message : error.message,});
    }
}