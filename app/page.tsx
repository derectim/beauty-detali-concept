/* eslint-disable @next/next/no-img-element */
import BackstageVideo from "./backstage-video";
import MobileNav from "./mobile-nav";

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const directions = [
  {
    title: "Волосы",
    subtitle: "Парикмахер · колорист · стилист",
    text: "Форма, цвет и техники, с которыми начинают работать уверенно.",
    image: "/images/hair-detail-2024.jpg",
    alt: "Профессиональная палитра оттенков волос для обучения колористике",
    className: "direction-hair",
  },
  {
    title: "Nail",
    subtitle: "Маникюр · педикюр · наращивание",
    text: "От постановки руки до аккуратной салонной работы и портфолио.",
    image: "/images/nail-detail-2026.jpg",
    alt: "Работа выпускницы курса маникюра Beauty Detali School",
    className: "direction-nail",
  },
  {
    title: "Образ",
    subtitle: "Визаж · brow & lash · permanent",
    text: "Профессии, в которых важны чувство формы, точность и внимание к человеку.",
    image: "/images/student-03.jpg",
    alt: "Выпускница Beauty Detali School с преподавателем",
    className: "direction-face",
  },
];

const benefits = [
  { title: "Практика с первых занятий", text: "Смотрите показ преподавателя и сразу переносите технику в работу на модели." },
  { title: "Обратная связь по каждой работе", text: "Корректируете детали, от которых зависит качество и уверенность результата." },
  { title: "Преподаватели-практики", text: "Учитесь у мастеров, которые каждый день работают в beauty-индустрии." },
  { title: "Портфолио и документ", text: "Завершаете программу с выполненными работами и понятным следующим шагом." },
];

const steps = ["Смотрите", "Пробуете", "Корректируете", "Закрепляете"];

const teachers = [
  { name: "Светлана Гаврилова", role: "преподаватель-практик" },
  { name: "Анастасия Филиппова", role: "преподаватель-практик" },
  { name: "Елена Якупова", role: "преподаватель-практик" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Beauty Detali School",
  url: "https://school.sk12m.ru/",
  email: "beauty.detali.school@mail.ru",
  telephone: "+7 911 921-30-19",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Санкт-Петербург",
    streetAddress: "Владимирский проспект, 19",
    addressCountry: "RU",
  },
  sameAs: ["https://vk.com/beauty_detali_school"],
};

