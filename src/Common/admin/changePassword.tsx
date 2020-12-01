import {ToastContainer} from "react-toastify";
import React, {useState} from "react";
import jwtHandler from "../../jwtHandler";
import 'react-toastify/dist/ReactToastify.css';
import {changePassword} from "../../api/adminAPI";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 10px 0;
  `;

const StyledP = styled.p`
  margin-left: 10px;
  display: inline;
  color: crimson;
  @media (max-width: 1000px) {
    display: block;
}
  `;

export const ChangePassword = () => {

    const [newPassword, setNewPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const passwordMatch = newPassword === repeatPassword;
    const passwordEmpty = !newPassword;

    const handleNewPassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setNewPassword(evt.currentTarget.value);
    };
    const handleRepeatPassword = (evt: React.FormEvent<HTMLInputElement>): void => {
        setRepeatPassword(evt.currentTarget.value);
    };
    const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const body = {"password": newPassword};
        const config = {
            headers: {
                "Content-type": "application/json",
                "x-auth-token": jwtHandler.get().token
            },
        };
        await changePassword(body, config, setNewPassword, setRepeatPassword);
    }

    return <StyledDiv>

        <form onSubmit={handleSubmit}>
            <StyledDiv>
                <label>
                    New Password:
                    <input type="password" name="name" value={newPassword} onChange={handleNewPassword}/>
                </label>
            </StyledDiv>
            <StyledDiv>
                <label>
                    Repeat Password:
                    <input type="password" name="password" value={repeatPassword} onChange={handleRepeatPassword}/>
                </label>
            </StyledDiv>
            <StyledDiv>
                <input type="submit" value="Change Password" disabled={!passwordMatch || passwordEmpty}/>
                { passwordEmpty && <StyledP>Password can not be empty!</StyledP>}
                { !passwordMatch && <StyledP>Password do not match!</StyledP>}

            </StyledDiv>
        </form>
        <ToastContainer/>
    </StyledDiv>
}
