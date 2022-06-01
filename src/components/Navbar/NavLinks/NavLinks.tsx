import styles from './NavLinks.module.scss';
import { Link } from 'react-router-dom';
import {useEffect, useState} from 'react'

interface NavProps {
  toggleHamburger: () => void
}

export  function NavLinks({toggleHamburger}:NavProps) {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 769


  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))}
  ,[])


  return (

    <ul className={width < breakpoint ? `${styles.mainlist}` : `${styles.mainlistnoMobile}`}>
          <li  className={styles.list}>
              <Link onClick={toggleHamburger} to='/' className={styles.anchorTag}>Home</Link>
          </li>
          <li  className={styles.list}>
              <Link onClick={toggleHamburger} to='/about' className={styles.anchorTag}>About</Link>
          </li>
          <li  className={styles.list}>
              <Link onClick={toggleHamburger} to='/contact' className={styles.anchorTag}>Contact</Link>
          </li>
          <li  className={styles.list}>
              <Link onClick={toggleHamburger} to='/alert' className={styles.anchorTag}>Homework Alert</Link>
          </li>
          <li  className={styles.list}>
              <Link onClick={toggleHamburger} to='/form' className={styles.anchorTag}>Homework Form</Link>
          </li>
          <li  className={styles.list}>
              <Link onClick={toggleHamburger} to='/rim' className={styles.anchorTag}>R&M Api</Link>
          </li>
    </ul>
  )
}
