import Link from 'next/link';
import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { redirect, useNavigate } from 'react-router-dom';
import { addUserData } from '../reducers/salecka';

import { Navigate } from "react-router-dom";
import Router from "next/router";

import styles from '../styles/ModalConnection.module.css';

export default function ModalConnection(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleConnection = () => {
        fetch('https://salecka-be-2me8.vercel.app/users/signin', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ 
                email: email,
                password: password,
            }),
        }).then(response => response.json())
        .then(data => {
            if(data.result){
                setEmail('');
                setPassword('');
                dispatch(addUserData(data.user));
                // navigate('/home');
                
                props.setIsConnectionModal(false);
                Router.push("/profile");
                console.log('USER SUCCESSFULLY LOGGED IN.');
            } else {
                console.log('ERROR: ACCOUNT NOT FOUND.');
            }
        })
    }

  return (
    <div className={styles.modalContainer}>
        <div className={styles.modalSubContainer}>
            <div className={styles.closePage} onClick={() => props.setIsConnectionModal(false)}><FaTimes/></div>
            <div className={styles.logo}><img src='logo_black.png' width={100} height={50}/></div>
            <div className={styles.container}>
                <div>
                    <p className={styles.text}>ADRESSE MAIL:</p>
                    <input type='text' placeholder='Mail' onChange={(e) => setEmail(e.target.value)} value={email} className={styles.input}/>
                </div>

                <div>
                    <p className={styles.text}>MOT DE PASSE:</p>
                    <input type='password' placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)} value={password}  className={styles.input}/>
                </div>
            </div>

            <div className={styles.btnContainer}>
                <button
                    className={styles.btn}
                    onClick={() => handleConnection()}
                >
                    Connexion
                </button>
            </div>

            <div className={styles.footer}>
                <p style={{fontFamily:'DIN condensed', color:'gray', fontSize:20}}>Pas de compte?</p>
                <Link href='/signup' style={{textDecoration: 'none',}}><p style={{fontFamily:'DIN condensed', color:'white', fontSize:20, cursor:'pointer'}}>Inscrivez-vous</p></Link>
            </div>
        </div>
      </div>
  )
}