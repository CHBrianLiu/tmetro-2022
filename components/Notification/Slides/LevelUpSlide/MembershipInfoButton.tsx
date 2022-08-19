import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const AllBadgesButtonFrame = styled.div`
  width: 71.8%;
`;

export default function MembershipInfoButton(props: {
  closeModal: () => void;
}) {
  return (
    <AllBadgesButtonFrame onClick={props.closeModal}>
      <Link href={"/card/memberinfo"}>
        <a>
          <Image
            src={
              "//assets/notification/level-up-slide/membership-info-button.webp"
            }
            width={840}
            height={111}
            layout={"responsive"}
            alt={"all badges"}
          />
        </a>
      </Link>
    </AllBadgesButtonFrame>
  );
}
