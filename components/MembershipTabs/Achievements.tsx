import Image from "next/image";
import styles from "./Achievements.module.css";
import AchieveFacePic1 from "../../public/assets/Membership/Achievements/AchieveFakePic1.svg";
import AchieveFacePic2 from "../../public/assets/Membership/Achievements/AchieveFakePic2.svg";
import AchieveFacePic3 from "../../public/assets/Membership/Achievements/AchieveFakePic3.svg";
import AchieveFacePic4 from "../../public/assets/Membership/Achievements/AchieveFakePic4.svg";

export const Achievements = () => {
  return (
    <div>
      <h2>我的成就徽章</h2>
      <h3>已獲得3項徽章</h3>
      <div className={styles.PointRecords}>
        <Image src={AchieveFacePic1} />
        <Image src={AchieveFacePic2} />
        <Image src={AchieveFacePic3} />
      </div>
      <div className={styles.PointRecordsViewer}>
        <Image src={AchieveFacePic4} />
      </div>
    </div>
  );
};
