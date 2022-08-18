import styled from "styled-components";
import Image from "next/image";

const SlideBackgroundImageFrame = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 133px;
`;

export default function SlideBackgroundImage() {
  return (
    <SlideBackgroundImageFrame>
      <Image
        src={"//assets/notification/badge-acquisition-slide/background.webp"}
        layout={"fill"}
        alt={"background"}
      />
    </SlideBackgroundImageFrame>
  );
}
