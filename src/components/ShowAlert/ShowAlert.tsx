import styles from './ShowAlert.module.scss'

export const ShowAlert = () => {

  const handleHelloAlert = () => {
    alert('hello react')
  }

  return (
    <div className={styles.alertDiv}>
        <div className={styles.title}>Task number 1</div>
        <button onClick={handleHelloAlert} className={styles.alertBtn}> Show alert!</button>
    </div>
  )
}

export default ShowAlert