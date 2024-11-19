import React from "react";

interface ImageCancelIconProps extends React.HTMLAttributes<HTMLDivElement> {}

const ImageCancelIcon: React.FC<ImageCancelIconProps> = (props) => {
  return (
    <div {...props}>
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 5.44469L12.4447 0L14 1.55531L8.55531 7L14 12.4447L12.4436 14L6.9989 8.55531L1.55531 14L0 12.4436L5.44469 6.9989L0 1.55421L1.55531 0.00109986L7 5.44469Z"
          fill="#515B73"
        />
      </svg>
    </div>
  );
};

export default ImageCancelIcon;
