import Head from 'next/head';
import React, { useState, useEffect } from 'react';

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


import styles from '../styles/Men.module.css';
import { textToCleanNameUrl } from '../modules/cleanNameUrl';



export default function Men() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);


    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isArticleModal, setIsArticleModal] = useState(false);
    const [isArtToFavs, setIsArtToFavs] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);


    const [articlesList, setArticlesList] = useState([]);
    const [chosenArticle, setChosenArticle] = useState({});

    const [menuItem, setMenuItem] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    


    const dispatch = useDispatch();
    const favs = useSelector((state) => state.salecka.value.favs);
    const isConnected = useSelector((state)=> state.salecka.value.isConnected);
    


    useEffect(() => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
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


    //DISPLAY CONFIRMATION MESSAGE OF SUCCESSFULL LOGOUT
    if(isLoggedOut){
        setTimeout(()=>{
          setIsLoggedOut(false);
        },2000);
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
        // Router.push('/article');
        const namePage = `${textToCleanNameUrl(el.name)}-${textToCleanNameUrl(el.subname)}`;
        Router.push(`/articles/${namePage}`);
    }

    
    


    const menu = [
        'Nouveaut??s',
        'Meilleures ventes',
        'Promotions',
        'Basiques',
        'Sweats',
        'Vestes et manteaux',
        'Pulls et Cardigans',
        'Costumes et Blazers',
        'T-Shirts',
        'Chemises',
        'Pantalons et Cargo',
        'Jeans',
        'Shorts',
        'Pyjamas',
        'Sous-v??tements',
        'Sport',
        'Maillots de bain',
        'Chaussettes',
        'Chaussures',
        'Accessoires'
    ]

    const handleClickFilter = (e) => {
        setMenuItem(e);
        setShowMenu(false);
    }
    const dispMenu = menu.map((e,i) => {
        return <div key={i} className={styles.menu} onClick={() => handleClickFilter(e)}><p>{e}</p></div>
    })





    const articles = articlesList.map((el,i) => {
        const firstImg = el.image[0];
        let heartIcon = <FontAwesomeIcon icon={faHeart} size='sm' color='black' />
        let smHeartIcon = <FontAwesomeIcon icon={faHeart} size='lg' color='black' />
        if (favs.some((e) => e.token === el.token)){
            heartIcon = <FaHeart size={20} color='black' />
            smHeartIcon = <FaHeart size={25} color='black' />
        }

        const today = new Date();
        const artDate = new Date(el.creation);
        let newMessage = <></>
        if((today.getDate() - artDate.getDate()) <= 6){
          newMessage = <p style={{color:'gray', fontSize:12}}>Nouveaut??</p>
        }
        
        const article = <div key={i} className={styles.artContainer}>
            <div className={styles.artSubContainer}>
                <div style={{display:'flex', width:'auto', height:240, backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
                    <div className={styles.heartIcon} onClick={() => addToFavs(el)}>
                        {/* <FontAwesomeIcon icon={faHeart} size='s' color='black' /> */}
                        {heartIcon}
                    </div>
                    {/* <img src={randomPic} width={200} height={240} style={{borderTopLeftRadius:10, borderTopRightRadius:10}}/> */}
                </div>
                <div className={styles.lowerPart} onClick={() => handleClick(el)}>
                    <div className={styles.subLowerPart}>
                        {newMessage}
                        <p style={{fontSize:14}}>{el.name}</p>
                        <p style={{fontSize:14}}>{el.subname}</p>
                    </div>

                    <div className={styles.subLowerPart}>
                        <p style={{fontSize:27}}>{el.price}???</p>
                    </div>
                </div>
            </div>
        </div>

        const smArticle = <div key={i} className={styles.artContainer}>
            <div className={styles.artSubContainer}>
                <div style={{display:'flex', width:'48vw', height:'40vh', backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
                    <div className={styles.heartIcon} onClick={() => addToFavs(el)}>
                        {smHeartIcon}
                    </div>
                </div>
                <div className={styles.lowerPart} onClick={() => handleClick(el)}>
                    <p className={styles.text}><span style={{fontSize:25}}>{el.name}</span><br/>{el.subname}</p>
                    <p className={styles.price}>{el.price}???</p>
                </div>
            </div>
        </div>


        if (el.category === 'men' && (menuItem==='Tout' || menuItem==='') && screenWidth>900){
            return article
        } else if (el.category === 'men' && menuItem===el.type && screenWidth>900){
            return article
        } else if (el.category === 'men' && (menuItem==='Tout' || menuItem==='') && screenWidth<=900){
            return smArticle
        } else if (el.category === 'men' && menuItem===el.type && screenWidth<=900){
            return smArticle
        }
    });


    //DISPLAY OF ARTICLES BY THEIR TYPE.
    //EACH TYPE ARE DISPLAYED IN THE SCREEN.
    // const articlesCat = menu.map((el,i) => {
    //     const testart = artPerCat(el);
    //     return (<div>
    //         <p>{el}</p>
    //         {testart}
    //     </div>)


    // })

    // const artPerCat = (str) => {
        

    // const artCat = articlesList.map((el,i) => {
    //     const firstImg = el.image[0];
    //     let heartIcon = <FontAwesomeIcon icon={faHeart} size='s' color='black' />
    //     if (favs.some((e) => e.token === el.token)){
    //         heartIcon = <FaHeart size={20} color='black' />
    //     }
        

    //     const smArticle = <div key={i} className={styles.artContainer}>
    //         <div className={styles.artSubContainer}>
    //             <div style={{display:'flex', width:'69vw', height:'50vh', backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
    //                 <div className={styles.heartIcon} onClick={() => addToFavs(el)}>
    //                     {/* <FontAwesomeIcon icon={faHeart} size='s' color='black' /> */}
    //                     {heartIcon}
    //                 </div>
    //                 {/* <img src={randomPic} width={200} height={240} style={{borderTopLeftRadius:10, borderTopRightRadius:10}}/> */}
    //             </div>
    //             <div className={styles.lowerPart} onClick={() => handleClick(el)}>
    //                 <div className={styles.subLowerPart}>
    //                     <p className={styles.text}>{el.subname}</p>
    //                     <p className={styles.text}>{el.type}</p>
    //                 </div>

    //                 <div className={styles.subLowerPart}>
    //                     <p style={{fontSize:27}}>{el.price}???</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //     if (el.category === 'men' && (menuItem==='Tout' || menuItem==='') && screenWidth<=900){
    //         return smArticle
    //     } else if (el.category === 'men' && menuItem===str && screenWidth<=900){
    //         return smArticle
    //     }
    // });
    //     return artCat;
    // }



  return (
    <div>
        <Head>
          <title>V??tements Homme</title>
        </Head>


        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isArticleModal && <ModalArticle setIsArticleModal={setIsArticleModal} chosenArticle={chosenArticle} />}
        {isArtToFavs && <ModalFavsMessage setIsArtToFavs={setIsArtToFavs} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        <div className={styles.container}>
            
            {screenWidth<=900?
            <div>
                <h1 className={styles.menuTitle} onClick={() => setShowMenu(!showMenu)}>Homme</h1>
                {showMenu &&
                <div className={styles.subContainer}>
                    {dispMenu}
                </div>}
            </div>:
            <div>
                <h1>Homme</h1>
                <div className={styles.subContainer}>
                    {dispMenu}
                </div>
            </div>}
            
            
            {articles.every(el => el ===undefined) ?
                <div className={styles.noArticles}>
                    <p style={{fontSize:30}}>Pas d'articles dans la cat??gorie "{menuItem}" pour le moment!</p>
                </div>:
                <div className={styles.artFound}>
                    {articles}
                </div>
            }

        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}