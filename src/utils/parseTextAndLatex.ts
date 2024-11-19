interface TextLatexPart {
  text: string;
  isLatex: boolean;
  key: number;
}

export const parseTextAndLatex = (input: string): TextLatexPart[] => {
  const result: TextLatexPart[] = [];

  const parts = input?.split(/(\$\$[^$]+\$\$)/g);

  parts.forEach((part, index) => {
    if (part.startsWith("$$") && part.endsWith("$$")) {
      result.push({ text: part.slice(2, -2), isLatex: true, key: index });
    } else if (part.trim()) {
      result.push({ text: part, isLatex: false, key: index });
    }
  });

  return result;
};
