import Banner from "../Banner";
import TabBar from "../TabBar";
import styles from "./TopPageFrame.module.css";
import React from "react";

interface TopPageFrameProps {
  children: React.ReactNode;
}

const TopPageFrame = ({ children }: TopPageFrameProps) => {
  return (
    <div>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.main}>{children}</div>
      <TabBar />
    </div>
  );
};

export default TopPageFrame;
