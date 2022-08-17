import styled from "styled-components";
import LastPageFrame from "../../../components/LastPageFrame";
import Image from "next/image";

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

/*
 * Todo: redeem complete modal
 * */
const ColdstoneCouponIntroductionPage = () => {
  return (
    <LastPageFrame previousPageUrl={"/coupons/coldstone"} title={"優惠券"}>
      <ContentContainer>
        <TicketInfoGroup>
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
    </LastPageFrame>
  );
};

export default ColdstoneCouponIntroductionPage;
