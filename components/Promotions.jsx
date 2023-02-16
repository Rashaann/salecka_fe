import React, { useState } from 'react';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalArticle from './ModalArticle';
import ModalLogoutMessage from './ModalLogoutMessage';


import { useDispatch, useSelector } from 'react-redux';
import { addDataArticle, addFavsData, removeFavsData, addCartsData } from '../reducers/salecka';
import Router from "next/router";


import styles from '../styles/Promotions.module.css';

export default function Promotions() {
    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isArticleModal, setIsArticleModal] = useState(false);
    const [isLoggedOut, setIsLoggedOut] = useState(false);



    const handleClick = () => {
        setIsArticleModal(!isArticleModal);
    }

    //DISPLAY CONFIRMATION MESSAGE OF SUCCESSFULL LOGOUT
    if(isLoggedOut){
        setTimeout(()=>{
          setIsLoggedOut(false);
        },2000);
    }


    const pictures = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg',
        'image7.jpg',
        'image8.jpg',
        'image9.jpg',
        'image10.jpg',
    ]

    

    const menu = [
        'Homme',
        'Femme',
        'Enfant',
    ]

    const dispMenu = menu.map((e,i) => {
        return <div key={i} className={styles.menu}><p>{e}</p></div>
    })

    // const articles = [];

    // for(let i = 0; i<30; i++){
    //     const randomPic = pictures[Math.floor(Math.random()*pictures.length)]
    //     articles.push(<div key={i} style={{width:220, height:330, paddingLeft:30, paddingRight:30,}}>
    //         <div style={{display: 'flex', flexDirection:'column', width:200, height:300, borderRadius:10,}} onClick={() => handleClick()}>
    //             <div style={{display:'flex', width:200, height:240, backgroundColor:'gray', borderTopLeftRadius:10, borderTopRightRadius:10, justifyContent:'center', alignItems:'center',}}><img src={randomPic} width={200} height={240} style={{borderTopLeftRadius:10, borderTopRightRadius:10}}/></div>
    //             <div style={{display:'flex', height:60, justifyContent:'space-around', alignItems:'center'}}>
    //                 <div style={{width:90, height:60}}>
    //                     <p style={{fontSize:14}}>Article</p>
    //                     <p style={{fontSize:14}}>Catégorie</p>
    //                 </div>

    //                 <div style={{width:90, height:60}}>
    //                     <p>Prix</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>)
    // }

  return (
    <div>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isArticleModal && <ModalArticle setIsArticleModal={setIsArticleModal} chosenArticle={chosenArticle} />}
        {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />}
        <div>
            <Header isConnectionModal={isConnectionModal} isLoggedOut={isLoggedOut} setIsConnectionModal={setIsConnectionModal} setIsLoggedOut={setIsLoggedOut}  />
            <SubHeader />
        </div>

        <div style={{display:'flex', padding:30}}>
            <div style={{width:200}}>
                <h1>Promotions</h1>
                {dispMenu}
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70vh', width:'90vw'}}>
                <p style={{fontSize:30}}>Page "Promotions" en construction... 👨‍💻⚙️</p>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}