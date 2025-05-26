import { MarqueeGradient, ImagesData, MarqueeField } from "./marquee-field";

function RenderMarquee() {
  const rightImages: ImagesData[] = [
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/hoid.webp",
      alt: "Hoid",
    },
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/vin.webp",
      alt: "",
    },
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/siri.webp",
      alt: "",
      className: "aspect-square"
    },
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/kaladin.webp",
      alt: "",
    },
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/kelsier.webp",
      alt: "",
    },
  ];

  const leftImages: ImagesData[] = [
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/ishikk.webp",
      alt: "",
      className: "aspect-video"
    },
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/tress-e-charlie.webp",
      alt: "",
    },
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/szeth.webp",
      alt: "",
    },
    {
      src: "https://raw.githubusercontent.com/sand-br/sandbr/refs/heads/main/public/home/marquee/vasher.webp",
      alt: "",
    },
  ];

  return (
    <div className="relative flex max-h-dvh items-center justify-center overflow-hidden">
      <MarqueeGradient>
        <MarqueeField images={rightImages} />
        <MarqueeField images={leftImages} reverse={true} />
      </MarqueeGradient>
    </div>
  );
}

export { RenderMarquee };
