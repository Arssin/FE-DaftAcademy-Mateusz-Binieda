import styles from './MobileNavbar.module.scss';
import { VscCircuitBoard } from "react-icons/vsc";
import { HamburgerMenu } from '../HamburgerMenu';
import {useState} from 'react'
import {NavLinks} from './NavLinks/NavLinks'
import {Link} from 'react-router-dom'


export function MobileNavbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true)
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

  return (
  <nav className={styles.navigation}>
    <Link to='/'><VscCircuitBoard className={styles.icon}/></Link>
      {!hamburgerOpen &&  (<NavLinks/>)} 
    <HamburgerMenu isOpen={hamburgerOpen} onClick={toggleHamburger} />
  </nav>
  )
}
