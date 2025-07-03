"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AppVideoSection.module.css";
import { useGSAP } from "@gsap/react";

export default function AppVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const section = sectionRef.current;
    const spacer = spacerRef.current;
    if (!video || !section || !spacer) return;

    document.documentElement.addEventListener(
      "touchstart",
      () => {
        video.play();
        video.pause();
      },
      { once: true }
    );

    const setupScroll = () => {
      const scrollDurationPerSecond = window.innerHeight * 1.5;
      // 1.5 viewport heights per second of video scroll (tweak as needed)
      const scrollLength = video.duration * scrollDurationPerSecond;

      spacer.style.height = `${scrollLength}px`;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollLength}`,
        scrub: true,
        pin: true,
        // markers: true,
        onUpdate: (self) => {
          video.currentTime = self.progress * video.duration;
        },
      });
    };

    if (video.readyState >= 1) {
      setupScroll();
    } else {
      video.addEventListener("loadedmetadata", setupScroll, { once: true });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.videoSection}>
      <div ref={sectionRef} className={styles.videoWrapper}>
        <video ref={videoRef} src="/videos/AppVideo_edited.mp4"></video>
      </div>
      <div
        ref={spacerRef}
        id="video-scroll-container"
        className={styles.videoScrollContainer}
      ></div>
    </section>
  );
}
