import styled from "styled-components";

const Copyright = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  padding-block: 50px 24px;
`;

const Footer = () => {
  return (
    <footer>
      <Copyright>
        우아한청년들 2023 송년회 <br /> COPYRIGHT© 우아한청년들 2023 송년회. ALL
        RIGHT RESERVED
      </Copyright>
    </footer>
  );
};

export default Footer;
