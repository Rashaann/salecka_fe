import React, { useEffect, useState } from 'react';
import styles from '../styles/Footer.module.css';

import Link from 'next/link';


import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsFacebook, BsSnapchat } from 'react-icons/bs';

import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';



export function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
}




export default function Footer() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);
    
    
    useEffect(() => {
        // window is accessible here.
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
        console.log("window.innerHeight", window.innerWidth);
    }, []);
    
    const items = [
        getItem(<p className={styles.title}>POLITIQUES</p>, null, null, [
            getItem(<Link href='/policies#privacy_policy' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Politique de confidentialité</p></a></Link>, '1'),
            getItem(<Link href='/policies#cookies' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Politique de cookies</p></a></Link>, '2'),
            getItem(<Link href='/policies#terms_of_use' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Conditions générales d'utilisation</p></a></Link>, '3'),
            getItem(<Link href='/policies#terms_of_use' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Conditions générales de vente</p></a></Link>, '4'),
            getItem(<Link href='/policies#legal_notice' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Mentions légales</p></a></Link>, '5'),
        ]),
        getItem(<p className={styles.title}>SERVICE CLIENT</p>, null, null, [    
            getItem(<Link href='/contactus' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Nous contacter</p></a></Link>, '6'),
            getItem(<Link href='/contactus' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Nous rejoindre</p></a></Link>, '7'),
        ]),
        getItem(<p className={styles.title}>NEWSLETTER</p>, null, null, [
            getItem(<Link href='/newsletter' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Abonnement à la newsletter</p></a></Link>, '8'),
        ]),
        getItem(<p className={styles.title}>SHOPPING</p>, null, null, [          
            getItem(<Link href='/women' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Femme</p></a></Link>, '9'),
            getItem(<Link href='/men' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Homme</p></a></Link>, '10'),
            getItem(<Link href='/mixte' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Mixte</p></a></Link>, '11'),
            getItem(<Link href='/children' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Enfant</p></a></Link>, '12'),
            getItem(<Link href='/promotions' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Promotions</p></a></Link>, '13'),
        ]),
        getItem(<p className={styles.title}>RESEAUX SOCIAUX</p>, null, null, [
            getItem(<p className={styles.text}><AiOutlineInstagram size={25} /> Instagram</p>, '14'),
            getItem(<p className={styles.text}><BsFacebook size={20} /> Facebook</p>, '15'),
            getItem(<p className={styles.text}><AiOutlineTwitter size={25} /> Twitter</p>, '16'),
            getItem(<p className={styles.text}><BsSnapchat size={20} /> Snapchat</p>, '17'),
        ]),
    ];

    const onClick = (e) => {
        console.log('click ', e);
    };


    if(screenWidth>900){
        return (
          <div className={styles.body}>
              <div className={styles.container}>
                  <div className={styles.subContainer}>
                      <p className={styles.title}>POLITIQUES</p>
      
                      <Link href='/policies#privacy_policy' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Politique de confidentialité</p></a></Link>
                      <Link href='/policies#cookies' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Politique de cookies</p></a></Link>
                      <Link href='/policies#terms_of_use' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Conditions générales d'utilisation</p></a></Link>
                      <Link href='/policies#terms_of_use' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Conditions générales de vente</p></a></Link>
                      <Link href='/policies#legal_notice' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Mentions légales</p></a></Link>
                  </div>
      
                  <div className={styles.subContainer}>
                      <p className={styles.title}>SERVICE CLIENT</p>
      
                      <Link href='/contactus' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Nous contacter</p></a></Link>
                      <Link href='/contactus' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Nous rejoindre</p></a></Link>
                  </div>
      
                  <div className={styles.subContainer}>
                      <p className={styles.title}>NEWSLETTER</p>
      
                      <Link href='/newsletter' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Abonnement à la newsletter</p></a></Link>
                  </div>
      
                  <div className={styles.subContainer}>
                      <p className={styles.title}>SHOPPING</p>
      
                      <Link href='/women' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Femme</p></a></Link>
                      <Link href='/men' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Homme</p></a></Link>
                      <Link href='/mixte' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Mixte</p></a></Link>
                      <Link href='/children' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Enfant</p></a></Link>
                      <Link href='/promotions' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>Promotions</p></a></Link>
                  </div>
      
                  <div className={styles.subContainer}>
                      <p className={styles.title}>RESEAUX SOCIAUX</p>
                      
                      <p className={styles.text}><AiOutlineInstagram size={25} /> Instagram</p>
                      <p className={styles.text}><BsFacebook size={20} /> Facebook</p>
                      <p className={styles.text}><AiOutlineTwitter size={25} /> Twitter</p>
                      <p className={styles.text}><BsSnapchat size={20} /> Snapchat</p>
                  </div>
              </div>
      
              <div className={styles.signature}>
                  <img src='logo_black.png' width={80} height={40}/>
                  <p className={styles.signText}>Made with 💙 by Zakstein</p>
              </div>
          </div>
        )
    } else {
        return (
            <div className={styles.body}>
            <Menu
              onClick={onClick}
              style={{
                width: '95vw',
                minHeight:200,
                backgroundColor:'black',
                color:'white',
                fontFamily:'Barlow Condensed',
              }}
              mode="inline"
              items={items}
            />
            <div className={styles.signature}>
                <img src='logo_black.png' width={80} height={40}/>
                <p className={styles.signText}>Made with 💙 by Zakstein</p>
            </div>
            </div>
          );
    }
}