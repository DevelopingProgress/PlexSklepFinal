import React from 'react'
import {
    Container,
    Form,
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon, Text
} from "../components/Login/LoginElements";
import {FaArrowLeft} from "react-icons/all";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {Link} from "react-router-dom";
import {register} from "../actions/userActions";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";



export default function RegisterPage(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const userRegister = useSelector(state => state.userRegister);
    const {userInfo, loading, error} = userRegister;
    const redirect = props.location.search ? props.location.search.split('=')[1] : '/';

    const submitHandler = (e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Hasła muszą być takie same!');
        }else {
            dispatch(register(name, email, password));
        }
    }

    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);


    return(
        <Container>
            <FormWrap>
                <Icon to={`/login?redirect=${redirect}`}><FaArrowLeft/></Icon>
                <FormContent>
                    <Form onSubmit={submitHandler}>
                        <FormH1>Utwórz Konto</FormH1>
                        <FormLabel htmlFor='for'>Imię i Nazwisko</FormLabel>
                        <FormInput type='name' id="name" placeholder="Wprowadź Imię i Nazwisko" required onChange={e => setName(e.target.value)}/>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' id="email" placeholder="Wprowadź Email" required onChange={e => setEmail(e.target.value)}/>
                        <FormLabel htmlFor='for'>Hasło</FormLabel>
                        <FormInput type='password' id="password" placeholder="Wprowadź Hasło" required onChange={e => setPassword(e.target.value)}/>
                        <FormLabel htmlFor='for'>Powtórz Hasło</FormLabel>
                        <FormInput type='password' id="confirmpassword" placeholder="Powtórz Hasło" required onChange={e => setConfirmPassword(e.target.value)}/>
                        {loading && <LoadingBox/>}
                        {error && <MessageBox variant="danger">{error}</MessageBox>}
                        <FormButton type='submit'>Zarejestruj</FormButton>
                        <Text>Posiadasz konto? <Link to={`/login?redirect=${redirect}`} style={{color: 'white'}} className="hoverred">Zaloguj się </Link></Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
}

