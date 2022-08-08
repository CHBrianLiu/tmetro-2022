import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";

/*
 * Todo: redeem complete modal
 * */
const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame previousPageUrl={"/coupons/coldstone"} title={"優惠券"}>
      <div>
        <Image
          src={"//assets/coupons/coldstone/redeeming.webp"}
          layout={"responsive"}
          width={"708px"}
          height={"1191px"}
        />
      </div>
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
