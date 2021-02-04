import React from 'react'
import styles from './Header.module.css'

const Header = ({title}) => {
  return (
    <nav className={`${ styles.nav } nav-wrapper light-blue darken-3`}>
      <a href="#!" className={`${ styles.logo } center`}>{title}</a>
    </nav>
  )
}

export default Header
