import styles from "../styles/TabBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

type FakeButtonProps = {
  imageSrc: string;
  text: string;
};

const FakeButton = ({ imageSrc, text }: FakeButtonProps) => {
  return (
    <div className={styles.button}>
      <Image src={imageSrc} alt={text} className={styles.ButtonImage} />
      {text}
    </div>
  );
};

type MenuButtonProps = {
  imageSrc: string;
  text: string;
  link: string;
  selected: boolean;
};

const MenuButton = ({ imageSrc, text, link, selected }: MenuButtonProps) => {
  const buttonClasses = [styles.button];
  if (selected) buttonClasses.push(styles.CurrentSelected);
  return (
    <div className={buttonClasses.join(" ")}>
      <Link href={link} passHref>
        <a className={styles.button}>
          <Image src={imageSrc} alt={text} />
          {text}
        </a>
      </Link>
    </div>
  );
};

interface ITabBarItem {
  icon: string;
  text: string;
  link?: string;
}

interface ITabBarProps {
  items: ITabBarItem[];
}

const TabBar = ({ items }: ITabBarProps) => {
  const router = useRouter();
  const buttons = items.map((item) => {
    if (item.link !== undefined) {
      return (
        <MenuButton
          imageSrc={item.icon}
          text={item.text}
          link={item.link}
          selected={router.pathname === item.link}
        />
      );
    } else {
      return <FakeButton imageSrc={item.icon} text={item.text} />;
    }
  });
  return <div className={styles.TabBar}>{buttons}</div>;
};

export default TabBar;
