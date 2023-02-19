import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeCartsData } from '../reducers/salecka';



export default function ModalCartConfirmation(props) {

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleDeletion = () => {
        props.setIsCartConfModal(false);
        dispatch(removeCartsData(props.article));
    }
    

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'fixed', zIndex: 1, width:'100vw', height:'100vh',}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column', backgroundColor:'white', width:500, height:250, borderRadius:10, border:`1px solid black`}}>
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', width:500, height:30, paddingRight:15, paddingTop:15, color:'black', cursor:'pointer'}} onClick={() => props.setIsCartConfModal(false)}><FaTimes/></div>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center',height:125, width:450}}>
                <p>Confirmez-vous vouloir supprimer l'article "<span style={{color:'gray'}}>{props.article.article.name} - {props.article.article.subname}</span>" de votre panier?</p>
            </div>

            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:500, height:125}}>
                <button
                    style={{color:'black', backgroundColor:'white', borderWidth:1, borderColor:'white', borderRadius:20, fontSize:20, fontFamily:'Barlow Condensed', width:150, height:35, cursor:'pointer'}}
                    onClick={() => props.setIsCartConfModal(false)}
                >
                    Retour
                </button>
                <button
                    style={{color:'gray', backgroundColor:'white', borderWidth:1, borderColor:'white', borderRadius:20, fontSize:20, fontFamily:'Barlow Condensed', width:150, height:35, cursor:'pointer'}}
                    onClick={() => handleDeletion()}
                >
                    Confirmer
                </button>
            </div>

        </div>
      </div>
  )
}