export type ChoiceItemModel = {
  id: number;
  context: string;
  questionId: number;
  path: number;
};
export interface TestReponseModel {
  id: number;
  context: string;
  answer: ChoiceItemModel[];
}
