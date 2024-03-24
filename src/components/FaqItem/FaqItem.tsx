import { FaqResponseModel } from "@model/Faq";
import { useState } from "react";
import { S } from "./FaqItem.styled";

interface Props {
  item: FaqResponseModel;
}

const FaqItem = ({ item }: Props) => {
  const [focus, setFocus] = useState<boolean>(false);

  return (
    <S.FaqItemContainer>
      <S.FaqItemTitle onClick={() => setFocus(!focus)}>
        <span>{`[${item.type}] `}</span>
        {item.title}
      </S.FaqItemTitle>
      <S.FaqItemContent $display={focus}>
        <div>
          <div>{item.content}</div>
        </div>
      </S.FaqItemContent>
    </S.FaqItemContainer>
  );
};

export default FaqItem;
