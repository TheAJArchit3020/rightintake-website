"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import styles from "./ReviewSection.module.css";

import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

interface StarRatingProps {
  rating: number;
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className={`${styles.rating_star}`}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${styles.rating_star}`}
          style={{ color: index < rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <div className={`${styles.review_section_container}`}>
      <div className={`${styles.review_section_wrapper}`}>
        <div className={`${styles.review_head_wrapper}`}>
          <div className={`${styles.review_heading}`}>
            <span>See What Others Are Saying!</span>
          </div>
          <div className={`${styles.review_para}`}>
            <span>
              Real people, real results! Hear from our users who transformed
              their health with Right Intake.
            </span>
          </div>
        </div>

        <div className={`${styles.review_card_carousel}`}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={false}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // delay={"2000"}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className={`${styles.mySwiper}`}
          >
            <SwiperSlide className={`${styles.review_card_slider}`}>
              <div className={`${styles.review_card_container}`}>
                <div className={`${styles.review_card}`}>
                  <div className={`${styles.review_user_container}`}>
                    <div className={`${styles.review_user_profile_pic}`}>
                      <img
                        src="/images/homepage/ReviewSection/priyankakumari.jpeg"
                        alt=""
                      />
                    </div>
                    <div className={`${styles.review_user_name}`}>
                      <span>Priyanka Kumari</span>
                    </div>
                    <div className={`${styles.review_user_rating}`}>
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className={`${styles.review_content_container}`}>
                    <div className={`${styles.review_content_heading}`}>
                      <span>Changed my entire relationship with food!</span>
                    </div>
                    <div className={`${styles.review_content_para}`}>
                      <span>
                        Right Intake has honestly been a game-changer. I used to
                        struggle with meal planning and consistency, but now I
                        have a nutritionist who actually understands my
                        lifestyle. The calorie tracker is super accurate,
                        especially for Indian meals!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={`${styles.review_card_slider}`}>
              <div className={`${styles.review_card_container}`}>
                <div className={`${styles.review_card}`}>
                  <div className={`${styles.review_user_container}`}>
                    <div className={`${styles.review_user_profile_pic}`}>
                      <img
                        src="/images/homepage/ReviewSection/ayush.png"
                        alt=""
                      />
                    </div>
                    <div className={`${styles.review_user_name}`}>
                      <span>Ayush Jhanwar</span>
                    </div>
                    <div className={`${styles.review_user_rating}`}>
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className={`${styles.review_content_container}`}>
                    <div className={`${styles.review_content_heading}`}>
                      <span>Perfect for busy professionals like me</span>
                    </div>
                    <div className={`${styles.review_content_para}`}>
                      <span>
                        As someone juggling a 9-to-6 job, I never had time to
                        think about eating right. With Right Intake, I can just
                        book a call with a certified expert and get a meal plan
                        that works for my routine. Zero stress.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={`${styles.review_card_slider}`}>
              <div className={`${styles.review_card_container}`}>
                <div className={`${styles.review_card}`}>
                  <div className={`${styles.review_user_container}`}>
                    <div className={`${styles.review_user_profile_pic}`}>
                      <img
                        src="/images/homepage/ReviewSection/srujan_.jpeg"
                        alt=""
                      />
                    </div>
                    <div className={`${styles.review_user_name}`}>
                      <span>Srujan Pola</span>
                    </div>
                    <div className={`${styles.review_user_rating}`}>
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className={`${styles.review_content_container}`}>
                    <div className={`${styles.review_content_heading}`}>
                      <span>Affordable and trustworthy</span>
                    </div>
                    <div className={`${styles.review_content_para}`}>
                      <span>
                        I was skeptical at first, but the pricing is super clear
                        and there are no hidden charges. I even got cashback
                        after referring a friend. The service feels premium
                        without burning a hole in my wallet.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={`${styles.review_card_slider}`}>
              <div className={`${styles.review_card_container}`}>
                <div className={`${styles.review_card}`}>
                  <div className={`${styles.review_user_container}`}>
                    <div className={`${styles.review_user_profile_pic}`}>
                      <img
                        src="/images/homepage/ReviewSection/askar.jpg"
                        alt=""
                      />
                    </div>
                    <div className={`${styles.review_user_name}`}>
                      <span>Askar Muthu</span>
                    </div>
                    <div className={`${styles.review_user_rating}`}>
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className={`${styles.review_content_container}`}>
                    <div className={`${styles.review_content_heading}`}>
                      <span>Helped me gain muscle the right way</span>
                    </div>
                    <div className={`${styles.review_content_para}`}>
                      <span>
                        I’ve been hitting the gym for a year but never saw real
                        progress until I paired my workouts with the Right
                        Intake plan. My nutritionist helped me dial in my macros
                        and the results speak for themselves.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={`${styles.review_card_slider}`}>
              <div className={`${styles.review_card_container}`}>
                <div className={`${styles.review_card}`}>
                  <div className={`${styles.review_user_container}`}>
                    <div className={`${styles.review_user_profile_pic}`}>
                      <img
                        src="/images/homepage/ReviewSection/aditya.jpeg"
                        alt=""
                      />
                    </div>
                    <div className={`${styles.review_user_name}`}>
                      <span>Aditya Shah</span>
                    </div>
                    <div className={`${styles.review_user_rating}`}>
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className={`${styles.review_content_container}`}>
                    <div className={`${styles.review_content_heading}`}>
                      <span>
                        Calisthenics + Right Intake = Total Body Transformation
                      </span>
                    </div>
                    <div className={`${styles.review_content_para}`}>
                      <span>
                        I started calisthenics to build functional strength, but
                        I had no idea how important nutrition would be for real
                        progress. Right Intake helped me understand my macros,
                        optimize my meals, and stay energized for intense
                        bodyweight workouts. My performance and recovery have
                        drastically improved. Highly recommend it to anyone
                        serious about calisthenics.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
