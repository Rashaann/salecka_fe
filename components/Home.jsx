import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalLogoutMessage from './ModalLogoutMessage';
import Router from 'next/router';


function Home() {
  const [isConnectionModal, setIsConnectionModal] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const [screenHeight, setScreenHeight] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);



  useEffect(() => {
    // window is accessible here.
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    console.log("window.innerHeight", window.innerWidth);
  }, [screenWidth]);


  if(isLoggedOut){
    setTimeout(()=>{
      setIsLoggedOut(false);
    },2000);
  };



  const articles = [];

  for(let i = 0; i<30; i++){
    articles.push(<div key={i} className={styles.artSubContainer}>

      <div className={styles.artContent}>
        <div className={styles.image}>Photo</div>
        <div className={styles.artInfosContainer}>
          <div className={styles.artInfosContent}>
            <p className={styles.artText}>Article</p>
            <p className={styles.artText}>Catégorie</p>
          </div>

          <div className={styles.artInfosContent}>
            <p>Prix</p>
          </div>
        </div>
      </div>
    </div>)
  }

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
          
          {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
        </CarouselProvider>

        <div className={styles.introContainer}>
          <p className={styles.textIntro}>
            SALECKA propose des vêtements de luxe à des prix abordables.
            Plusieurs promotions y sont également régulièrement faites durant l'année.
          </p>
        </div>

        <div>
          <h1 className={styles.section}>Dernières sorties</h1>
          <div className={styles.artContainer}>
            {articles}
          </div>
        </div>
        
        <div>
          <h1 className={styles.section}>Meilleures ventes</h1>
          <div className={styles.artContainer}>
            {articles}
          </div>
        </div>

        <div>
          <h1 className={styles.section}>Promotions</h1>
          <div className={styles.artContainer}>
            {articles}
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
