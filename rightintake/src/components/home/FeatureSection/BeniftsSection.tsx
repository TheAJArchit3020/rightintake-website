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
    desc: "Based on your goals, preferences, and habits, we'll suggest recipes and meal plans that fit your lifestyle.",
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
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panels = gsap.utils.toArray<HTMLElement>(`.${styles.benefitPanel}`);

    ScrollTrigger.killAll();

    const totalPanels = panels.length;

    // Use a default value for SSR, then update on client
    const getViewportHeight = () => {
      if (typeof window !== 'undefined') {
        return window.innerHeight;
      }
      return 800; // Default fallback for SSR
    };

    gsap.to(panels, {
      yPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${getViewportHeight() * (totalPanels - 1)}`,
        scrub: 1,
        pin: true,
        snap: 1 / (totalPanels - 1),
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
            <div key={idx} className={styles.benefitPanel}>
              <div className={styles.benifitContainer}>
                {isEven ? (
                  <>
                    <img
                      src={section.img}
                      alt={section.title}
                      className={styles.benefitImg}
                    />
                    <div className={styles.benefitTextBlock}>
                      <h3 className={styles.benefitTitle}>{section.title}</h3>
                      <p className={styles.benefitDesc}>{section.desc}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.benefitTextBlock}>
                      <h3 className={styles.benefitTitle}>{section.title}</h3>
                      <p className={styles.benefitDesc}>{section.desc}</p>
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
    </section>
  );
};

export default BenefitsSection;
