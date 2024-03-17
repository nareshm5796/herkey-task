import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Profile from './profile/Profile'
import Footer from './footer/footer'
import styles from './Body.module.css'
import SubHeader from '../header/SubHeader'
function Body() {
  return (
    <div className={styles.body_container}>
        <SubHeader />
        <div className={styles.body}>
        <Sidebar />
        <Profile />
        </div>
        <div className={styles.footer}>
        <Footer />
        </div>
    </div>
  )
}

export default Body