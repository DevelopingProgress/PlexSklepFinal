import React from 'react';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {detailsProduct, updateProduct} from "../actions/productActions";
import LoadingBoxWhite from "../components/LoadingBoxWhite";
import MessageBox from "../components/MessageBox";
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
import {Icon} from "../components/Login/LoginElements";
import {FaArrowLeft} from "react-icons/all";
import {PRODUCT_UPDATE_RESET} from "../constants/productConstants";
import axios from "axios";

export default function ProductEditPage(props){
    const productId = props.match.params.id;
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState('');
    const [brand, setBrand] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product} = productDetails;
    const productUpdate = useSelector(state => state.productUpdate);
    const {loading: loadingUpdate, error: errorUpdate, success: successUpdate} = productUpdate;

    useEffect(() => {
        if(successUpdate){
            dispatch({type: PRODUCT_UPDATE_RESET});
            props.history.push('/productlist');
        }
        if(!product || (product._id !== productId)){
            dispatch(detailsProduct(productId));
        }else {
            setName(product.name);
            setImage(product.image);
            setPrice(product.price);
            setBrand(product.brand);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setThumbnail(product.thumbnail);
            setDescription(product.description);
        }

    }, [product, dispatch, productId, successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProduct({_id: productId, name, image, price, brand, category, countInStock, thumbnail, description}));
    }

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('image', file);
        setLoadingUpload(true);
        try {
            const {data} = await axios.post('/api/uploads', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
            setImage(data);
            setLoadingUpload(false);
        } catch (error) {
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    }

    return (
        <div className="grid-container">
            <SecondaryNavbar/>
            <Icon to="/productlist"><FaArrowLeft/></Icon>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Edytuj Produkt {productId}</h1>
                </div>
                {loadingUpdate && <LoadingBoxWhite/>}
                {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
                {loading ? <LoadingBoxWhite/>:
                error ? <MessageBox variant="danger">{error}</MessageBox>:(
                    <>
                        <div>
                            <label htmlFor="name" className="whitened">Nazwa</label>
                            <input type="text" id="name" placeholder="Wprowadź Nazwę Przedmiotu" value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="image" className="whitened">Zdjęcie</label>
                            <input type="text" id="image" placeholder="Wprowadź Zdjęcie Przedmiotu" value={image}
                                   onChange={(e) => setImage(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="imageFile" className="whitened">Plik Ze Zdjęciem</label>
                            <input type="file"  id="imageFile" style={{color: 'white'}} aria-label="Wybierz Zdjęcie" onChange={uploadFileHandler}/>
                            {loadingUpload && <LoadingBoxWhite/>}
                            {errorUpload && <MessageBox variant="danger">{errorUpload}</MessageBox>}
                        </div>
                        <div>
                            <label htmlFor="price" className="whitened">Cena</label>
                            <input type="text" id="price" placeholder="Wprowadź Cenę Przedmiotu" value={price}
                                   onChange={(e) => setPrice(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="brand" className="whitened">Marka</label>
                            <input type="text" id="brand" placeholder="Wprowadź Markę Przedmiotu" value={brand}
                                   onChange={(e) => setBrand(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="category" className="whitened">Kategoria</label>
                            <input type="text" id="category" placeholder="Wprowadź Kategorię Przedmiotu" value={category}
                                   onChange={(e) => setCategory(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="countInStock" className="whitened">Ilość</label>
                            <input type="text" id="countInStock" placeholder="Wprowadź Ilość Przedmiotów" value={countInStock}
                                   onChange={(e) => setCountInStock(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="thumbnail" className="whitened">Opis Na Stronie Głównej</label>
                            <input type="text" maxLength='75' id="thumbnail" placeholder="Wprowadź Opis Przedmiotu Na Stronie Głównej" value={thumbnail}
                                      onChange={(e) => setThumbnail(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="description" className="whitened">Opis</label>
                            <textarea rows="20" id="description" placeholder="Wprowadź Opis Przedmiotu" value={description}
                                   onChange={(e) => setDescription(e.target.value)}/>
                        </div>
                        <div>
                            <label/>
                            <button className="primary hoverwhite whitened" type="submit">
                                Zaktualizuj
                            </button>
                        </div>
                    </>
                )}
            </form>
        </div>
    );

}