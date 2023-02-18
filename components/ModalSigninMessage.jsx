import React, { useState, useEffect } from 'react';



export default function ModalSigninMessage(props) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    // window is accessible here.
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    console.log("window.innerHeight", window.innerWidth);
  }, []);

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'fixed', zIndex: 1, width:'100vw', height:'100vh',}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column', backgroundColor:'rgb(192,194,189)', width:'80vw', height:100, borderRadius:5, opacity:0.7, cursor:'pointer'}} onClick={() => props.setIsArtToCart(false)}>
            {screenWidth<=600?
            <p style={{fontSize:30}}>CONNEXION AU COMPTE REUSSIE!</p>:
            <p style={{fontSize:40}}>CONNEXION AU COMPTE REUSSIE!</p>}
        </div>
    </div>
  )
}