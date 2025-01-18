import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1>Contact Me!</h1>
        <p>Feel free to react out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/mail.png")} alt="" />
          <a href="mailto:k.anikbhandari2417@gmail.com">
            k.anikabhandari2417@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedin.png")} alt="" />
          <a href="https://www.linkedin.com/in/kanika-bhandari-001k/">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="" />
          <a href="https://github.com/KanikaBhandari24">Github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/Twitter.png")} alt="" className={styles.twitter}/>
          <a href="https://x.com/Kanikaa78">Twitter</a>
        </li>
      </ul>
    </footer>
  );
};
