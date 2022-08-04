import styles from "../styles/Home.module.css";
import AdsImage from "../public/assets/index.ads.svg";
import FakePoint from "../public/assets/index.fakepoint.svg";
import IndexMidTab1 from "../public/assets/IndexMidTab/midtab.myticket.svg";
import IndexMidTab2 from "../public/assets/IndexMidTab/midtab.arrivedtime.svg";
import IndexMidTab3 from "../public/assets/IndexMidTab/midtab.roadinternet.svg";
import IndexMidTab4 from "../public/assets/IndexMidTab/midtab.coupon.svg";
import IndexMidTab5 from "../public/assets/IndexMidTab/midtab.achievement.svg";
import OnlineMallPic1 from "../public/assets/IndexOnlineMallPic/onlinemall.pic1.svg";
import OnlineMallPic2 from "../public/assets/IndexOnlineMallPic/onlinemall.pic2.svg";
import OnlineMallPic3 from "../public/assets/IndexOnlineMallPic/onlinemall.pic3.svg";
import SpacesPic1 from "../public/assets/IndexSpacesPic/spaces.pic1.svg";
import SpacesPic2 from "../public/assets/IndexSpacesPic/spaces.pic2.svg";
import SpacesPic3 from "../public/assets/IndexSpacesPic/spaces.pic3.svg";
import Image from "next/image";

const Ads = () => {
  return (
    <div className={styles.ads}>
      <Image src={AdsImage}></Image>
    </div>
  );
};

type MemberInfoProps = {
  name: string;
  credits: number;
  ntdEquivalent: number;
};

const MemberInfo = ({ name, credits, ntdEquivalent }: MemberInfoProps) => {
  // const FirstRow = () => {
  //   return (
  //     <div className={styles.MemberInfoFirstColumn}>
  //       <div>{name}</div>
  //       <div>{credits} 點</div>
  //     </div>
  //   );
  // };
  // const SecondRow = () => {
  //   return (
  //     <div className={styles.MemberInfoSecondColumn}>
  //       <div>捷客點</div>
  //       <div>可退換 NT ${ntdEquivalent}</div>
  //     </div>
  //   );
  // };
  // return (
  //   <div className={styles.MemberInfo}>
  //     <FirstRow />
  //     <SecondRow />
  //   </div>
  // );
  return <Image src={FakePoint} className={styles.MemberInfo}></Image>;
};

type ShortcutItemProps = {
  text: string;
  image: string;
};

const ShortcutItem = ({ text, image }: ShortcutItemProps) => {
  return (
    <div className={styles.ShortcutItem}>
      <Image src={image} className={styles.ShortcutIcon}></Image>
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

type OnlineMallProps = {
  image1: string;
  image2: string;
  image3: string;
};

const OnlineMall = ({ image1, image2, image3 }: OnlineMallProps) => {
  return (
    <div className={styles.OnlineMallSection}>
      <div className={styles.OnlineMallTitle}>
        <p>線上商城 ｜熱銷商品</p>
        <p>查看更多</p>
      </div>
      <div className={styles.OnlineMallTilesSection}>
        <Image src={image1} className={styles.OnlineMallTile}></Image>
        <Image src={image2} className={styles.OnlineMallTile}></Image>
        <Image src={image3} className={styles.OnlineMallTile}></Image>
      </div>
    </div>
  );
};

const Spaces = ({ image1, image2, image3 }: OnlineMallProps) => {
  return (
    <div className={styles.OnlineMallSection}>
      <div className={styles.OnlineMallTitle}>
        <p>捷空間</p>
        <p>查看更多</p>
      </div>
      <div className={styles.OnlineMallTilesSection}>
        <Image src={image1} className={styles.OnlineMallTile}></Image>
        <Image src={image2} className={styles.OnlineMallTile}></Image>
        <Image src={image3} className={styles.OnlineMallTile}></Image>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Ads />
      <MemberInfo name={"陳小名"} credits={328} ntdEquivalent={45} />
      <Shortcuts />
      <OnlineMall
        image1={OnlineMallPic1}
        image2={OnlineMallPic2}
        image3={OnlineMallPic3}
      />
      <Spaces image1={SpacesPic1} image2={SpacesPic2} image3={SpacesPic3} />
    </div>
  );
}
