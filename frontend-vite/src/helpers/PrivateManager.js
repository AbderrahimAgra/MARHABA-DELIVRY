import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
// import { isAunthenticated } from "./Auth";





const PrivateManager = () => {
    const role = localStorage.getItem('role')


    return (
        role === 'manager' ? <Outlet /> : <Navigate to="/login" />
    )

}

export default PrivateManager