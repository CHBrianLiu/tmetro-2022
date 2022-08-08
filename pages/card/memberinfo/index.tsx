import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";

const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame previousPageUrl={"/membership?tab=card"} title={"會員卡"}>
      <div>
        <Image
              src={"//assets/card/memberinfo/cardmemberinfo1.webp"}
              layout={"responsive"}
              width={"354px"}
              height={"764px"}
        />
        <Image
              src={"//assets/card/memberinfo/cardmemberinfo2.webp"}
              layout={"responsive"}
              width={"354px"}
              height={"764px"}
        />

      </div>
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
