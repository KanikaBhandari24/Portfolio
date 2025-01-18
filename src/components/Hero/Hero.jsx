import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hello, I'm Kanika</h1>
            <p className={styles.description}>I'm a web developer. Been into web developing since 1 year. Check out my projects below.
              Reach out to know more about me! </p>
            <a href="mailto:kanikacodes2@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/shoni.jpg")} alt="" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>        
    </section>
  )
} 
