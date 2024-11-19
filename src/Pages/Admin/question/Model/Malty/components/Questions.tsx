import React, { useCallback, useMemo, useRef, useEffect } from "react";
import { VariableSizeList as List } from "react-window";
import { useTranslation } from "react-i18next";
import { useObjectToEdit } from "../../../../../../zustand/ObjectToEditState";
import { Question } from "./Question";

interface QuestionsProps {
  setFieldValue: (field: string, value: any) => void;
  values: {
    Questions: any[];
  };
}

const Questions: React.FC<QuestionsProps> = React.memo(
  ({ setFieldValue, values }) => {
    const questions = values?.Questions || [];
    const { ShowHint } = useObjectToEdit();
    const [t] = useTranslation();
    const listRef = useRef<List>(null);

    const getItemSize = useCallback(
      (index: number) => {
        const question = questions[index];
        let height = 300; // Base height for QuestionField

        height += (question.answers?.length || 0) * 212; // Height for each answer
        if (question.answers?.length < 5) height += 40; // "Add new choice" button
        if (ShowHint) height += 80; // Hint field
        height += 50; // MaltySelectTag
        console.log(height);

        return height;
      },
      [questions, ShowHint],
    );

    const itemData = useMemo(
      () => ({
        values,
        setFieldValue,
        ShowHint,
        t,
      }),
      [values, setFieldValue, ShowHint, t],
    );

    useEffect(() => {
      if (listRef.current) {
        listRef.current.resetAfterIndex(0);
      }
    }, [questions, ShowHint]);

    return (
      <>
        {/* <List
      ref={listRef}
      height={window.innerHeight - 450} // Adjust based on your layout
      itemCount={questions?.length}
      itemSize={getItemSize}
      width="100%"
      itemData={itemData}
      direction='rtl'
      className='ListQuestions'
    > 
      
      {Question}
    </List> */}
        {questions?.map((item: any, index: number) => {
          return (
            <Question
              key={index}
              index={index}
              data={{ values, setFieldValue, ShowHint, t }}
            />
          );
        })}
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps?.values?.Questions === nextProps?.values?.Questions,
);

export default Questions;
