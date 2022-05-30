import {Navigation} from './Navigation'
import { MobileNavbar } from './MobileNavbar';
import styles from './Navbar.module.scss'
import { useState } from 'react';


export function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(true)
  const toggleHamburger = () => setHamburgerOpen(!hamburgerOpen)

  return (
    <div className={styles.navbar}>
      <Navigation  toggleHamburger={toggleHamburger}/>
      <MobileNavbar toggleHamburger={toggleHamburger} hamburgerOpen={hamburgerOpen}/>
    </div>
  )
}
