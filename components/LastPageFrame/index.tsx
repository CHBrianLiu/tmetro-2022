import styles from "./LastPageFrame.module.css";
import styled from "styled-components";
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

const Background = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: -1;
`;

interface TopPageFrameProps extends BannerProps {
  children: React.ReactNode;
}

const LastPageFrame = ({
  previousPageUrl,
  title,
  children,
}: TopPageFrameProps) => {
  return (
    <div>
      <Banner previousPageUrl={previousPageUrl} title={title} />
      <Background />
      {children}
    </div>
  );
};

export default LastPageFrame;
