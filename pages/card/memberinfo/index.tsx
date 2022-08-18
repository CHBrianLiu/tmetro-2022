import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";

const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame previousPageUrl={"/membership?tab=card"} title={"會員卡"}>
      <div>
        <Image
          src={"//assets/card/memberinfo/cardmemberinfo1.webp"}
          layout={"responsive"}
          width={"390px"}
          height={"756px"}
        />
      </div>
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
