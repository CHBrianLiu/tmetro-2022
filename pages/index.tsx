import styles from "../styles/Home.module.css";

const Ads = () => {
  return <div className={styles.ads}>Ads reel</div>;
};

type MemberInfoProps = {
  name: string;
  credits: number;
  ntdEquivalent: number;
};

const MemberInfo = ({ name, credits, ntdEquivalent }: MemberInfoProps) => {
  const FirstRow = () => {
    return (
      <div className={styles.MemberInfoFirstColumn}>
        <div>{name}</div>
        <div>{credits} 點</div>
      </div>
    );
  };
  const SecondRow = () => {
    return (
      <div className={styles.MemberInfoSecondColumn}>
        <div>捷客點</div>
        <div>可退換 NT ${ntdEquivalent}</div>
      </div>
    );
  };
  return (
    <div className={styles.MemberInfo}>
      <FirstRow />
      <SecondRow />
    </div>
  );
};

type ShortcutItemProps = {
  text: string;
};

const ShortcutItem = ({ text }: ShortcutItemProps) => {
  return (
    <div className={styles.ShortcutItem}>
      <div className={styles.ShortcutIcon}></div>
      {text}
    </div>
  );
};

const Shortcuts = () => {
  return (
    <div className={styles.ShortcutSection}>
      <ShortcutItem text={"我的票卡"} />
      <ShortcutItem text={"到站時刻"} />
      <ShortcutItem text={"捷運路網"} />
      <ShortcutItem text={"我的優惠券"} />
      <ShortcutItem text={"成就徽章"} />
    </div>
  );
};

const OnlineMall = () => {
  return (
    <div className={styles.OnlineMallSection}>
      <div className={styles.OnlineMallTitle}>
        <p>線上商城 ｜熱銷商品</p>
        <p>查看更多</p>
      </div>
      <div className={styles.OnlineMallTilesSection}>
        <div className={styles.OnlineMallTile} />
        <div className={styles.OnlineMallTile} />
        <div className={styles.OnlineMallTile} />
      </div>
    </div>
  );
};

const Spaces = () => {
  return (
    <div className={styles.OnlineMallSection}>
      <div className={styles.OnlineMallTitle}>
        <p>捷空間</p>
        <p>查看更多</p>
      </div>
      <div className={styles.OnlineMallTilesSection}>
        <div className={styles.OnlineMallTile} />
        <div className={styles.OnlineMallTile} />
        <div className={styles.OnlineMallTile} />
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
      <OnlineMall />
      <Spaces />
    </div>
  );
}
