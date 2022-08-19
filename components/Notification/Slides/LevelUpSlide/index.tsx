import { useState, useEffect } from "react";
import styled from "styled-components";
import SlideBackgroundImage from "./SlideBackgroundImage";
import DragIndicator from "./DragIndicator";
import MembershipInfoButton from "./MembershipInfoButton";
import CloseButton from "./CloseButton";
import Image from "next/image";

interface SlideProps {
  closeModal: () => void;
}

const ShallowBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: block;
  background: rgba(0, 0, 0, 0.2);
  transition: 1s;
`;

const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: ${(props: { expanded: boolean }) => (props.expanded ? "0" : "-90vh")};
  left: 0;
  height: 90vh;
  width: 100vw;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  transition: bottom;
  transition-duration: 0.5s;
  gap: 45px;
`;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const CongratsTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.38px;
`;

const CardFrame = styled.div`
  width: 85%;
`;

const CongratsWords = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.38px;
`;

function Card() {
  return (
    <CardFrame>
      <Image
        src={"//assets/notification/level-up-slide/gold-card.webp"}
        height={522}
        width={996}
        layout={"responsive"}
        alt={"gold card"}
      />
    </CardFrame>
  );
}

const RewardFrame = styled.div`
  width: 31%;
`;

const Reward = () => {
  return (
    <RewardFrame>
      <Image
        src={"//assets/notification/level-up-slide/point-acquiring.webp"}
        width={363}
        height={84}
        alt={"reward"}
        layout={"responsive"}
      />
    </RewardFrame>
  );
};

const LevelUpSlide = ({ closeModal }: SlideProps) => {
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(true);
  }, []);

  const closeModalWithAnimation = async () => {
    setExpanded(false);
    await sleep(500);
    closeModal();
  };

  return (
    <ShallowBackground>
      <SlideContainer expanded={isExpanded}>
        <SlideBackgroundImage />
        <DragIndicator />
        <CloseButton onClick={closeModalWithAnimation} />
        <CongratsTitle>
          恭喜您！
          <br />
          升等為金卡會員！
        </CongratsTitle>
        <Card />
        <CongratsWords>
          恭喜你！您已達到金卡會員資格！
          <br />
          您可立即享有金卡會員的優惠。
        </CongratsWords>
        <Reward />
        <MembershipInfoButton closeModal={closeModalWithAnimation} />
      </SlideContainer>
    </ShallowBackground>
  );
};

export default LevelUpSlide;
