import React, { useEffect, useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalArticle from './ModalArticle';
import ModalFavsMessage from './ModalFavsMessage';
import ModalLogoutMessage from './ModalLogoutMessage';


import { useDispatch, useSelector } from 'react-redux';
import Router from "next/router";

import styles from '../styles/Articles.module.css';


export default function NewArticles() {
  const [isConnectionModal, setIsConnectionModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);






  //DISPLAY CONFIRMATION MESSAGE OF SUCCESSFULL LOGOUT
  if(isLoggedOut){
    setTimeout(()=>{
      setIsLoggedOut(false);
    },2000);
  }




  return (
    <div>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh',}}>
            <p style={{fontSize:30}}>Page "Nouveaux arrivages" en construction... 👨‍💻⚙️</p>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}