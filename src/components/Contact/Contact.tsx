import styles from './Contact.module.scss';
import pikachu from '../../images/pikachu.gif'
import {FaFacebookSquare, FaInstagram, FaGithub, FaLinkedin}from "react-icons/fa";

export  function Contact() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.contactContainer}>
        You can contact with me via: 
      <br/>
      <a href="https://www.facebook.com/mateusz.binieda.14/" rel="noreferrer" target="_blank">
        <FaFacebookSquare className={styles.icons}/>
      </a>
      <a href="https://www.instagram.com/songo_bjj/" rel="noreferrer" target="_blank">
        <FaInstagram className={styles.icons}/>
      </a>
      <a href="https://github.com/Arssin" rel="noreferrer" target="_blank"> 
        <FaGithub  className={styles.icons}/>
      </a>
      <a href="https://www.linkedin.com/in/mateusz-bini%C4%99da-818141209/" rel="noreferrer" target="_blank">
        <FaLinkedin  className={styles.icons}/>
      </a>
      </div>
      <img className={styles.gif} src={pikachu} alt='pikachu gif' />
    </div>
  )
}
