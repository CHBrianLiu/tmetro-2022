import Image from "next/image";
import styles from "./Achievements.module.css";
import Link from "next/link";
import AchieveFacePic1 from "../../public/assets/Membership/Achievements/achievement1.webp";
import AchieveFacePic2 from "../../public/assets/Membership/Achievements/achievement2.webp";
import AchieveFacePic3 from "../../public/assets/Membership/Achievements/achievement3.webp";
import LearnMore from "../../public/assets/Membership/Achievements/learn-more.webp";

export const Achievements = () => {
  return (
    <div className={styles.container}>
      <h2>我的成就徽章</h2>
      <h3>已獲得3項徽章</h3>
      <div className={styles.PointRecords}>
        <Image src={AchieveFacePic1} />
        <Image src={AchieveFacePic2} />
        <Image src={AchieveFacePic3} />
      </div>
      <div className={styles.LearnMoreButton}>
        <Link href={"/achievements/learnmore"}>
          <a>
            <Image src={LearnMore} />
          </a>
        </Link>
      </div>
    </div>
  );
};
