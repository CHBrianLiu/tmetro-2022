import Image from "next/image";
import styles from "./Card.module.css";
import OpenCameraIcon from "../../assets/Membership/Card/OpenCameraIcon.svg";
import ShowCodeIcon from "../../assets/Membership/Card/ShowCodeIcon.svg";
import FakeCode from "../../assets/Membership/Card/FakeCode.svg";
import FakeToggle from "../../assets/Membership/Card/FakeToggle.svg";

export const Card = () => {
  return (
    <div className={styles.TabContainer}>
      <div className={styles.MembershipInfo}>
        <div className={styles.CardPreview}>捷運金卡會員</div>
        <div className={styles.MembershipInfoDescription}>
          <div>金卡會員</div>
          <div>有效期限：2021/4/17-2022/5/30</div>
        </div>
      </div>
      <div className={styles.ActionIconsGroup}>
        <div className={styles.ActionIcon}>
          <Image src={ShowCodeIcon} />
        </div>
        <div className={styles.ActionIcon}>
          <Image src={OpenCameraIcon} />
        </div>
      </div>
      <Image src={FakeCode} />
      <div className={styles.PaymentMenu}>
        <div className={styles.PaymentMenuItem}>
          <div>捷客金</div>
          <div className={styles.PaymentMenuItem_UseMoneyToggleSection}>
            <div>折抵 NT $45</div>
            <Image src={FakeToggle} />
          </div>
        </div>
        <hr className={styles.PaymentMenuItemSeperator} />
        <div className={styles.PaymentMenuItem}>
          <div>我的優惠券</div>
          <div>搜尋</div>
        </div>
      </div>
      {/* TODO: Coupon - i haven't figured out how to shape the div */}
    </div>
  );
};
