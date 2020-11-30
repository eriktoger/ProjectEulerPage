import React, {useState} from "react";
import {AdminCardProps} from "./handleAdmins";
import styled from "styled-components";

const StyledDiv = styled.div`
  border-style: solid;
  border-radius: 25px;
  font-size: 18px;
  max-width: 400px;
  padding: 7px 10px;
  `;

const Confirm = ({id, handleDelete, setShowModal}: { id: string, handleDelete: (id: string) => void, setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return <div>
        <p> Are you sure?</p>
        <button onClick={() => {
            setShowModal(false);
            handleDelete(id);
        }
        }>
            Yes
        </button>
        <button onClick={() => setShowModal(false)}>
            No
        </button>
    </div>
}

export const AdminCard = ({admin, handleDelete}: { admin: AdminCardProps, handleDelete: (id: string) => void }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <StyledDiv>
            <p> Name: {admin.name}</p>
            <p> Created at: {admin.createdAt}</p>
            <p> Is super admin: {admin.isSuperAdmin ? "True" : "False"}</p>
            <button onClick={() => setShowModal(!showModal)}>Delete</button>
            <button>{admin.isSuperAdmin ? "Make Admin" : "Make Super Admin"}</button>
            {showModal && <Confirm id={admin._id} handleDelete={handleDelete} setShowModal={setShowModal}/>}
        </StyledDiv>)
}
