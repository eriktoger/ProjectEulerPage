import React, {useState} from "react";
import {ToastContainer} from "react-toastify";
import {createAdmin} from "../../api/adminAPI";
import styled from "styled-components";


const StyledLabel = styled.label`
display:inline-block;
white-space: nowrap;
margin: 5px;
  `;

export const CreateAdmin = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isSuperAdmin, setIsSuperAdmin] = useState(false);
    const handleName = (evt: React.FormEvent<HTMLInputElement>): void => {
        setName(evt.currentTarget.value);
    };
    const handlePassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setPassword(evt.currentTarget.value);
    };
    const handleIsSuperAdmin = (evt: React.FormEvent<HTMLInputElement>): void => {
        setIsSuperAdmin(!isSuperAdmin);
    };

    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const body = {"name": name, "password": password, "isSuperAdmin": isSuperAdmin};
        await createAdmin(body);
    }

    return <>
        <form onSubmit={handleSubmit}>
            <StyledLabel>
                Name:
                <input type="text" name="name" value={name} onChange={handleName}/>
            </StyledLabel>
            <StyledLabel>
                Password:
                <input type="text" name="password" value={password} onChange={handlePassword}/>
            </StyledLabel>
            <StyledLabel>
                Is super admin:
                <input type="checkbox" name="isSuperAdmin" onClick={handleIsSuperAdmin}/>
            </StyledLabel>
            <p/>
            <input type="submit" value="Create"/>
        </form>
        <ToastContainer/>
    </>
}
