import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Header.module.css';
import { Popover, Button } from 'antd';

import Link from 'next/link';
// import { Link } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faGear } from '@fortawesome/free-regular-svg-icons';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsGearWideConnected } from 'react-icons/bs';
import { BiPowerOff } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../reducers/salecka';
import Router from 'next/router';


import ModalLogoutMessage from './ModalLogoutMessage';

export default function Header(props) {

  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);


  useEffect(() => {
    // window is accessible here.
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    console.log("window.innerHeight", window.innerWidth);
  }, []);

  
  const user = useSelector((state) => state.salecka.value.user);
  const cart = useSelector((state) => state.salecka.value.cart);
  const connectionStatus = useSelector((state) => state.salecka.value.isConnected);


  const dispatch = useDispatch();


  const handleClick = () => {
    props.setIsLoggedOut(!props.isLoggedOut);
    dispatch(logout());
    // Router.push('/');
  }



  const handleConnection = () => {
    props.setIsConnectionModal(!props.isConnectionModal);
  }

  const popoverContent = (
    <div className={styles.popoverContainer}>
      <Link href='/profile' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.popoverContent}><FontAwesomeIcon icon={faUser} size='sm' /> Mon profil</p></a></Link>
      <Link href='/settings' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.popoverContent}><BsGearWideConnected size={20} /> Paramètres</p></a></Link>
      <p className={styles.popoverContent} onClick={() => handleClick()}><BiPowerOff size={24} />Déconnexion</p>
    </div>
  );


  const popoverTitle = <p className={styles.popoverTitle}>Bonjour {user.firstname}</p>


  const beforeConnection = <p className={styles.beforeConnection} onClick={() => handleConnection()}><FontAwesomeIcon icon={faUser} size='sm' />Connexion</p>
  const afterConnection = 
    <Popover placement="bottomRight" title={popoverTitle} content={popoverContent} className={styles.afterConnection} trigger="click">
      <p><FontAwesomeIcon icon={faUser} size='sm' />{user.firstname} {user.lastname}</p>
    </Popover>


  const beforeSmConnection = <p className={styles.beforeConnection} onClick={() => handleConnection()}><FontAwesomeIcon icon={faUser} size='lg' /></p>
  const afterSmConnection = 
    <Popover placement="bottomRight" title={popoverTitle} content={popoverContent} className={styles.afterConnection} trigger="click">
      <FontAwesomeIcon icon={faUser} size='lg' />
    </Popover>



  // if(screenWidth<=600){
  //   setHeaderDisplay(<div>
  //     <Link href='/favs' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><FontAwesomeIcon icon={faHeart} size='sm' /></a></Link>
  //     <Link href='/cart' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><AiOutlineShoppingCart size={22} /></a></Link>
  //     </div>)
  // }else{
  //   setHeaderDisplay(<div>
  //   <Link href='/favs' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.favs}><FontAwesomeIcon icon={faHeart} size='sm' />Favoris</p></a></Link>
  //   <Link href='/cart' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.cart}><AiOutlineShoppingCart size={22} />Panier</p></a></Link>
  //   </div>)
  // }
  return (
    <div className={styles.body}>
      {/* {isLoggedOut && <ModalLogoutMessage setIsLoggedOut={setIsLoggedOut} />} */}
        <Link href='/'><a style={{textDecoration: 'none', color:'black'}}><img src='logo_black.png' width={100} height={50} style={{cursor:'pointer'}}/></a></Link>
        <div className={styles.container}>
            {screenWidth<=600?
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
              <Link href='/favs' style={{textDecoration: 'none',}}><a style={{display:'flex', justifyContent:'center', textDecoration: 'none', color:'white', width:60}}><FontAwesomeIcon icon={faHeart} size='lg' /></a></Link>
              <Link href='/cart' style={{textDecoration: 'none',}}>
                <a style={{display:'flex', justifyContent:'center', textDecoration: 'none', color:'white', width:60}}>
                  <AiOutlineShoppingCart size={33} />
                  {cart.length===0?<></>:<div style={{display:'flex', justifyContent:'center', alignItems:'center', borderRadius:20, width:20, height:20, backgroundColor:'white', color: 'black', fontSize:11,  marginRight:-10, marginTop:-5}}>
                    {cart.length}</div>}
                </a>
              </Link>
              {!(connectionStatus)?beforeSmConnection:afterSmConnection}
            </div>:
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
              <Link href='/favs' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.favs}><FontAwesomeIcon icon={faHeart} size='sm' />Favoris</p></a></Link>
              <Link href='/cart' style={{textDecoration: 'none',}}>
                <a style={{textDecoration: 'none', color:'black'}}>
                  <p className={styles.cart}>
                    <div style={{width:22, height:22,}}>
                    <AiOutlineShoppingCart size={22} />
                      {cart.length===0?<></>:<div style={{display:'flex', justifyContent:'center', alignItems:'center', borderRadius:20, width:15, backgroundColor:'white', color: 'black', fontSize:11,  marginLeft:15, marginTop:-34}}>
                      {cart.length}</div>}
                    </div>
                    Panier
                  </p>
                </a>
              </Link>
              {!(connectionStatus)?beforeConnection:afterConnection}
            </div>}
            
        </div>
    </div>
  )
}