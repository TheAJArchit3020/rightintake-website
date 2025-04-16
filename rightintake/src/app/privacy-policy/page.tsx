import styles from "../../components/css/termsandservices.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.privacy_policy_container}>
      <h1>Privacy Policy</h1>
      <div className={styles.privacy_content_ui_wrapper}>
        {/* Section 01 */}
        <div className={styles.content}>
          <h1>01 WHAT DO WE DO WITH YOUR INFORMATION?</h1>
          <p>
            When you use the Right Intake app or our services, we collect
            personal information including your name, email address, encrypted
            password, profile photo (if uploaded), location data, and app usage
            analytics.
            <br />
            <br />
            We collect location data to recommend nutritional plans and food
            options relevant to your area. We collect analytics data to improve
            app performance and user experience. Your password is securely
            encrypted and not visible to us.
          </p>
        </div>

        {/* Section 02 */}
        <div className={styles.content}>
          <h1>02 CONSENT</h1>
          <p>
            When you provide personal information during registration or use of
            services, we assume your consent to collect and use it for those
            purposes.
            <br />
            <br />
            For marketing or additional uses, we request explicit consent.
          </p>
          <p>
            You can withdraw consent anytime by contacting us at
            <b> contact@kineticscapestudios.com</b>.
          </p>
        </div>

        {/* Section 03 */}
        <div className={styles.content}>
          <h1>03 DISCLOSURE</h1>
          <ol className={styles.ordered_list}>
            <li>If required by law.</li>
            <li>To protect Kineticscape Studios or users.</li>
            <li>If Terms of Service are violated.</li>
          </ol>
        </div>

        {/* Section 04 */}
        <div className={styles.content}>
          <h1>04 PAYMENT</h1>
          <p>
            We use <b>Razorpay</b> to process payments securely. Card data is
            not stored on our servers and is encrypted as per PCI-DSS
            compliance. See Razorpay’s policy at https://razorpay.com.
          </p>
        </div>

        {/* Section 05 */}
        <div className={styles.content}>
          <h1>05 THIRD-PARTY SERVICES</h1>
          <p>
            We may use third-party services like Razorpay (for payments),
            analytics tools (for tracking app usage), and Firebase (for
            authentication and storage). Each provider has its own privacy
            policy.
          </p>
        </div>

        {/* Section 06 */}
        <div className={styles.content}>
          <h1>06 LOCATION & MEDIA PERMISSIONS</h1>
          <p>
            We collect your location (only when granted) to personalize your
            experience, such as suggesting local food plans or nutritionists.
            <br />
            <br />
            We also request access to your media storage to allow uploading a
            profile picture. This access is used solely for that purpose and is
            not used to browse your personal media files.
          </p>
        </div>

        {/* Section 07 */}
        <div className={styles.content}>
          <h1>07 SECURITY</h1>
          <p>
            Your data is encrypted and stored securely. We use standard security
            protocols to prevent misuse, but no method is 100% secure.
          </p>
        </div>

        {/* Section 08 */}
        <div className={styles.content}>
          <h1>08 COOKIES & ANALYTICS</h1>
          <p>
            We use cookies and analytics tools to understand how users interact
            with the app and improve performance. This data is anonymized.
          </p>
        </div>

        {/* Section 09 */}
        <div className={styles.content}>
          <h1>09 SUITABILITY FOR ALL USERS</h1>
          <p>
            The Right Intake app is designed for general use and does not
            contain explicit content or features unsuitable for children. We do
            not collect age-related data, and users of all ages can safely use
            the app to access nutritional plans and fitness tracking features.
          </p>
        </div>

        {/* Section 10 */}
        <div className={styles.content}>
          <h1>10 CHANGES TO THIS POLICY</h1>
          <p>
            We may update this policy. Material changes will be communicated via
            the app or email.
          </p>
        </div>

        {/* Section 11 */}
        <div className={styles.content}>
          <h1>QUESTIONS AND CONTACT INFORMATION</h1>
          <p>
            For inquiries, complaints, or requests related to your data,
            contact:
          </p>
          <p>Email: contact@kineticscapestudios.com</p>
          <p>
            Address: Kineticscape Studios, Plot No. 64, Shivaji Housing Society,
            Near Shivaji Stadium, Karad - 415110, India.
          </p>
        </div>
      </div>
    </div>
  );
}
