import Head from 'next/head';
import React, { useState, useEffect } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalFavsMessage from './ModalFavsMessage';
import ModalLogoutMessage from './ModalLogoutMessage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faGear } from '@fortawesome/free-regular-svg-icons';
import {FaHeart} from 'react-icons/fa';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { useDispatch, useSelector } from 'react-redux';
import { addDataArticle, addFavsData, removeFavsData, addCartsData } from '../reducers/salecka';
import Router from "next/router";

import styles from '../styles/Home.module.css';


function Home() {
  const [articlesList, setArticlesList] = useState([]);

    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isArticleModal, setIsArticleModal] = useState(false);
    const [isArtToFavs, setIsArtToFavs] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);

  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const dispatch = useDispatch();
  const favs = useSelector((state) => state.salecka.value.favs);
  const isConnected = useSelector((state)=> state.salecka.value.isConnected);

  useEffect(() => {
    // window is accessible here.
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    console.log("window.innerHeight", window.innerWidth);
    fetch(`https://salecka-be-2me8.vercel.app/articles/`)
      .then(response => response.json())
      .then(data => {
          setArticlesList(data.articles);
      })
  }, [screenWidth]);




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
    dispatch(addDataArticle(el));
    Router.push('/article');
}







  //DISPLAY ARTICLES BY THEIR ADDED DATE
  const newArticles = articlesList.sort((a,b) => {
    return new Date(b.creation) - new Date(a.creation)})
    .map((el,i) => {
    
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
        newMessage = <p style={{color:'gray', fontSize:12}}>Nouveauté</p>
      }
        
    if(i<10){
      return(<div key={i} className={styles.artSubContainer}>
        <div className={styles.artContent}>
          <div style={{display:'flex', width:'auto', height:240, backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
            <div className={styles.heartIcon} onClick={() => addToFavs(el)}>
              {screenWidth<=600?smHeartIcon:heartIcon}
            </div>
          </div>
          <div className={styles.artInfosContainer} onClick={() => handleClick(el)}>
            
            <div className={styles.artInfosContent}>
              {newMessage}
              <p className={styles.artText}><span style={{fontSize:18}}>{el.name}</span> - {el.subname}</p>
            </div>

            <div className={styles.artInfosContent}>
              <p>{el.price}€</p>
            </div>
          </div>
        </div>
      </div>)
    } else if (i===10){
      return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><button style={{width:200, height: 50, cursor:'pointer'}} onClick={() => goToPage('newarticles')}>Découvrir plus d'articles</button></div>
    }
  });




  //DISPLAY ARTICLES BY POPULARITY
  const popularArticles = articlesList.sort((a,b) => {
    return b.popularity.length - a.popularity.length})
    .map((el,i) => {
    
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
        newMessage = <p style={{color:'gray', fontSize:12}}>Nouveauté</p>
      }
        
    if(i<10){
      return(<div key={i} className={styles.artSubContainer}>
        <div className={styles.artContent}>
          <div style={{display:'flex', width:'auto', height:240, backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
            <div className={styles.heartIcon} onClick={() => addToFavs(el)}>
              {screenWidth<=600?smHeartIcon:heartIcon}
            </div>
          </div>
          <div className={styles.artInfosContainer} onClick={() => handleClick(el)}>
            
            <div className={styles.artInfosContent}>
              {newMessage}
              <p className={styles.artText}><span style={{fontSize:18}}>{el.name}</span> - {el.subname}</p>
            </div>

            <div className={styles.artInfosContent}>
              <p>{el.price}€</p>
            </div>
          </div>
        </div>
      </div>)
    } else if (i===10){
      return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><button style={{width:200, height: 50, cursor:'pointer'}} onClick={() => goToPage('populararticles')}>Découvrir plus d'articles</button></div>
    }
  });






  //DISPLAY ARTICLES BY CATEGORY


  const goToPage = (page) => {
    Router.push(`/${page}`)
  }



const dispArtByCat = (str) => {
  const articles = articlesList.sort((a,b) => {
      return new Date(b.creation) - new Date(a.creation)})
      .map((el,i) => {
      
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
        if((today.getDate() - artDate.getDate()) <= 10){
          newMessage = <p style={{color:'gray', fontSize:12}}>Nouveauté</p>
        }

      if(el.category === str && i < 15){
        return(<div key={i} className={styles.artSubContainer}>
          <div className={styles.artContent}>
            <div style={{display:'flex', width:'auto', height:290, backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
              <div className={styles.heartIcon} onClick={() => addToFavs(el)}>
                {screenWidth<=600?smHeartIcon:heartIcon}
              </div>
            </div>
            <div className={styles.artInfosContainer} onClick={() => handleClick(el)}>
              
              <div className={styles.artInfosContent}>
                {newMessage}
                <p className={styles.artText}><span style={{fontSize:18}}>{el.name}</span> - {el.subname}</p>
              </div>
  
              <div className={styles.artInfosContent}>
                <p>{el.price}€</p>
              </div>
            </div>
          </div>
        </div>)
      } else if (i===articlesList.length-1){
        console.log('IIIIII');
        return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}><button style={{width:200, height: 50, cursor:'pointer'}} onClick={() => goToPage(str)}>Découvrir plus d'articles</button></div>
      }
    });
    return articles;
  }

  let womenArt = dispArtByCat('women');
  let menArt = dispArtByCat('men');
  let childrenArt = dispArtByCat('children');

  return (
    <div className={styles.main}>
      <Head>
          <title>SALECKA - Le luxe à la portée de tous</title>
      </Head>

      {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
      {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
      <div>
        <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
        <SubHeader />
      </div>

      


      

      <div className={styles.container}>
        
        {screenWidth<=600?
        <CarouselProvider
          naturalSlideWidth={screenWidth}
          naturalSlideHeight={screenHeight/2}
          interval={5000}
          isPlaying={true}
          totalSlides={3}
        >
          
          <Slider style={{width:'100vw', height:'55vh',}}>
            <Slide index={0}><img src='https://res.cloudinary.com/dldeqai4u/image/upload/v1676726575/image1_zbblh8.jpg' width={screenWidth} height={screenHeight/2} style={{cursor:'pointer'}} onClick = {() => Router.push('/women')}/></Slide>
            <Slide index={1}><img src='https://res.cloudinary.com/dldeqai4u/image/upload/v1676726580/image2_hnsq5d.png' width={screenWidth} height={screenHeight/2} style={{cursor:'pointer'}} onClick = {() => Router.push('/men')} /></Slide>
            <Slide index={2}><img src='https://res.cloudinary.com/dldeqai4u/image/upload/v1676726575/image3_m5p0a7.jpg' width={screenWidth} height={screenHeight/2} style={{cursor:'pointer'}} onClick = {() => Router.push('/children')} /></Slide>
          </Slider>
          
          {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>:
        <CarouselProvider
          naturalSlideWidth={screenWidth}
          naturalSlideHeight={screenHeight}
          interval={5000}
          isPlaying={true}
          totalSlides={3}
        >
          <Slider style={{width:'100vw', height:'90vh',}}>
            <Slide index={0}><img src='image1.jpeg' width={screenWidth} height={screenHeight} style={{cursor:'pointer'}} onClick = {() => Router.push('/women')}/></Slide>
            <Slide index={1}><img src='image2.png' width={screenWidth} height={screenHeight} style={{cursor:'pointer'}} onClick = {() => Router.push('/men')} /></Slide>
            <Slide index={2}><img src='image3.jpg' width={screenWidth} height={screenHeight} style={{cursor:'pointer'}} onClick = {() => Router.push('/children')} /></Slide>
          </Slider>
        </CarouselProvider>}

        <div className={styles.introContainer}>
          <p className={styles.textIntro}>
            SALECKA propose des vêtements de luxe à des prix abordables.
            Plusieurs promotions y sont également régulièrement faites durant l'année.
          </p>
        </div>

        <div>
          <h1 className={styles.section}>Dernières sorties</h1>
          <div className={styles.artContainer}>
            {newArticles}
          </div>
        </div>
        
        <div>
          <h1 className={styles.section}>Meilleures ventes</h1>
          <div className={styles.artContainer}>
            {popularArticles}
          </div>
        </div>

        <div>
          <h1 className={styles.section}>Femme</h1>
          <div className={styles.artContainer}>
            {womenArt}
          </div>
        </div>

        <div>
          <h1 className={styles.section}>Homme</h1>
          <div className={styles.artContainer}>
            {menArt}
          </div>
        </div>

        <div>
          <h1 className={styles.section}>Enfant</h1>
          <div className={styles.artContainer}>
            {childrenArt}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
