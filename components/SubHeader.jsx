import React, { useState, useEffect } from 'react';
import styles from '../styles/SubHeader.module.css';

import Link from 'next/link';

import { BsSearch , BsFacebook, BsSnapchat} from 'react-icons/bs';
import { AiOutlineMenu, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Popover, Button } from 'antd';
import { Menu, MenuUnfoldOutlined, MenuFoldOutlined } from 'antd';


import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { searchArticle } from '../reducers/salecka';



export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}




export default function SubHeader() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);


  const [search, setSearch] = useState('');

  const [showCategories, setShowCategories] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);


  const womenMenu = [
    'Tout',
    'Nouveautés',
    'Meilleures ventes',
    'Promotions',
    'Robes',
    'Vestes et manteaux',
    'Pantalons',
    'Gilets et pulls',
    'Tops',
    'Chemisiers et blouses',
    'Sweatshirts',
    'Jeans',
    'Blazers',
    'Chaussures',
    'Accessoires',
    'Mailles',
    'Basiques',
    'Sacs à main',
    'Jupes',
    'Lingerie',
    'Vêtements d´intérieur',
    'Pyjamas et nuisettes',
    'Chaussettes et collants',
    'Combinaisons',
    'Shorts',
    'Maillots de bain',
    'Vêtements de sport',
    'Beauté']

    const menuTags = [
      'all',
      'new',
      'bestsellings',
      'promo',
      'dress',
      'coats',
      'pants',
      'pulls',
      'tops',
      'blouses',
      'sweatshirts',
      'jeans',
      'blazers',
      'shoes',
      'accessories',
      'knit',
      'basics',
      'handbag',
      'skirt',
      'lingerie',
      'home_clothes',
      'pajamas',
      'socks',
      'suit',
      'shorts',
      'swimsuit',
      'sportswear',
      'beauty']

    const menMenu = [
      'Nouveautés',
      'Meilleures ventes',
      'Promotions',
      'Basiques',
      'Sweats',
      'Vestes et manteaux',
      'Pulls et Cardigans',
      'Costumes et Blazers',
      'T-Shirts',
      'Chemises',
      'Pantalons et Cargo',
      'Jeans',
      'Shorts',
      'Pyjamas',
      'Sous-vêtements',
      'Sport',
      'Maillots de bain',
      'Chaussettes',
      'Chaussures',
      'Accessoires'
    ]

  const childrenMenu = [
    'Nouveautés',
    'Meilleures ventes',
    'Promotions',
    'Vêtements',
    'Vêtements d’extérieur',
    'Accessoires',
    'Chaussures',
    'Déguisements Enfant',
    'Vêtements de Sport'
  ]

  const promoMenu = [
    'Homme',
    'Femme',
    'Enfant',
]

  useEffect(() => {
    // window is accessible here.
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    console.log("window.innerHeight", window.innerWidth);
  }, []);

  const dispatch = useDispatch();



  const handleKeyPress = (key) => {
    if(key.code === 'Enter'){
      dispatch(searchArticle(search));
      setSearch('');
      Router.push('/search');
      console.log('ENTER KEY PRESSED! => ', search);
    }
  }



  //DISPLAY SEARCH BAR REGARDING THE DEVICE'S SIZE
  //Big screen devices
  const searchBar = <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
  <div className={styles.searchIcon}><BsSearch size={20} /></div>
  <input type='text' placeholder='Recherche' onChange={(e) => setSearch(e.target.value)} value={search}
    className={styles.input}
    onKeyDown={(e) => handleKeyPress(e)}
    />
  </div>


  //Small screen devices
  const searchBarSm = <div className={styles.searchIcon} onClick={() => setShowSearchBar(!showSearchBar)}><BsSearch size={25} /></div>
  



  //DISPLAY CATEGORIES REGARDING THE DEVICE'S SIZE
  //Big screen devices
  const categories = <div className={styles.categories}>
    <Link href='/women' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Femme</p></a></Link>
    <Link href='/men' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Homme</p></a></Link>
    <Link href='/mixte' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Mixte</p></a></Link>
    <Link href='/children' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Enfant</p></a></Link>
    <Link href='/promotions' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Promotions</p></a></Link>
  </div>



  //Small screen devices
  const categoriesContent = (
    <div className={styles.categoriesContainer}>
      <Link href='/women' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Femme</p></a></Link>
      <Link href='/men' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Homme</p></a></Link>
      <Link href='/mixte' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Mixte</p></a></Link>
      <Link href='/children' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Enfant</p></a></Link>
      <Link href='/promotions' style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p style={{cursor:'pointer'}}>Promotions</p></a></Link>
    </div>
  );
    
  const categoriesSmSize = <div className={styles.categories} onClick={() => setShowCategories(!showCategories)}><AiOutlineMenu size={25} /></div>

  

  const womenMenuItems = womenMenu.map((el,i) => {
    //return getItem(<Link href={`#${menuTags[i]}`} style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>{el}</p></a></Link>, String(i));
    return getItem(<Link href={`/women`} style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>{el}</p></a></Link>, String(i));
  })

  const menMenuItems = menMenu.map((el,i) => {
    return getItem(<Link href={`/men`} style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>{el}</p></a></Link>, String(i));
  })

  const childrenMenuItems = childrenMenu.map((el,i) => {
    return getItem(<Link href={`/children`} style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>{el}</p></a></Link>, String(i));
  })

  const promoMenuItems = promoMenu.map((el,i) => {
    return getItem(<Link href={`/promotions`} style={{textDecoration: 'none',}}><a style={{textDecoration: 'none', color:'black'}}><p className={styles.text}>{el}</p></a></Link>, String(i));
  })


  const items = [
    getItem(<p className={styles.title}>FEMME</p>, null, null, womenMenuItems),
    getItem(<p className={styles.title}>HOMME</p>, null, null, menMenuItems),
    getItem(<p className={styles.title} onClick={() => Router.push('/mixte')}>MIXTE</p>, null, null,),
    getItem(<p className={styles.title}>ENFANT</p>, null, null, childrenMenuItems),
    getItem(<p className={styles.title}>PROMOTIONS</p>, null, null, promoMenuItems),
];


  return (
    <div className={styles.body}>
      <div className={styles.content}>

        {screenWidth<=600?categoriesSmSize:categories}


        {screenWidth<=600?searchBarSm:searchBar}
        {showSearchBar && <input type='text' placeholder='Recherche' onChange={(e) => setSearch(e.target.value)} value={search}
          className={styles.input}
          onKeyDown={(e) => handleKeyPress(e)}
          />
        }
      </div>
      <div>
        {showCategories && 
        <Menu
          style={{
            width: '100vw',
            fontFamily:'DIN Condensed',
          }}
          mode="inline"
          
          items={items}
        />}
      </div>
        {/* <div style={{display:'flex'}}>
        <div className={styles.searchIcon}><BsSearch size={20} /></div>
        <input type='text' placeholder='Recherche' onChange={(e) => setSearch(e.target.value)} value={search}
          className={styles.input}
          onKeyDown={(e) => handleKeyPress(e)}
          />
        </div> */}
    </div>
  )
}