import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalArticle from './ModalArticle';
import ModalCartMessage from './ModalCartMessage';

import { addCartsData } from '../reducers/salecka';
import { Carousel } from 'antd';


import styles from '../styles/Article.module.css';







export default function Article() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);


    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isArticleModal, setIsArticleModal] = useState(false);

    const article = useSelector((state) => state.salecka.value.article);
    const cart = useSelector((state) => state.salecka.value.cart);
    const [firstPic, setFirstPic] = useState(article.image[0]);
    //const [firstPic, setFirstPic] = useState('');
    console.log('FIRST PIC => ', firstPic);


    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        } else if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }

        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    }, []);



    const [isArtToCart, setIsArtToCart] = useState(false);

    const cartMessage = () => {
        setIsArtToCart(true);
        setTimeout(() => {
            setIsArtToCart(false);
        }, 4000);
    }
    const addToCart = () => {
        dispatch(addCartsData({article: article, quantity: 1}));
        cartMessage();
        console.log('ARTICLE ADDED TO CART.');
    }
    

    console.log('CART => ', cart);
    

    const changeFirstPic = (el) => {
        setFirstPic(el);
    }

    const pics = article.image.map((el,i) => {
        return(<div key={i} style={{cursor:'pointer'}} onClick={() => changeFirstPic(el)}>
            <img src={el} style={{width:180}}  alt={`${article.name} - ${article.subname}`}/>
        </div>)
    });

    const smPics = article.image.map((el,i) => {
        return(<div key={i} style={{cursor:'pointer', backgroundColor:'red', width:'100vw', height:'50vh'}}>
            <img src={el} style={{width:'100vw'}}  alt={`${article.name} - ${article.subname}`}/>
        </div>)
    })
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };

    
  return (
    <div className={styles.body}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isArticleModal && <ModalArticle setIsArticleModal={setIsArticleModal} images={article.image}/>}
        {isArtToCart && <ModalCartMessage setIsArtToCart={setIsArtToCart} />}
        <div>
            <Header isConnectionModal={isConnectionModal} setIsConnectionModal={setIsConnectionModal} />
            <SubHeader />
        </div>




        {screenWidth<=900?
        <Carousel style={{width:'100vw', height:'80vh', color:'black'}}>
            {smPics}
        </Carousel>:
        <div className={styles.imgContainer}>
                <div className={styles.leftImgSubContainer}>
                    {pics}
                </div>
                <div className={styles.rightImgSubContainer} onClick={() => setIsArticleModal(true)}>
                    <img src={firstPic} className={styles.centralPic} alt={`${article.name} - ${article.subname}`}/>
                </div>
        </div>}

        <div className={styles.infoContainer}>
            <div className={styles.globalInfosSubContainer}>
                <p className={styles.name}>{article.name} - {article.subname} </p>
                <p className={styles.price}>{article.price}€</p>
            </div>
            <p className={styles.title}>DESCRIPTION: </p>
            <p className={styles.text}>{article.description}</p>
            <p className={styles.title}>COMPOSITION: </p>
            <p className={styles.text}>{article.composition}</p>
            <p className={styles.title}>CONSEIL D'ENTRETIEN: </p>
            <p className={styles.text}>{article.advice}</p>
            <p className={styles.title}>IDENTIFIANT(S): </p>
            <p className={styles.text}>{article.ids}</p>
            <div className={styles.btnContainer}>
                <button
                    className={styles.addCartBtn}
                    onClick={() => addToCart()}
                >
                    Ajouter au panier
                </button>
                <form action="/api/checkout_sessions" method="POST">
                    <button
                        className={styles.payBtn}
                        type="submit"
                        role="link"
                    >
                        Payer
                    </button>
                </form>
                
            </div>
        </div>


        <div>
            <Footer />
        </div>

    </div>
  )
};