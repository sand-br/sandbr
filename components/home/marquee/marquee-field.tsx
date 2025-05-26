import { ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Marquee } from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";

interface MarqueeGradientProps {
  children: ReactNode;
}

function MarqueeGradient({ children }: MarqueeGradientProps) {
  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      {children}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </>
  );
}

interface ImagesData {
  src: StaticImageData | string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

interface MarqueeDataProps {
  images: ImagesData[];
  reverse?: boolean;
}

function MarqueeField({ images, reverse }: MarqueeDataProps) {
  const mountMarquee = images.map((image, index) => (
    <Image
      key={index}
      src={image.src}
      alt={image.alt}
      width={image.width ?? 300}
      height={image.height ?? 300}
      className={`rounded-lg object-cover ${image.className}`}
    />
  ));

  return <Marquee vertical pauseOnHover={true} className="max-h-dvh" reverse={reverse ?? false}>{mountMarquee}</Marquee>;
}

export { MarqueeGradient, type ImagesData, MarqueeField };
