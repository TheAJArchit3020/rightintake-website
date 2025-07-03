"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../app/globals.css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import styles from "./FeatureSection.module.css";

export default function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(
      `.${styles.horizontalSlide}`
    );
    console.log(panels.length);
    const container = document.querySelector(
      `.${styles.horizontalContainer}`
    ) as HTMLElement;
    if (spacerRef.current) {
      const scrollDistance = container.offsetWidth - window.innerWidth;
      spacerRef.current.style.height = `${scrollDistance}`;
    }
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: `.${styles.features_section_container}`,
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
        },
        end: () => "+=" + (container.offsetWidth - window.innerWidth),
        //end: "+=10000",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div>
      <div className={`${styles.features_section_container}`}>
        <div className={styles.transparentContainer}></div>
        <div className={styles.horizontalContainer}>
          <div className={styles.horizontalSlide}>
            <div className={styles.featureSlide}>
              <h2>Snap & Know</h2>
              <p>
                Take a quick photo of your meal and instantly get detailed
                nutrition insights and count calories.
              </p>
              <img
                src="/images/homepage/FeatureSection/SearchAndTrack.png"
                alt="PowerfulAndHugeDatabase"
              />
            </div>
          </div>
          <div className={styles.horizontalSlide}>
            <div className={styles.featureSlide}>
              <h2>Search & track</h2>
              <p>
                Effortlessly find and count calories with our huge & powerful
                food database.
              </p>
              <img
                src="/images/homepage/FeatureSection/SearchAndTrack.png"
                alt="PowerfulAndHugeDatabase"
              />
            </div>
          </div>
          <div className={styles.horizontalSlide}>
            <div className={styles.featureSlide}>
              <h2>Track your exercises</h2>
              <p>
                Log workouts alongside your meals to get a complete picture of
                your health.
              </p>
              <img
                src="/images/homepage/FeatureSection/SearchAndTrack.png"
                alt="PowerfulAndHugeDatabase"
              />
            </div>
          </div>
          <div className={styles.horizontalSlide}>
            <div className={styles.featureSlide}>
              <h2>See your progress</h2>
              <p>
                Visualize your health journey with daily and weekly insights.
              </p>
              <img
                src="/images/homepage/FeatureSection/SearchAndTrack.png"
                alt="PowerfulAndHugeDatabase"
              />
            </div>
          </div>
        </div>
      </div>
      <div ref={spacerRef} />
    </div>
  );
}
