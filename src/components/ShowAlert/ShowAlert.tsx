import styles from './ShowAlert.module.css'

export const ShowAlert = () => {

  const handleHelloAlert = () => {
    alert('hello react')
  }

  return (
    <div className={styles.alertDiv}>
        <div className={styles.title}>Task number 1</div>
        <button onClick={handleHelloAlert} className={styles.alertBtn}> Show alert!</button>
        <a
            className={styles.appLink}
            href="https://github.com/Arssin/FE-DaftAcademy-Mateusz-Binieda"
            target="_blank"
            rel="noopener noreferrer"
        >
          Link GH Repository - Mateusz Binięda
        </a>
    </div>
  )
}

export default ShowAlert