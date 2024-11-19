import { toast } from "react-toastify";
import { hasDuplicateArrayValue } from "../../../../utils/hasDuplicateArrayValue";

export const handleValidateSingleQuestion = (
  values: any,
  isValid: boolean,
  handleSubmit: any,
  t: any,
) => {
  const haveMoreThanOneAnswer = values?.answers?.length > 1;
  const haveOneAnswerRight =
    haveMoreThanOneAnswer &&
    values?.answers?.some(
      (item: any) => item?.isCorrect === 1 || item.isCorrect === true,
    );
  const haveImageOrContent =
    haveOneAnswerRight &&
    values?.answers?.some((item: any) => !item?.content && !item.content_image);

  const haveDuplicatedContent = hasDuplicateArrayValue(
    values?.answers,
    "content",
  );
  console.log("karim", "karim");

  const content = values.content;
  const content_image = values.content_image;
  const haveContentOrContentImage = !!content || !!content_image;
  console.log(haveImageOrContent, "haveImageOrContent");
  if (!haveContentOrContentImage) {
    toast.error(
      `${t("validation.one_of_image_and_content_should_be_enter_in_question")}`,
    );
    return false;
  }

  if (!haveMoreThanOneAnswer) {
    toast.error(t("validation.it_should_have_more_than_one_answers"));
    return false;
  }
  if (!haveOneAnswerRight) {
    toast.error(t("validation.it_should_have_more_than_one_correct_answers"));
    return false;
  }
  if (haveImageOrContent) {
    toast.error(
      t("validation.one_of_image_and_content_should_be_enter_in_answer"),
    );
    return false;
  }
  if (haveDuplicatedContent) {
    toast.error(t("validation.haveDuplicatedContent"));
    return false;
  }

  if (isValid) {
    handleSubmit(values);
  }
};
export const handleValidateBaseQuestion = (
  values: any,
  isValid: boolean,
  handleSubmit: any,
  t: any,
) => {
  const content = values.content;
  const content_image = values.content_image;
  const haveContentOrContentImage = !!content || !!content_image;
  const haveDuplicatedContent = hasDuplicateArrayValue(
    values?.Questions,
    "content",
  );
  console.log(1);

  if (!haveContentOrContentImage) {
    toast.error(
      `${t("validation.one_of_image_and_content_should_be_enter_in_question")}`,
    );
    return false;
  }

  if (haveDuplicatedContent) {
    toast.error(t("validation.haveDuplicatedContent"));
    return false;
  }

  console.log(1);

  const isValidate = values?.Questions?.every(
    (Question: any, QuestionsIndex: number) => {
      const content = Question.content;
      const content_image = Question.content_image;
      const haveContentOrContentImage = !!content || !!content_image;

      if (!haveContentOrContentImage) {
        toast.error(
          `${t("validation.one_of_image_and_content_should_be_enter_in_question")}`,
        );
        return false;
      }

      //// answers
      const answers = Question?.answers;
      const haveAnswers = answers?.length > 0;
      const haveMoreThanOneAnswer = haveAnswers && answers?.length > 1;
      const haveOneAnswerRight =
        haveMoreThanOneAnswer &&
        answers?.some(
          (item: any) => item?.isCorrect === 1 || item.isCorrect === true,
        );
      const haveImageOrContent =
        haveOneAnswerRight &&
        answers?.some((item: any) => !item?.content && !item.content_image);
      const haveDuplicatedContent = hasDuplicateArrayValue(answers, "content");
      console.log(haveDuplicatedContent);

      console.log(answers);

      if (!haveAnswers) {
        toast.error(t("validation.it_should_have_more_than_one_answers"));
        return false;
      }

      if (!haveMoreThanOneAnswer) {
        toast.error(t("validation.it_should_have_more_than_one_answers"));
        return false;
      }

      if (!haveOneAnswerRight) {
        toast.error(
          t("validation.it_should_have_more_than_one_correct_answers"),
        );
        return false;
      }

      if (haveImageOrContent) {
        toast.error(
          t("validation.one_of_image_and_content_should_be_enter_in_answer"),
        );
        return false;
      }

      if (haveDuplicatedContent) {
        toast.error(t("validation.haveDuplicatedContent"));
        return false;
      }

      return true;
    },
  );

  console.log(1);

  if (isValid && isValidate) {
    console.log(2);
    handleSubmit(values);
  }
};
