import React, {useEffect} from 'react'
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesP,
    ServicesWrapper,
    ServicesIcon,
    ServicesH3, ServicesBtn, ServicesBtnWrapper
} from "./ServicesElements";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useState} from "react";
import {listProducts} from "../../actions/productActions";





const Services = () => {

    const productList = useSelector((state) => state.productList);
    const {products} = productList;
    const dispatch = useDispatch();
    const [qty] = useState(1);

    useEffect(()=>{
       dispatch(listProducts());
    }, []);


    return (
        <ServicesContainer  id="products">
            <ServicesH1>Produkty</ServicesH1>
            <ServicesWrapper>
                {
                    products.map(product => (
                    <ServicesCard key={product._id}>
                            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                                <ServicesIcon src={process.env.PUBLIC_URL + product.image}  alt="problem"/>
                            </Link>
                            <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                                <ServicesH2>{product.name}</ServicesH2>
                            </Link>
                        <ServicesP>{product.thumbnail}</ServicesP>
                        <ServicesH3>{product.price.toFixed(2)} zł</ServicesH3>
                        {product.countInStock > 0 ? (
                                <ServicesBtn><Link to={`/cart/${product._id}?qty=${qty}`} style={{ textDecoration: 'none', color: 'white' }}>Do koszyka</Link></ServicesBtn>) :
                            (<ServicesH3 style={{ paddingTop:'30px'}} className="danger">Wyprzedano</ServicesH3>)}
                    </ServicesCard>
                ))
                }
            </ServicesWrapper>
        </ServicesContainer>

    )
}

export default Services
