import { convertFileToBase64 } from "./LocalStorage";
import { base64StringToFile } from "./base64StringToFile";

export const setLocalStorageQuestions = async (key: string, data: any) => {
  try {
    // Convert the main image if it is a File
    if (data.image instanceof File) {
      data.image = await convertFileToBase64(data.image);
    }

    // Check for answers array and convert answer_image if it's a File
    if (Array.isArray(data.answers)) {
      for (const option of data.answers) {
        if (option.answer_image instanceof File) {
          option.answer_image = await convertFileToBase64(option.answer_image);
        }
      }
    }

    // Check for Questions array and convert image if it's a File
    if (Array.isArray(data.answers)) {
      for (const question of data.answers) {
        if (question.image instanceof File) {
          question.image = await convertFileToBase64(question.image);
        }
        // Check for nested answers and convert answer_image if it's a File
        if (Array.isArray(question.answers)) {
          for (const option of question.answers) {
            if (option.answer_image instanceof File) {
              option.answer_image = await convertFileToBase64(
                option.answer_image,
              );
            }
          }
        }
      }
    }

    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error stringifying data for localStorage", error);
  }
};

export const getLocalStorageQuestions = (key: string): any | null => {
  try {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;

    const data = JSON.parse(jsonData);

    // Convert back the main image if it's a base64 string
    if (typeof data.image === "string" && data.image.length > 0) {
      data.image = base64StringToFile(data.image);
    }

    // Check for answers array and convert answer_image if it's a base64 string
    if (Array.isArray(data.answers)) {
      for (const option of data.answers) {
        if (
          typeof option.answer_image === "string" &&
          option.answer_image.length > 0
        ) {
          option.answer_image = base64StringToFile(option.answer_image);
        }
      }
    }

    // Check for Questions array and convert image if it's a base64 string
    if (Array.isArray(data.answers)) {
      for (const question of data.answers) {
        if (typeof question.image === "string" && question.image.length > 0) {
          question.image = base64StringToFile(question.image);
        }
        // Check for nested answers and convert answer_image if it's a base64 string
        if (Array.isArray(question.answers)) {
          for (const option of question.answers) {
            if (
              typeof option.answer_image === "string" &&
              option.answer_image.length > 0
            ) {
              option.answer_image = base64StringToFile(option.answer_image);
            }
          }
        }
      }
    }

    return data;
  } catch (error) {
    console.error("Error parsing data from localStorage", error);
    return null;
  }
};
