import React, { useState, useEffect } from 'react';
import styles from '../styles/SubHeader.module.css';

import Link from 'next/link';

import { BsSearch } from 'react-icons/bs';
import { Popover, Button } from 'antd';


import Router from 'next/router';
import { useDispatch } from 'react-redux';
import { searchArticle } from '../reducers/salecka';


export default function SubHeader() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);


  const [search, setSearch] = useState('');

  const [showCategories, setShowCategories] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);




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
  const searchBar = <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>
  <div className={styles.searchIcon}><BsSearch size={20} /></div>
  <input type='text' placeholder='Recherche' onChange={(e) => setSearch(e.target.value)} value={search}
    className={styles.input}
    onKeyDown={(e) => handleKeyPress(e)}
    />
  </div>




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
      {searchBar}
    </div>
  );
    
  const categoriesSmSize = <div className={styles.categories} onClick={() => setShowCategories(!showCategories)}>Catégories</div>

  



  return (
    <div className={styles.body}>
      <div className={styles.content}>

        {screenWidth<=600?categoriesSmSize:categories}


        {screenWidth<=600?<></>:searchBar}
        {showSearchBar && <input type='text' placeholder='Recherche' onChange={(e) => setSearch(e.target.value)} value={search}
          className={styles.input}
          onKeyDown={(e) => handleKeyPress(e)}
          />
        }
      </div>
      <div>
        {showCategories && categoriesContent}
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