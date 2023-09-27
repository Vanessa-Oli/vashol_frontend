import React from 'react';
import {useState, useEffect} from "react";
import {api} from "../../services/api";
import { useFormik } from "formik";
import {useAuth} from "../../hooks/auth";
import {Link, useNavigate, useLocation} from "react-router-dom";

import {
    FormContainer,
    FormHeader,
    FormFieldWrapper,
    FormLabel,
    FormInput,
    FormButton,
    Header, // Adicione o import para o Header
    NavList,
    Logo,
    LogoImage,
    LogoText,
    NavLinks,
    NavLink,
} from './style';

import '../../assets/style/main.css';

const Login = () => {
    const {signIn, data, message, setMessage} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const rotaAtual = location.pathname;

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const validate = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = "E-mail obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "E-mail inválido";
        }

        if (!values.senha) {
            errors.senha = "Senha obrigatória";
        }
        return errors;
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            senha: "",
        },
        validate,
        validateOnChange: false,

        onSubmit: (values) => {
            signIn(values);
            if (data) {
                if (rotaAtual === "/login") {
                    navigate("/");
                }
            }
        },
    });

    const handleGoogleLogin = async () => {
        try {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const {email, uid: google_id} = result.user;

                    const values = {
                        email,
                        google_id,
                    };

                    signInGoogle(values);

                    if (data) {
                        if (rotaAtual === "/login") {
                            navigate("/");
                        }

                        return;
                    }
                })
                .catch((error) => {
                    if (error.response) {
                        toast(error.response.data.message, {
                            type: "error",
                            hideProgressBar: true,
                            autoClose: 3000,
                        });
                    } else {
                        toast("Erro ao realizar o cadastro!", {
                            type: "error",
                            hideProgressBar: true,
                            autoClose: 3000,
                        });
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            if (message) {
                toast(message, {
                    type: "success",
                    hideProgressBar: true,
                });
                setMessage("");
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <Header id="nav">
                <NavList>
                    <Logo>
                        <LogoText>Vashol</LogoText>
                    </Logo>
                    <NavLinks>
                        <NavLink href="/">Lobby</NavLink>
                        <NavLink id="create__room__btn" href="lobby.html">Create Room</NavLink>
                    </NavLinks>
                </NavList>
            </Header>

            <FormContainer>
                <FormHeader>Entrar</FormHeader>
                <form onSubmit={formik.handleSubmit}>
                    <FormFieldWrapper>
                        <FormLabel>Email:</FormLabel>
                        <FormInput type="text" name="name" required placeholder="Enter your display name..."/>
                    </FormFieldWrapper>

                    <FormFieldWrapper>
                        <FormLabel>Senha:</FormLabel>
                        <FormInput type="text" name="room" placeholder="Enter room name..."/>
                    </FormFieldWrapper>

                    <FormFieldWrapper>
                        <FormButton type="submit">
                            Entrar
                        </FormButton>
                    </FormFieldWrapper>
                </form>
            </FormContainer>
        </div>
    );
}

export default Login;
