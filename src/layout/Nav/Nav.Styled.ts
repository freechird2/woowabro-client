import styled from "styled-components";
import nav_background from "@assets/image/nav_background.png";
import { motion } from "framer-motion";
import close from "@assets/image/nav_close.svg";
const CloseButton = styled.button`
  --size: 24px;
  width: var(--size);
  height: var(--size);
  background-image: url(${close});
  background-size: 100%;
  margin-left: auto;
  margin-bottom: 70px;
  cursor: pointer;
`;
const FooterMenuGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: auto;
  a,
  button {
    color: rgba(255, 255, 255, 0.6);
  }
  i {
    display: inline-block;
    width: 2px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const MenuGroup = styled.div`
  padding-bottom: 50px;
  button {
    display: block;
    font-size: 2.2rem;
    color: #fff;
    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
    &.active {
      color: ${(p) => p.theme.colors.gold_title};
    }
  }
`;
const Content = styled(motion.div)`
  position: relative;
  width: 90%;
  height: 90dvh;
  background-image: url(${nav_background});
  background-size: 100% 100%;
  z-index: 10;
  max-width: 480px;
`;

const Parchment = styled.div`
  display: flex;
  flex-direction: column;
  width: 82%;
  height: 100%;
  padding: 50px 30px;

  margin-left: auto;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;

  inset: 0;
  z-index: 1000;
`;

const Dimmer = styled(motion.div)`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;
export const S = {
  Container,
  Dimmer,
  Content,
  Parchment,
  MenuGroup,
  ButtonGroup,
  FooterMenuGroup,
  CloseButton,
};
