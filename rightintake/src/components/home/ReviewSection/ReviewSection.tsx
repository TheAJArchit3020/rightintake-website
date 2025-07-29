import styles from "./ReviewSection.module.css";

interface ReviewCardProps {
  name: string;
  imgLink: string;
  review: string;
}
function ReviewCard({ name, imgLink, review }: ReviewCardProps) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewerInfo}>
        <img src={imgLink} alt={`${name} Priyanka Kumari testimonial`} />
        <p className={styles.reviewerName}>{name}</p>
      </div>
      <p className={styles.reviewerPara}>{review}</p>
    </div>
  );
}
export default function ReviewSection() {
  return (
    <section className={`${styles.review_section_container}`}>
      <div className={styles.reviewWrapper}>
        <h1 className={styles.Reviewheading}>
          Many users Love to count calories with Right Intake
        </h1>
        <h1 className={styles.Reviewsubheading}>
        Loved by thousands of users for effortless calorie tracking.
        </h1>
        <div className={styles.reviews}>
          <ReviewCard
            imgLink="/images/homepage/ReviewSection/priyankakumari.jpeg"
            name="Priyanka Kumari"
            review="Finally, an Indian calorie tracker that actually has all the foods I
        eat! The database is huge, and the photo logging works like magic."
          />
          <ReviewCard
            imgLink="/images/homepage/ReviewSection/srujan.jpg"
            name="Srujan Pola"
            review="Easy to use, love the photo logging!"
          />
          <ReviewCard
            imgLink="/images/homepage/ReviewSection/askar.jpg"
            name="Askar Muthu"
            review="Simple, clean app. Keeps me on track."
          />
          <ReviewCard
            imgLink="/images/homepage/ReviewSection/ayush.png"
            name="Ayush Jhanwar"
            review="Best app I’ve tried for calorie counting"
          />
          <ReviewCard
            imgLink="/images/homepage/ReviewSection/aditya.jpeg"
            name="Aditya"
            review="This app is so good for an athlete."
          />
        </div>
      </div>
    </section>
  );
}
