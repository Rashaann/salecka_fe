import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeCartsData } from '../reducers/salecka';


import styles from '../styles/ModalCartConfirmation.module.css';


export default function ModalCartConfirmation(props) {

    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleDeletion = () => {
        props.setIsCartConfModal(false);
        dispatch(removeCartsData(props.article));
    }
    

  return (
    <div className={styles.modalContainer}>
        <div className={styles.modalSubContainer}>
            <div className={styles.closeModal} onClick={() => props.setIsCartConfModal(false)}><FaTimes/></div>
            <div className={styles.message}>
                <p>Confirmez-vous vouloir supprimer l'article "<span style={{color:'red'}}>{props.article.article.name} - {props.article.article.subname}</span>" de votre panier?</p>
            </div>

            <div className={styles.btnContainer}>
                <button
                    className={styles.backBtn}
                    onClick={() => props.setIsCartConfModal(false)}
                >
                    Retour
                </button>
                <button
                    className={styles.agreeBtn}
                    onClick={() => handleDeletion()}
                >
                    Confirmer
                </button>
            </div>

        </div>
      </div>
  )
}