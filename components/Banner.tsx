import styles from "../styles/Banner.module.css";
import Logo from "../assets/banner.metro-logo.svg";
import Menu from "../assets/banner.hamburger-menu.svg";
import Notification from "../assets/banner.notification-bell.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className={styles.Banner}>
      <Image src={Logo} className={styles.logo} />
      <div className={styles.RightSection}>
        <Image src={Notification} className={styles.notification} />
        <Image src={Menu} className={styles.menu} />
      </div>
    </div>
  );
};

export default Banner;