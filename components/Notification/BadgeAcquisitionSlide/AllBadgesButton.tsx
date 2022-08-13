import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function AllBadgesButton({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const AllBadgesButtonFrame = styled.div`
    width: 100%;
  `;
  return (
    <AllBadgesButtonFrame onClick={closeModal}>
      <Link href={"//membership?tab=achievements"}>
        <Image
          src={"//assets/notification/badge-acquisition-slide/all-badges.webp"}
          width={810}
          height={108}
          layout={"responsive"}
          alt={"all badges"}
        />
      </Link>
    </AllBadgesButtonFrame>
  );
}
