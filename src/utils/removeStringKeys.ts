export function removeStringKeys(obj: any, keysToRemove: string[]): any {
  // Check if the input is an object or array
  if (obj && typeof obj === "object") {
    // Handle arrays
    if (Array.isArray(obj)) {
      obj.forEach((item, index) => {
        obj[index] = removeStringKeys(item, keysToRemove);
      });
    } else {
      // Handle objects
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          const value = obj[key];
          // Check if the value is a string or "null" and the key is in keysToRemove
          if (keysToRemove.includes(key) && typeof value === "string") {
            delete obj[key];
          } else {
            // Recursively process nested objects or arrays
            obj[key] = removeStringKeys(value, keysToRemove);
          }
        }
      }
    }
  }
  return obj;
}
