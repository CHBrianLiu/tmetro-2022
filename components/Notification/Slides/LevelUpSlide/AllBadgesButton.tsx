import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const AllBadgesButtonFrame = styled.div`
  width: 100%;
`;

export default function AllBadgesButton(props: { closeModal: () => void }) {
  return (
    <AllBadgesButtonFrame onClick={props.closeModal}>
      <Link href={"/membership?tab=achievements"}>
        <a>
          <Image
            src={
              "//assets/notification/badge-acquisition-slide/all-badges.webp"
            }
            width={810}
            height={108}
            layout={"responsive"}
            alt={"all badges"}
          />
        </a>
      </Link>
    </AllBadgesButtonFrame>
  );
}
