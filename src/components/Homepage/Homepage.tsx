import styles from './Homepage.module.scss';
import home from '../../images/home.gif'

export function Homepage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.textdiv}>
        <p className={styles.welcome}>
          Welcome to the home page!
        </p>
        <span>
        It is a project related to the <a href='https://www.daftacademy.pl/'rel="noreferrer" target="_blank" className={styles.link}>DaftAcademy</a> course.
        <br/>
        Something's going to be here, however Charmander needs to finish his running first. </span>
      </div>
      <img src={home} className={styles.gif} alt='charmander gif' />
    </div>
  )
}
