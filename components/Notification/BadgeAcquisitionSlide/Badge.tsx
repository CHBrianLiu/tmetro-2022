import styled from "styled-components";
import Image from "next/image";

const BadgeDescriptionFrame = styled.div`
  width: 71.2%;
`;

function BadgeDescription() {
  return (
    <BadgeDescriptionFrame>
      <Image
        src={"//assets/notification/badge-acquisition-slide/badge.webp"}
        layout={"responsive"}
        width={834}
        height={1131}
        alt={"badge"}
      />
    </BadgeDescriptionFrame>
  );
}

const RewardDescriptionFrame = styled.div`
  width: 38.7%;
`;

function RewardDescription() {
  return (
    <RewardDescriptionFrame>
      <Image
        src={
          "//assets/notification/badge-acquisition-slide/reward-description.webp"
        }
        layout={"responsive"}
        width={453}
        height={84}
        alt={"reward description"}
      />
    </RewardDescriptionFrame>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: center;
  width: 100%;
`;

export default function Badge() {
  return (
    <Container>
      <BadgeDescription />
      <RewardDescription />
    </Container>
  );
}
