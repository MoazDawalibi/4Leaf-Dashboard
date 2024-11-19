export function cleanObject(obj: any) {
  // Create a new object to store the cleaned data
  let cleanedObj = {} as any;

  // Iterate over each property in the input object
  for (let key in obj) {
    // Check if the property value is not null, an empty string, or an empty array
    if (
      obj[key] !== null &&
      obj[key] !== undefined &&
      obj[key] !== "" &&
      !(Array.isArray(obj[key]) && obj[key].length === 0)
    ) {
      // Add the property to the cleaned object
      cleanedObj[key] = obj[key];
    }
  }

  // Return the cleaned object
  return cleanedObj;
}
