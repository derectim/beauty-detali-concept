/* eslint-disable @next/next/no-img-element */
import BackstageVideo from "./backstage-video";
import { SchoolMoments } from "./photo-sections";
import CourseDirections from "./course-directions";
import { schoolSiteUrl } from "./search-config";
import { directions } from "./course-content";
import { assetPath, pagePath } from "./site-config";
import { canonicalUrl, organization, pageMetadata, StructuredData } from "./seo";
import { ContactDetails } from "./site-shell";

const schoolUrl = schoolSiteUrl;
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
export const metadata = pageMetadata("Школа парикмахеров и бьюти-профессий в СПб", "Курсы парикмахеров и бьюти-профессий в СПб. Группы до 6 человек, практика на моделях. Метро Владимирская и Достоевская. Бесплатное пробное занятие.", "/", "/og.png");
export default function Home() {
  return <>
    <StructuredData entities={[
      organization,
      { "@type": "WebSite", "@id": `${schoolUrl}/#website`, url: `${schoolUrl}/`, name: "Beauty Detali School", inLanguage: "ru-RU", publisher: { "@id": `${schoolUrl}/#school` } },
      { "@type": "WebPage", "@id": `${schoolUrl}/#webpage`, url: `${schoolUrl}/`, name: "Школа парикмахеров и бьюти-профессий в Санкт-Петербурге", inLanguage: "ru-RU", isPartOf: { "@id": `${schoolUrl}/#website` }, about: { "@id": `${schoolUrl}/#school` }, mainEntity: { "@id": `${schoolUrl}/#programs-list` } },
      { "@type": "ItemList", "@id": `${schoolUrl}/#programs-list`, name: "Направления обучения Beauty Detali School", itemListElement: directions.map((course, index) => ({ "@type": "ListItem", position: index + 1, name: course.title, url: canonicalUrl(course.path) })) },
    ]} />
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

      <CourseDirections directions={directions} />

      <section className="signature-section" aria-labelledby="signature-title"><div className="signature-inner"><span className="eyebrow">DETALI</span><span className="signature-rule" aria-hidden="true" /><h2 id="signature-title">Техника.<br />Сервис. Практика.</h2><p>Учитесь работать с инструментом,<br />понимать клиента и объяснять свои решения.</p><span className="signature-rule" aria-hidden="true" /></div></section>

      <section className="method-section content-grid wrap section" id="method" aria-labelledby="method-title">
        <figure className="practice-figure"><div className="practice-video"><BackstageVideo /></div><figcaption>BEAUTY DETALI SCHOOL<span>Практика и жизнь школы</span></figcaption></figure>
        <div className="method-copy"><p className="eyebrow">КАК ПРОХОДИТ ОБУЧЕНИЕ</p><h2 id="method-title">Рядом с теми,<br />кто умеет учить.</h2><p className="section-lead">Практика, понятные объяснения и внимание к вашей работе. Учебное пространство приближено к условиям салона.</p><dl className="method-facts"><div><dt>До 6 человек</dt><dd>в учебной группе</dd></div><div><dt>Своё рабочее место</dt><dd>у каждого ученика</dd></div></dl>
          <div className="learning-details">{learning.map((item, index) => <details key={item.title} open={index === 0}><summary>{item.title}<span className="disclosure-mark" aria-hidden="true" /></summary><p>{item.text}</p></details>)}</div>
        </div>
      </section>

      <section className="brand-section" id="people" aria-labelledby="brand-title"><div className="brand-layout content-grid wrap">
        <div className="brand-story"><p className="eyebrow">О ШКОЛЕ BEAUTY DETALI</p><h2 id="brand-title">Опыт мастеров.<br />Подход<br />преподавателей.</h2><p>Beauty Detali School — учебный центр с профессиональными наставниками. Здесь учатся технике, работе с клиентом и развитию в профессии. Под брендом Detali также работает сеть студий красоты бизнес-класса.</p><div className="founder"><h3>Наталья Горохова</h3><p>Руководитель бренда Detali.<br />Действующий стилист-парикмахер,<br />25 лет в профессии.</p></div><a className="text-link" href={pagePath("/o-shkole")}>Подробнее о школе и обучении</a></div>
        <figure className="studio-composition"><img className="studio-main" src={assetPath("/images/studio-light-refined-1200.webp")} srcSet={`${assetPath("/images/studio-light-refined-480.webp")} 480w, ${assetPath("/images/studio-light-refined-1200.webp")} 1200w`} sizes="(max-width: 820px) calc(100vw - 40px), 50vw" alt="Пространство салона сети Beauty Detali" width="1080" height="1080" loading="lazy" decoding="async" /><img className="studio-detail" src={assetPath("/images/detali-studio-detail.webp")} alt="" width="1080" height="1080" loading="lazy" decoding="async" /><figcaption>ПРОСТРАНСТВО BEAUTY DETALI</figcaption></figure>
      </div></section>

      <SchoolMoments />

      <section className="faq-section content-grid wrap section" id="questions" aria-labelledby="questions-title">
        <div><p className="eyebrow">ОБ ОБУЧЕНИИ</p><h2 id="questions-title">Что нужно знать<br />до записи.</h2></div>
        <div className="learning-details faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<span className="disclosure-mark" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="trial-section content-grid wrap section" id="contact" aria-labelledby="trial-title">
        <div className="trial-heading"><p className="eyebrow">ПОПРОБУЙТЕ ПРОФЕССИЮ</p><h2 id="trial-title">Бесплатное<br />пробное занятие.</h2></div><div className="trial-copy"><p className="section-lead">Познакомьтесь со школой до выбора курса.</p><p>Попробуйте инструмент в работе, пообщайтесь с преподавателем и задайте вопросы. Инструмент предоставит школа.</p><a className="button" href="https://vk.com/beauty_detali_school" target="_blank" rel="noreferrer">Выбрать время во ВКонтакте</a><span className="contact-hint">Откроется сообщество школы. Напишите «Пробное занятие» — поможем подобрать время.</span><a className="trial-phone" href="tel:+79119213019">Записаться по телефону: +7 911 921-30-19</a></div>
      </section>

      <section className="location-section" id="locations" aria-labelledby="location-title"><div className="wrap location-layout content-grid"><div><p className="eyebrow">КОНТАКТЫ BEAUTY DETALI SCHOOL</p><h2 id="location-title">Ждём вас<br />в центре Петербурга.</h2></div><ContactDetails /></div></section>
    </main>
  </>;
}
