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



export default function Newsletter() {
    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isArticleModal, setIsArticleModal] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

    const [email, setEmail] = useState('');
    const [isAlreadyRegistered, setIsAlreadyRegistered] = useState(null);



  




    //DISPLAY CONFIRMATION MESSAGE OF SUCCESSFULL LOGOUT
    if(isLoggedOut){
        setTimeout(()=>{
            setIsLoggedOut(false);
        },2000);
    }


    const errorMessage = <p style={{color:'red', fontSize:20, fontFamily:'Barlow Condensed'}}>
    Erreur: le propriétaire de cette adresse email reçoit déjà notre newsletter!
    </p>

    const grantedMessage = <p style={{color:'green', fontSize:20, fontFamily:'Barlow Condensed'}}>
    L'adresse email entrée a bien été enregistrée 😉
    </p>

    const newsletterSubscription = () => {
        fetch('https://salecka-be-2me8.vercel.app/clientList/newEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
                email: email,
            }),
        }).then(response => response.json())
        .then(data => {
            if(data.result){
                setEmail('');
                setIsAlreadyRegistered(false);
                console.log('EMAIL SUCCESSFULLY ADDED TO DB.');
            } else {
                setEmail('');
                setIsAlreadyRegistered(true);
                console.log('ERROR: EMAIL ALREADY REGISTERED WITHIN DB.')
            }
        })
    }
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'100vh'}}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isArticleModal && <ModalArticle setIsArticleModal={setIsArticleModal} chosenArticle={chosenArticle} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center', height:'80vh',padding:100}}>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                <p style={{fontSize:30}}>Envie d'être tenu.e informé.e des dernières tendances et promotions?</p>
                <p style={{fontSize:30}}>Abonnez-vous à notre newsletter!</p>
            </div>
            <div>
                {isAlreadyRegistered ? errorMessage : ((isAlreadyRegistered===false)&&grantedMessage)}
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                <input type='text' placeholder='Mail' onChange={(e) => setEmail(e.target.value)} value={email} style={{borderWidth:1, width:600, height:50, borderTopLeftRadius:5, borderBottomLeftRadius:5, fontSize:20, padding:10, fontFamily:'Barlow Condensed',}} />
                <button
                    style={{backgroundColor:'black', color:'whitesmoke', height:50, width:100, borderTopRightRadius:5, borderBottomRightRadius:5, cursor:'pointer', borderWidth:1, fontFamily:'Barlow Condensed', fontSize:17}}
                    onClick={() => newsletterSubscription()}
                >
                    S'abonner
                </button>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
};