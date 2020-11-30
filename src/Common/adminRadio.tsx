import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div`
display: inline-block;
  `;

const StyledLabel = styled.label`
display:inline-block;
width: 175px;
margin-top: 20px;
  `;

const StyledBr = styled.br`
@media (max-width: 800px) {
    display: none !important;

}
`;

const RadioDiv = ({value,text,defaultChecked}:{value:string,text:string,defaultChecked:boolean}  )=>{
    return <StyledDiv >
        <input type="radio" value={`${value}`} defaultChecked={defaultChecked} name="task"/>
        <StyledLabel>{`${text}`} </StyledLabel>
    </StyledDiv>
}

export const AdminRadio = ({isSuperAdmin, setRadioValue}: { isSuperAdmin: boolean, setRadioValue: React.Dispatch<React.SetStateAction<string>> }) => {
    return <div onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue(e.target.value)
    }}>
        <RadioDiv value={"change-password"} text={"Change Password"} defaultChecked={true}/>
        {isSuperAdmin && <>
          <RadioDiv value={"handle-admins"} text={"Handle admins"} defaultChecked={false}/>
          <RadioDiv value={"create-admin"} text={"Create new admin"} defaultChecked={false}/>
        </>}
        <StyledBr/>
        <RadioDiv value={"create-problem"} text={"Create new problem"} defaultChecked={false}/>
        <RadioDiv value={"modify-problem"} text={"Modify problem"} defaultChecked={false}/>
        <RadioDiv value={"delete-problem"} text={"Delete problem"} defaultChecked={false}/>
    </div>
}
