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



export default function Cart() {

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
            return (<div key={i} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'90vw', height:200, paddingLeft:30, paddingRight:30,}}>
                <FaTimes size={20} color='black' style={{cursor:'pointer'}} onClick={() => removeArticleFromCart(el)}/>
            <div style={{display: 'flex', width:'80vw', height:150, borderRadius:10, border:`1px solid black`}}>
                <div style={{display:'flex', width:120, height:148, borderTopLeftRadius:10, borderBottomLeftRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', width:30, height:30,}} onClick={() => addToFavs(el)}>
                        {heartIcon}
                    </div>
                </div>
                <div style={{display:'flex', height:150, justifyContent:'space-around', alignItems:'center', }}>
                    <div style={{width:'50vw', height:150, cursor:'pointer', paddingLeft:30}} onClick={() => handleClick(el)}>
                        <p style={{fontSize:23}}>{el.article.name}</p>
                        <p style={{fontSize:18}}>{el.article.subname}</p>
                    </div>

                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'15vw', height:150,}}>
                        <button style={{backgroundColor:'black', color:'white', height:40, width:35, borderWidth:1, borderTopLeftRadius:20, borderBottomLeftRadius:20, fontSize:20, cursor:'pointer'}} onClick={() => updateQty('-', el.quantity, el.article)}>-</button>
                        <p style={{borderWidth:0, width:45, height:40, fontSize:15, padding:10, fontFamily:'DIN Condensed',}}>{el.quantity}</p>
                        <button style={{backgroundColor:'black', color:'white', height:40, width:35, borderWidth:1, borderTopRightRadius:20, borderBottomRightRadius:20, fontSize:20, cursor:'pointer'}} onClick={() => updateQty('+', el.quantity, el.article)}>+</button>
                    </div>

                    <div style={{width:'5vw', height:150}}>
                        <p style={{fontSize:30}}>{el.article.price*el.quantity}€</p>
                    </div>
                </div>
            </div>
        </div>)
    });

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'100vh'}}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isCartConfModal && <ModalCartConfirmation setIsCartConfModal={setIsCartConfModal} article={article} />}
        {isArtToFavs && <ModalFavsMessage setIsArtToFavs={setIsArtToFavs} />}
        <div>
            <Header isConnectionModal={isConnectionModal} setIsConnectionModal={setIsConnectionModal} />
            <SubHeader />
        </div>

        {cart.length===0?
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh',}}>
            <p style={{fontSize:30}}>Pas d'articles ajoutés au panier pour le moment!</p>
        </div>:
        <div style={{display:'flex', flexDirection:'column', width:'95vw', height:'90vh', padding:20,}}>
            <div style={{display:'flex', flexDirection:'column', width:'95vw', height:'75vh', padding:20, overflowY:'scroll'}}>
                {cartArticles}
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', width:'95vw', height:'25vh', padding:20, borderTop:`1px solid black`,}}>
                <p>Total: {totalPrice.reduce(function(accumulator, currentValue) {
                        return accumulator + currentValue;
                        }, 0)} euros</p>
                <form action="/api/checkout_sessions" method="POST">
                    <button
                        style={{color:'white', backgroundColor:'black', borderWidth:1.5, borderColor:'white', borderRadius:20, fontSize:20, fontFamily:'DIN Condensed', width:150, height:35, cursor:'pointer'}}
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