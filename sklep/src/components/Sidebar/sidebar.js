import React from 'react'
import {CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarWrapper, SideBtnWrap, SidebarRoute, SidebarMenu} from "./SidebarElements";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../../actions/userActions";
import {Link} from "react-router-dom";



export const Sidebar = ({isOpen, toggle}) => {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();


    const signoutHandler = () => {
        dispatch(signout());
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
             <Icon onClick={toggle}>
                 <CloseIcon/>
             </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="offers" onClick={toggle}>Oferta</SidebarLink>
                    <SidebarLink to="products" onClick={toggle}>Produkty</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Kontakt</SidebarLink>
                    <SidebarLink to="information" onClick={toggle}>Informacje</SidebarLink>
                    {userInfo ? (
                        <div className="dropdown">
                            <p style={{color: '#f8f8f8', fontSize: '1.3rem'}}>
                                {userInfo.name} <i className="fa fa-caret-down"/>
                            </p>
                            <ul className="dropdown-content">
                                <Link to="#signout" onClick={signoutHandler}>Wyloguj się</Link>
                            </ul>
                        </div>
                    ) : (<Link to="/login" style={{color: '#f8f8f8', fontSize: '1.3rem'}}>Zaloguj się</Link>
                    )}
                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to="/cart" onClick={toggle}>Koszyk{cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )}
                    </SidebarRoute>

                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}
