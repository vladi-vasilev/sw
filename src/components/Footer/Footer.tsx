import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p>Data provided by <a className={styles.footerLink} href="https://swapi.py4e.com" target="_blank" rel="nofollow, noindex, noreferrer">swapi.py4e.com</a>.</p>
    </footer>
  )
}

export default Footer