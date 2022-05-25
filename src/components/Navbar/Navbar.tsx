
import { VscCircuitBoard } from "react-icons/vsc";
import { useState } from 'react';
import { HamburgerMenu } from '../HamburgerMenu';
import {Navigation} from './Navigation'
import { MobileNavbar } from './MobileNavbar';
import styles from './Navbar.module.scss'



export function Navbar() {

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)
 

  return (
    <div className={styles.navbar}>
      <Navigation />
      <MobileNavbar />
    </div>
  )
}
