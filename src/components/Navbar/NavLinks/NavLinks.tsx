import styles from './NavLinks.module.scss';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'



export  function NavLinks() {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 769


  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))}
  ,[])


  return (

    <ul className={width < breakpoint ? `${styles.mainlist}` : `${styles.mainlistnoMobile}`}>
          <li  className={styles.list}>
              <Link to='/' className={styles.anchorTag}>Home</Link>
          </li>
          <li  className={styles.list}>
              <Link to='/about' className={styles.anchorTag}>About</Link>
          </li>
          <li  className={styles.list}>
              <Link to='/contact' className={styles.anchorTag}>Contact</Link>
          </li>
          <li  className={styles.list}>
              <Link to='/alert' className={styles.anchorTag}>Homework Alert</Link>
          </li>
          <li  className={styles.list}>
              <Link to='/form' className={styles.anchorTag}>Homework Form</Link>
          </li>
    </ul>
  )
}
