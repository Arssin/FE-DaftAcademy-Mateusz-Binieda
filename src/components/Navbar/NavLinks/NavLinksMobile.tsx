import styles from './NavLinksMobile.module.scss';

export  function NavLinksMobile() {
  return (
    <ul className={styles.mainlist}>
    {['Home', 'About', 'Alert HomeWork', 'Form HomeWork',].map((item) => (
      <li  className={styles.list} key={`link-${item}`}>
        <a className={styles.anchorTag} href={`${item}`}>
          {item}
        </a>
      </li>
    ))}
  </ul>
  )
}
