
import styles from './Navigation.module.scss';
import { VscCircuitBoard } from "react-icons/vsc";
import { NavLinks } from './NavLinks/NavLinks';
import {Link} from 'react-router-dom'

interface NavProps {
  toggleHamburger: () => void
}


export const Navigation = ({toggleHamburger}:NavProps) => {
  return (
    <nav className={styles.navigation}>
      <Link to='/'><VscCircuitBoard className={styles.icon}/> </Link>
      <NavLinks toggleHamburger={toggleHamburger} />
    </nav>
  )
}
