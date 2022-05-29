import styles from './MobileNavbar.module.scss';
import { VscCircuitBoard } from "react-icons/vsc";
import { HamburgerMenu } from '../HamburgerMenu';
import {NavLinks} from './NavLinks/NavLinks'
import {Link} from 'react-router-dom'

interface NavProps {
  toggleHamburger: () => void
  hamburgerOpen: boolean
}

export function MobileNavbar({toggleHamburger, hamburgerOpen}:NavProps)  {

  return (
  <nav className={styles.navigation}>
    <Link to='/'><VscCircuitBoard className={styles.icon}/></Link>
      {!hamburgerOpen &&  (<NavLinks toggleHamburger={toggleHamburger}/>)} 
    <HamburgerMenu isOpen={hamburgerOpen} onClick={toggleHamburger} />
  </nav>
  )
}
