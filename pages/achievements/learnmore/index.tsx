import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";
import Link from "next/link";

const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame
      previousPageUrl={"/membership?tab=achievements"}
      title={"成就徽章"}
    >
      <h2>你即將獲得的徽章</h2>
      <h3>您差幾步就得獲得的徽章，加把勁吧！</h3>
      <Image
        src={"//assets/achievements/learnmore/achievements_learnmore1.webp"}
        layout={"responsive"}
        width={"358px"}
        height={"144px"}
      />

      <h2>熱門徽章</h2>
      <h3>最多人獲得的徽章，一起加入吧！</h3>

      <div>
        <Link href={"/achievements/learnmore/badge"}>
          <a>
            <Image
              src={
                "//assets/achievements/learnmore/achievements_learnmore2.webp"
              }
              layout={"responsive"}
              width={"385px"}
              height={"144px"}
            />
          </a>
        </Link>
      </div>

      <h2>推薦徽章</h2>
      <h3>看起來您很適合這些徽章！</h3>
      <Image
        src={"//assets/achievements/learnmore/achievements_learnmore3.webp"}
        layout={"responsive"}
        width={"385px"}
        height={"144px"}
      />
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
