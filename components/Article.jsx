import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import ModalConnection from './ModalConnection';
import ModalArticle from './ModalArticle';
import ModalCartMessage from './ModalCartMessage';

import { addCartsData } from '../reducers/salecka';





export default function Article() {
    const [isConnectionModal, setIsConnectionModal] = useState(false);
    const [isArticleModal, setIsArticleModal] = useState(false);

    const dispatch = useDispatch();


    const article = useSelector((state) => state.salecka.value.article);
    const cart = useSelector((state) => state.salecka.value.cart);
    //const [firstPic, setFirstPic] = useState(article.image[0]);
    const [firstPic, setFirstPic] = useState('');


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
            <img src={el} style={{width:180}}  alt={article.name - article.subname}/>
        </div>)
    })

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center', minHeight:'100vh'}}>
        {isConnectionModal && <ModalConnection setIsConnectionModal={setIsConnectionModal} />}
        {isArticleModal && <ModalArticle setIsArticleModal={setIsArticleModal} images={article.image}/>}
        {isArtToCart && <ModalCartMessage setIsArtToCart={setIsArtToCart} />}
        <div>
            <Header isConnectionModal={isConnectionModal} setIsConnectionModal={setIsConnectionModal} />
            <SubHeader />
        </div>




        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center',width:'90vw',}}>
                <div style={{display:'flex', width:'35vw', flexDirection:'column', alignItems:'center', overflowY: 'scroll', height:450}}>
                    {pics}
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center',width:'55vw', cursor:'pointer'}} onClick={() => setIsArticleModal(true)}>
                    {/* <img src={firstPic} style={{width:300}} alt={article.name - article.subname}/> */}
                </div>
        </div>

        <div style={{display:'flex', flexDirection:'column', width:'90vw', paddingLeft:20,}}>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', height:300, borderTop: `1px solid black`}}>
                <p style={{fontFamily:'DIN condensed', fontSize:25}}>{article.name} - {article.subname} </p>
                <p style={{fontFamily:'DIN condensed', fontSize:45}}>{article.price}€</p>
            </div>
            <p style={{fontFamily:'DIN condensed', fontSize:25}}>DESCRIPTION: <br/><p style={{fontFamily:'DIN condensed', fontSize:20, fontWeight:'lighter', color:'gray'}}>{article.description}</p></p>
            <p style={{fontFamily:'DIN condensed', fontSize:25}}>COMPOSITION: <br/><p style={{fontFamily:'DIN condensed', fontSize:20, color:'gray'}}>{article.composition}</p></p>
            <p style={{fontFamily:'DIN condensed', fontSize:25}}>CONSEIL D'ENTRETIEN: <br/><p style={{fontFamily:'DIN condensed', fontSize:20, color:'gray'}}>{article.advice}</p></p>
            <p style={{fontFamily:'DIN condensed', fontSize:25}}>IDENTIFIANT(S): <br/><p style={{fontFamily:'DIN condensed', fontSize:20, color:'gray'}}>{article.ids}</p></p>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-around', alignItems:'center',height:125,}}>
                <button
                    style={{color:'black', backgroundColor:'white', borderWidth:1.5, borderColor:'black', borderRadius:20, fontSize:20, fontFamily:'DIN Condensed', width:150, height:35, cursor:'pointer'}}
                    onClick={() => addToCart()}
                >
                    Ajouter au panier
                </button>
                <form action="/api/checkout_sessions" method="POST">
                    {/* <section> */}
                        <button
                            style={{color:'white', backgroundColor:'black', borderWidth:1.5, borderColor:'white', borderRadius:20, fontSize:20, fontFamily:'DIN Condensed', width:150, height:35, cursor:'pointer'}}
                            type="submit"
                            role="link"
                        >
                            Payer
                        </button>
                    {/* </section> */}
                </form>
                
            </div>
        </div>


        <div>
            <Footer />
        </div>

    </div>
  )
};