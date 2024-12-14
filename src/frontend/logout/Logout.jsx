import React from 'react'
import { useNavigate } from 'react-router'

function Logout() {
    const navigate = useNavigate()
    localStorage.clear();
  return  (navigate('/login'))
  
}

export default Logout