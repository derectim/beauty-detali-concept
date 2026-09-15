/* eslint-disable @next/next/no-img-element */
import { assetPath } from "./site-config";
import { coursePhotoAsset } from "./course-photo-assets";

type PhotoSpec = { src: string; small?: string; smallWidth?: number; width: number; height: number; alt: string; caption: string; position?: string };

export const supportPhotos: Record<string, PhotoSpec> = {
  haircut: { ...coursePhotoAsset("color"), alt: "Пряди волос разных оттенков", caption: "Цвет и работа с волосами — смежные задачи мастера." },
  color: { ...coursePhotoAsset("haircut"), alt: "Мастер работает с прядью светлых волос", caption: "Работа с волосами в салоне. Иллюстрация направления." },
  nail: { src: "/images/practice-close-1200.webp", small: "/images/practice-close-480.webp", width: 1200, height: 1600, alt: "Преподаватель помогает ученице во время практики маникюра", caption: "Разбор техники во время занятия по маникюру." },
  makeup: { ...coursePhotoAsset("brow"), alt: "Форма брови и естественная текстура кожи крупным планом", caption: "Внимание к форме бровей и деталям лица." },
  brow: { src: "/images/course-makeup-portrait.jpg", width: 1024, height: 1024, alt: "Портрет с макияжем и оформленными бровями", caption: "Форма бровей в общем образе. Фото из материалов школы." },
  lashes: { src: "/images/course-makeup-portrait.jpg", width: 1024, height: 1024, alt: "Портрет с акцентом на макияж глаз", caption: "Образ целиком: глаза, брови и пропорции лица." },
};

export function Photo({ photo, className = "", priority = false }: { photo: PhotoSpec; className?: string; priority?: boolean }) {
  const smallWidth = photo.smallWidth ?? (photo.small?.includes("-320") ? 320 : 480);
  return <figure className={`editorial-photo ${className}`}><img src={assetPath(photo.src)} srcSet={photo.small ? `${assetPath(photo.small)} ${smallWidth}w, ${assetPath(photo.src)} ${photo.width}w` : undefined} sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1376px) 50vw, 660px" alt={photo.alt} width={photo.width} height={photo.height} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" style={{ objectPosition: photo.position ?? "center" }} /><figcaption>{photo.caption}</figcaption></figure>;
}

export function DirectionPhoto({ image, alt, position }: { image: string; alt: string; position?: string }) {
  const photo: PhotoSpec = { ...coursePhotoAsset(image), alt, position, caption: image === "haircut" ? "Стрижка и работа с формой. Иллюстрация направления." : "Иллюстрация направления Beauty Detali School" };
  return <Photo photo={photo} priority className={`direction-main-photo direction-main-photo-${image}`} />;
}

export function CourseImage({ image, alt, position, className = "", priority = false }: { image: string; alt: string; position?: string; className?: string; priority?: boolean }) {
  const photo = coursePhotoAsset(image);
  return <img className={className} src={assetPath(photo.src)} srcSet={`${assetPath(photo.small)} ${photo.smallWidth}w, ${assetPath(photo.src)} ${photo.width}w`} sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1376px) 50vw, 660px" width={photo.width} height={photo.height} alt={alt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : undefined} decoding="async" style={{ objectPosition: position ?? "center" }} />;
}

export function SchoolMoments() {
  return <section className="school-moments wrap section"><div className="content-grid moments-heading"><div><p className="eyebrow">ФОТОГРАФИИ С ЗАНЯТИЙ</p><h2>Посмотрите,<br />как проходит практика.</h2></div><p className="section-lead">Рабочие места, учебные задания и разбор техники с преподавателем. На фотографиях — занятия по маникюру в школе.</p></div><div className="content-grid moments-photos"><Photo photo={{ src: "/images/practice-mentor-1200.webp", small: "/images/practice-mentor-480.webp", width: 1200, height: 1600, alt: "Преподаватель разбирает работу ученицы по маникюру", caption: "Показ приёма и обратная связь" }} /><div className="moments-secondary"><Photo photo={{ src: "/images/practice-room-960.webp", small: "/images/practice-room-480.webp", width: 960, height: 1280, alt: "Ученицы занимаются за отдельными рабочими местами", caption: "Свое рабочее место у каждого ученика" }} /><Photo photo={{ src: "/images/practice-hands-1200.webp", small: "/images/practice-hands-480.webp", width: 1200, height: 1600, alt: "Отработка маникюра на моделях за учебными столами", caption: "Практика на моделях" }} /></div></div></section>;
}
