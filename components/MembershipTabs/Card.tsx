import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";
import OpenCameraIcon from "../../public/assets/Membership/Card/OpenCameraIcon.svg";
import ShowCodeIcon from "../../public/assets/Membership/Card/ShowCodeIcon.svg";
import FakeCode from "../../public/assets/Membership/Card/FakeCode.svg";
import FakeLimitedCode from "../../public/assets/Membership/Card/fakelimitedcode.webp";
import FakeToggle from "../../public/assets/Membership/Card/FakeToggle.svg";
import FakeSilverCard from "../../public/assets/Membership/Card/silver-card.webp";
import FakeMemberInfo from "../../public/assets/Membership/Card/MemberInfoLink.svg";

export const Card = () => {
  return (
    <div className={styles.TabContainer}>
      <div className={styles.MembershipInfo}>
        <div className={styles.CardPreview}>
          <Image src={FakeSilverCard} />
        </div>
        <div className={styles.MembershipInfoDescription}>
          <Link href={"/card/memberinfo"}>
            <a>
              <Image src={FakeMemberInfo}></Image>
            </a>
          </Link>
          <Image src={FakeLimitedCode} />
        </div>
      </div>
      <div className={styles.ActionIconsGroup}>
        <div className={styles.ActionIcon}>
          <Image src={ShowCodeIcon} />
        </div>
        <div className={styles.ActionIcon}>
          <Image src={OpenCameraIcon} />
        </div>
      </div>
      <Image src={FakeCode} />
      {/* TODO: Coupon - i haven't figured out how to shape the div */}
    </div>
  );
};
