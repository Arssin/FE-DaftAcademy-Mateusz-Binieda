import styles from './About.module.scss';


export function About() {
  return (
    <div className={styles.main}>
      <a
        className={styles.appLink}
        href="https://github.com/Arssin/FE-DaftAcademy-Mateusz-Binieda"
        target="_blank"
         rel="noopener noreferrer"
      >
         Github Repository
        <br/>
         Mateusz Binięda
      </a>
  </div>
  )
}
