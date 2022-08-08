import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";

/*
 * Todo: redeem complete modal
 * */
const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame
      previousPageUrl={"/membership?tab=achievements"}
      title={"成就徽章"}
    >
      <div>
        <Image
          src={"//assets/achievements/learnmore/badgedetail.webp"}
          layout={"responsive"}
          width={"350px"}
          height={"628px"}
        />
      </div>
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
