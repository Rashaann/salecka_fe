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
  const [isArtToFavs, setIsArtToFavs] = useState(false);


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
    fetch(`https://salecka-be-2me8.vercel.app/articles/`)
    .then(response => response.json())
    .then(data => {
        setArticlesList(data.articles);
    })
  },[]);





  const favsMessage = () => {
    setIsArtToFavs(true);
        setTimeout(() => {
            setIsArtToFavs(false);
        }, 2000);
  }


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
        let heartIcon = <FontAwesomeIcon icon={faHeart} size='sm' color='black' />
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
                    <div className={styles.infoContainer}>
                        <p className={styles.text}>{el.name}</p>
                        <p className={styles.text}>{el.subname}</p>
                    </div>

                    <div className={styles.priceContainer}>
                        <p className={styles.price}>{el.price}€</p>
                    </div>
                </div>
            </div>
        </div>)
        }
    });

    console.log(articles);


  return (
    <div className={styles.body}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isArtToFavs && <ModalFavsMessage setIsArtToFavs={setIsArtToFavs} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        <div className={styles.container}>
            {articles.every(el => el ===undefined)?
            <p>Aucun articles correspondant à "{searchKey}".</p>:
            articles}
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}