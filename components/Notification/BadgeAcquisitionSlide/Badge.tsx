import styled from "styled-components";
import Image from "next/image";

function BadgeDescription() {
  const BadgeDescriptionFrame = styled.div`
    width: 71.2%;
  `;
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

function RewardDescription() {
  const RewardDescriptionFrame = styled.div`
    width: 38.7%;
  `;

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

export default function Badge() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    justify-content: center;
    width: 100%;
  `;

  return (
    <Container>
      <BadgeDescription />
      <RewardDescription />
    </Container>
  );
}
