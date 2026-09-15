export const school = {
  name: "Beauty Detali School",
  city: "Санкт-Петербург",
  address: "Владимирский проспект, 19",
  location: "ТЦ «Владимирский пассаж», 3-й этаж",
  metro: "«Владимирская» и «Достоевская»",
  phone: "+7 911 921-30-19",
  phoneHref: "tel:+79119213019",
  email: "beauty.detali.school@mail.ru",
  vk: "https://vk.com/beauty_detali_school",
  map: "https://yandex.ru/maps/org/detali_beauty_school/81869744841/",
} as const;

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const assetPath = (path: string) => `${basePath}${path}`;
export const pagePath = (path: string) => {
  const [pathname, hash] = path.split("#");
  return `${basePath}${pathname === "/" ? "/" : pathname.replace(/\/$/, "") + (basePath ? "/" : "")}${hash ? `#${hash}` : ""}`;
};

export const navigation = [
  { label: "Обучение", href: pagePath("/vse-kursy") },
  { label: "О школе", href: pagePath("/o-shkole") },
  { label: "Контакты", href: pagePath("/contacts") },
];
