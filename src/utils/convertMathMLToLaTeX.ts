import { MathMLToLaTeX } from "mathml-to-latex";

export function convertMathMLToLaTeX(mathml: string): string {
  console.log(MathMLToLaTeX.convert(mathml));
  console.log(mathml);

  return MathMLToLaTeX.convert(mathml);
}
