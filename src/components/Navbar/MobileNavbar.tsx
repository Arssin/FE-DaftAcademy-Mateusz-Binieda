import styles from './MobileNavbar.module.scss';
import { VscCircuitBoard } from "react-icons/vsc";
import { HamburgerMenu } from '../HamburgerMenu';
import {useState} from 'react'


export function MobileNavbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(true)
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

  console.log(hamburgerOpen)
  console.log(toggleHamburger)
  return (
  <nav className={styles.navigation}>
    <VscCircuitBoard className={styles.icon}/>
    <HamburgerMenu isOpen={hamburgerOpen} onClick={toggleHamburger} />
  </nav>
  )
}