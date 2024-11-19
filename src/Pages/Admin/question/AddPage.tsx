import React, { useEffect } from "react";
import { processTags } from "./formUtil";
import { useAddQuestion, useAddQuestionAsync } from "../../../api/Question";
import { useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { Question } from "../../../types/Item";
import BaseFormContainer from "./Model/AddForm/BaseForm";
import FormContainer from "./Model/AddForm/Form";
import {
  handleValidateBaseQuestion,
  handleValidateSingleQuestion,
} from "./Model/ValidationFn";
const AddPage: React.FC = () => {
  const { mutateAsync, isLoading: LoadingAsync } = useAddQuestionAsync();
  const { mutate, isLoading, isSuccess } = useAddQuestion();
  const { isBseQuestion, setTagsSearch, setSuccess } = useObjectToEdit();
  const { subject_id, lesson_id } = useParams<ParamsEnum>();

  const handleFormSubmit = (values: any) => {
    const DataToSend = structuredClone(values);
    setTagsSearch(null);

    const canAnswersBeShuffled = DataToSend?.canAnswersBeShuffled ? 1 : 0;

    if (isBseQuestion || DataToSend?.isBase === 1) {
      const newBseQuestion = {
        subject_id: subject_id,
        content: DataToSend?.content,
        content_image: DataToSend?.content_image ?? "",
        isBase: 1,
        lessons_ids: [lesson_id],
        canAnswersBeShuffled,
        hint: DataToSend?.hint,
        meta: DataToSend?.meta,
      };

      mutateAsync(newBseQuestion).then((data: any) => {
        const newBseQuestionId = (data as any)?.data?.id;
        const Questions = DataToSend?.Questions;
        console.log(1);

        Questions?.map((item: Question) => {
          const tags = processTags(item);
          console.log(item);
          const answers = item?.answers?.map((item: any, index: number) => {
            return {
              order: index,
              ...item,
            };
          });

          mutate({
            ...item,
            parent_id: newBseQuestionId,
            subject_id: subject_id,
            tags,
            lessons_ids: [lesson_id],
            answers,
            meta: item?.meta,
          });
        });
        console.log(newBseQuestionId, "newBseQuestionId");
      });
    } else {
      const tags = processTags(DataToSend);
      const answers = values?.answers?.map((item: any, index: number) => {
        return {
          order: index,
          ...item,
        };
      });

      const NewQuestion = {
        ...values,
        subject_id: subject_id,
        tags,
        lessons_ids: [lesson_id],
        canAnswersBeShuffled,
        answers,
      };
      console.clear();
      console.log(NewQuestion, "NewQuestion");

      mutate(NewQuestion);
    }
  };

  const Loading = LoadingAsync || isLoading;

  useEffect(() => {
    if (isSuccess) {
      setSuccess(true);
    }
  }, [isSuccess]);

  if (isBseQuestion) {
    return (
      <BaseFormContainer
        Loading={Loading}
        handleFormSubmit={handleFormSubmit}
        handleValidateBaseQuestion={handleValidateBaseQuestion}
      />
    );
  }

  return (
    <FormContainer
      Loading={Loading}
      handleFormSubmit={handleFormSubmit}
      handleValidateSingleQuestion={handleValidateSingleQuestion}
    />
  );
};

export default AddPage;
