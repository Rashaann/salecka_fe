import React, { useState } from 'react';
import { Route, Routes, useNavigate  } from 'react-router-dom';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalSignupMessage from './ModalSignupMessage';


import { useSelector, useDispatch } from 'react-redux';
import { addUserData, logout } from '../reducers/salecka';

import Router from 'next/router';

import styles from '../styles/Signup.module.css';

export default function Signup() {
    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isSamePassword, setIsSamePassword] = useState(null);
    const [isSignedUp, setIsSignedUp] = useState(false);
    
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');


    const [input, setInput] = useState(styles.input);
    const [errorMsg, setErrorMsg] = useState(<></>);
    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/i;

    const dispatch = useDispatch();


    

    const msgNsignup = () => {
        setIsSignedUp(true);
            setTimeout(() => {
                setIsSignedUp(false);
                Router.push('/profile');
            }, 2000);
    }


    const handleClick = () => {
        if(password === passwordConf){
            setIsSamePassword(true);
        } else {
            setIsSamePassword(false);
        }


        //CHECK IF THE VERIFICATION PASSWORD IS SAME AS THE FIRST ONE ENTERED
        //+ CHECK IF EMAIL ENTERED IS A VALID ONE
        if(isSamePassword && regex.test(email)){
            fetch('http://192.168.0.35:3000/users/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password,
                    address: address,
                    city: city,
                    zipCode: zipCode,
                }),
            }).then(response => response.json())
            .then(data => {
                if(data.result){
                    setInput(styles.input);
                    setErrorMsg(<></>);
                    setFirstname('');
                    setLastname('');
                    setEmail('');
                    setPassword('');
                    setAddress('');
                    setCity('');
                    setZipCode('');
                    dispatch(addUserData(data.user));
                    msgNsignup();
                    console.log('ACCOUNT SUCCESSFULLY CREATED.');
                } else {
                    setInput(styles.inputError);
                    setErrorMsg(<p style={{color:'red'}}>Erreur: Au moins un des champs obligatoires n'a pas été rempli correctement.</p>);
                    console.log('ERROR: ACCOUNT NOT CREATED.')
                }
            })
        } else {
            setInput(styles.inputError);
            setErrorMsg(<p style={{color:'red'}}>Erreur: Au moins un des champs obligatoires n'a pas été rempli correctement.</p>);
            console.log('ERROR: ONE OF THE FIELD WAS NOT CORRECTLY COMPLETED.')
        }
    }

  return (
    <div className={styles.body}>
            {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
            {isSignedUp && <ModalSignupMessage setIsSignedUp={setIsSignedUp} />}
        <div>
            <Header isConnectionModal={isConnectionModal} setIsConnectionModal={setIsConnectionModal} />
            <SubHeader />
        </div>

        <div className={styles.container}>
            <div>
                <p>Les champs contenant un astérisque ( * ) sont nécessaires à l'inscription.</p>
                {errorMsg}
            </div>

            <div>
                <div className={styles.content}>
                    <p>PRENOM:</p>
                    <input type='text' placeholder='*Prénom' onChange={(e) => setFirstname(e.target.value)} value={firstname}  className={input}/>
                </div>
                <div className={styles.content}>
                    <p>NOM:</p>
                    <input type='text' placeholder='*Nom' onChange={(e) => setLastname(e.target.value)} value={lastname}  className={input}/>
                </div>
                <div className={styles.content}>
                    <p>EMAIL:</p>
                    <input type='text' placeholder='*Email' onChange={(e) => setEmail(e.target.value)} value={email}  className={input}/>
                </div>
                <div className={styles.content}>
                    <p>MOT DE PASSE:</p>
                    <input type='password' placeholder='*Mot de passe' onChange={(e) => setPassword(e.target.value)} value={password}  className={input}/>
                </div>
                <div className={styles.content}>
                    <p>CONFIRMATION DU MOT DE PASSE:</p>
                    {isSamePassword===false && <p style={{color:'red'}}>Le mot de passe de confirmation est différent de celui entré auparavant!</p>}
                    <input type='password' placeholder='*Mot de passe' onChange={(e) => setPasswordConf(e.target.value)} value={passwordConf}  className={input}/>
                </div>
                <div className={styles.content}>
                    <p>ADRESSE:</p>
                    <input type='text' placeholder='Adresse' onChange={(e) => setAddress(e.target.value)} value={address}  className={styles.input}/>
                </div>
                <div className={styles.content}>
                    <p>VILLE:</p>
                    <input type='text' placeholder='Ville' onChange={(e) => setCity(e.target.value)} value={city}  className={styles.input}/>
                </div>
                <div className={styles.content}>
                    <p>CODE POSTAL:</p>
                    <input type='text' placeholder='Code postal' onChange={(e) => setZipCode(e.target.value)} value={zipCode}  className={styles.input}/>
                </div>
            </div>

            <div style={{display:'flex',width:500, height:200, justifyContent:'center', alignItems:'center'}}>
                <button className={styles.btn} onClick={() => handleClick()}>Inscription</button>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}