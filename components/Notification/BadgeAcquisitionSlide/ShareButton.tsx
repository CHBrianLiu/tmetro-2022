import styled from "styled-components";
import Image from "next/image";

export default function ShareButton() {
  const ShareButtonFrame = styled.div`
    width: 100%;
  `;
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
