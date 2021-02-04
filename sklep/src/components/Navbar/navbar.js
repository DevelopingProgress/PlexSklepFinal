import React from 'react'
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavItem,
    NavLinks,
    NavLogo, NavLogoImg,
    NavMenu
} from "./NavbarElements";
import {FaBars} from "react-icons/all";
import {useEffect, useState} from "react";
import {IconContext} from "react-icons/lib";
import {animateScroll as scroll} from "react-scroll";
import {useDispatch, useSelector} from "react-redux";
import plex from '../../images/plex to edit.png'
import whiteplex from '../../images/whiteplex.png'
import {signout} from "../../actions/userActions";
import {Link} from "react-router-dom";

export const Navbar = ({toggle}) => {

    const [scrollNav,setScrollNav] = useState(false);
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();

    const changeNav = () => {

        if(window.scrollY >=80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    const signoutHandler = () => {
        dispatch(signout());
        window.location.reload(false);
    }

    return (
       <>
           <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome} className="swap-on-hover">
                            <NavLogoImg src={plex} id="navLogo" className="swap-on-hover__front-image"/>
                            <NavLogoImg src={whiteplex} id="navLogo" className="swap-on-hover__back-image"/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="offers" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Oferta</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="products" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Produkty</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Kontakt</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="information" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Informacje</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/cart">
                            <i className="fa fa-shopping-bag"/> Koszyk
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </NavBtnLink>

                        {userInfo && !userInfo.isAdmin ? (
                            <div className="dropdown">
                                <Link to="#" className="whitened hoverred" style={{ fontSize: '1.3rem'}}>
                                    {userInfo.name} <i className="fa fa-caret-down"/>
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/profile" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Profil</Link>
                                    </li>
                                    <li>
                                        <Link to="/history" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Moje Zamówienia</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="whitened hoverred" style={{fontSize: '1.3rem'}} onClick={signoutHandler}>Wyloguj się</Link>
                                    </li>
                                </ul>
                            </div>
                            ) : (userInfo && userInfo.isAdmin ? (
                            <div className="dropdown">
                                <Link to="#" className="whitened hoverred" style={{ fontSize: '1.3rem'}}>
                                    Administracja <i className="fa fa-caret-down"/>
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/productlist" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Produkty</Link>
                                    </li>
                                    <li>
                                        <Link to="/orderlist" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Zamówienia</Link>
                                    </li>
                                    <li>
                                        <Link to="/userlist" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Użytkownicy</Link>
                                    </li>
                                    <li>
                                        <Link to="#signout" className="whitened hoverred" style={{fontSize: '1.3rem'}} onClick={signoutHandler}>Wyloguj się</Link>
                                    </li>
                                </ul>
                            </div>
                        ): (<Link to="/login" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Zaloguj się</Link>))}



                    </NavBtn>
                </NavbarContainer>
            </Nav>
           </IconContext.Provider>
       </>
    )
}
