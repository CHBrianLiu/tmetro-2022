import styled from "styled-components";
import Image from "next/image";

const CloseButtonFrame = styled.div`
  position: absolute;
  top: 14px;
  right: 16px;
  width: 30px;
  height: 30px;
`;

export default function CloseButton(props: { onClick: () => void }) {
  return (
    <CloseButtonFrame>
      <Image
        src={"//assets/notification/badge-acquisition-slide/close-button.webp"}
        layout={"responsive"}
        width={90}
        height={90}
        onClick={props.onClick}
        alt={"close button"}
      />
    </CloseButtonFrame>
  );
}
