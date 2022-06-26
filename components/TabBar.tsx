import styles from "../styles/TabBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Home from "../assets/tabbar.home.svg";
import Restaurant from "../assets/tabbar.restaurant.svg";
import Shopping from "../assets/tabbar.shopping.svg";
import Service from "../assets/tabbar.service.svg";
import Membership from "../assets/tabbar.membership.svg";

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

const TabBar = () => {
  const router = useRouter();
  return (
    <div className={styles.TabBar}>
      {/* TODO: values in `link` and `selected` props are duplicated.
                find a better way to construct them. */}
      <MenuButton
        imageSrc={Home}
        text={"Home"}
        link={"/"}
        selected={router.pathname === "/"}
      />
      <FakeButton imageSrc={Restaurant} text={"捷客鮮"} />
      <FakeButton imageSrc={Shopping} text={"線上商城"} />
      <FakeButton imageSrc={Service} text={"溫馨服務"} />
      {/* TODO: values in `link` and `selected` props are duplicated.
                find a better way to construct them. */}
      <MenuButton
        imageSrc={Membership}
        text={"會員中心"}
        link={"/membership"}
        selected={router.pathname === "/membership"}
      />
    </div>
  );
};

export default TabBar;
