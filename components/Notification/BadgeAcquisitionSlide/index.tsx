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
  bottom: 0;
  left: 0;
  height: 90vh;
  width: 100vw;
  background: #ffffff;
  border-radius: 10px 10px 0 0;
  animation-name: SlideIn;
  animation-duration: 0.5s;
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

const BadgeAcquisitionSlide = ({ closeModal }: SlideProps) => {
  return (
    <ShallowBackground>
      <SlideContainer>
        <SlideBackgroundImage />
        <DragIndicator />
        <Badge />
        <CloseButton onClick={closeModal} />
        <ActionItemsGroup>
          <ShareButton />
          <AllBadgesButton closeModal={closeModal} />
        </ActionItemsGroup>
      </SlideContainer>
    </ShallowBackground>
  );
};

export default BadgeAcquisitionSlide;
