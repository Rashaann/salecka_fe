import React, { useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalLogoutMessage from './ModalLogoutMessage';


import Router from 'next/router';
import { useSelector } from 'react-redux';



export default function Profile() {
    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const isConnected = useSelector((state) => state.salecka.value.isConnected);
    const user = useSelector((state) => state.salecka.value.user);

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

        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'100vw', minHeight:'70vh',}}>
          <h1>Page Profil</h1>
          <div style={{width:'95vw'}}>
            <h2>Informations générales</h2>
            <p>Nom: {user.lastname}</p>
            <p>Prénom: {user.firstname}</p>
            <p>Adresse mail: {user.email}</p>
            <p>Adresse postale: {user.address} {user.zipCode} {user.city}</p>
          </div>
          <div style={{width:'95vw'}}>
            <h2>Articles favoris</h2>
          </div>
          <div style={{width:'95vw'}}>
            <h2>Articles ajoutés au panier</h2>
          </div>
          <div style={{width:'95vw'}}>
            <h2>Historique des achats</h2>
          </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
};