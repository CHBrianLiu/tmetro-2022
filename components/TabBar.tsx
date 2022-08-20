import styled from "styled-components";
import styles from "../styles/TabBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface FakeButtonProps {
  imageSrc: string;
  text: string;
}

const FakeButton = ({ imageSrc, text }: FakeButtonProps) => {
  return <Image src={imageSrc} alt={text} height={49} width={74} />;
};

interface MenuButtonProps extends FakeButtonProps {
  link: string;
  selected: boolean;
}

const MenuButton = ({ imageSrc, text, link, selected }: MenuButtonProps) => {
  const buttonClasses = [styles.button];
  if (selected) buttonClasses.push(styles.CurrentSelected);
  return (
    <div className={buttonClasses.join(" ")}>
      <Link href={link} passHref>
        <a>
          <Image src={imageSrc} alt={text} height={49} width={74} />
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
        imageSrc={"//assets/tab-bar/home.svg"}
        text={"Home"}
        link={"/"}
        selected={router.pathname === "/"}
      />
      <FakeButton
        imageSrc={"//assets/tab-bar/online-mall.svg"}
        text={"線上商城"}
      />
      <FakeButton imageSrc={"//assets/tab-bar/map.svg"} text={"捷運路網"} />
      <FakeButton imageSrc={"//assets/tab-bar/service.svg"} text={"溫馨服務"} />
      {/* TODO: values in `link` and `selected` props are duplicated.
                find a better way to construct them. */}
      <MenuButton
        imageSrc={"//assets/tab-bar/membership.svg"}
        text={"會員中心"}
        link={"/membership"}
        selected={router.pathname === "/membership"}
      />
    </div>
  );
};

export default TabBar;
