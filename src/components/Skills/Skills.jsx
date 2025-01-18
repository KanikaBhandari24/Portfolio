import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.heading}>Skills</h2>
    <div className={styles.content}>
      <div className={styles.skill}>
        <img src={getImageUrl("skills/html.png")} />
        <p>HTML</p>
      </div>
      <div className={styles.skill}>
        <img src={getImageUrl("skills/css.png")} />
        <p>CSS</p>
      </div>
      <div className={styles.skill}>
        <img src={getImageUrl("skills/js.png")} />
        <p>NODE</p>
      </div>
      <div className={styles.skill}>
        <img src={getImageUrl("skills/react.png")} />
        <p>REACT</p>
      </div>
      <div className={styles.skill}>
        <img src={getImageUrl("skills/Next.png")} />
        <p>NEXT</p>
      </div>
      <div className={styles.skill}>
        <img src={getImageUrl("skills/Python.png")} />
        <p>PYTHON</p>
      </div>
      </div>
    </section>
  );
};
