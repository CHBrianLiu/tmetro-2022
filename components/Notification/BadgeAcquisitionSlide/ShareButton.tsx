import styled from "styled-components";
import Image from "next/image";

const ShareButtonFrame = styled.div`
  width: 100%;
`;

export default function ShareButton() {
  return (
    <ShareButtonFrame>
      <Image
        src={"//assets/notification/badge-acquisition-slide/badge-sharing.webp"}
        height={111}
        width={840}
        layout={"responsive"}
        alt={"share"}
      />
    </ShareButtonFrame>
  );
}
