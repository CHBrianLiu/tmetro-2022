import { useState, useEffect } from "react";
import styled from "styled-components";
import SlideBackgroundImage from "./SlideBackgroundImage";
import DragIndicator from "./DragIndicator";
import Badge from "./Badge";
import ShareButton from "./ShareButton";
import AllBadgesButton from "./AllBadgesButton";
import CloseButton from "./CloseButton";

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

const ActionItemsGroup = styled.div`
  width: 71.8%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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
        <Badge />
        <ActionItemsGroup>
          <ShareButton />
          <AllBadgesButton closeModal={closeModalWithAnimation} />
        </ActionItemsGroup>
      </SlideContainer>
    </ShallowBackground>
  );
};

export default LevelUpSlide;
