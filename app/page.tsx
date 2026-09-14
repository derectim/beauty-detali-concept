/* eslint-disable @next/next/no-img-element */
import BackstageVideo from "./backstage-video";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
const schoolUrl = "https://school.sk12m.ru";
const directions = [
  { title: "Парикмахерское искусство", detail: "Стрижки, форма, укладки", path: "/kursy-parikmaherov", image: "/images/hair-detail-2024.jpg", alt: "Образцы оттенков волос для работы с цветом", number: "01" },
  { title: "Маникюр и педикюр", detail: "Техника, точность, эстетика", path: "/manicure-pedicure", image: "/images/nail-detail-2026.jpg", alt: "Практика маникюра в Beauty Detali School", number: "02" },
];
const moreDirections = [
  { title: "Колористика", path: "/kursy-koloristiki" },
  { title: "Визаж", path: "/kursy-vizazhistov" },
  { title: "Брови", path: "/kursy-brow-masterov" },
  { title: "Ресницы", path: "/kursy-naraschivaniya-resnic" },
];
const learning = [
  { title: "Владеть техникой", text: "Постановка руки, практика на моделях и обратная связь от действующего мастера." },
  { title: "Чувствовать клиента", text: "Сервис, профессиональная этика и общение, которое помогает заслужить доверие." },
  { title: "Продавать, не продавая", text: "Объяснять ценность своей работы и рекомендовать то, что действительно нужно клиенту." },
  { title: "Создавать своё имя", text: "Развивать личный бренд, работая в салоне, и формировать базу постоянных клиентов." },
];
function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand${footer ? " brand-footer" : ""}`} href="#top" aria-label="Beauty Detali School — на главную">
    <span className="brand-images">
      <img className="brand-dark" src={assetPath("/brand/detali-white.svg")} alt="" width="88" height="88" />
      <img className="brand-light" src={assetPath("/brand/detali-black.svg")} alt="" width="88" height="88" />
    </span><span>BEAUTY DETALI<br />SCHOOL</span>
  </a>;
}
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "EducationalOrganization", name: "Beauty Detali School", url: schoolUrl, telephone: "+7 911 921-30-19", email: "beauty.detali.school@mail.ru", address: { "@type": "PostalAddress", streetAddress: "Владимирский проспект, 19", addressLocality: "Санкт-Петербург", addressCountry: "RU" }, sameAs: ["https://vk.com/beauty_detali_school"] }) }} />
    <a className="skip-link" href="#main">Перейти к содержимому</a>
    <header className="site-header">
      <Brand />
      <nav aria-label="Основная навигация"><a href="#programs">Обучение</a><a href="#method">Подход</a><a href="#people">О бренде</a><a href="#locations">Контакты</a></nav>
      <div className="header-actions"><ThemeToggle /><a className="header-cta" href="#contact">Бесплатное занятие</a></div>
      <MobileNav />
    </header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={assetPath("/images/detali-studio-dark.webp")} alt="Интерьер студии сети Beauty Detali" width="1080" height="1080" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow">САНКТ-ПЕТЕРБУРГ · ВЛАДИМИРСКАЯ</p>
          <h1 id="hero-title">Школа мастеров<br />красивого<br /><span>бизнеса</span></h1>
          <p className="hero-lead">Профессия, чувство стиля и искусство работать с людьми. Обучение у действующих мастеров салонов бизнес-класса.</p>
          <div className="hero-actions"><a className="button button-fill" href="#contact">Прийти на бесплатное занятие <span aria-hidden="true">↗</span></a><a className="text-link" href="#programs">Выбрать обучение</a></div>
        </div>
        <div className="hero-bottom wrap"><span>BEAUTY DETALI SCHOOL</span><span>Школа и сеть студий красоты — один бренд</span><a href="#programs" aria-label="К направлениям обучения">↓</a></div>
      </section>

      <div className="intro-strip wrap" aria-label="О школе">
        <p><strong>1 минута</strong><span>от метро Владимирская</span></p>
        <p><strong>Действующие стилисты</strong><span>преподают то, с чем работают</span></p>
        <p><strong>Бесплатное занятие</strong><span>первое знакомство с профессией</span></p>
      </div>

      <section className="section wrap" id="programs" aria-labelledby="programs-title">
        <div className="section-heading">
          <div><p className="eyebrow">НАПРАВЛЕНИЯ ОБУЧЕНИЯ</p><h2 id="programs-title">Найдите своё<br />дело в красоте</h2></div>
          <div className="section-aside"><p>Первый шаг в профессию или новый уровень мастерства. Выберите направление, которое вам близко.</p><a className="text-link" href={`${schoolUrl}/vse-kursy`}>Все программы обучения <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="course-grid">{directions.map(course => <a className="course-card" key={course.path} href={`${schoolUrl}${course.path}`}>
          <div className="course-image"><img src={assetPath(course.image)} alt={course.alt} width="1000" height="1000" loading="lazy" decoding="async" /><span className="course-number">{course.number}</span></div>
          <div className="course-info"><div><h3>{course.title}</h3><p>{course.detail}</p></div><span className="course-arrow" aria-hidden="true">↗</span></div>
        </a>)}</div>
        <div className="direction-list">{moreDirections.map((course, index) => <a href={`${schoolUrl}${course.path}`} key={course.path}><span className="direction-index">0{index + 3}</span><h3>{course.title}</h3><span aria-hidden="true">↗</span></a>)}</div>
      </section>

      <section className="approach section" id="method" aria-labelledby="method-title">
        <div className="wrap">
          <div className="section-heading"><div><p className="eyebrow">ПОДХОД DETALI</p><h2 id="method-title">Мастерство —<br />в каждой детали</h2></div><p className="section-aside">Качественная работа начинается с техники. Профессионализм проявляется и в том, как вы понимаете клиента, заботитесь о нём и выстраиваете отношения.</p></div>
          <div className="learning-grid">{learning.map((item, index) => <article key={item.title}><span className="detail-number">0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          <div className="approach-note"><span>ОТ ПЕРВОГО ЗАНЯТИЯ — К СВОЕМУ ПРОФЕССИОНАЛЬНОМУ ПОЧЕРКУ</span><a className="text-link" href="#contact">Познакомиться со школой <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section className="section wrap school-section" aria-labelledby="school-title">
        <div className="school-visual"><div className="school-video"><BackstageVideo /></div><p>Beauty Detali School <span>Практика и жизнь школы</span></p></div>
        <div className="school-copy"><p className="eyebrow">ПРОФЕССИЯ ИЗНУТРИ</p><h2 id="school-title">Учитесь у тех,<br />кто работает<br />в индустрии</h2><p className="large-copy">Наши преподаватели — действующие стилисты-парикмахеры салонов красоты бизнес-класса.</p><p>Техника, реальные ситуации из практики и внимание к каждой работе. Вы учитесь видеть результат глазами мастера и глазами клиента.</p><ul className="simple-list"><li>Практика с обратной связью преподавателя</li><li>Авторские учебные пособия к курсам</li><li>Тренинги по сервису и профессиональной этике</li></ul><a className="text-link" href="#contact">Начать с бесплатного занятия <span aria-hidden="true">↗</span></a></div>
      </section>

      <section className="brand-section section" id="people" aria-labelledby="brand-title"><div className="wrap brand-layout">
        <div className="brand-story"><p className="eyebrow">ОДИН БРЕНД. ОБЩИЕ ЦЕННОСТИ.</p><h2 id="brand-title">Школа, за которой<br />стоит красивый<br />бизнес</h2><p>Beauty Detali объединяет школу мастеров и сеть студий красоты бизнес-класса. Здесь обучение связано с ежедневной работой в салоне: от первого знакомства с клиентом до его следующей записи.</p><div className="founder"><div className="founder-experience">25<span>лет в профессии</span></div><div><h3>Наталья Горохова</h3><p>Руководитель бренда Detali,<br />действующий стилист-парикмахер</p></div></div><a className="text-link" href="https://taplink.cc/beauty_detali" target="_blank" rel="noreferrer">Познакомиться со студиями Detali <span aria-hidden="true">↗</span></a></div>
        <figure className="brand-photo"><img src={assetPath("/images/detali-studio-light.webp")} alt="Интерьер салона сети Beauty Detali: рабочие места стилистов и зона ожидания" width="1080" height="1080" loading="lazy" decoding="async" /><figcaption><span>BEAUTY DETALI</span><span>Сеть студий красоты</span></figcaption></figure>
      </div></section>

      <section className="section wrap trial-section" id="contact" aria-labelledby="trial-title">
        <div className="trial-title"><p className="eyebrow">ВАШ ПЕРВЫЙ ШАГ</p><h2 id="trial-title">Сначала —<br />попробуйте</h2><p>Приходите на бесплатное занятие. Познакомьтесь с преподавателем, возьмите инструмент в руки и почувствуйте, подходит ли вам профессия.</p><a className="button button-fill" href="https://vk.com/beauty_detali_school" target="_blank" rel="noreferrer">Записаться на бесплатное занятие <span aria-hidden="true">↗</span></a><span className="trial-caption">Напишите школе во ВКонтакте — подберём удобное время.</span></div>
        <div className="trial-details"><div className="trial-label">БЕСПЛАТНОЕ ЗНАКОМСТВО СО ШКОЛОЙ</div><ol><li><span>01</span><div><h3>Встретим и познакомим</h3><p>Посмотрите, как устроено обучение, и задайте свои вопросы.</p></div></li><li><span>02</span><div><h3>Дадим попробовать</h3><p>Инструмент на пробное занятие предоставит школа.</p></div></li><li><span>03</span><div><h3>Поможем выбрать направление</h3><p>Обсудим вашу цель, опыт и подходящий формат обучения.</p></div></li></ol></div>
      </section>

      <section className="location-section" id="locations" aria-labelledby="location-title"><div className="wrap location-layout"><div><p className="eyebrow">В САМОМ ЦЕНТРЕ ПЕТЕРБУРГА</p><h2 id="location-title">Владимирский<br />проспект, 19</h2><p>1 минута от метро Владимирская</p></div><div className="location-contact"><a className="phone" href="tel:+79119213019">+7 911 921-30-19</a><a className="mail" href="mailto:beauty.detali.school@mail.ru">beauty.detali.school@mail.ru</a><a className="text-link" href="https://yandex.ru/maps/org/detali_beauty_school/81869744841/" target="_blank" rel="noreferrer">Построить маршрут <span aria-hidden="true">↗</span></a></div></div></section>
    </main>
    <footer className="site-footer wrap"><div className="footer-top"><Brand footer /><p>Школа мастеров<br />красивого бизнеса</p><nav aria-label="Дополнительная навигация"><a href={`${schoolUrl}/vazhno.html`}>Сведения об организации</a><a href={`${schoolUrl}/privacy`}>Политика конфиденциальности</a><a href="https://vk.com/beauty_detali_school" target="_blank" rel="noreferrer">ВКонтакте</a></nav></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Beauty Detali School</span><a href="#top">Наверх ↑</a><span>Санкт-Петербург</span></div></footer>
    <a className="mobile-action" href="#contact">Бесплатное занятие <span aria-hidden="true">↗</span></a>
  </>;
}
