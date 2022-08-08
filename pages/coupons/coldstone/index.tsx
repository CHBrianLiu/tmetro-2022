import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";
import Link from "next/link";

const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame previousPageUrl={"/membership?tab=coupons"} title={"優惠券"}>
      <div>
        <Link href={"/coupons/coldstone/redeeming"}>
          <a>
            <Image
              src={"//assets/coupons/coldstone/intro.webp"}
              layout={"responsive"}
              width={"354px"}
              height={"764px"}
            />
          </a>
        </Link>
      </div>
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
