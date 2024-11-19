export const generateImagePreview = (
  file: File,
  setImagePreview: (result: string) => void,
) => {
  const reader = new FileReader();
  reader.onloadend = () => {
    setImagePreview(reader.result as string);
  };
  reader.readAsDataURL(file);
};
