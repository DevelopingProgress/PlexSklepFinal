import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listMyOrders} from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {SecondaryNavbar} from "../components/Navbar/secondaryNavbar";
import {detailsUser, updateUserProfile} from "../actions/userActions";
import {
    Form,
    FormContent,
    FormInput,
    FormLabel,
    FormWrap,
} from "../components/Login/LoginElements";
import {useState} from "react";
import {USER_UPDATE_PROFILE_RESET} from "../constants/userConstants";

export default function ProfilePage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    const myOrdersList = useSelector(state => state.myOrdersList);
    const {loading, error, orders} = myOrdersList;
    const userDetails = useSelector(state => state.userDetails);
    const {loading: userLoading, error: userError, user} = userDetails;
    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {success: updateSuccess, error: updateError, loading: updateLoading} = userUpdateProfile;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listMyOrders());
        if (!user) {
            dispatch({type: USER_UPDATE_PROFILE_RESET})
            dispatch(detailsUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, userInfo._id, user]);


    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Hasła muszą być takie same!');
        } else {
            dispatch(updateUserProfile({userId: user._id, name, email, password}));
        }
    }

    return (
        <div>
            <SecondaryNavbar/>
            {
                userLoading ? <LoadingBox/> : userError ? <MessageBox variant="danger">{error}</MessageBox> : (
                    <div style={{marginTop: '20px'}}>
                        {updateLoading && <LoadingBox/>}
                        <FormWrap>
                            <FormContent>
                                <Form onSubmit={submitHandler} action="/">
                                    <h1>Profil Użytkownika</h1>
                                    {updateError && <MessageBox variant="danger">{updateError}</MessageBox>}
                                    {updateSuccess &&
                                    <MessageBox variant="success">Profil został pomyślnie zaktualizowany!</MessageBox>}
                                    <br/>
                                    <FormLabel htmlFor='for'>Imię i Nazwisko</FormLabel>
                                    <FormInput type='text' id="name" placeholder="Wprowadź Imię i Nazwisko" value={name}
                                               onChange={e => setName(e.target.value)}/>
                                    <FormLabel htmlFor='for'>Email</FormLabel>
                                    <FormInput type='text' id="email" placeholder="Wprowadź Email" value={email}
                                               onChange={e => setEmail(e.target.value)}/>
                                    <h1>Zmiana hasła</h1><br/>
                                    <FormLabel htmlFor='for'>Hasło</FormLabel>
                                    <FormInput type='password' id="password" placeholder="Wprowadź Hasło"
                                               onChange={e => setPassword(e.target.value)}/>
                                    <FormLabel htmlFor='for'>Powtórz Hasło</FormLabel>
                                    <FormInput type='password' id="confirmPassword" placeholder="Powtórz Hasło"
                                               onChange={e => setConfirmPassword(e.target.value)}/>
                                    <button type="submit">
                                        Edytuj Profil
                                    </button>
                                </Form>
                            </FormContent>
                        </FormWrap>
                    </div>
                )
            }
        </div>);
}



