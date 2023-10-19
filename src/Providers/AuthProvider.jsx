import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
const [user,setUser]=useState();
const [loading,setLoading]=useState(true);
useEffect(()=>{
    const userData=async ()=>{
        const response=await fetch('http://localhost:5000/product');
        if(response.ok){
            const userData=await response.json();
            setUser(userData);
        }else{
            setUser(null);
            console.log('can not fatch')
        }


setLoading(false);
        
       
    }
    
    userData();
},[]);


    const authInfo = {
user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.prototypes = {
    children: PropTypes.node
}