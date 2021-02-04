import React from 'react'
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavBtn,
    NavBtnLink,
    NavLogo,
} from "./SecondaryNavbarElements";
import {FaBars} from "react-icons/all";
import {IconContext} from "react-icons/lib";
import {useDispatch, useSelector} from "react-redux";
import {NavLogoImg} from "./NavbarElements";
import plex from "../../images/plex to edit.png";
import whiteplex from "../../images/whiteplex.png";
import {signout} from "../../actions/userActions";
import {Link} from "react-router-dom";

export const SecondaryNavbar = ({toggle}) => {

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();


    const signoutHandler = () => {
        dispatch(signout());
        window.location.reload(false);
    }



    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" className="swap-on-hover">
                            <NavLogoImg src={plex} id="navLogo" className="swap-on-hover__front-image"/>
                            <NavLogoImg src={whiteplex} id="navLogo" className="swap-on-hover__back-image"/>
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavBtn>
                            <NavBtnLink to="/cart">
                                <i className="fa fa-shopping-bag"/> Koszyk
                                {cartItems.length > 0 && (
                                    <span className="badge">{cartItems.length}</span>
                                )}
                            </NavBtnLink>

                            {userInfo ? (
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
                            ) : (<Link to="/login" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Zaloguj się</Link>)}
                            {userInfo && userInfo.isAdmin && (
                                <div className="dropdown">
                                    <Link to="#" className="whitened hoverred" style={{ fontSize: '1.3rem'}}>
                                        Administracja <i className="fa fa-caret-down"/>
                                    </Link>
                                    <ul className="dropdown-content">
                                        <li>
                                            <Link to="/admin" className="whitened hoverred" style={{fontSize: '1.3rem'}}>Panel Administratora</Link>
                                        </li>
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
                                            <Link to="/" className="whitened hoverred" style={{fontSize: '1.3rem'}} onClick={signoutHandler}>Wyloguj się</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
