import React from 'react'
import Menuber from '../component/Menuber'

import classes from './Home.module.scss'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div className={classes.section}>
        <Menuber/>
    </div>
  )
}

export default Home