function DetaliLogo() {
  return (
    <>
      <svg className="detali-mark" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M20 53 L44 8" />
        <path d="M31 15 C46 11 56 22 54 35 C52 49 40 56 25 52" />
      </svg>
      <span className="detali-type">
        <b>DETALI</b>
        <small>BEAUTY SCHOOL</small>
      </span>
    </>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-intro">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="soft-header">
        <a className="detali-logo" href="#top" aria-label="Beauty Detali School — на главную"><DetaliLogo /></a>
        <nav aria-label="Основная навигация">
          <a href="#programs">Направления</a>
          <a href="#method">Как учим</a>
          <a href="#people">О школе</a>
          <a href="#locations">Контакты</a>
        </nav>
        <a className="soft-header-action" href="#contact">Подобрать программу <span aria-hidden="true">→</span></a>
        <MobileNav />
      </header>

      <section className="soft-hero" id="top">
        <div className="soft-hero-copy">
          <p className="soft-eyebrow"><span aria-hidden="true" /> Практическая beauty-школа · Санкт-Петербург</p>
          <h1>Профессия,<br />в которой<br />видно <em>вас</em></h1>
          <p className="soft-hero-lead">Освойте востребованную beauty-профессию с нуля — на живой практике, рядом с преподавателем и с документом об обучении.</p>
          <div className="soft-hero-actions">
            <a className="soft-primary" href="#programs">Выбрать направление <span aria-hidden="true">→</span></a>
            <a className="soft-secondary" href="#contact">Прийти на экскурсию</a>
          </div>
          <dl className="soft-proof-list">
            <div><dt>30+</dt><dd>программ обучения</dd></div>
            <div><dt>2</dt><dd>школы в Петербурге</dd></div>
            <div><dt>Практика</dt><dd>на моделях с первых занятий</dd></div>
          </dl>
        </div>

        <div className="soft-hero-visual">
          <figure className="soft-hero-photo">
            <img src={assetPath("/images/student-03.jpg")} alt="Выпускница Beauty Detali School с преподавателем после обучения" width={768} height={1024} fetchPriority="high" decoding="async" />
          </figure>
          <div className="soft-hero-note"><span>Результат обучения</span><strong>Навык. Практика. Уверенный старт.</strong></div>
          <div className="soft-hero-badge" aria-label="Обучение по лицензии"><b>Лицензия</b><span>и документы об обучении</span></div>
        </div>
      </section>

      <section className="directions-section page-section" id="programs">
        <div className="section-heading-row">
          <SectionIntro eyebrow="Направления" title="Какую профессию вы хотите освоить?" text="Начните с нуля или выберите программу для профессионального роста." />
          <a className="inline-link" href="#contact">Все 30+ программ <span aria-hidden="true">→</span></a>
        </div>
        <div className="direction-grid">
          {directions.map((direction) => (
            <article className={`direction-card ${direction.className}`} key={direction.title}>
              <figure><img src={assetPath(direction.image)} alt={direction.alt} width={853} height={1280} loading="lazy" decoding="async" /></figure>
              <div>
                <p>{direction.subtitle}</p>
                <h3>{direction.title}</h3>
                <span>{direction.text}</span>
                <a href="#contact" aria-label={`Подобрать программу: ${direction.title}`}>Подобрать программу <b aria-hidden="true">→</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="popular-section page-section" aria-labelledby="popular-title">
        <div className="popular-heading">
          <p className="section-eyebrow">Популярный старт</p>
          <h2 id="popular-title">Две программы — два масштаба входа в профессию</h2>
        </div>
        <div className="popular-grid">
          <article className="popular-card popular-nail">
            <div className="popular-card-top"><span>Для начинающих</span><span>5 дней</span></div>
            <h3>Топ-мастер<br />с нуля</h3>
            <p>Интенсивный старт в nail-профессии: техника, практика и первые работы.</p>
            <dl><div><dt>Стоимость</dt><dd>30 000 ₽</dd></div><div><dt>Формат</dt><dd>очно · практика</dd></div></dl>
            <a href="#contact">Получить программу <span aria-hidden="true">→</span></a>
          </article>
          <article className="popular-card popular-hair">
            <div className="popular-card-top"><span>Большая профессия</span><span>256 часов</span></div>
            <h3>Парикмахер-<br />стилист</h3>
            <p>Системная программа: стрижка, форма, укладка, работа с клиентом и практика.</p>
            <dl><div><dt>Стоимость</dt><dd>144 000 ₽</dd></div><div><dt>Результат</dt><dd>профессия с нуля</dd></div></dl>
            <a href="#contact">Получить программу <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      <section className="choice-section page-section">
        <div className="choice-card">
          <div><p className="section-eyebrow">Поможем с выбором</p><h2>Не нужно разбираться во всех 30 программах</h2></div>
          <div className="choice-copy"><p>Расскажите, что вам интересно и какой результат нужен. Мы сравним подходящие варианты по срокам, содержанию и стоимости.</p><a className="soft-primary" href="#contact">Помочь мне с выбором <span aria-hidden="true">→</span></a></div>
          <div className="choice-tags" aria-label="Варианты обучения"><span>Начать с нуля</span><span>Повысить квалификацию</span><span>Выбрать новую специализацию</span></div>
        </div>
      </section>

      <section className="about-section page-section" id="method">
        <div className="about-layout">
          <div className="about-copy">
            <SectionIntro eyebrow="Почему Beauty Detali" title="От интереса — к уверенной работе" text="В школе всё устроено вокруг практики: увидеть технику, повторить её, получить точную коррекцию и закрепить навык." />
            <div className="benefit-list">
              {benefits.map((benefit, index) => (
                <article key={benefit.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{benefit.title}</h3><p>{benefit.text}</p></div></article>
              ))}
            </div>
          </div>
          <figure className="about-photo">
            <img src={assetPath("/images/classroom-practice-2025.jpg")} alt="Ученицы Beauty Detali School работают в оборудованном классе" width={960} height={1280} loading="lazy" decoding="async" />
            <figcaption><strong>Практика в классе</strong><span>оборудование и материалы уже на месте</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="practice-section page-section" aria-labelledby="practice-title">
        <div className="practice-visual">
          <figure><img src={assetPath("/images/mentor-practice-2025.jpg")} alt="Преподаватель помогает ученице отработать технику" width={3024} height={4032} loading="lazy" decoding="async" /></figure>
          <div className="practice-caption"><span>Работа рядом с наставником</span><b>Точная коррекция в моменте</b></div>
        </div>
        <div className="practice-copy">
          <p className="section-eyebrow">Как проходит обучение</p>
          <h2 id="practice-title">Навык появляется в работе</h2>
          <p>Преподаватель показывает технику крупным планом. Вы повторяете, отрабатываете её на модели и получаете обратную связь по результату.</p>
          <ol>{steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><b>{step}</b></li>)}</ol>
        </div>
      </section>

      <section className="inside-section page-section" aria-labelledby="inside-title">
        <div className="inside-copy"><p className="section-eyebrow">Школа изнутри</p><h2 id="inside-title">Посмотрите, где теория становится практикой</h2><p>Две оборудованные площадки в Санкт-Петербурге, рабочие места для учеников и пространство, в которое можно прийти до записи.</p><a className="soft-secondary" href="#locations">Выбрать площадку <span aria-hidden="true">→</span></a></div>
        <div className="inside-video"><BackstageVideo /><span>Видео без звука · 00:19</span></div>
        <div className="inside-facts"><div><strong>2</strong><span>площадки в городе</span></div><div><strong>30+</strong><span>учебных программ</span></div><div><strong>очно</strong><span>практика и поддержка</span></div></div>
      </section>

      <section className="people-section page-section" id="people">
        <div className="section-heading-row"><SectionIntro eyebrow="Люди Beauty Detali" title="Рядом — практики, которые видят детали" text="Преподаватели объясняют логику техники, корректируют работу и помогают увидеть профессиональный результат." /></div>
        <div className="people-layout">
          <figure className="graduate-card graduate-main"><img src={assetPath("/images/student-02.jpg")} alt="Выпускница Beauty Detali School с дипломом" width={768} height={1044} loading="lazy" decoding="async" /><figcaption><strong>Документ об обучении</strong><span>и следующий профессиональный шаг</span></figcaption></figure>
          <figure className="graduate-card graduate-second"><img src={assetPath("/images/student-01.jpg")} alt="Выпускник Beauty Detali School с преподавателями" width={768} height={1024} loading="lazy" decoding="async" /><figcaption><strong>Результат, которым хочется делиться</strong></figcaption></figure>
          <blockquote><p>«Здесь хочется учиться, расти и возвращаться на повышение».</p><footer>Диля Хаджиева · выпускница</footer></blockquote>
          <div className="teacher-list"><p>Преподаватели</p>{teachers.map((teacher) => <article key={teacher.name}><h3>{teacher.name}</h3><span>{teacher.role}</span></article>)}</div>
        </div>
      </section>

      <section className="locations-section page-section" id="locations">
        <SectionIntro eyebrow="Санкт-Петербург" title="Две площадки — выбирайте удобную" text="Можно приехать на экскурсию, увидеть классы и познакомиться со школой до начала обучения." />
        <div className="location-grid">
          <article><span>Центр</span><h3>Владимирский<br />проспект, 19</h3><p>м. Владимирская · Достоевская</p><div><a href="tel:+79119213019">+7 911 921-30-19</a><a href="https://yandex.ru/maps/org/detali_beauty_school/81869744841/" target="_blank" rel="noreferrer">Построить маршрут →</a></div></article>
          <article><span>Ладожская</span><h3>Заневский<br />проспект, 71</h3><p>м. Ладожская</p><div><a href="tel:+79111652731">+7 911 165-27-31</a><a href="https://yandex.ru/maps/org/shkola_masterov_krasivogo_biznesa/232987482017/" target="_blank" rel="noreferrer">Построить маршрут →</a></div></article>
        </div>
      </section>

      <section className="contact-section page-section" id="contact">
        <div className="contact-copy"><p className="section-eyebrow">Первый шаг</p><h2>Начните с программы, которая подходит именно вам</h2><p>Оставьте контакты — уточним вашу цель, ответим на вопросы и предложим подходящие варианты обучения.</p><div><span>Или позвоните</span><a href="tel:+79119213019">+7 911 921-30-19</a></div></div>
        <form className="contact-form">
          <label><span>Ваше имя</span><input type="text" name="name" placeholder="Как к вам обращаться?" autoComplete="name" /></label>
          <label><span>Телефон</span><input type="tel" name="phone" placeholder="+7 ___ ___-__-__" autoComplete="tel" /></label>
          <label><span>Направление</span><select name="direction" defaultValue=""><option value="">Пока не знаю — нужна помощь</option><option>Волосы</option><option>Nail</option><option>Визаж, brow & lash</option><option>Permanent</option></select></label>
          <label className="checkline"><input type="checkbox" defaultChecked /><span>Согласен(а) с политикой конфиденциальности</span></label>
          <button type="button">Подобрать программу <span aria-hidden="true">→</span></button>
        </form>
      </section>

      <footer className="soft-footer">
        <a className="detali-logo" href="#top" aria-label="Beauty Detali School — на главную"><DetaliLogo /></a>
        <p>Школа beauty-профессий<br />в Санкт-Петербурге</p>
        <div><a href="https://vk.com/beauty_detali_school" target="_blank" rel="noreferrer">VK</a><a href="mailto:beauty.detali.school@mail.ru">Email</a><a href="https://school.sk12m.ru/privacy">Политика</a></div>
        <span>© {new Date().getFullYear()} · Beauty Detali School</span>
      </footer>

      <a className="mobile-action" href="#contact">Подобрать программу <span aria-hidden="true">→</span></a>
    </main>
  );
}
