import {Navigation} from './Navigation'
import { MobileNavbar } from './MobileNavbar';
import styles from './Navbar.module.scss'

export function Navbar() {

  return (
    <div className={styles.navbar}>
      <Navigation />
      <MobileNavbar />
    </div>
  )
}
