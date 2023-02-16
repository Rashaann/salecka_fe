import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { autoBatchEnhancer } from '@reduxjs/toolkit';




export default function ModalArticle(props) {

    const images = props.images.map((el, i) => {
        return (<Slide index={i} style={{width:450}}><img src={el} style={{width:450,}} /></Slide>)
    });


  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'fixed', zIndex: 1, width:'100vw', height:'100vh',}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', backgroundColor:'white', width:'90vw', height:'95vh', borderRadius:10, border:`1px solid black`,}}>

            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', width:'90vw', height:30, paddingRight:15, paddingTop:15, color:'black', cursor:'pointer'}} onClick={() => props.setIsArticleModal(false)}><FaTimes/></div>

            <CarouselProvider
                naturalSlideWidth={450}
                naturalSlideHeight={450}
                totalSlides={props.images.length}
                style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'90vw',}}
                >

                    <ButtonBack style={{backgroundColor:'white', borderWidth:0}}><BsArrowLeft size={40} /></ButtonBack>

                    <Slider style={{width:450, height:'85vh',}}>
                        {images}
                    </Slider>

                    <ButtonNext style={{backgroundColor:'white', borderWidth:0}}><BsArrowRight size={40} /></ButtonNext>

            </CarouselProvider>


        </div>
      </div>
  )
}