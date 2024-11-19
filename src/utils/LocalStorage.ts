export const getLocalStorage = (key: string) => {
  try {
    const data = localStorage?.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    // console.error("Error parsing JSON from localStorage", error);
    return null;
  }
};

export const setLocalStorage = (key: string, data: any) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error stringify data for localStorage", error);
  }
};

export const setLocalStorageWithFile = async (key: string, data: any) => {
  try {
    if (data.image instanceof File) {
      const base64String = await convertFileToBase64(data.image);
      data.image = base64String;
    }
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Error stringifying data for localStorage", error);
  }
};

export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
