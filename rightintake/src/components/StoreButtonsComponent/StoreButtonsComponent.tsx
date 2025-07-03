import React from "react";
import styles from "@/components/StoreButtonsComponent/StoreButtonsComponent.module.css";
type NavComponentStoresProps = {
  className?: string;
};

const StoreButtonsComponent: React.FC<NavComponentStoresProps> = ({
  className,
}) => {
  return (
    <div className={`${styles.nav_component_stores} ${className}`}>
      <a
        href="https://apps.apple.com/in/app/right-intake/id6738113419"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/appstore.png" alt="Apple App Store" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.kineticscapestudios.rightintake"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/googlePlay.png" alt="Google Play Store" />
      </a>
    </div>
  );
};
export default StoreButtonsComponent;
