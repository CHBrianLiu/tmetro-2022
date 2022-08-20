import styled from "styled-components";
import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";
import Link from "next/link";

const CouponFrame = styled.div`
  width: 90.8%;
  margin: 40px 16px;
`;

const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame previousPageUrl={"/membership?tab=coupons"} title={"優惠券"}>
      <Link href={"/coupons/coldstone/redeeming"}>
        <a>
          <CouponFrame>
            <Image
              src={"//assets/coupons/coldstone/intro.webp"}
              layout={"responsive"}
              width={"354px"}
              height={"764px"}
              alt={"coupon introduction"}
            />
          </CouponFrame>
        </a>
      </Link>
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
