import React, { FC, ImgHTMLAttributes } from "react";
import { BaseURL } from "../../api/config";
import useImageError from "../../Hooks/useImageError";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string | any;
  className?: string;
  isBaseURL?: boolean;
}

const Image: FC<ImageProps> = ({
  src = "",
  className = "",
  isBaseURL = false,
  ...props
}) => {
  const handleError = useImageError;
  const imageUrl = isBaseURL ? BaseURL + src : src;
  // console.log(imageUrl,"imageUrl");

  return (
    <img
      src={imageUrl || "/Image/user_fake.png"}
      className={className}
      onError={handleError}
      alt={src ?? ""}
      loading="lazy"
      {...props}
    />
  );
};

export default Image;
