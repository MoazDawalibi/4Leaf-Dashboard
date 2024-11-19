export const base64StringToFile = (base64String: string) => {
  // Convert base64 to blob
  const byteCharacters = atob(base64String.split(",")[1]);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: "image/jpeg" });

  // Create a File object from Blob (optional: provide a filename)
  const file = new File([blob], "image.jpg", { type: "image/jpeg" });

  return file;
};
