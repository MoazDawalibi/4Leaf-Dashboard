import * as Yup from "yup";
import { Question } from "../../../types/Item";

export const getInitialValues = (objectToEdit: Question): any => {
  const tags = objectToEdit?.tags?.map((item: any, index: number) => {
    return { ...item };
  });

  return {
    id: objectToEdit?.id ?? null,
    content: objectToEdit?.content ?? "",
    content_image: objectToEdit?.content_image ?? "",
    subject_id: objectToEdit?.subject_id ?? "",
    canAnswersBeShuffled: objectToEdit?.canAnswersBeShuffled ? 1 : 0,
    hint: objectToEdit?.hint ?? null,
    isBase: 0,
    parent_id: objectToEdit?.parent_id ?? "",
    answers: objectToEdit?.answers ?? null,
    tags: tags ?? [],
    meta: objectToEdit?.meta,
  };
};

export const getValidationSchema = () => {
  // validate input
  return Yup.object()
    .shape({
      content_image: Yup.string().nullable(),
      content: Yup.string().test(
        "content",
        "validation.one_of_image_and_content_should_be_enter_in_question",
        (value: any, options: any) => {
          const { content, content_image } = options?.parent;
          const haveImageOrContent = !content && !content_image;
          return !haveImageOrContent;
        },
      ),
      answers: Yup.array()
        .of(
          Yup.object().shape({
            content: Yup.string().nullable(),
            content_image: Yup.string().nullable(),
            isCorrect: Yup.boolean(),
          }),
        )
        .min(2)
        .test(
          "at-least-one-correct",
          "At least one answer must be correct",
          (answers: any) => {
            const hasCorrectAnswer = answers?.some(
              (answer: any) =>
                answer?.isCorrect === true || answer?.isCorrect === 1,
            );

            const haveImageOrContent = answers?.some(
              (item: any) => !item?.content && !item.content_image,
            );

            return hasCorrectAnswer && !haveImageOrContent;
          },
        ),
    })
    .test(
      "content-or-image-required",
      "At least one of content or content_image must be provided",
      (obj: any) => {
        const isValid = !!obj.content || !!obj.content_image;

        return isValid;
      },
    );
};

export const getInitialValuesBase = (objectToEdit: Question): any => {
  const newQuestions = objectToEdit?.Questions?.map((item: any) => {
    const tags = item?.tags?.map((tag: any) => ({
      id: tag?.id,
      name: tag?.name,
    }));
    const newAnswers = item?.answers?.map((item: any) => {
      return {
        ...item,
        content: item?.content ?? null,
      };
    });
    console.log(objectToEdit?.meta);

    return {
      ...item,
      answer: newAnswers,
      hint: item?.hint ?? "",
      canAnswersBeShuffled: 0,
      isBase: 0,
      tags,
      meta: item?.meta,
    };
  });

  const questions = newQuestions ?? [{ answers: [] }];
  console.log(questions?.[0]?.meta, "questions");

  return {
    id: objectToEdit?.id ?? null,
    content: objectToEdit?.content ?? null,
    content_image: objectToEdit?.content_image ?? null,
    subject_id: objectToEdit?.subject_id ?? "",
    isBase: 1,
    parent_id: objectToEdit?.parent_id ?? "",
    canAnswersBeShuffled: objectToEdit?.canAnswersBeShuffled ? 1 : 0,
    hint: objectToEdit?.hint ?? null,
    Questions: questions,
    meta: objectToEdit?.meta,
  };
};

export const getValidationSchemaBase = () => {
  // validate input
  return Yup.object()
    .shape({
      content_image: Yup.string().nullable(),
      content: Yup.string().nullable(),
      Questions: Yup.array()
        .of(
          Yup.object()
            .shape({
              content_image: Yup.string().nullable(),
              content: Yup.string().nullable(),
              answers: Yup.array()
                .of(
                  Yup.object().shape({
                    content: Yup.string().nullable(),
                    content_image: Yup.string().nullable(),
                    isCorrect: Yup.boolean(),
                  }),
                )
                .min(2)
                .test(
                  "at-least-one-correct",
                  "At least one answer must be correct",
                  (answers: any) => {
                    const hasCorrectAnswer = answers?.some(
                      (answer: any) =>
                        answer?.isCorrect === true || answer?.isCorrect === 1,
                    );

                    const haveImageOrContent = answers?.some(
                      (item: any) => !item?.content && !item.content_image,
                    );

                    return hasCorrectAnswer && !haveImageOrContent;
                  },
                ),
            })
            .test(
              "content-or-image-required",
              "At least one of content or content_image must be provided in question",
              (obj: any) => {
                const isValid = !!obj.content || !!obj.content_image;
                return isValid;
              },
            ),
        )
        .min(1),
    })
    .test(
      "content-or-image-required",
      "At least one of content or content_image must be provided in base",
      (obj: any) => {
        const isValid = !!obj.content || !!obj.content_image;
        return isValid;
      },
    );
};

export function processTags(DataToSend: any) {
  console.log(DataToSend?.tags);
  console.log(DataToSend);

  const oldTags = DataToSend?.tags
    ?.map((item: any, index: number) => {
      if (typeof item === "number" || typeof item?.id === "number") {
        return item?.id ?? item;
      }
    })
    .filter((item: any) => item !== undefined);

  const newTags = DataToSend?.tags
    ?.map((item: any, index: number) => {
      console.log(item);

      if (
        (typeof item === "string" && item !== "") ||
        (typeof item?.id === "string" && item?.id !== "")
      ) {
        console.log(item);

        return { name: item?.id ?? item };
      }
    })
    .filter((item: any) => item !== undefined);
  console.log(newTags);
  console.log(oldTags);

  return { new: newTags, old: oldTags };
}
