import React from 'react'
import Home from '../frontend/home/Home';
import { P } from 'react-flaticons';

function UserRoutes() {
    const role = localStorage.getItem("role");
    console.log(role);
    
    function presentPage() {
        navigate(-1);
    }

    if (!role) return <Navigate to="/" />;
    if (role.toLowerCase() == 'user') {
        return <Home />
    } else {
        presentPage()
    }

}

export default UserRoutes