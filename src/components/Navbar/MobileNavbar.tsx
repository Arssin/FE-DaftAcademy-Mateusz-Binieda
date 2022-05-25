import styles from './MobileNavbar.module.scss';
import { VscCircuitBoard } from "react-icons/vsc";
import { HamburgerMenu } from '../HamburgerMenu';
import {useState} from 'react'
import {NavLinksMobile} from './NavLinks/NavLinksMobile'


export function MobileNavbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true)
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

  return (
  <nav className={styles.navigation}>
    <VscCircuitBoard className={styles.icon}/>
      {!hamburgerOpen &&  (<NavLinksMobile />)} 
    <HamburgerMenu isOpen={hamburgerOpen} onClick={toggleHamburger} />
  </nav>
  )
}
