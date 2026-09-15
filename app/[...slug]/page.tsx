import { notFound } from "next/navigation";
import { courseByPath, courses, directionByPath, directions } from "../course-content";
import { AboutPage, CatalogPage, ContactsPage, CoursePage, DirectionPage, informationalPages } from "../inner-pages";
import { pageMetadata } from "../seo";
import { coursePhotoAsset } from "../course-photo-assets";

export const dynamicParams = false;

export function generateStaticParams() {
  return [...directions.map(item => item.path), ...courses.map(item => item.path), ...Object.keys(informationalPages)].map(path => ({ slug: path.slice(1).split("/") }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props) {
  const path = `/${(await params).slug.join("/")}`;
  const course = courseByPath(path);
  if (course) return pageMetadata(course.title, course.description, path, coursePhotoAsset(directionByPath(course.direction)!.image).src);
  const direction = directionByPath(path);
  if (direction) return pageMetadata(direction.heading, direction.description, path, coursePhotoAsset(direction.image).src);
  const info = informationalPages[path as keyof typeof informationalPages];
  if (info) return pageMetadata(info.title, info.description, path);
  return { title: "Страница не найдена", robots: { index: false, follow: false } };
}

export default async function ContentPage({ params }: Props) {
  const path = `/${(await params).slug.join("/")}`;
  const course = courseByPath(path);
  if (course) return <CoursePage course={course} />;
  const direction = directionByPath(path);
  if (direction) return <DirectionPage direction={direction} />;
  if (path === "/vse-kursy") return <CatalogPage />;
  if (path === "/o-shkole") return <AboutPage />;
  if (path === "/contacts") return <ContactsPage />;
  notFound();
}
