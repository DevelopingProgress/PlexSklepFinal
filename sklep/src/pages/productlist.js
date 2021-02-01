import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createProduct, deleteProduct, listProducts} from "../actions/productActions";
import {useEffect} from "react";
import LoadingBoxWhite from "../components/LoadingBoxWhite";
import MessageBox from "../components/MessageBox";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
import {CREATE_PRODUCT_RESET, PRODUCT_DELETE_RESET} from "../constants/productConstants";

export default function ProductListPage(props) {
    const productDelete = useSelector(state => state.productDelete);
    const { loading: loadingDelete, error: errorDelete, success: successDelete} = productDelete;
    const productCreate = useSelector(state => state.productCreate);
    const {loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct} = productCreate;
    const productList = useSelector(state => state.productList);
    const {loading, error, products} = productList;
    const dispatch = useDispatch();


    useEffect(() => {
        if(successCreate){
            dispatch({type: CREATE_PRODUCT_RESET});
            props.history.push(`/product/${createdProduct._id}/edit`);
        }
        if(successDelete){
            dispatch({type: PRODUCT_DELETE_RESET});
        }
        dispatch(listProducts());
    }, [createdProduct, dispatch, props.history, successCreate, successDelete]);



    const deleteHandler = (product) => {
        if(window.confirm(`Jesteś pawny/a, że chcesz usunąć produkt ${product.name}?`)){
            dispatch(deleteProduct(product._id));
        }
    }

    const createHandler = () => {
        dispatch(createProduct());
    }

    return (
      <div className="grid-container">
          <SecondaryNavbar/>

              <div className="row">
                  <h1 style={{margin: '10px'}}>Produkty</h1>
                  <button className="primary whitened hoverwhite" type="button" onClick={createHandler}>Utwórz Produkt</button>
              </div>
              {loadingDelete && <LoadingBoxWhite/>}
              {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
              {loadingCreate && <LoadingBoxWhite/>}
              {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
              {
                  loading ? <LoadingBoxWhite/>:
                      error ? <MessageBox variant="danger">{error}</MessageBox>:
                          <table className="table">
                              <thead>
                              <tr>
                                  <th>NUMER</th>
                                  <th>NAZWA</th>
                                  <th>CENA</th>
                                  <th>KATEGORIA</th>
                                  <th>MARKA</th>
                                  <th>AKCJE</th>
                              </tr>
                              </thead>
                              <tbody>
                              {
                                  products.map((product) => (
                                      <tr key={product._id}>
                                          <td>{product._id}</td>
                                          <td>{product.name}</td>
                                          <td>{product.price}</td>
                                          <td>{product.category}</td>
                                          <td>{product.brand}</td>
                                          <td>
                                              <button type="button" className="small" onClick={() => props.history.push(`/product/${product._id}/edit`)}>Edytuj</button>
                                              <button type="button" className="small" onClick={() => deleteHandler(product)}>Usuń</button>
                                          </td>
                                      </tr>
                                  ))
                              }
                              </tbody>

                          </table>
              }
      </div>
    );
}