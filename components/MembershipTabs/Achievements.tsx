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
      <div className={styles.TitlePic}>
        <Image
          src={"//assets/Membership/Achievements/contenttitle.webp"}
          width={"108px"}
          height={"49px"}
        />
      </div>
      <div className={styles.PointRecords}>
        <Image src={AchieveFacePic1} width={"358px"} height={"100px"} />
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
