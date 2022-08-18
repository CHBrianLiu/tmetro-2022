import { useRouter } from "next/router";
import Link from "next/link";
import {
  Card,
  Coupons,
  Achievements,
  Points,
  Purchases,
} from "../components/MembershipTabs";
import Image from "next/image";
import ProfilePic from "../public/assets/Membership/profile-pic.webp";
import styles from "../styles/Membership.module.css";
import TopPageFrame from "../components/TopPageFrame";

const DEFAULT_TAB = "card";

// The order of the tabs decide the sequence it shows in the tab view
const tabs: Map<string, [string, () => JSX.Element]> = new Map([
  ["card", ["會員卡", Card]],
  ["coupons", ["優惠券", Coupons]],
  ["points", ["捷客點", Points]],
  ["achievements", ["成就徽章", Achievements]],
]);

const ProfilePreview = () => {
  const Name = () => (
    <span style={{ fontSize: "14px", fontWeight: 600 }}>森上梅友前</span>
  );

  return (
    <div className={styles.ProfilePicSectionExpanded}>
      <div className={styles.ProfilePic}>
        <Image src={ProfilePic} />
      </div>
      <Name />
    </div>
  );
};

interface TabBarProps {
  items: {
    displayName: string;
    tabName: string;
  }[];
  current: string;
}

const TabBar = ({ items, current }: TabBarProps) => {
  return (
    <div className={styles.TabBarSection}>
      {items.map(({ displayName, tabName }) => {
        const tabItemClasses = [styles.TabBarItem];
        if (current !== tabName)
          tabItemClasses.push(styles.tabBarItemUnselected);
        return (
          <Link key={tabName} href={`?tab=${tabName}`}>
            <a className={tabItemClasses.join(" ")}>{displayName}</a>
          </Link>
        );
      })}
    </div>
  );
};

const Membership = () => {
  const router = useRouter();
  const tabQueryParam = router.query.tab;
  const currentTab =
    typeof tabQueryParam === "string" && tabs.has(tabQueryParam)
      ? tabQueryParam
      : DEFAULT_TAB;
  // @ts-ignore
  const [_, TabContent] = tabs.get(currentTab);
  const tabBarItems = Array.from(tabs).map(([tabName, [displayName]]) => {
    return {
      displayName: displayName,
      tabName: tabName,
    };
  });
  return (
    <TopPageFrame>
      <div className={styles.container}>
        <ProfilePreview />
        <TabBar items={tabBarItems} current={currentTab} />
        <TabContent />
      </div>
    </TopPageFrame>
  );
};

export default Membership;
