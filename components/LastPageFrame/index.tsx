import styles from "./LastPageFrame.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BannerProps {
  previousPageUrl: string;
  title: string;
}

const Banner = ({ previousPageUrl, title }: BannerProps) => {
  return (
    <div className={styles.BannerLayout}>
      <Link href={previousPageUrl}>
        <a className={styles.BackButton}>{"< Back"}</a>
      </Link>
      <div className={styles.Title}>{title}</div>
      <div className={styles.BannerIconsLayout}>
        <Image
          src={"//assets/banner.notification-bell.svg"}
          width={"25px"}
          height={"22px"}
        />
        <Image
          src={"//assets/banner.hamburger-menu.svg"}
          width={"18px"}
          height={"12px"}
        />
      </div>
    </div>
  );
};

interface TopPageFrameProps extends BannerProps {
  children: React.ReactNode;
}

const Index = ({ previousPageUrl, title, children }: TopPageFrameProps) => {
  return (
    <div>
      <Banner previousPageUrl={previousPageUrl} title={title} />
      <div>{children}</div>
    </div>
  );
};

export default Index;
