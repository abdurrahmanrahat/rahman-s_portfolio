import Image, { StaticImageData } from "next/image";

type TMYImageProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
};

const MYImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = "",
}: TMYImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
    />
  );
};

export default MYImage;
