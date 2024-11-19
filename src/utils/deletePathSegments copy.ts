export const deletePathSegments = (path: string, num: number): string => {
  // Split the path by '/'
  const segments = path.split("/");

  // Handle cases where the number of segments to delete is greater than available segments
  if (num >= segments.length - 1) {
    return "/";
  }

  // Remove the specified number of segments from the end
  const newSegments = segments.slice(0, -num);

  // Join the remaining segments back into a path
  return newSegments.join("/");
};
