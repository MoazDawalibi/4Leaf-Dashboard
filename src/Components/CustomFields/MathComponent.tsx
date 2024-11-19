import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

const LatexPreview = ({ latex }: { latex: string }) => {
  // console.log(latex);

  // const sanitizedLatex = latex.replace(/\\_/g, '_');

  return (
    <div>
      <BlockMath>{latex}</BlockMath>
    </div>
  );
};

export default LatexPreview;
