import styles from "../styles/Banner.module.css";
import Logo from "../public/assets/banner.metro-logo.svg";
import Menu from "../public/assets/banner.hamburger-menu.svg";
import Notification from "../public/assets/banner.notification-bell.svg";
import Image from "next/image";
import { useState } from "react";
import BadgeAcquisitionSlide from "./Notification/Slides/BadgeAcquisitionSlide";

const Banner = () => {
  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = () => {
    console.warn("open");
    setModalVisibility(true);
  };
  const closeModal = () => {
    setModalVisibility(false);
  };

  return (
    <div>
      <div className={styles.Banner}>
        <Image src={Logo} className={styles.logo} />
        <div className={styles.RightSection}>
          <Image
            src={Notification}
            className={styles.notification}
            onClick={openModal}
          />
          <Image src={Menu} className={styles.menu} />
        </div>
      </div>
      {isModalVisible ? (
        <div style={{ zIndex: 1 }}>
          <BadgeAcquisitionSlide closeModal={closeModal} />
        </div>
      ) : null}
    </div>
  );
};

export default Banner;
