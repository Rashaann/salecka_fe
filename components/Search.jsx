import React, { useEffect, useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalArticle from './ModalArticle';
import ModalFavsMessage from './ModalFavsMessage';
import ModalLogoutMessage from './ModalLogoutMessage';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faGear } from '@fortawesome/free-regular-svg-icons';
import {FaHeart} from 'react-icons/fa';


import { useDispatch, useSelector } from 'react-redux';
import { addDataArticle, addFavsData, removeFavsData, addCartsData } from '../reducers/salecka';
import Router from "next/router";

import styles from '../styles/Search.module.css';


export default function Search() {
  const [articlesList, setArticlesList] = useState([]);


  const [isConnectionModal, setIsConnectionModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const searchKey = useSelector((state) => state.salecka.value.searchKey);
  const favs = useSelector((state) => state.salecka.value.favs);
  const isConnected = useSelector((state)=> state.salecka.value.isConnected);


  const dispatch = useDispatch();

  const regex = new RegExp(searchKey, 'i');

  //DISPLAY CONFIRMATION MESSAGE OF SUCCESSFULL LOGOUT
  if(isLoggedOut){
    setTimeout(()=>{
      setIsLoggedOut(false);
    },2000);
  }



  useEffect(() => {
    fetch(`http://192.168.0.35:3000/articles/`)
    .then(response => response.json())
    .then(data => {
        setArticlesList(data.articles);
    })
  },[]);




  const addToFavs = (el) => {
    if(isConnected){
        console.log('ELEMENT => ', el);
        if(favs.some((e) => e.token === el.token)){
            dispatch(removeFavsData(el));
            console.log('ARTICLE REMOVED.');
            console.log(favs);
        } else {
            dispatch(addFavsData(el));
            favsMessage();
            console.log('ARTICLE ADDED.');
        }
    } else {
        setIsConnectionModal(true);
    }
}


    const handleClick = (el) => {
        // setChosenArticle(el);
        // setIsArticleModal(!isArticleModal);
        dispatch(addDataArticle(el));
        Router.push('/article');
    }


    

    const articles = articlesList.map((el,i) => {
        const firstImg = el.image[0];
        let heartIcon = <FontAwesomeIcon icon={faHeart} size='s' color='black' />
        if (favs.some((e) => e.token === el.token)){
            heartIcon = <FaHeart size={20} color='black' />
        }

        let backgroundImg  = {
            display:'flex',
            height:240,
            backgroundColor:'gray',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
            justifyContent:'flex-end',
            alignItems:'flex-start',
            backgroundImage:"url(" + firstImg + ")",
            backgroundSize: 'cover',
        }

        

        if ((regex.test(el.name) || regex.test(el.subname) || regex.test(el.type))){
            return (<div key={i} className={styles.artBody}>
            <div className={styles.artContainer}>
                <div style={backgroundImg}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', width:30, height:30, backgroundColor:'white', borderRadius:20}} onClick={() => addToFavs(el)}>
                        {heartIcon}
                    </div>
                </div>
                <div className={styles.artContent} onClick={() => handleClick(el)}>
                    <div style={{width:90, height:60}}>
                        <p style={{fontSize:14}}>{el.name}</p>
                        <p style={{fontSize:14}}>{el.subname}</p>
                    </div>

                    <div style={{width:90, height:60}}>
                        <p style={{fontSize:27}}>{el.price}€</p>
                    </div>
                </div>
            </div>
        </div>)
        }
    });


  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'100vh'}}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh',}}>
            <p style={{fontSize:30}}>Page "Résultat(s) de recherche" en construction... 👨‍💻⚙️</p>
            <p>{searchKey}</p>
        </div> */}
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start', alignItems:'center', height:'95vh',width:'90vw', overflowY:'scroll'}}>
            {articles}
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}