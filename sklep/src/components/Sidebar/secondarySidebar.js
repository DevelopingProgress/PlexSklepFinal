import React from 'react'
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarWrapper,
    SideBtnWrap,
    SidebarRoute,
    SidebarLinkR
} from "./SidebarElements";
import {useDispatch, useSelector} from "react-redux";
import {signout} from "../../actions/userActions";



export const SecondarySidebar = ({isOpen, toggle}) => {
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
                <SidebarLinkR to="/" onClick={toggle}>Wróć do Strony Głównej</SidebarLinkR>
                <br/>
                <SideBtnWrap>
                    <SidebarRoute to="/cart" onClick={toggle}>Koszyk{cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )}
                    </SidebarRoute>

                    {userInfo ? (
                        <SidebarRoute to="/profile">Moje Konto ({userInfo.name})</SidebarRoute>
                    ) : (<SidebarRoute to="/login">Zaloguj się</SidebarRoute>
                    )}
                    {userInfo && (<SidebarRoute to="#logout" onClick={signoutHandler}>Wyloguj się</SidebarRoute>)}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
}
