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

export const AdminCard = ({admin, toggleSuperAdmin, handleDelete}: { admin: AdminCardProps, toggleSuperAdmin: (id: string, isSuperAdmin: boolean) => Promise<boolean>, handleDelete: (id: string) => void }) => {
    const [showModal, setShowModal] = useState(false);
    const [isSuperAdmin, setIsSuperAdmin] = useState(admin.isSuperAdmin);

    const handleToggle = async () => {
        setIsSuperAdmin(await toggleSuperAdmin(admin._id, isSuperAdmin));
    }

    return (
        <StyledDiv>
            <p> Name: {admin.name}</p>
            <p> Created at: {admin.createdAt}</p>
            <p> Is super admin: {isSuperAdmin ? "True" : "False"}</p>
            <button onClick={() => setShowModal(!showModal)}>Delete</button>
            <button onClick={handleToggle}>{isSuperAdmin ? "Make Admin" : "Make Super Admin"}</button>
            {showModal && <Confirm id={admin._id} handleDelete={handleDelete} setShowModal={setShowModal}/>}
        </StyledDiv>)
}
