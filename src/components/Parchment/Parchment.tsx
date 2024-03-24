import { S } from "@components/Parchment/Parchment.styled";

interface Props {
  children: React.ReactNode;
}
const Parchment = ({ children }: Props) => {
  return (
    <S.PaperContainer>
      <S.PaperHead />
      <S.PaperMain>{children}</S.PaperMain>
      <S.PaperFooter />
    </S.PaperContainer>
  );
};

export default Parchment;
