import React from 'react';



export default function ModalFavsMessage(props) {


  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'fixed', zIndex: 1, width:'100vw', height:'100vh',}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column', backgroundColor:'rgb(192,194,189)', width:'80vw', height:100, borderRadius:5, opacity:0.7, cursor:'pointer'}} onClick={() => props.setIsArtToFavs(false)}>
            <p style={{fontSize:40}}>ARTICLE AJOUTÉ AUX FAVORIS!</p>
        </div>
    </div>
  )
}