import styles from "../styles/TabBar.module.css";
import Image from "next/image";
import Home from "../assets/tabbar.home.svg";
import Restaurant from "../assets/tabbar.restaurant.svg";
import Shopping from "../assets/tabbar.shopping.svg";
import Service from "../assets/tabbar.service.svg";
import Membership from "../assets/tabbar.membership.svg";

type ButtonProps = {
  imageSrc: string;
  text: string;
};

const Button = ({ imageSrc, text }: ButtonProps) => {
  return (
    <div className={styles.button}>
      <Image src={imageSrc} alt={text} className={styles.ButtonImage} />
      {text}
    </div>
  );
};

const TabBar = () => {
  return (
    <div className={styles.TabBar}>
      <Button imageSrc={Home} text={"Home"} />
      <Button imageSrc={Restaurant} text={"捷客鮮"} />
      <Button imageSrc={Shopping} text={"線上商城"} />
      <Button imageSrc={Service} text={"溫馨服務"} />
      <Button imageSrc={Membership} text={"會員中心"} />
    </div>
  );
};

export default TabBar;
