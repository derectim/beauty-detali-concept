/* eslint-disable @next/next/no-img-element */
import MobileNav from "./mobile-nav";
import BackstageVideo from "./backstage-video";

const programs = [
  { index: "01", title: "Парикмахер", meta: "Стрижка · укладка · форма" },
  { index: "02", title: "Колорист", meta: "Цвет · формулы · сложные техники" },
  { index: "03", title: "Nail-мастер", meta: "Маникюр · педикюр · smart" },
  { index: "04", title: "Визажист", meta: "Макияж · образ · съёмка" },
  { index: "05", title: "Brow & Lash", meta: "Брови · ресницы · взгляд" },
  { index: "06", title: "Permanent", meta: "Форма · пигмент · техника" },
];

const method = [
  { index: "01", title: "Смотрите", text: "Преподаватель показывает технику крупным планом и объясняет логику каждого движения." },
  { index: "02", title: "Повторяете", text: "Сразу переносите увиденное в практику — с инструментом в руках, а не в конспекте." },
  { index: "03", title: "Работаете", text: "Отрабатываете навык на моделях и получаете точную обратную связь по результату." },
  { index: "04", title: "Выходите", text: "Собираете портфолио, документ об обучении и следующий профессиональный шаг." },
];

const teachers = [
  { index: "01", name: "Светлана Гаврилова", role: "Преподаватель-практик" },
  { index: "02", name: "Анастасия Филиппова", role: "Преподаватель-практик" },
  { index: "03", name: "Елена Якупова", role: "Преподаватель-практик" },
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

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="topbar">
        <a className="detali-logo" href="#top" aria-label="Beauty Detali School — на главную">
          <DetaliLogo />
        </a>
        <nav aria-label="Основная навигация">
          <a href="#programs">Профессии</a>
          <a href="#method">Метод</a>
          <a href="#people">Люди</a>
          <a href="#locations">Адреса</a>
        </nav>
        <div className="topbar-meta">
          <span>СПБ · 2026</span>
          <a href="#contact">Записаться <b aria-hidden="true">↗</b></a>
        </div>
        <MobileNav />
      </header>

      <section className="new-hero" id="top">
        <div className="hero-rail" aria-hidden="true">
          <span>BEAUTY EDUCATION</span>
          <span>59.9311° N</span>
          <span>30.3609° E</span>
        </div>

        <div className="hero-title">
          <p className="micro-label"><span>01</span> ШКОЛА СТИЛИСТОВ · САНКТ-ПЕТЕРБУРГ</p>
          <h1>
            <span>ПРОФЕССИЯ</span>
            <span className="title-shift">КРУПНЫМ</span>
            <span>ПЛАНОМ</span>
          </h1>
          <div className="hero-description">
            <p>Не наблюдать за мастерством. Осваивать его — движение за движением, модель за моделью.</p>
            <a className="square-link" href="#programs">Выбрать профессию <span aria-hidden="true">↘</span></a>
          </div>
        </div>

        <figure className="hero-photo">
          <img
            src="/images/hero-practice-2025.jpg"
            alt="Преподаватель помогает ученице отработать технику на модели"
            width={3024}
            height={4032}
            fetchPriority="high"
            decoding="async"
          />
          <figcaption>
            <span>DETALI / PROCESS 01</span>
            <span>НАСТАВНИК + УЧЕНИЦА</span>
          </figcaption>
          <div className="focus-frame" aria-hidden="true"><span>КОРРЕКЦИЯ 01:1</span></div>
        </figure>

        <div className="hero-data">
          <div><strong>30+</strong><span>программ</span></div>
          <div><strong>02</strong><span>площадки</span></div>
          <div><strong>01:1</strong><span>обратная связь</span></div>
          <div><strong>REAL</strong><span>практика</span></div>
        </div>
      </section>

      <div className="discipline-strip" aria-label="Направления школы">
        <span>HAIR</span><b aria-hidden="true">×</b><span>COLOR</span><b aria-hidden="true">×</b><span>NAIL</span><b aria-hidden="true">×</b><span>MAKE-UP</span><b aria-hidden="true">×</b><span>BROW</span><b aria-hidden="true">×</b><span>PERMANENT</span>
      </div>

      <section className="programs-section" id="programs">
        <div className="programs-aside">
          <p className="micro-label"><span>02</span> НАПРАВЛЕНИЯ</p>
          <h2>Выберите<br />не курс.<br />Роль.</h2>
          <p>Сайт ведёт не через бесконечный каталог, а через будущую профессию и уровень подготовки.</p>
          <a className="text-link" href="#contact">Помочь с выбором <span aria-hidden="true">→</span></a>
        </div>
        <div className="program-list">
          {programs.map((program) => (
            <a href="#featured" className="program-row" key={program.index}>
              <span>{program.index}</span>
              <strong>{program.title}</strong>
              <small>{program.meta}</small>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="manifesto" id="method">
        <div className="manifesto-top">
          <p className="micro-label dark-label"><span>03</span> МЕТОД DETALI</p>
          <h2>СНАЧАЛА —<br />РУКАМИ.<br />ПОТОМ —<br />УВЕРЕННО.</h2>
          <p>Теория занимает своё место. Главную роль получает практика: наблюдение, повторение, коррекция, результат.</p>
        </div>
        <div className="method-grid">
          {method.map((item) => (
            <article key={item.index}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="film-section" aria-labelledby="film-title">
        <div className="film-copy">
          <p className="micro-label"><span>03A</span> SCHOOL TOUR · 00:20</p>
          <h2 id="film-title">Школа<br />изнутри.</h2>
          <div>
            <p>Рабочие места, свет, оборудование и пространство, в котором теория сразу становится практикой.</p>
            <span>ВИДЕО БЕЗ ЗВУКА · СПБ</span>
          </div>
        </div>
        <div className="film-stage">
          <span>SPACE / 01</span>
          <BackstageVideo />
          <b>MUTED · LOOP</b>
        </div>
      </section>

      <section className="featured-section" id="featured">
        <div className="featured-heading">
          <p className="micro-label"><span>04</span> В ФОКУСЕ</p>
          <h2>Две программы.<br />Два масштаба старта.</h2>
        </div>

        <article className="feature feature-nail">
          <div className="feature-visual">
            <img src="/images/mentor-practice-2025.jpg" alt="Преподаватель показывает технику ученице на практике" width={3024} height={4032} loading="lazy" decoding="async" />
            <span>NAIL / 01</span>
          </div>
          <div className="feature-copy">
            <span className="feature-index">01 — БАЗОВЫЙ</span>
            <h3>Топ-мастер<br />с нуля</h3>
            <p>Для тех, кто хочет освоить профессию мастера маникюра и начать работать уверенно и аккуратно.</p>
            <dl><div><dt>Срок</dt><dd>5 дней</dd></div><div><dt>Стоимость</dt><dd>30 000 ₽</dd></div></dl>
            <a href="#contact">О программе <span aria-hidden="true">↗</span></a>
          </div>
        </article>

        <article className="feature feature-hair">
          <div className="feature-copy">
            <span className="feature-index">02 — ПРОФЕССИЯ</span>
            <h3>Парикмахер-<br />стилист</h3>
            <p>Большая программа для системного старта: инструмент, форма, укладка, работа с клиентом и практика.</p>
            <dl><div><dt>Объём</dt><dd>256 часов</dd></div><div><dt>Стоимость</dt><dd>144 000 ₽</dd></div></dl>
            <a href="#contact">О программе <span aria-hidden="true">↗</span></a>
          </div>
          <div className="feature-visual">
            <img src="/images/hair-detail-2024.jpg" alt="Пряди и материалы для работы с волосами" width={853} height={1280} loading="lazy" decoding="async" />
            <span>HAIR / 02</span>
          </div>
        </article>

        <a className="catalog-line" href="#contact"><span>Смотреть все 30+ программ</span><b aria-hidden="true">→</b></a>
      </section>

      <section className="people-section" id="people">
        <div className="people-heading">
          <p className="micro-label light-label"><span>05</span> ЛЮДИ DETALI</p>
          <h2>Не идеальные<br />картинки.<br />Реальный рост.</h2>
        </div>

        <div className="contact-sheet">
          <figure className="sheet-a">
            <img src="/images/student-02.jpg" alt="Выпускница Beauty Detali School с дипломом" width={768} height={1024} loading="lazy" decoding="async" />
            <figcaption>OUTCOME_2406 / 01</figcaption>
          </figure>
          <figure className="sheet-b">
            <img src="/images/process-hands-2025.jpg" alt="Ученицы отрабатывают технику на моделях" width={3024} height={4032} loading="lazy" decoding="async" />
            <figcaption>PRACTICE_2506 / 02</figcaption>
          </figure>
          <figure className="sheet-c">
            <img src="/images/classroom-practice-2025.jpg" alt="Учебная группа Beauty Detali School на практике" width={960} height={1280} loading="lazy" decoding="async" />
            <figcaption>CLASS_2506 / 03</figcaption>
          </figure>
          <blockquote>
            <span>“</span>
            <p>Здесь хочется учиться, расти и возвращаться на повышение.</p>
            <footer>Диля Хаджиева · выпускница</footer>
          </blockquote>
        </div>

        <div className="teachers-table">
          <p className="table-title">ПРЕПОДАВАТЕЛИ / SELECTED</p>
          {teachers.map((teacher) => (
            <article key={teacher.index}>
              <span>{teacher.index}</span>
              <h3>{teacher.name}</h3>
              <p>{teacher.role}</p>
              <b aria-hidden="true">↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="location-section" id="locations">
        <div className="location-heading">
          <p className="micro-label"><span>06</span> САНКТ-ПЕТЕРБУРГ</p>
          <h2>Две точки<br />входа в<br />профессию.</h2>
        </div>
        <article>
          <span>01 / ЦЕНТР</span>
          <h3>Владимирский<br />проспект, 19</h3>
          <p>м. Владимирская · Достоевская</p>
          <div><a href="tel:+79119213019">+7 911 921-30-19</a><a href="https://yandex.ru/maps/org/detali_beauty_school/81869744841/" target="_blank" rel="noreferrer">Маршрут ↗</a></div>
        </article>
        <article>
          <span>02 / ЛАДОЖСКАЯ</span>
          <h3>Заневский<br />проспект, 71</h3>
          <p>м. Ладожская</p>
          <div><a href="tel:+79111652731">+7 911 165-27-31</a><a href="https://yandex.ru/maps/org/shkola_masterov_krasivogo_biznesa/232987482017/" target="_blank" rel="noreferrer">Маршрут ↗</a></div>
        </article>
      </section>

      <section className="final-contact" id="contact">
        <div className="contact-title">
          <p className="micro-label dark-label"><span>07</span> ПЕРВЫЙ ШАГ</p>
          <h2>ПОКАЖЕМ<br />ШКОЛУ.<br />ПОДБЕРЁМ<br />ПРОФЕССИЮ.</h2>
        </div>
        <form>
          <label><span>ИМЯ</span><input type="text" name="name" placeholder="Как к вам обращаться?" autoComplete="name" /></label>
          <label><span>ТЕЛЕФОН</span><input type="tel" name="phone" placeholder="+7 ___ ___-__-__" autoComplete="tel" /></label>
          <label><span>НАПРАВЛЕНИЕ</span><select name="direction" defaultValue=""><option value="" disabled>Выберите профессию</option><option>Парикмахер</option><option>Колорист</option><option>Nail-мастер</option><option>Визажист</option><option>Другое</option></select></label>
          <label className="checkline"><input type="checkbox" defaultChecked /><span>Согласен(а) с политикой конфиденциальности</span></label>
          <button type="button">Записаться на знакомство <span aria-hidden="true">↗</span></button>
          <p>Или позвоните: <a href="tel:+79119213019">+7 911 921-30-19</a></p>
        </form>
      </section>

      <footer className="footer">
        <a className="detali-logo detali-logo-inverse" href="#top" aria-label="Beauty Detali School — на главную"><DetaliLogo /></a>
        <p>Школа мастеров красивого бизнеса<br />Санкт-Петербург</p>
        <div><a href="https://vk.com/beauty_detali_school" target="_blank" rel="noreferrer">VK ↗</a><a href="mailto:beauty.detali.school@mail.ru">EMAIL ↗</a><a href="https://school.sk12m.ru/privacy">PRIVACY ↗</a></div>
        <span>© {new Date().getFullYear()} · ИП ГОРОХОВА Н.В.</span>
      </footer>

      <a className="mobile-action" href="#contact">Записаться <span aria-hidden="true">↗</span></a>
    </main>
  );
}
