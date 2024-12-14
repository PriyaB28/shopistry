import React from 'react'
import Home from '../frontend/home/Home';
import { P } from 'react-flaticons';
import { Navigate } from 'react-router';

function UserRoutes() {
    // const navigate = useNavigate()
    const role = localStorage.getItem("role");
    
    function presentPage() {
        navigate(-1);
    }
    
    if (!role) return <Navigate to="/login" replace="true" />
    if (role.toLowerCase() == 'user') {
        return <Home />
    } else {
        presentPage()
    }

}

export default UserRoutes