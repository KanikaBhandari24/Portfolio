import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.heading}>About Me!</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/abt.png")} className={styles.ladki}/>
        <ul className={styles.abtItems}>
          <li className={styles.abtItem}>
            <img src={getImageUrl("about/cursor.png")} alt="" />
            <div className={styles.abtText}>
              <h3>Frontend</h3>
                <button>JS, REACT, NEXT </button>
                <p>As a passionate frontend developer, I have crafted engaging and user-friendly websites. I have successfully developed a variety of projects including a Netflix clone, various landing pages, a personal portfolio, a dynamic calculator, a comprehensive weather app, and a precise stopwatch.</p>
            </div>
          </li>
          <li className={styles.abtItem}>
            <img src={getImageUrl("about/server.png")} alt="" />
            <div className={styles.abtText}>
              <h3>Backend</h3>
              <button>NODE.JS, EXPRESS</button>
              <p>
                Made a backend project named ConvoWord which converts file from WORD to PDF.
              </p>
            </div>
          </li>
          <li className={styles.abtItem}>
            <img src={getImageUrl("about/ui.png")} alt="" />
            <div className={styles.abtText}>
              <h3>Frameworks</h3>
              <button>Tailwind css, Flask</button>
              <p>
                Used these tools for building and styling websites
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
