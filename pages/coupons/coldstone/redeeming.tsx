import styled from "styled-components";
import { useState } from "react";
import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";
import CloseButton from "../../../components/Notification/Slides/BadgeAcquisitionSlide/CloseButton";
import Link from "next/link";

/* TODO: Separate modal component out*/

const ContentContainer = styled.div`
  margin: 40px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
`;

const TicketInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoticeInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  margin: auto 40px;
`;

const NoticeTextParagraph = styled.ol`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding-left: 20px;
`;

const NoticeIconFrame = styled.div`
  width: 85px;
  height: 34px;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1;
  background: rgba(15, 15, 15, 0.3);
`;

const ModalWindow = styled.div`
  top: 19.7%;
  height: calc(100vh - 2 * (19.7%));
  left: 4.6%;
  width: calc(100vw - 2 * (4.6%));
  z-index: 2;
  background: #ffffff;
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const ConfirmButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  width: 79%;

  background: #3478ab;
  background-blend-mode: normal, color-dodge;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;

  border-radius: 35px;
  border: transparent;
`;

const RedeemSuccessTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const RedeemSuccessTitle = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: 0.38px;
`;

const RedeemSuccessfulDate = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const IceCreamPicFrame = styled.div`
  width: 61.5%;
`;

const RedeemSuccessSummaryFrame = styled.div`
  width: 79%;
`;

const ColdstoneCouponIntroductionPage = () => {
  const [isModalOnScreen, setModalOnScreen] = useState(false);

  const openModal = () => setModalOnScreen(true);
  const closeModal = () => setModalOnScreen(false);

  return (
    <LastPageFrame previousPageUrl={"/coupons/coldstone"} title={"優惠券"}>
      <ContentContainer>
        <TicketInfoGroup onClick={openModal}>
          <Image
            src={"//assets/coupons/coldstone/redeem-preview.webp"}
            height={471}
            width={1062}
            alt={"coupon preview"}
          />
          <Image
            src={"//assets/coupons/coldstone/barcode.webp"}
            height={372}
            width={1062}
            alt={"barcode"}
          />
        </TicketInfoGroup>
        <NoticeInfoGroup>
          <NoticeIconFrame>
            <Image
              src={"//assets/coupons/coldstone/redeem-notice.webp"}
              height={102}
              width={255}
              alt={"barcode"}
              layout={"responsive"}
            />
          </NoticeIconFrame>
          <NoticeTextParagraph>
            <li>本券限用於台北捷運相關周邊商家，不含網路商店</li>
            <li>
              本券限於使用期限內有效北捷會員本人使用乙次，結帳前需告知使用本券並出示有效會員卡或官方APP電子優惠券
            </li>
            <li>本券不得與其他特價優惠、或會員及其他身份折扣同時並用</li>
            <li>
              台北捷運保有隨時修改本券使用方式之權利，若有相關異動將公布於「台北捷運」網站。
            </li>
          </NoticeTextParagraph>
        </NoticeInfoGroup>
      </ContentContainer>
      {isModalOnScreen ? (
        <ModalBackground>
          <ModalWindow>
            <CloseButton onClick={closeModal} />
            <RedeemSuccessTitleSection>
              <RedeemSuccessTitle>兌換完成！</RedeemSuccessTitle>
              <RedeemSuccessfulDate>
                兌換日期：2022-05-21 19:00
              </RedeemSuccessfulDate>
            </RedeemSuccessTitleSection>
            <IceCreamPicFrame>
              <Image
                src={"//assets/coupons/coldstone/icecream.webp"}
                width={469}
                height={354}
                layout={"responsive"}
                alt={"ice cream"}
              />
            </IceCreamPicFrame>
            <RedeemSuccessSummaryFrame>
              <Image
                src={"//assets/coupons/coldstone/redeem-success-summary.webp"}
                width={840}
                height={348}
                layout={"responsive"}
                alt={"summary"}
              />
            </RedeemSuccessSummaryFrame>
            <Link href={"/membership?tab=coupons"} passHref>
              <ConfirmButton onClick={closeModal}>確認</ConfirmButton>
            </Link>
          </ModalWindow>
        </ModalBackground>
      ) : null}
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
