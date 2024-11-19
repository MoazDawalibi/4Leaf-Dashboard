import { convertFileToBase64 } from "./LocalStorage";
import { base64StringToFile } from "./base64StringToFile";

export const setLocalStorageBaseQuestions = async (key: string, data: any) => {
  try {
    // Convert the main image if it is a File
    if (data.image instanceof File) {
      data.image = await convertFileToBase64(data.image);
    }

    if (Array.isArray(data.Questions)) {
      for (const option of data.Questions) {
        if (option.image instanceof File) {
          option.image = await convertFileToBase64(option.image);
        }
      }
    }
    if (Array.isArray(data.Questions.QuestionOptions)) {
      for (const option of data.Questions.QuestionOptions) {
        if (option.answer_image instanceof File) {
          option.answer_image = await convertFileToBase64(option.answer_image);
        }
      }
    }

    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error stringifying data for localStorage", error);
  }
};

export const getLocalStorageBaseQuestions = (key: string): any | null => {
  try {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;

    const data = JSON.parse(jsonData);

    // Convert the main image from base64 to File if necessary
    if (typeof data.image === "string" && data.image.length > 0) {
      data.image = base64StringToFile(data.image);
    }

    // Convert each image in Questions from base64 to File if necessary
    if (Array.isArray(data.Questions)) {
      for (const option of data.Questions) {
        if (typeof option.image === "string") {
          option.image = base64StringToFile(option.image);
        }
      }
    }
    if (Array.isArray(data.Questions.QuestionOptions)) {
      for (const option of data.Questions.QuestionOptions) {
        if (typeof option.answer_image === "string") {
          option.answer_image = base64StringToFile(option.answer_image);
        }
      }
    }

    return data;
  } catch (error) {
    console.error("Error parsing data from localStorage", error);
    return null;
  }
};
