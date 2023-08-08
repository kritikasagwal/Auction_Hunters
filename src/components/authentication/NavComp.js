import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { LoginComp } from './LoginComp';
import { RegisterComp } from './RegisterComp';
import './NavComp.css'
export const NavComp = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
        <div className='Navbar'>
        <h1>Auction Hunters</h1>
        <div className="LoginName">
            {currentUser ? (
              <>
                <div className="btn btn-outline-secondary mx-2 disabled" style={{backgroundColor:"white"}}>
                  {currentUser.email}
                </div>
                <div
                  onClick={() => logout()}
                  className="btn btn-outline-secondary mx-2"
                  style={{backgroundColor:"white",color:'black'}}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <LoginComp />
                <RegisterComp />
              </>
            )}
          </div> 
        </div>
          
       
  );
};



