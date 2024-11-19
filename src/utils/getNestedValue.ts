export const getNestedValue = (obj: any, path: string): any => {
  return path.split(".").reduce((acc, part) => {
    const arrayMatch = part.match(/(\w+)\[(\d+)\]/);
    if (arrayMatch) {
      const [, key, index] = arrayMatch;
      return acc && acc[key] && acc[key][index];
    }
    return acc && acc[part];
  }, obj);
};
