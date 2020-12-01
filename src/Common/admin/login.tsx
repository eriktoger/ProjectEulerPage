import {ToastContainer} from "react-toastify";
import React, {useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {login} from "../../api/adminAPI";
import styled from "styled-components";

const StyledLabel = styled.label`
display:inline-block;
white-space: nowrap;
margin: 5px;
  `;

export const Login = ({setShowLogin}: { setShowLogin: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [name, setName] = useState("kire6");
    const [password, setPassword] = useState("kire6");

    const handleName = (evt: React.FormEvent<HTMLInputElement>): void => {
        setName(evt.currentTarget.value);
    };
    const handlePassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setPassword(evt.currentTarget.value);
    };
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const body = {"name": name, "password": password};
        await login(body, setShowLogin, setName, setPassword);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <StyledLabel>
                Name:
                <input type="text" name="name" value={name} onChange={handleName}/>
            </StyledLabel>
            <StyledLabel>
                Password:
                <input type="password" name="password" value={password} onChange={handlePassword}/>
            </StyledLabel>
            <input type="submit" value="Login"/>
        </form>
        <ToastContainer/>
    </>
}
