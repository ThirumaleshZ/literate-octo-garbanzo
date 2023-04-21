interface IconProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
}

const Icon = ({ src, width, height, alt }: IconProps) => {
  return <img src={src} width={width} height={height} alt={alt} data-testid='imageIcon'/>;
};

export default Icon;
