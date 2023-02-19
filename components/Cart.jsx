import React, { useState, useEffect } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';

import { useDispatch, useSelector } from 'react-redux';
import { addDataArticle, addFavsData, removeFavsData, addCartsData, removeCartsData } from '../reducers/salecka';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FaHeart, FaTimes } from 'react-icons/fa';


import Router from "next/router";
import ModalCartConfirmation from './ModalCartConfirmation';
import ModalFavsMessage from './ModalFavsMessage';

import styles from '../styles/Cart.module.css';


export default function Cart() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);

    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isCartConfModal, setIsCartConfModal] = useState(false);
    const [isArtToFavs, setIsArtToFavs] = useState(false);

    const totalPrice = [];


    //MODAL CONFIRMATION:
    const [article, setArticle] = useState({});



    const cart = useSelector((state) => state.salecka.value.cart);
    const favs = useSelector((state) => state.salecka.value.favs);
    const isConnected = useSelector((state)=> state.salecka.value.isConnected);


    const dispatch = useDispatch();
    // console.log('CART => ',cart);


    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
          console.log('Order placed! You will receive an email confirmation.');
        }
    
        if (query.get('canceled')) {
          console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }

        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    }, []);


    const favsMessage = () => {
        setIsArtToFavs(true);
            setTimeout(() => {
                setIsArtToFavs(false);
            }, 2000);
    }

    const addToFavs = (el) => {
        if(isConnected){
            if(favs.some((e) => e.token === el.article.token)){
                dispatch(removeFavsData(el.article));
                console.log('ARTICLE REMOVED.');
            } else {
                dispatch(addFavsData(el.article));
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

    const removeArticleFromCart = (el) => {
        //Afficher modal pour confirmation de suppresion de l'article.
        //Puis si confirmation -> dispatch(removeCartsData(el));
        setArticle(el);
        setIsCartConfModal(true);
    }


    const updateQty = (str, qtty, art) => {
        if(str==='-'){
            if(qtty>1){
                dispatch(addCartsData({article: art, quantity: -1}))
            } else {
                removeArticleFromCart({article: art, quantity:qtty});
            }
            console.log('MINUS');
        } else {
            dispatch(addCartsData({article: art, quantity: 1}));
            console.log('PLUS');
        }
    }


    const cartArticles = cart.map((el,i) => {
        const firstImg = el.article.image[0];
        let heartIcon = <FontAwesomeIcon icon={faHeart} size='sm' color='black' />
        if (favs.some((e) => e.token === el.article.token)){
            heartIcon = <FaHeart size={20} color='black' />
        }
        totalPrice.push(el.article.price*el.quantity);
            return (<div key={i} className={styles.artBody}>
                {screenWidth<=600?
                <FaTimes size={25} color='black' style={{cursor:'pointer'}} onClick={() => removeArticleFromCart(el)}/>:
                <FaTimes size={20} color='black' style={{cursor:'pointer'}} onClick={() => removeArticleFromCart(el)}/>}
            <div className={styles.artContainer}>
                {screenWidth<=600?
                <div style={{display:'flex', width:'45vw', height:200, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
                    <div className={styles.heartIconContainer} onClick={() => addToFavs(el)}>
                        {heartIcon}
                    </div>
                </div>:
                <div style={{display:'flex', width:120, height:148, borderTopLeftRadius:10, borderBottomLeftRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
                    <div className={styles.heartIconContainer} onClick={() => addToFavs(el)}>
                        {heartIcon}
                    </div>
                </div>}
                <div className={styles.infoContainer}>
                    <div className={styles.infoSubContainer} onClick={() => handleClick(el)}>
                        <p style={{fontSize:23}}>{el.article.name}</p>
                        <p style={{fontSize:18}}>{el.article.subname}</p>
                    </div>

                    <div className={styles.qtyContainer}>
                        <button className={styles.qtyLeftBtn} onClick={() => updateQty('-', el.quantity, el.article)}>-</button>
                        <p className={styles.qty}>{el.quantity}</p>
                        <button className={styles.qtyRightBtn} onClick={() => updateQty('+', el.quantity, el.article)}>+</button>
                    </div>

                    <div className={styles.total}>
                        <p style={{fontSize:30}}>{el.article.price*el.quantity}€</p>
                    </div>
                </div>
            </div>
        </div>)
    });

  return (
    <div className={styles.body}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isCartConfModal && <ModalCartConfirmation setIsCartConfModal={setIsCartConfModal} article={article} />}
        {isArtToFavs && <ModalFavsMessage setIsArtToFavs={setIsArtToFavs} />}
        <div>
            <Header isConnectionModal={isConnectionModal} setIsConnectionModal={setIsConnectionModal} />
            <SubHeader />
        </div>

        {cart.length===0?
        <div className={styles.noArticles}>
            <p style={{fontSize:30}}>Pas d'articles ajoutés au panier pour le moment!</p>
        </div>:
        <div className={styles.addedArticles}>
            <div className={styles.container}>
                {cartArticles}
            </div>
            <div className={styles.totalContainer}>
                <p>Total: {totalPrice.reduce(function(accumulator, currentValue) {
                        return accumulator + currentValue;
                        }, 0)} euros</p>
                <form action="/api/checkout_sessions" method="POST">
                    <button
                        className={styles.btn}
                        type="submit"
                        role="link"
                    >
                        Payer
                    </button>
                </form>
            </div>
        </div>}

        <div>
            <Footer />
        </div>
    </div>
  )
}