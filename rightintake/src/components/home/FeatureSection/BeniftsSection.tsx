"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BeniftisSection.module.css";

gsap.registerPlugin(ScrollTrigger);

const sectionsData = [
  {
    title: "Search & track",
    desc: "Effortlessly find and log meals with a powerful food database.",
    img: "/images/benifits/search.png",
  },
  {
    title: "Snap & Know",
    desc: "Take a quick photo of your meal and instantly see detailed nutrition insights.",
    img: "/images/benifits/foodDetails.png",
  },
  {
    title: "Get personalized recommendations",
    desc: "Based on your goals, preferences, and habits, we'll protein,carbs,fats",
    img: "/images/benifits/foodInfo.png",
  },
  {
    title: "Track your exercises",
    desc: "Log workouts alongside your meals to get a complete picture of your health.",
    img: "/images/benifits/stats.png",
  },
];

const BenefitsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ScrollTrigger.killAll();

    gsap.to(`.${styles.benefitPanel1}`, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.emptyContainer}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(`.${styles.benefitPanel2} `, {
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.emptyContainer}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(`.${styles.benefitPanel2} `, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.emptyContainer1}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(`.${styles.benefitPanel3} `, {
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.emptyContainer1}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(`.${styles.benefitPanel3} `, {
      opacity: 0,
      scrollTrigger: {
        trigger: `.${styles.emptyContainer2}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(`.${styles.benefitPanel4} `, {
      opacity: 1,
      scrollTrigger: {
        trigger: `.${styles.emptyContainer2}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    //color anim
    gsap.to(`.${styles.benefitsPanelsWrapper}  `, {
      backgroundColor: "#fffef4",
      scrollTrigger: {
        trigger: `.${styles.emptyContainer}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(`.${styles.benefitsPanelsWrapper}  `, {
      backgroundColor: "#2a2a2a",
      scrollTrigger: {
        trigger: `.${styles.emptyContainer2}`,
        start: "bottom center",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.to(`.${styles.benefitsPanelsWrapper}  `, {
      scrollTrigger: {
        trigger: `.${styles.benefitsPanelsWrapper}`,
        start: "top top",
        endTrigger: `.${styles.emptyContainer3}`,
        end: "bottom top",
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className={styles.benefitsSection}>
      <h2 className={styles.benefitsHeading}>What are the benefits?</h2>
      <div className={styles.benefitsPanelsWrapper}>
        {sectionsData.map((section, idx) => {
          const isEven = (idx + 1) % 2 === 0;
          return (
            <div
              key={idx}
              className={`${styles.benefitPanel} ${styles.benefitPanel}${
                idx + 1
              }`}
            >
              <div className={styles.benifitContainer}>
                {isEven ? (
                  <>
                    <div className={styles.assetContainer}>
                      <img
                        src={
                          idx + 1 === 2
                            ? "/images/benifits/scroll/black2.png"
                            : idx + 1 === 4
                            ? "/images/benifits/scroll/white4.png"
                            : "/images/benifits/scroll/black3.png"
                        }
                        alt={section.title}
                        className={styles.scrollBar}
                      />
                      <img
                        src={section.img}
                        alt={section.title}
                        className={styles.benefitImg}
                      />
                    </div>
                    <div
                      className={styles.benefitTextBlock}
                      style={{ alignItems: "flex-end" }}
                    >
                      <h3 className={styles.benefitTitle}>{section.title}</h3>
                      <p
                        className={styles.benefitDesc}
                        style={{ textAlign: "right" }}
                      >
                        {section.desc}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.assetContainer}>
                      <img
                        src={
                          idx + 1 === 1
                            ? "/images/benifits/scroll/white1.png"
                            : idx + 1 === 3
                            ? "/images/benifits/scroll/black3.png"
                            : "/images/benifits/scroll/white4.png"
                        }
                        alt={section.title}
                        className={styles.scrollBar}
                      />
                      <div
                        className={styles.benefitTextBlock}
                        style={{ alignItems: "flex-start" }}
                      >
                        <h3 className={styles.benefitTitle}>{section.title}</h3>
                        <p className={styles.benefitDesc}>{section.desc}</p>
                      </div>
                    </div>
                    <img
                      src={section.img}
                      alt={section.title}
                      className={styles.benefitImg}
                    />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.emptyContainer} />
      <div className={styles.emptyContainer1} />
      <div className={styles.emptyContainer2} />
      <div className={styles.emptyContainer3} />
    </section>
  );
};

export default BenefitsSection;
