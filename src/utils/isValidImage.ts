export const isValidImage = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(true); // Image loaded successfully
    img.onerror = () => resolve(false); // Error loading image
  });
};
