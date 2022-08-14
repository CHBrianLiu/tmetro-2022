import styled from "styled-components";
import Image from "next/image";

const ShareButtonFrame = styled.div`
  width: 100%;
`;

interface Data {
  title: string;
  text?: string;
  url?: string;
  files?: File[];
}

const shareButtonClickHandler = async () => {
  const response = await fetch(
    "/assets/notification/badge-acquisition-slide/badge-for-sharing.png"
  );
  const badgeImage = await response.blob();
  const badgeImageMetadata = {
    type: "image/png",
  };
  const badgeImageName = "badge-for-sharing.png";
  const badgeImageFile = new File(
    [badgeImage],
    badgeImageName,
    badgeImageMetadata
  );

  const sharingData: Data = {
    title: "北捷通勤王",
    files: [badgeImageFile],
    text: "跟你分享我的新徽章！",
  };

  try {
    await navigator.share(sharingData);
  } catch (err) {
    console.warn(err);
  }
};

export default function ShareButton() {
  return (
    <ShareButtonFrame onClick={shareButtonClickHandler}>
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
