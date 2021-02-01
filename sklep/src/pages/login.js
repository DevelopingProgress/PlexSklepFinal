import React from 'react'

import {FaArrowLeft} from "react-icons/all";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {signin} from "../actions/userActions";
import {
    Container,
    Form, FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon, Text
} from "../components/Login/LoginElements";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function LoginPage(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo, loading, error} = userSignin;
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(email, password));
    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);


    return (
        <Container>
            <FormWrap>
                <Icon to="/"><FaArrowLeft/></Icon>

                <FormContent>
                    <Form onSubmit={submitHandler} action="/">
                        <FormH1>Zaloguj się</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' id="email" placeholder="Wprowadź Email" required onChange={e => setEmail(e.target.value)}/>
                        <FormLabel htmlFor='for'>Hasło</FormLabel>
                        <FormInput type='password' id="password" placeholder="Wprowadź Hasło" required onChange={e => setPassword(e.target.value)}/>
                        {loading && <LoadingBox/>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                        <FormButton type='submit'>Zaloguj</FormButton>
                        <Text><Link to="/recover" style={{color: 'white'}} className="hoverred">Przypomnij Hasło </Link></Text>
                        <Text>Nie posiadasz konta? <Link to={`/register?redirect=${redirect}`} style={{color: 'white'}} className="hoverred">Stwórz je! </Link></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

