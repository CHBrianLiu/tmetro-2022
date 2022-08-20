import styled from "styled-components";
import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";
import Link from "next/link";

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  padding: 40px 16px 10px;
  width: 100vw;
  overflow-x: clip;
  overflow-y: scroll;
`;

const SectionTitleText = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #3179aa;
`;

const SectionDescriptionText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #8b8b8b;
`;

const LearnMoreText = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #3179aa;
`;

const ShowMoreButton = () => {
  return <LearnMoreText>{"查看更多 >"}</LearnMoreText>;
};

const SectionDescriptionRowLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SectionTitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SectionLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  overflow: visible;
`;

const Section = (props: {
  title: string;
  description: string;
  badgeCollection: { path: string; height: number; width: number };
}) => {
  return (
    <SectionLayout>
      <SectionTitleLayout>
        <SectionTitleText>{props.title}</SectionTitleText>
        <SectionDescriptionRowLayout>
          <SectionDescriptionText>{props.description}</SectionDescriptionText>
          <ShowMoreButton />
        </SectionDescriptionRowLayout>
      </SectionTitleLayout>
      <Image
        src={props.badgeCollection.path}
        width={props.badgeCollection.width}
        height={props.badgeCollection.height}
        layout={"fixed"}
        alt={"badges"}
      />
    </SectionLayout>
  );
};

const BadgesLearnMorePage = () => {
  return (
    <LastPageFrame
      previousPageUrl={"/membership?tab=achievements"}
      title={"成就徽章"}
    >
      <ContentLayout>
        <Section
          title={"你即將獲得的徽章"}
          description={"您差幾步就得獲得的徽章，加把勁吧！"}
          badgeCollection={{
            path: "//assets/achievements/learnmore/achievements_learnmore1.webp",
            width: 358,
            height: 144,
          }}
        />
        <Section
          title={"熱門徽章"}
          description={"最多人獲得的徽章，一起加入吧！"}
          badgeCollection={{
            path: "//assets/achievements/learnmore/achievements_learnmore2.webp",
            width: 385,
            height: 144,
          }}
        />
        {/*link: /achievements/learnmore/badge*/}
        <Section
          title={"推薦徽章"}
          description={"看起來您很適合這些徽章！"}
          badgeCollection={{
            path: "//assets/achievements/learnmore/achievements_learnmore3.webp",
            width: 385,
            height: 144,
          }}
        />
      </ContentLayout>
    </LastPageFrame>
  );
};

export default BadgesLearnMorePage;
