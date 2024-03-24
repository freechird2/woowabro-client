import { _colors } from "@styles/theme";
import React, { ComponentPropsWithRef } from "react";
import styled, { css } from "styled-components";

const buttonColor = {
  deep_green: _colors.deep_green,
  navy_title: _colors.navy_title,
};
export type CommonButtonColorProps = keyof typeof buttonColor;

interface CommonButtonProps {
  $color: CommonButtonColorProps;
  $isboder: boolean;
}

export const StyledButton = styled.button<CommonButtonProps>`
  --color: ${(p) => `${buttonColor[p.$color]}`};

  margin-top: auto;
  width: 100%;
  height: ${(p) => p.theme.size.btn_height};
  border-radius: 8px;
  background-color: var(--color);
  text-align: center;
  font-weight: 500;
  font-size: 1.6rem;
  color: #fff;
  cursor: pointer;
  ${(p) =>
    p.$isboder &&
    css`
      border: 2px solid ${(p) => p.theme.colors.gold_title};
    `}
`;

interface Props extends ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  $color?: CommonButtonColorProps;
  isborder?: boolean;
}
const Button = ({
  children,
  isborder = false,
  $color = "deep_green",
  ...rest
}: Props) => {
  return (
    <StyledButton {...rest} type="button" $color={$color} $isboder={isborder}>
      {children}
    </StyledButton>
  );
};

export default Button;
