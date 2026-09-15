type CoursePhotoAsset = { src: string; small: string; smallWidth: number; width: number; height: number };

const dimensions: Record<string, [number, number]> = {
  color: [853, 1280], nail: [960, 1280], makeup: [960, 960], brow: [768, 1024], lashes: [747, 1024],
};

export function coursePhotoAsset(image: string): CoursePhotoAsset {
  if (image === "haircut") return {
    src: "/images/haircut-refined-1600.webp", small: "/images/haircut-refined-480.webp", smallWidth: 480, width: 1600, height: 822,
  };
  if (image === "brow") return {
    src: "/images/brow-refined-1080.webp", small: "/images/brow-refined-480.webp", smallWidth: 480, width: 1080, height: 1440,
  };
  if (image === "nail") return {
    src: "/images/nail-detail-1200.webp", small: "/images/nail-detail-480.webp", smallWidth: 480, width: 1200, height: 1600,
  };
  const [width, height] = dimensions[image];
  return { src: `/images/direction-${image}-960.webp`, small: `/images/direction-${image}-320.webp`, smallWidth: 320, width, height };
}
