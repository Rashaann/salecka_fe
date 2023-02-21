import React, { useEffect, useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';


import Router from 'next/router';
import { searchArticle } from '../reducers/salecka';

export default function ModalSearch(props) {

  const [search, setSearch] = useState('');


  const dispatch = useDispatch();



  const handleKeyPress = (key) => {
    if(key.code === 'Enter'){
      dispatch(searchArticle(search));
      setSearch('');
      props.setIsModalSearch(false);
      Router.push('/search');
      console.log('ENTER KEY PRESSED! => ', search);
    }
  }

  
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'fixed', zIndex: 1, width:'100vw', height:'100vh',}}>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexDirection:'column', backgroundColor:'black', width:'80vw', height:'20vh', borderRadius:5, cursor:'pointer'}}>
            <div style={{display:'flex', justifyContent:'flex-end', alignItems:'center', height:'3vh', width:'70vw'}}>
                <FaTimes color='white' onClick={() => props.setIsModalSearch(false)}/>
            </div>
            <div>
                <input 
                    type='text'
                    placeholder='Recherche'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    onKeyDown={(e) => handleKeyPress(e)}
                    style={{
                        backgroundColor:'black',
                        width:'75vw',
                        height:'10vh',
                        fontFamily:'Barlow Condensed',
                        fontSize:20,
                        color:'white',
                        borderBottomColor:'white',
                        borderTopWidth:0,
                        borderLeftWidth:0,
                        borderRightWidth:0,
                        borderRadius:0,
                    }}/>
            </div>
        </div>
    </div>
  )
}