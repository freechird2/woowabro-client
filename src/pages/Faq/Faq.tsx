import API from "@api/index";
import FaqItem from "@components/FaqItem/FaqItem";
import Parchment from "@components/Parchment/Parchment";
import { PaperMainHeader } from "@components/Parchment/Parchment.styled";
import useGetQuery from "@hooks/useTQuery";
import { GenericResponse } from "@model/Common";
import { FaqResponseModel } from "@model/Faq";
import { PS } from "./Faq.styled";

const Faq = () => {
  const { data: faqList } = useGetQuery({
    queryKey: ["@getFaq"],
    queryFn: () => API.user.getFaq(),
    select: (res: GenericResponse) => {
      const data = res.data as FaqResponseModel[];

      return data;
    },
  });

  if (!faqList) return <></>;
  else
    return (
      <Parchment>
        <PaperMainHeader.Block>
          <PaperMainHeader.Title>자주묻는질문</PaperMainHeader.Title>
        </PaperMainHeader.Block>
        <PS.FaqListContainer>
          {faqList.map((f) => {
            return <FaqItem key={f.id} item={f} />;
          })}
        </PS.FaqListContainer>
      </Parchment>
    );
};

export default Faq;
