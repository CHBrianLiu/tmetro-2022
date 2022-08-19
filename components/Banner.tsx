import styles from "../styles/Banner.module.css";
import Logo from "../public/assets/banner.metro-logo.svg";
import Menu from "../public/assets/banner.hamburger-menu.svg";
import Notification from "../public/assets/banner.notification-bell.svg";
import Image from "next/image";
import { useState } from "react";
import BadgeAcquisitionSlide from "./Notification/Slides/BadgeAcquisitionSlide";
import LevelUpSlide from "./Notification/Slides/LevelUpSlide";

const Banner = () => {
  const [isBadgeModalVisible, setBadgeModalVisibility] = useState(false);
  const [isLevelUpModalVisible, setLevelUpModalVisibility] = useState(false);

  const openBadgeModal = () => {
    setBadgeModalVisibility(true);
  };
  const closeBadgeModal = () => {
    setBadgeModalVisibility(false);
  };

  const openLevelUpModal = () => {
    setLevelUpModalVisibility(true);
  };
  const closeLevelUpModal = () => {
    setLevelUpModalVisibility(false);
  };

  return (
    <div>
      <div className={styles.Banner}>
        <Image src={Logo} className={styles.logo} />
        <div className={styles.RightSection}>
          <Image
            src={Notification}
            className={styles.notification}
            alt={"notification icon"}
            onClick={openBadgeModal}
          />
          <Image
            src={Menu}
            className={styles.menu}
            onClick={openLevelUpModal}
            alt={"menu icon"}
          />
        </div>
      </div>
      {isBadgeModalVisible ? (
        <div style={{ zIndex: 1 }}>
          <BadgeAcquisitionSlide closeModal={closeBadgeModal} />
        </div>
      ) : null}
      {isLevelUpModalVisible ? (
        <div style={{ zIndex: 1 }}>
          <LevelUpSlide closeModal={closeLevelUpModal} />
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
