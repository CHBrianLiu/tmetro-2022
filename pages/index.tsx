import styles from "../styles/Home.module.css";
import AdsImage from "../public/assets/index/ads.webp";
import FakePoint from "../public/assets/index/fake-point-info.webp";
import ShortCutImage from "../public/assets/index/fake-shortcut.webp";
import IndexMidTab1 from "../public/assets/index/shortcuts/myticket.svg";
import IndexMidTab2 from "../public/assets/index/shortcuts/arrivedtime.svg";
import IndexMidTab3 from "../public/assets/index/shortcuts/roadinternet.svg";
import IndexMidTab4 from "../public/assets/index/shortcuts/coupon.svg";
import IndexMidTab5 from "../public/assets/index/shortcuts/achievement.svg";
import OnlineMallPic1 from "../public/assets/index/onlinemall/pic1.webp";
import OnlineMallPic2 from "../public/assets/index/onlinemall/pic2.webp";
import OnlineMallPic3 from "../public/assets/index/onlinemall/pic3.webp";
import SpacesPic1 from "../public/assets/index/spaces/pic1.webp";
import SpacesPic2 from "../public/assets/index/spaces/pic2.webp";
import SpacesPic3 from "../public/assets/index/spaces/pic3.webp";
import Image, { StaticImageData } from "next/image";
import TopPageFrame from "../components/TopPageFrame";

const Ads = () => {
  return (
    <div className={styles.ads}>
      <Image src={AdsImage}></Image>
    </div>
  );
};

const MemberInfo = () => {
  return <Image src={FakePoint} className={styles.MemberInfo} />;
};

const Shortcuts = () => {
  return <Image src={ShortCutImage} className={styles.ShortcutSection} />;
};

const OnlineMall = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div className={styles.OnlineMallSection}>
      <div className={styles.OnlineMallTitle}>
        <p>線上商城 ｜熱銷商品</p>
        <p>查看更多</p>
      </div>
      <div className={styles.OnlineMallTilesSection}>
        {images.map((image, index) => (
          <Image
            src={image}
            className={styles.OnlineMallTile}
            key={`${index}`}
          />
        ))}
      </div>
    </div>
  );
};

const Spaces = ({ images }: { images: StaticImageData[] }) => {
  return (
    <div className={styles.OnlineMallSection}>
      <div className={styles.OnlineMallTitle}>
        <p>捷空間</p>
        <p>查看更多</p>
      </div>
      <div className={styles.OnlineMallTilesSection}>
        {images.map((image, index) => (
          <Image
            src={image}
            className={styles.OnlineMallTile}
            key={`${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <TopPageFrame>
      <div className={styles.container}>
        <Ads />
        <MemberInfo />
        <Shortcuts />
        <OnlineMall images={[OnlineMallPic1, OnlineMallPic2, OnlineMallPic3]} />
        <Spaces images={[SpacesPic1, SpacesPic2, SpacesPic3]} />
      </div>
    </TopPageFrame>
  );
}
