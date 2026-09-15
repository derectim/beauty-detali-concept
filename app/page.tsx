/* eslint-disable @next/next/no-img-element */
import BackstageVideo from "./backstage-video";
import MobileNav from "./mobile-nav";
import ThemeToggle from "./theme-toggle";
import CourseDirections from "./course-directions";
import { schoolSiteUrl } from "./search-config";

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
const schoolUrl = schoolSiteUrl;
const directions = [
  { title: "Парикмахерское искусство", detail: "Стрижки, форма и укладки", path: "/kursy-parikmaherov", image: "haircut", alt: "Мастер выполняет стрижку светлых волос", position: "70% center" },
  { title: "Колористика", detail: "Цвет и техники окрашивания", path: "/kursy-koloristiki", image: "color", alt: "Пряди волос разных оттенков для работы с цветом" },
  { title: "Маникюр и педикюр", detail: "Техника и эстетика ногтей", path: "/manicure-pedicure", image: "nail", alt: "Французский маникюр с декоративными деталями" },
  { title: "Визаж", detail: "Искусство создавать образ", path: "/kursy-vizazhistov", image: "makeup", alt: "Макияж с графичными стрелками из портфолио преподавателей школы" },
  { title: "Брови", detail: "Форма и выразительность", path: "/kursy-brow-masterov", image: "brow", alt: "Оформленная светло-коричневая бровь крупным планом" },
  { title: "Ресницы", detail: "Наращивание и работа с объёмом", path: "/kursy-naraschivaniya-resnic", image: "lashes", alt: "Работа по наращиванию ресниц из галереи школы" },
];
const questions = [
  { question: "Где находится Beauty Detali School?", answer: "Школа находится в Санкт-Петербурге, на Владимирском проспекте, 19, в ТЦ «Владимирский пассаж», на 3-м этаже. От станций метро «Владимирская» и «Достоевская» — одна минута пешком. Эти станции соединены переходом." },
  { question: "Можно ли сначала прийти на бесплатное занятие?", answer: "Да. На бесплатном пробном занятии можно познакомиться с преподавателем и попробовать инструмент в работе. Инструмент предоставляет школа. Чтобы выбрать время, напишите школе во ВКонтакте или позвоните." },
  { question: "Кто преподаёт в школе?", answer: "Занятия ведут практикующие специалисты с опытом преподавания. Наставники понятно объясняют технику, показывают её в работе и дают обратную связь по вашим результатам." },
  { question: "Сколько человек в группе?", answer: "В учебной группе — до 6 человек. Также есть индивидуальный формат обучения. Подходящий формат можно обсудить со школой при выборе курса." },
  { question: "Когда можно начать обучение?", answer: "Дату начала согласовываете со школой. Вместе с наставником можно составить индивидуальную программу под ваш запрос. Чтобы выбрать дату и формат, напишите школе или позвоните." },
  { question: "Чему учат помимо профессиональной техники?", answer: "В обучение включены сервис, профессиональная этика, общение с клиентом и развитие личного бренда. Вы учитесь понимать запрос клиента и объяснять ценность своей работы без давления." },
];
const learning = [
  { title: "Практика на моделях", text: "Отрабатываете профессиональную технику на моделях под руководством наставника. Для учебных задач школа также предоставляет манекены. К курсам предусмотрены авторские учебные пособия." },
  { title: "Расходные материалы от школы", text: "Школа предоставляет расходные материалы, необходимые для обучения. В учебном центре у каждого ученика своё рабочее место — пространство организовано с учётом салонной работы." },
  { title: "Старт и программа под ваш запрос", text: "Дату начала занятий согласовываете со школой. Можно учиться индивидуально или в небольшой группе, а вместе с наставником — составить индивидуальную программу под свои задачи." },
  { title: "Мастера с опытом преподавания", text: "С вами работают не просто практикующие специалисты, а опытные наставники. Они объясняют материал, показывают приёмы и помогают разобраться в том, что пока не получается." },
  { title: "Сервис, общение и личный бренд", text: "Разбираете профессиональную этику, общение с клиентом и рекомендации без давления. Учитесь объяснять ценность своей работы, развивать личный бренд и формировать базу постоянных клиентов." },
];
function Brand() {
  return <a className="brand" href="#top" aria-label="Beauty Detali School — на главную">
    <span className="brand-images"><img className="brand-dark" src={assetPath("/brand/detali-white.svg")} alt="" width="80" height="80" /><img className="brand-light" src={assetPath("/brand/detali-black.svg")} alt="" width="80" height="80" /></span>
    <span className="brand-name">BEAUTY DETALI<span>SCHOOL</span></span>
  </a>;
}
export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "EducationalOrganization", "@id": `${schoolUrl}/#school`, name: "Beauty Detali School", alternateName: "Школа мастеров красивого бизнеса Detali", url: schoolUrl, description: "Школа парикмахеров и бьюти-профессий в Санкт-Петербурге. Индивидуальное обучение и группы до 6 человек, практика на моделях, сервис и общение с клиентами.", telephone: "+7 911 921-30-19", email: "beauty.detali.school@mail.ru", logo: `${schoolUrl}/brand/detali-black.svg`, address: { "@type": "PostalAddress", streetAddress: "Владимирский проспект, 19", addressLocality: "Санкт-Петербург", addressCountry: "RU" }, sameAs: ["https://vk.com/beauty_detali_school"] },
        { "@type": "WebSite", "@id": `${schoolUrl}/#website`, url: `${schoolUrl}/`, name: "Beauty Detali School", inLanguage: "ru-RU", publisher: { "@id": `${schoolUrl}/#school` } },
        { "@type": "WebPage", "@id": `${schoolUrl}/#webpage`, url: `${schoolUrl}/`, name: "Школа парикмахеров и бьюти-профессий в Санкт-Петербурге", inLanguage: "ru-RU", isPartOf: { "@id": `${schoolUrl}/#website` }, about: { "@id": `${schoolUrl}/#school` }, mainEntity: { "@id": `${schoolUrl}/#programs-list` } },
        { "@type": "ItemList", "@id": `${schoolUrl}/#programs-list`, name: "Направления обучения Beauty Detali School", itemListElement: directions.map((course, index) => ({ "@type": "ListItem", position: index + 1, name: course.title, url: `${schoolUrl}${course.path}` })) },
      ],
    }).replace(/</g, "\\u003c") }} />
    <a className="skip-link" href="#main">Перейти к содержимому</a>
    <header className="site-header"><div className="header-inner">
      <Brand />
      <nav aria-label="Основная навигация"><a href="#programs">Обучение</a><a href="#method">Как учим</a><a href="#people">О школе</a><a href="#locations">Контакты</a></nav>
      <div className="header-actions"><ThemeToggle /><a className="header-cta" href="#contact">Бесплатное занятие</a></div>
      <MobileNav />
    </div></header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={assetPath("/images/detali-studio-dark.webp")} alt="Интерьер студии сети Beauty Detali" width="1080" height="1080" fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-location"><span>САНКТ-ПЕТЕРБУРГ</span><span>1 минута от метро «Владимирская» и «Достоевская»</span></div>
        <div className="hero-copy">
          <h1 className="eyebrow hero-category" id="hero-title">Школа парикмахеров и бьюти-профессий в Санкт-Петербурге</h1>
          <p className="hero-display"><span>Мастерство</span><span>в DETALI</span></p>
          <p className="hero-lead">Освойте профессию с опытными преподавателями.<br className="desktop-break" /> Индивидуально или в небольших группах до 6 человек.</p>
          <div className="hero-actions"><a className="button hero-button" href="#programs">Выбрать обучение</a><a className="hero-trial" href="#contact">Начать с бесплатного занятия</a></div>
        </div>
        <p className="hero-caption">BEAUTY DETALI SCHOOL<span>Школа мастеров красивого бизнеса</span></p>
      </section>

      <CourseDirections directions={directions} schoolUrl={schoolUrl} />

      <section className="signature-section" aria-labelledby="signature-title"><div className="signature-inner"><span className="eyebrow">DETALI</span><span className="signature-rule" aria-hidden="true" /><h2 id="signature-title">Всё имеет<br />значение</h2><p>От мастерства и техники —<br />до сервиса, доверия и вашего имени.</p><span className="signature-rule" aria-hidden="true" /></div></section>

      <section className="method-section content-grid wrap section" id="method" aria-labelledby="method-title">
        <figure className="practice-figure"><div className="practice-video"><BackstageVideo /></div><figcaption>BEAUTY DETALI SCHOOL<span>Практика и жизнь школы</span></figcaption></figure>
        <div className="method-copy"><p className="eyebrow">КАК ПРОХОДИТ ОБУЧЕНИЕ</p><h2 id="method-title">Рядом с теми,<br />кто умеет учить.</h2><p className="section-lead">Практика, понятные объяснения и внимание к вашей работе. Учебное пространство приближено к условиям салона.</p><dl className="method-facts"><div><dt>До 6 человек</dt><dd>в учебной группе</dd></div><div><dt>Своё рабочее место</dt><dd>у каждого ученика</dd></div></dl>
          <div className="learning-details">{learning.map((item, index) => <details key={item.title} open={index === 0}><summary>{item.title}<span className="disclosure-mark" aria-hidden="true" /></summary><p>{item.text}</p></details>)}</div>
        </div>
      </section>

      <section className="brand-section" id="people" aria-labelledby="brand-title"><div className="brand-layout content-grid wrap">
        <div className="brand-story"><p className="eyebrow">О ШКОЛЕ BEAUTY DETALI</p><h2 id="brand-title">Опыт мастеров.<br />Подход<br />преподавателей.</h2><p>Beauty Detali School — учебный центр с профессиональными наставниками. Здесь учатся технике, работе с клиентом и развитию в профессии. Под брендом Detali также работает сеть студий красоты бизнес-класса.</p><div className="founder"><h3>Наталья Горохова</h3><p>Руководитель бренда Detali.<br />Действующий стилист-парикмахер,<br />25 лет в профессии.</p></div><a className="text-link" href="https://taplink.cc/beauty_detali" target="_blank" rel="noreferrer">Сеть студий Beauty Detali</a></div>
        <figure className="studio-composition"><img className="studio-main" src={assetPath("/images/detali-studio-light.webp")} alt="Пространство салона сети Beauty Detali" width="1080" height="1080" loading="lazy" decoding="async" /><img className="studio-detail" src={assetPath("/images/detali-studio-detail.webp")} alt="" width="1080" height="1080" loading="lazy" decoding="async" /><figcaption>ПРОСТРАНСТВО BEAUTY DETALI</figcaption></figure>
      </div></section>

      <section className="faq-section content-grid wrap section" id="questions" aria-labelledby="questions-title">
        <div><p className="eyebrow">ОБ ОБУЧЕНИИ</p><h2 id="questions-title">Вопросы,<br />которые важны.</h2></div>
        <div className="learning-details faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<span className="disclosure-mark" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="trial-section content-grid wrap section" id="contact" aria-labelledby="trial-title">
        <div className="trial-heading"><p className="eyebrow">ПОПРОБУЙТЕ ПРОФЕССИЮ</p><h2 id="trial-title">Бесплатное<br />пробное занятие.</h2></div><div className="trial-copy"><p className="section-lead">Познакомьтесь со школой до выбора курса.</p><p>Попробуйте инструмент в работе, пообщайтесь с преподавателем и задайте вопросы. Инструмент предоставит школа.</p><a className="button" href="https://vk.com/beauty_detali_school" target="_blank" rel="noreferrer">Выбрать время во ВКонтакте</a><span className="contact-hint">Откроется сообщество школы. Напишите «Пробное занятие» — поможем подобрать время.</span><a className="trial-phone" href="tel:+79119213019">Записаться по телефону: +7 911 921-30-19</a></div>
      </section>

      <section className="location-section" id="locations" aria-labelledby="location-title"><div className="wrap location-layout content-grid"><div><p className="eyebrow">КОНТАКТЫ BEAUTY DETALI SCHOOL</p><h2 id="location-title">Ждём вас<br />в центре Петербурга.</h2></div><div className="location-contact"><address><span className="contact-label">Адрес школы</span><strong>Санкт-Петербург,<br />Владимирский проспект, 19</strong><p>ТЦ «Владимирский пассаж», 3-й этаж</p><p>1 минута от метро «Владимирская» и «Достоевская»</p><a className="text-link" href="https://yandex.ru/maps/org/detali_beauty_school/81869744841/" target="_blank" rel="noreferrer">Открыть маршрут в Яндекс Картах</a></address><div className="contact-channels"><div><span className="contact-label">Позвонить школе</span><a className="phone" href="tel:+79119213019">+7 911 921-30-19</a></div><div><span className="contact-label">Написать на почту</span><a className="mail" href="mailto:beauty.detali.school@mail.ru">beauty.detali.school@mail.ru</a></div></div></div></div></section>
    </main>
    <footer className="site-footer content-grid wrap"><div className="footer-brand"><Brand /><p>Школа мастеров красивого бизнеса<br />в Санкт-Петербурге.</p></div><nav aria-label="Дополнительная навигация"><div><span className="contact-label">Школа</span><a href="#programs">Направления обучения</a><a href="#questions">Вопросы об обучении</a><a href="#locations">Как нас найти</a></div><div><span className="contact-label">Информация</span><a href={`${schoolUrl}/vazhno.html`}>Сведения об организации</a><a href={`${schoolUrl}/privacy`}>Политика конфиденциальности</a><a href="https://vk.com/beauty_detali_school" target="_blank" rel="noreferrer">Сообщество школы</a></div></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} Beauty Detali School</span><a href="#top">Наверх</a></div></footer>
  </>;
}
