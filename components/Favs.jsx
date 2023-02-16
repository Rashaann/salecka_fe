import React, { useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faGear } from '@fortawesome/free-regular-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { addDataArticle, addFavsData, removeFavsData, addCartsData } from '../reducers/salecka';
import {FaHeart} from 'react-icons/fa';

import Router from "next/router";




export default function Favs() {

    const [isConnectionModal, setIsConnectionModal] = useState(false);



    const dispatch = useDispatch();
    const favs = useSelector((state) => state.salecka.value.favs);
    const isConnected = useSelector((state)=> state.salecka.value.isConnected);



    const addToFavs = (el) => {
        if(isConnected){
            console.log('ELEMENT => ', el);
            if(favs.some((e) => e.token === el.token)){
                dispatch(removeFavsData(el));
                console.log('ARTICLE REMOVED.');
                console.log(favs);
            } else {
                dispatch(addFavsData(el));
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


    
    const favoriteArticles = favs.map((el,i) => {
        const firstImg = el.image[0];
        let heartIcon = <FontAwesomeIcon icon={faHeart} size='s' color='black' />
        if (favs.some((e) => e.token === el.token)){
            heartIcon = <FaHeart size={20} color='black' />
        }
            return (<div key={i} style={{width:220, height:330, paddingLeft:30, paddingRight:30,}}>
            <div style={{display: 'flex', flexDirection:'column', width:200, height:300, borderRadius:10,}}>
                <div style={{display:'flex', width:200, height:240, backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'flex-end', alignItems:'flex-start', backgroundImage:"url(" + firstImg + ")", backgroundSize: 'cover',}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer', width:30, height:30,}} onClick={() => addToFavs(el)}>
                        {heartIcon}
                        {/* <FontAwesomeIcon icon={faHeart} size='s' color='black' /> */}
                    </div>
                    {/* <img src={randomPic} width={200} height={240} style={{borderTopLeftRadius:10, borderTopRightRadius:10}}/> */}
                </div>
                <div style={{display:'flex', height:60, justifyContent:'space-around', alignItems:'center', cursor:'pointer'}} onClick={() => handleClick(el)}>
                    <div style={{width:90, height:60}}>
                        <p style={{fontSize:14}}>{el.subname}</p>
                        <p style={{fontSize:14}}>{el.type}</p>
                    </div>

                    <div style={{width:90, height:60}}>
                        <p>{el.price}€</p>
                    </div>
                </div>
            </div>
        </div>)
    });

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'100vh'}}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        <div>
            <Header isConnectionModal={isConnectionModal} setIsConnectionModal={setIsConnectionModal} />
            <SubHeader />
        </div>

        {favs.length===0?
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh',}}>
            <p style={{fontSize:30}}>Pas d'articles ajoutés aux favoris pour le moment!</p>
        </div>:
        <div style={{display:'flex', flexWrap:'wrap', width:'90vw', minHeight:'70vh', padding:20}}>{favoriteArticles}</div>}

        <div>
            <Footer />
        </div>
    </div>
  )
}