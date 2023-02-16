import React, { useState } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';


import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalLogoutMessage from './ModalLogoutMessage';

export default function Settings() {
    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const isConnected = useSelector((state) => state.salecka.value.isConnected);

    if(isLoggedOut){
        setTimeout(()=>{
          setIsLoggedOut(false);
          if(!isConnected){
            Router.push('/');
            }
        },2000);
    }
    
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'100vh'}}>
    {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
    {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
    <div>
    <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
        <SubHeader />
    </div>

    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh',}}>
        <p style={{fontSize:30}}>Page "Paramètres utilisateur" en construction... 👨‍💻⚙️</p>
    </div>

    <div>
        <Footer />
    </div>
</div>
  )
}