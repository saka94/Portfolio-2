import React from "react";
import styles from "./HeroBanner.module.css";
import heroBannerPic from "./Herobannerpic/DSC09855.jpeg";

export default function Herobanner() {
  return (
    <div className={styles.heroPictureContainer}>
      <div className={styles.heroPicture} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${heroBannerPic})` }} alt="Picture of a pleasent work space">
        <div className={styles.heroTextContainer}>
          <h1 className={styles.h1}>welcome to my Portfolio</h1>
          <h2>
            See something <strong>you</strong> Like?
          </h2>
        </div>
      </div>
    </div>
  );
}
