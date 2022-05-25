
import styles from './Navigation.module.scss';
import { VscCircuitBoard } from "react-icons/vsc";
import { NavLinks } from './NavLinks/NavLinks';
import {Link} from 'react-router-dom'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to='/'><VscCircuitBoard className={styles.icon}/> </Link>
      <NavLinks />
    </nav>
  )
}
