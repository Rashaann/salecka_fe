import React, { useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalArticle from './ModalArticle';
import ModalLogoutMessage from './ModalLogoutMessage';


import { useDispatch, useSelector } from 'react-redux';
import { addDataArticle, addFavsData, removeFavsData, addCartsData } from '../reducers/salecka';
import Router from "next/router";

import styles from '../styles/Articles.module.css';


export default function ContactUs() {
  const [isConnectionModal, setIsConnectionModal] = useState(false);
  const [isArticleModal, setIsArticleModal] = useState(false);
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
        {isArticleModal && <ModalArticle setIsArticleModal={setIsArticleModal} chosenArticle={chosenArticle} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh',}}>
            <p style={{fontSize:30}}>Pages "Service Client" en construction... 👨‍💻⚙️</p>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}