
import styles from './Navigation.module.scss';
import { VscCircuitBoard } from "react-icons/vsc";
import { NavLinks } from './NavLinks/NavLinks';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <VscCircuitBoard />
      <NavLinks />
    </nav>
  )
}
