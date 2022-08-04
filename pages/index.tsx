import styles from "../styles/Home.module.css";
// import AdsImage from "../public/assets/index.ads.svg";
import AdsImage from "../public/assets/index/ads.png";
import FakePoint from "../public/assets/index/fake-point-info.png";
import IndexMidTab1 from "../public/assets/IndexMidTab/midtab.myticket.svg";
import IndexMidTab2 from "../public/assets/IndexMidTab/midtab.arrivedtime.svg";
import IndexMidTab3 from "../public/assets/IndexMidTab/midtab.roadinternet.svg";
import IndexMidTab4 from "../public/assets/IndexMidTab/midtab.coupon.svg";
import IndexMidTab5 from "../public/assets/IndexMidTab/midtab.achievement.svg";
import OnlineMallPic1 from "../public/assets/index/onlinemall/pic1.png";
import OnlineMallPic2 from "../public/assets/index/onlinemall/pic2.png";
import OnlineMallPic3 from "../public/assets/index/onlinemall/pic3.png";
import SpacesPic1 from "../public/assets/index/spaces/pic1.png";
import SpacesPic2 from "../public/assets/index/spaces/pic2.png";
import SpacesPic3 from "../public/assets/index/spaces/pic3.png";
import Image, { StaticImageData } from "next/image";

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

type ShortcutItemProps = {
  text: string;
  image: string;
};

const ShortcutItem = ({ text, image }: ShortcutItemProps) => {
  return (
    <div className={styles.ShortcutItem}>
      <Image src={image} className={styles.ShortcutIcon} />
      {text}
    </div>
  );
};

const Shortcuts = () => {
  return (
    <div className={styles.ShortcutSection}>
      <ShortcutItem text={"我的票卡"} image={IndexMidTab1} />
      <ShortcutItem text={"到站時刻"} image={IndexMidTab2} />
      <ShortcutItem text={"捷運路網"} image={IndexMidTab3} />
      <ShortcutItem text={"我的優惠券"} image={IndexMidTab4} />
      <ShortcutItem text={"成就徽章"} image={IndexMidTab5} />
    </div>
  );
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
    <div className={styles.container}>
      <Ads />
      <MemberInfo />
      <Shortcuts />
      <OnlineMall images={[OnlineMallPic1, OnlineMallPic2, OnlineMallPic3]} />
      <Spaces images={[SpacesPic1, SpacesPic2, SpacesPic3]} />
    </div>
  );
}
