"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./WhatsNewSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const WhatsNewSection = () => {
  return (
    <section className={styles.whatsNewSection} data-section="whats-new">
      <div className={styles.imageTextContainer}>
        <img
          src="images/whatsNew/bg.png"
          alt="What's New"
          className={styles.bgImage}
        />
        <div className={styles.whatsNewBox}>
          <h2 className={styles.whatsNewTitle}>What's new?</h2>
          <p className={styles.whatsNewDesc}>
            Connect with your favorite health & fitness apps for seamless calorie and activity tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;