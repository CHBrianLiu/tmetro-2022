import Image from "next/image";
import styles from "./Coupons.module.css";
import CouponsFakePic1 from "../../public/assets/Membership/Coupons/fake-coupon1.webp";
import CouponsFakePic2 from "../../public/assets/Membership/Coupons/fake-coupon2.webp";
import CouponsFakePic3 from "../../public/assets/Membership/Coupons/fake-coupon3.webp";
import CouponsFakePic4 from "../../public/assets/Membership/Coupons/fake-coupon4.webp";
import CouponsFakeTab from "../../public/assets/Membership/Coupons/CouponsFakeTab.svg";

export const Coupons = () => {
  return (
    <div className={styles.container}>
      <Image src={CouponsFakeTab} />
      <div className={styles.PointRecords}>
        <Image src={CouponsFakePic1} />
        <Image src={CouponsFakePic2} />
        <Image src={CouponsFakePic3} />
        <Image src={CouponsFakePic4} />
      </div>
    </div>
  );
};
