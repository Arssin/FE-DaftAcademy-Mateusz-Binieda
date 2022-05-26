import styles from './Contact.module.scss';
import pikachu from '../../images/pikachu.gif'
import {FaFacebookSquare}from "react-icons/fa";

export  function Contact() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contactContainer}>You can contact with me via: 
        <FaFacebookSquare />
        <FaFacebookSquare />
      </div>
      <img className={styles.gif} src={pikachu} alt='pikachu gif' />
    </div>
  )
}
