import styled from "styled-components";
import couponBlue from "@assets/image/coupon_blue.png";
import couponRed from "@assets/image/coupon_red.png";
import couponBlueDisabled from "@assets/image/coupon_blue_disabled.png";
import couponRedDisabled from "@assets/image/coupon_red_disabled.png";
const CouponImgBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  .coupon {
    width: 200px;
    aspect-ratio: 206/200;
    background-size: 100%;
    transition: background-image ease 0.2s;
    &.drink {
      background-image: url(${couponBlue});
      &.disabled {
        background-image: url(${couponBlueDisabled});
      }
    }
    &.pouch {
      background-image: url(${couponRed});
      &.disabled {
        background-image: url(${couponRedDisabled});
      }
    }
  }
`;

const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: center;
  padding-bottom: 40px;
  p {
    font-size: 1.6rem;

    &.golden {
      color: ${(p) => p.theme.colors.gold_text};
      font-size: 1.5rem;
    }
  }
`;

export const PS = {
  CouponImgBlock,
  DescBlock,
};
