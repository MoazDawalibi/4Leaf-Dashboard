export const hasDuplicateArrayValue = <T>(data: T[], key: keyof T): boolean => {
  console.log(data);

  if (data.length < 1) {
    return false; // Early return for empty array
  }

  const hashMap = new Map<any, boolean>(); // Using 'any' type for flexibility

  for (const item of data) {
    const value = item[key]; // Accessing the value using the key

    if (hashMap.has(value) && value !== null) {
      return true; // Duplicate found
    } else {
      hashMap.set(value, true); // Store the value as a key in the map
    }
  }

  return false; // No duplicates found
};
