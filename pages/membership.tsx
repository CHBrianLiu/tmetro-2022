import { useRouter } from "next/router";
import Link from "next/link";
import ShareButton from "../components/ShareButton";
import {
  Card,
  Coupons,
  Achievements,
  Points,
  Purchases,
} from "../components/MembershipTabs";
import styles from "../styles/Membership.module.css";

const DEFAULT_TAB = "card";

// The order of the tabs decide the sequence it shows in the tab view
const tabs: Map<string, [string, () => JSX.Element]> = new Map([
  ["card", ["會員卡", Card]],
  ["coupons", ["優惠券", Coupons]],
  ["points", ["捷客點", Points]],
  ["achievements", ["成就徽章", Achievements]],
  ["purchases", ["消費記錄", Purchases]],
]);

const ProfilePreview = () => {
  const ProfilePic = () => <div className={styles.ProfilePic} />;
  const Name = () => (
    <span style={{ fontSize: "14px", fontWeight: 600 }}>陳小明</span>
  );

  return (
    <div className={styles.ProfilePicSectionExpanded}>
      <ProfilePic />
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
  const [tabName, TabContent] = tabs.get(currentTab);
  const tabBarItems = Array.from(tabs).map(([tabName, [displayName]]) => {
    return {
      displayName: displayName,
      tabName: tabName,
    };
  });
  return (
    <div className={styles.container}>
      <ProfilePreview />
      <TabBar items={tabBarItems} current={currentTab} />
      <TabContent />
      <div style={{ height: "1000px", background: "#D9D9D9" }}></div>
    </div>
  );
};

export default Membership;
