import React, { useEffect } from "react";
import { processTags } from "./formUtil";
import {
  useAddQuestion,
  useDeleteQuestion,
  useGetAllQuestion,
  useUpdateQuestion,
} from "../../../api/Question";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ParamsEnum } from "../../../enums/params";
import { useObjectToEdit } from "../../../zustand/ObjectToEditState";
import { removeStringKeys } from "../../../utils/removeStringKeys";
import SpinContainer from "../../../Components/Layout/SpinContainer";
import { Question } from "../../../types/Item";
import BaseFormContainer from "./Model/EditForm/BaseFormContainer";
import FormContainer from "./Model/EditForm/FormContainer";
import {
  handleValidateBaseQuestion,
  handleValidateSingleQuestion,
} from "./Model/ValidationFn";

const EditPage: React.FC = () => {
  const { subject_id, lesson_id, question_id } = useParams<ParamsEnum>();
  const {
    isBseQuestion,
    setIsBseQuestion,
    setTagsSearch,
    DeletedQuestions,
    setObjectToEdit,
  } = useObjectToEdit();

  const { mutate, isSuccess, isLoading: isLoadingUpdate } = useUpdateQuestion();
  const { mutate: DeleteQuestion } = useDeleteQuestion();
  const { mutate: mutateAdd } = useAddQuestion();

  const {
    data,
    isLoading: dataLoading,
    isRefetching,
  } = useGetAllQuestion({
    show: question_id,
  });

  const {
    data: Questions,
    isLoading: QuestionsDataLoading,
    isRefetching: isRefetchingParent,
  } = useGetAllQuestion({
    parent_id: question_id,
    isPaginated: false,
  });

  const objectToEdit = { ...data?.data, Questions: Questions?.data };
  console.log(objectToEdit);

  useEffect(() => {
    if (objectToEdit?.isBase && isBseQuestion !== true) {
      setIsBseQuestion(true);
    }
  }, [objectToEdit?.isBase]);

  const [t] = useTranslation();

  const handleSubmit = (values: any) => {
    const DataToSend = structuredClone(values);
    setTagsSearch(null);

    if (isBseQuestion) {
      const UpdateBseQuestion = {
        id: DataToSend?.id,
        content: DataToSend?.content,
        content_image: DataToSend?.content_image ?? "",
        meta: DataToSend?.meta,
      };
      if (
        typeof UpdateBseQuestion?.content_image === "string" &&
        UpdateBseQuestion?.content_image !== ""
      ) {
        delete UpdateBseQuestion["content_image"];
      }
      console.log(DeletedQuestions, "DeletedQuestions");
      console.log(UpdateBseQuestion);

      mutate(UpdateBseQuestion);

      DeletedQuestions?.map((item: any) => {
        DeleteQuestion({ id: item?.id });
      });

      const Questions = DataToSend?.Questions;
      console.log(Questions, "Questions");

      Questions?.map((item: Question) => {
        console.log(item);
        if (item?.id) {
          const itemToSend = structuredClone(item);
          const keysToRemove = ["content_image"];
          console.log(itemToSend, "itemToSend");

          const updatedObject = removeStringKeys(itemToSend, keysToRemove);
          console.log(updatedObject, "updatedObject");

          const tags = processTags(updatedObject);
          const oldAnswers = [] as any;
          const newAnswers = [] as any;

          if (updatedObject?.content_image === null) {
            updatedObject["content_image"] = "";
          }

          updatedObject?.answers?.forEach((item: any) => {
            if (item?.id) {
              if (item?.content_image === null) {
                item["content_image"] = "";
              }
              oldAnswers.push({ ...item, isCorrect: item?.isCorrect ? 1 : 0 });
            } else {
              newAnswers.push({ ...item, isCorrect: item?.isCorrect ? 1 : 0 });
            }
          });
          const answers = {
            old: oldAnswers,
            new: newAnswers,
          };
          const emptyTag = tags?.new?.length === 0 && tags?.old?.length === 0;
          const tagToSend = emptyTag ? "" : tags;
          mutate({
            ...updatedObject,
            answers,
            tags: tagToSend,
          });
        } else {
          console.log(values?.id);

          const tags = processTags(item);
          console.log(item, "DataToSend");

          console.log(tags, "tags");
          mutateAdd({
            ...item,
            subject_id: subject_id,
            tags,
            lessons_ids: [lesson_id],
            parent_id: values?.id,
          });
        }
      });
    } else {
      const keysToRemove = ["content_image"];
      console.log(DataToSend);
      const updatedObject = removeStringKeys(DataToSend, keysToRemove);
      delete updatedObject["parent_id"];
      const tags = processTags(updatedObject);
      if (!values?.content_image) {
        updatedObject["content_image"] = "";
      }

      const oldAnswers = [] as any;
      const newAnswers = [] as any;
      updatedObject?.answers?.forEach((item: any) => {
        if (item?.id) {
          console.log(item, "item");
          const deletedImage = item?.content_image === null;
          if (deletedImage) {
            oldAnswers.push({
              ...item,
              isCorrect: item?.isCorrect ? 1 : 0,
              content_image: "",
            });
          } else {
            oldAnswers.push({ ...item, isCorrect: item?.isCorrect ? 1 : 0 });
          }
        } else {
          newAnswers.push({ ...item, isCorrect: item?.isCorrect ? 1 : 0 });
        }
      });

      const answers = {
        old: oldAnswers,
        new: newAnswers,
      };
      console.log(tags, "tags");
      if (tags?.new?.length < 1 && tags?.old?.length < 1) {
        mutate({ ...updatedObject, answers, tags: "" });
      } else {
        mutate({ ...updatedObject, answers, tags });
      }
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      // toast.success(t("validation.the_possess_done_successful"));
      setObjectToEdit(null);
      navigate(-1);
    }
  }, [isSuccess]);

  console.log(objectToEdit);

  const Loading =
    QuestionsDataLoading || dataLoading || isRefetchingParent || isRefetching;
  console.log(Loading);
  const LoadingButton = isLoadingUpdate;
  if (Loading) {
    return <SpinContainer />;
  }
  if (objectToEdit?.isBase) {
    return (
      <BaseFormContainer
        t={t}
        Loading={LoadingButton}
        handleSubmit={handleSubmit}
        handleValidateBaseQuestion={handleValidateBaseQuestion}
        objectToEdit={objectToEdit}
      />
    );
  }

  return (
    <FormContainer
      t={t}
      Loading={LoadingButton}
      handleSubmit={handleSubmit}
      handleValidateSingleQuestion={handleValidateSingleQuestion}
      objectToEdit={objectToEdit}
    />
  );
};

export default EditPage;
