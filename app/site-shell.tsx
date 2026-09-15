/* eslint-disable @next/next/no-img-element */
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";
import DesktopNav from "./desktop-nav";
import { assetPath, pagePath, school } from "./site-config";
import { schoolSiteUrl } from "./search-config";
import { directions } from "./course-content";

const menuDirections = directions.map(({ title, detail, path }) => ({ title, detail, path }));

export function Brand() {
  return <a className="brand" href={pagePath("/")} aria-label="Beauty Detali School — на главную">
    <span className="brand-images"><img className="brand-dark" src={assetPath("/brand/detali-white.svg")} alt="" width="80" height="80" /><img className="brand-light" src={assetPath("/brand/detali-black.svg")} alt="" width="80" height="80" /></span>
    <span className="brand-name">BEAUTY DETALI<span>SCHOOL</span></span>
  </a>;
}

export function SiteHeader() {
  return <><a className="skip-link" href="#main">Перейти к содержимому</a><header className="site-header"><div className="header-inner">
    <Brand /><DesktopNav directions={menuDirections} />
    <div className="header-actions"><ThemeToggle /><a className="header-cta" href={pagePath("/#contact")}>Бесплатное занятие</a></div><MobileNav directions={menuDirections} />
  </div></header></>;
}

export function SiteFooter() {
  return <footer className="site-footer content-grid wrap"><div className="footer-brand"><Brand /><p>Школа мастеров красивого бизнеса<br />в Санкт-Петербурге.</p></div>
    <nav aria-label="Дополнительная навигация"><div><span className="contact-label">Школа</span><a href={pagePath("/vse-kursy")}>Все направления и курсы</a><a href={pagePath("/o-shkole")}>Как устроено обучение</a><a href={pagePath("/contacts")}>Адрес и запись</a><a href={pagePath("/#questions")}>Вопросы об обучении</a></div><div><span className="contact-label">Информация</span><a href={`${schoolSiteUrl}/vazhno.html`}>Сведения об организации</a><a href={`${schoolSiteUrl}/privacy`}>Политика конфиденциальности</a><a href={school.vk} target="_blank" rel="noreferrer">Сообщество школы</a></div></nav>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Beauty Detali School</span><a href="#main">Наверх</a></div>
  </footer>;
}

export type Crumb = { name: string; path: string };
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return <nav className="breadcrumbs wrap" aria-label="Хлебные крошки"><ol><li><a href={pagePath("/")}>Главная</a></li>{items.map((item, index) => <li key={item.path}>{index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <a href={pagePath(item.path)}>{item.name}</a>}</li>)}</ol></nav>;
}

export function ContactDetails() {
  return <div className="location-contact"><address><span className="contact-label">Адрес школы</span><strong>{school.city},<br />{school.address}</strong><p>{school.location}</p><p>1 минута от метро {school.metro}</p><a className="text-link" href={school.map} target="_blank" rel="noreferrer">Открыть маршрут в Яндекс Картах</a></address><div className="contact-channels"><div><span className="contact-label">Позвонить школе</span><a className="phone" href={school.phoneHref}>{school.phone}</a></div><div><span className="contact-label">Написать на почту</span><a className="mail" href={`mailto:${school.email}`}>{school.email}</a></div></div></div>;
}

export function Enquiry({ title = "Обсудим ваше обучение?", text = "Расскажите, с чего начинаете и какую задачу хотите решить. Школа поможет выбрать программу, согласовать расписание и уточнить стоимость." }: { title?: string; text?: string }) {
  return <section className="inner-enquiry section content-grid wrap" id="enquiry"><div><p className="eyebrow">BEAUTY DETALI SCHOOL · САНКТ-ПЕТЕРБУРГ</p><h2>{title}</h2></div><div className="editorial-copy"><p>{text}</p><div className="inner-actions"><a className="button" href={school.vk} target="_blank" rel="noreferrer">Написать школе</a><a className="text-link" href={school.phoneHref}>{school.phone}</a></div><p className="contact-hint">Во ВКонтакте откроется сообщество школы. Можно написать название курса и удобное время для связи.</p></div></section>;
}
