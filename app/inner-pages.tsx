/* eslint-disable @next/next/no-img-element */
import { additionalPrograms, courses, directions, directionByPath, type CourseContent, type DirectionContent, type Question } from "./course-content";
import { assetPath, pagePath, school } from "./site-config";
import { Breadcrumbs, ContactDetails, Enquiry, type Crumb } from "./site-shell";
import { canonicalUrl, PageSchema } from "./seo";
import { schoolSiteUrl } from "./search-config";
import { CourseImage, DirectionPhoto, Photo, SchoolMoments, supportPhotos } from "./photo-sections";

const catalogCrumb = { name: "Обучение", path: "/vse-kursy" };

function Questions({ title, items }: { title: string; items: Question[] }) {
  return <section className="section content-grid wrap inner-questions"><div><p className="eyebrow">ВОПРОСЫ ПЕРЕД ЗАПИСЬЮ</p><h2>{title}</h2></div><div className="learning-details faq-list">{items.map(item => <details key={item.question}><summary>{item.question}<span className="disclosure-mark" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>;
}

function CourseLink({ course }: { course: CourseContent }) {
  return <a className="program-link" href={pagePath(course.path)}><span className="eyebrow">ПРОГРАММА ОБУЧЕНИЯ</span><h3>{course.shortTitle}</h3><p>{course.audience}</p><span className="program-link-action">Программа и практика <span aria-hidden="true">↗</span></span></a>;
}

export function DirectionPage({ direction }: { direction: DirectionContent }) {
  const crumbs = [catalogCrumb, { name: direction.title, path: direction.path }];
  const selected = courses.filter(course => course.direction === direction.path);
  return <><PageSchema title={direction.heading} description={direction.description} path={direction.path} crumbs={crumbs} type="CollectionPage" extra={[
    { "@type": "ItemList", "@id": `${canonicalUrl(direction.path)}#courses`, name: `Программы: ${direction.title}`, itemListElement: selected.map((course, index) => ({ "@type": "ListItem", position: index + 1, name: course.shortTitle, url: canonicalUrl(course.path) })) },
  ]} /><main id="main" className="inner-page direction-page"><Breadcrumbs items={crumbs} />
    <section className="inner-hero content-grid wrap"><div><p className="eyebrow">BEAUTY DETALI SCHOOL · ОБУЧЕНИЕ</p><h1>{direction.heading}</h1><p className="inner-lead">{direction.intro}</p><div className="inner-actions"><a className="button" href="#direction-programs">Посмотреть программу</a><a className="text-link" href={pagePath("/contacts")}>Как добраться</a></div></div><div className="direction-cover"><DirectionPhoto image={direction.image} alt={direction.alt} position={direction.position} /><dl className="direction-quick-facts"><div><dt>Санкт-Петербург</dt><dd>Владимирская / Достоевская</dd></div><div><dt>Очное обучение</dt><dd>Индивидуально и в группе</dd></div></dl></div></section>
    <section className="inner-section content-grid wrap section"><div><p className="eyebrow">КАК ВЫБРАТЬ ОБУЧЕНИЕ</p><h2>{direction.focusTitle}</h2><p className="section-lead inner-section-intro">{direction.focus}</p><Photo photo={supportPhotos[direction.image]} className="direction-support-photo" /></div><ol className={`decision-list decision-list-${direction.image}`}>{direction.choices.map((choice, index) => <li key={choice.title}><span className="step-index" aria-hidden="true">0{index + 1}</span><div><h3>{choice.title}</h3><p>{choice.text}</p></div></li>)}</ol></section>
    <section className="inner-programs-band" id="direction-programs"><div className="content-grid wrap section"><div><p className="eyebrow">ПРОГРАММА В ДЕТАЛЯХ</p><h2>{direction.image === "makeup" ? "Начните с вашего образа." : "Рассмотрите базовую подготовку."}</h2><p className="inner-section-intro">Темы, учебная практика и границы программы — до решения о записи. Для другой задачи или уровня подготовки напишите школе.</p></div><div>{selected.map(course => <CourseLink key={course.path} course={course} />)}</div></div></section>
    <section className="additional-programs content-grid wrap"><div><h2>Другие программы школы</h2><p className="contact-hint">Откроются на действующем сайте школы.</p></div><ul>{additionalPrograms[direction.path].map(item => <li key={item.path}><a href={`${schoolSiteUrl}${item.path}`} target="_blank" rel="noreferrer">{item.title}<span aria-hidden="true">↗</span></a></li>)}</ul></section>
    <Questions title={`Об обучении: ${direction.title.toLocaleLowerCase("ru")}`} items={direction.questions} />
    <section className="related-section content-grid wrap"><div><p className="eyebrow">ДРУГИЕ НАПРАВЛЕНИЯ</p><h2>Сравните задачи.</h2></div><div className="related-links">{direction.related.map(path => { const item = directionByPath(path)!; return <a key={path} href={pagePath(path)}><h3>{item.title}</h3><span>{item.detail}</span></a>; })}<a className="text-link" href={pagePath("/vse-kursy")}>Все направления обучения</a></div></section>
    <Enquiry />
  </main></>;
}

export function CoursePage({ course }: { course: CourseContent }) {
  const direction = directionByPath(course.direction)!;
  const crumbs: Crumb[] = [catalogCrumb, { name: direction.title, path: direction.path }, { name: course.shortTitle, path: course.path }];
  return <><PageSchema title={course.title} description={course.description} path={course.path} crumbs={crumbs} extra={[
    { "@type": "Course", "@id": `${canonicalUrl(course.path)}#course`, name: course.shortTitle, description: course.description, url: canonicalUrl(course.path), provider: { "@id": `${schoolSiteUrl}/#school` }, inLanguage: "ru-RU", teaches: course.modules.map(module => module.title), audience: { "@type": "EducationalAudience", audienceType: course.audience } },
  ]} /><main id="main" className="inner-page course-page"><Breadcrumbs items={crumbs} />
    <section className="course-hero content-grid wrap"><div><a className="eyebrow" href={pagePath(direction.path)}>{direction.title}</a><h1>{course.title}</h1><p className="inner-lead">{course.intro}</p></div><aside className="course-summary" aria-label="Условия обучения"><CourseImage className="course-summary-image" image={direction.image} alt={direction.alt} position={direction.position} priority /><p className="eyebrow">УЧЕБНЫЙ ЦЕНТР BEAUTY DETALI</p><dl><div><dt>Где</dt><dd>Санкт-Петербург, Владимирский проспект, 19</dd></div><div><dt>Формат</dt><dd>Индивидуально или в группе до 6 человек. Формат выбранного курса согласуем при записи.</dd></div><div><dt>Дата, длительность и стоимость</dt><dd>Уточните перед записью — школа подтвердит актуальные условия программы.</dd></div></dl><a className="button" href="#enquiry">Уточнить условия курса</a><a className="text-link" href="#curriculum">Перейти к программе</a></aside></section>
    <section className="audience-section content-grid wrap section"><div><p className="eyebrow">КОМУ ПОДОЙДЁТ</p><h2>{direction.image === "makeup" ? "Ваше лицо. Ваши привычки." : "Начните со своей задачи."}</h2></div><div className="editorial-copy"><p className="section-lead">{course.audience}</p><p className="scope-note">{course.scopeNote}</p></div></section>
    <section className="curriculum-band" id="curriculum"><div className="content-grid wrap section"><div><p className="eyebrow">СОДЕРЖАНИЕ КУРСА</p><h2>Что будете<br />изучать.</h2><p className="inner-section-intro">Последовательность учебных задач. Точное расписание занятий и условия практики согласуются со школой.</p></div><ol className="curriculum-list">{course.modules.map((module, index) => <li key={module.title}><span className="step-index" aria-hidden="true">0{index + 1}</span><h3>{module.title}</h3><p>{module.text}</p></li>)}</ol></div></section>
    <section className="course-practice content-grid wrap section"><div><p className="eyebrow">ПРИМЕНЕНИЕ НА ЗАНЯТИЯХ</p><h2>{direction.image === "makeup" ? "Разберите свой макияж." : "Как устроена практика."}</h2><p className="inner-section-intro">{course.practice}</p><ul className="practice-tasks" aria-label="Учебные задачи">{course.practiceTasks.map(task => <li key={task.title}><h3>{task.title}</h3><p>{task.text}</p></li>)}</ul><a className="text-link" href={pagePath("/o-shkole")}>Подробнее о подходе школы</a></div><Photo photo={supportPhotos[direction.image]} className="course-practice-image" /></section>
    <Questions title={course.shortTitle} items={course.questions} />
    <section className="course-next content-grid wrap"><div><p className="eyebrow">ЕСЛИ НУЖНА ДРУГАЯ ПРОГРАММА</p><h2>{course.nextStep.title}</h2></div><div className="editorial-copy"><p>{course.nextStep.text}</p><a className="text-link" href={pagePath(direction.path)}>{direction.title}: выбор обучения</a></div></section>
    <Enquiry title="Уточните условия и запишитесь." text={`Напишите название «${course.shortTitle}», расскажите о своём опыте и удобном графике. Перед записью запросите актуальные стоимость, длительность, состав программы и сведения о выдаваемом документе.`} />
  </main></>;
}

export const informationalPages = {
  "/vse-kursy": { title: "Курсы бьюти-профессий в Санкт-Петербурге", description: "Каталог Beauty Detali School: парикмахеры, колористика, маникюр, визаж, брови и ресницы. Выберите направление и изучите программу курса в СПб." },
  "/o-shkole": { title: "О школе Beauty Detali в Санкт-Петербурге", description: "Как проходит обучение в Beauty Detali School: опытные преподаватели, группы до 6 человек, практика, материалы и своё рабочее место. Санкт-Петербург." },
  "/contacts": { title: "Контакты Beauty Detali School в Санкт-Петербурге", description: "Beauty Detali School в СПб: Владимирский проспект, 19, ТЦ «Владимирский пассаж», 3-й этаж. Метро Владимирская и Достоевская. Телефон +7 911 921-30-19." },
} as const;

export function CatalogPage() {
  const meta = informationalPages["/vse-kursy"];
  const crumbs = [catalogCrumb];
  return <><PageSchema {...meta} path="/vse-kursy" crumbs={crumbs} type="CollectionPage" extra={[
    { "@type": "ItemList", name: "Программы обучения Beauty Detali School", itemListElement: courses.map((course, index) => ({ "@type": "ListItem", position: index + 1, name: course.shortTitle, url: canonicalUrl(course.path) })) },
  ]} /><main id="main" className="inner-page catalog-page"><Breadcrumbs items={crumbs} /><section className="catalog-hero content-grid wrap"><div><p className="eyebrow">КАТАЛОГ ОБУЧЕНИЯ</p><h1>{meta.title}</h1></div><div className="editorial-copy"><p className="inner-lead">Выбираете первую профессию, новую технику или занятие для себя? Начните с направления. На его странице — различия программ и ответы на вопросы, а на странице курса — конкретные темы и практика.</p><p>Занятия проходят в центре Петербурга, в одной минуте от станций «Владимирская» и «Достоевская».</p></div></section>
    <nav className="catalog-jumps wrap" aria-label="Направления в каталоге">{directions.map(direction => <a key={direction.path} href={`#${direction.image}`}>{direction.title}</a>)}</nav>
    {directions.map(direction => <section key={direction.path} className="catalog-direction content-grid wrap section" id={direction.image}><div><a href={pagePath(direction.path)}><figure><CourseImage image={direction.image} alt={direction.alt} position={direction.position} /></figure><h2>{direction.title}</h2></a><p>{direction.detail}</p><a className="text-link" href={pagePath(direction.path)}>Как выбрать обучение</a></div><div>{courses.filter(course => course.direction === direction.path).map(course => <CourseLink key={course.path} course={course} />)}</div></section>)}
    <Enquiry title="Не нашли подходящую задачу?" text="Расскажите школе, что хотите освоить и какой опыт у вас уже есть. Кроме представленных программ, можно обсудить обучение отдельной технике или индивидуальную программу с наставником." />
  </main></>;
}

export function AboutPage() {
  const meta = informationalPages["/o-shkole"];
  const crumbs = [{ name: "О школе", path: "/o-shkole" }];
  return <><PageSchema {...meta} path="/o-shkole" crumbs={crumbs} type="AboutPage" /><main id="main" className="inner-page about-page"><Breadcrumbs items={crumbs} /><section className="inner-hero content-grid wrap"><div><p className="eyebrow">ШКОЛА МАСТЕРОВ КРАСИВОГО БИЗНЕСА</p><h1>Beauty Detali School в Санкт-Петербурге</h1><p className="inner-lead">Мы учим технике и работе с человеком. Задача мастера — не только выполнить услугу, но и понять запрос, объяснить своё решение и выстроить доверительное общение.</p></div><figure className="about-cover"><img src={assetPath("/images/studio-light-refined-1200.webp")} srcSet={`${assetPath("/images/studio-light-refined-480.webp")} 480w, ${assetPath("/images/studio-light-refined-1200.webp")} 1200w`} sizes="(max-width: 820px) calc(100vw - 40px), 50vw" alt="Пространство студии бренда Beauty Detali" width="1080" height="1080" fetchPriority="high" /><figcaption>Студия бренда Beauty Detali</figcaption></figure></section>
    <section className="section content-grid wrap"><div><p className="eyebrow">ПРАКТИКА И ВНИМАНИЕ</p><h2>Школа с опытом<br />преподавания.</h2></div><div className="editorial-copy"><p>Занятия ведут практикующие специалисты с опытом преподавания. Наставник объясняет материал, показывает приём и разбирает вашу работу. Для школы важны и профессиональные навыки преподавателя, и его умение учить.</p><dl className="about-facts"><div><dt>До 6 человек</dt><dd>в учебной группе. Есть индивидуальный формат.</dd></div><div><dt>Своё рабочее место</dt><dd>у каждого ученика, в пространстве, приближенном к салонным условиям.</dd></div><div><dt>Расходные материалы</dt><dd>предоставляет школа; условия по личным инструментам уточняются перед курсом.</dd></div></dl></div></section>
    <section className="inner-programs-band" id="learning"><div className="section content-grid wrap"><div><p className="eyebrow">КАК УСТРОЕН УЧЕБНЫЙ ПРОЦЕСС</p><h2>Объяснение.<br />Отработка.<br />Обратная связь.</h2></div><div className="editorial-copy"><p>Для учебных задач используются манекены, тренировочные материалы и модели — в зависимости от направления и этапа подготовки. Состав практики указан на странице конкретной программы.</p><p>Можно обсудить индивидуальную программу с наставником. Дату старта и график согласовываем при записи: так обучение можно сопоставить с вашей занятостью и исходным уровнем.</p><p>Кроме профессиональной техники, школа уделяет внимание сервису, этике общения и личному бренду. Учимся объяснять ценность своей работы без давления на клиента.</p><a className="text-link" href={pagePath("/vse-kursy")}>Выбрать направление и программу</a></div></div></section>
    <section className="section content-grid wrap"><div><p className="eyebrow">РУКОВОДИТЕЛЬ БРЕНДА</p><h2>Наталья<br />Горохова</h2><p className="inner-section-intro">Действующий стилист-парикмахер.<br />25 лет в профессии.</p></div><div className="editorial-copy"><p>Под брендом Detali работают школа мастеров красивого бизнеса и сеть студий красоты бизнес-класса. Школа сохраняет собственную задачу — последовательное обучение с профессиональными наставниками.</p><p>Опыт работы с клиентами важен для учебных тем: консультации, профессиональной этики и развития личного бренда. При этом обучение не сводится к наблюдению за работой салона.</p><a className="text-link" href="https://taplink.cc/beauty_detali" target="_blank" rel="noreferrer">Студии Beauty Detali</a></div></section>
    <SchoolMoments />
    <Questions title="До первого занятия" items={[
      { question: "Можно ли познакомиться со школой бесплатно?", answer: "Да, можно записаться на бесплатное пробное занятие: познакомиться с преподавателем, попробовать инструмент и задать вопросы. Инструмент для пробного занятия предоставляет школа." },
      { question: "Какой документ выдают после курса?", answer: "Это нужно уточнить по конкретной программе до записи. Запросите название документа, условия его получения и сведения об образовательной организации." },
      { question: "Где посмотреть сведения об организации?", answer: "Ссылка на раздел с документами действующей школы размещена внизу сайта. Перед заключением договора запросите актуальные сведения и условия выбранного курса у школы." },
    ]} /><Enquiry title="Начните с знакомства со школой." text="Запишитесь на бесплатное пробное занятие, познакомьтесь с преподавателем и задайте вопросы о выбранной профессии. Время занятия согласуем заранее." />
  </main></>;
}

export function ContactsPage() {
  const meta = informationalPages["/contacts"];
  const crumbs = [{ name: "Контакты", path: "/contacts" }];
  return <><PageSchema {...meta} path="/contacts" crumbs={crumbs} type="ContactPage" /><main id="main" className="inner-page contacts-page"><Breadcrumbs items={crumbs} /><section className="contacts-hero content-grid wrap"><div><p className="eyebrow">ЦЕНТР САНКТ-ПЕТЕРБУРГА</p><h1>Контакты<br />Beauty Detali School</h1><p className="inner-lead">В одной минуте от «Владимирской» и «Достоевской». Запись на обучение и пробное занятие — по телефону или в сообществе школы.</p><a className="button" href={school.vk} target="_blank" rel="noreferrer">Написать во ВКонтакте</a></div><ContactDetails /></section>
    <section className="section content-grid wrap route-section"><div><p className="eyebrow">КАК НАС НАЙТИ</p><h2>От метро<br />до учебного центра.</h2><a className="text-link" href={school.map} target="_blank" rel="noreferrer">Маршрут от вашего местоположения</a></div><ol className="decision-list"><li><span className="step-index" aria-hidden="true">01</span><div><h3>Владимирская или Достоевская</h3><p>Станции соединены переходом. Выберите ту, до которой удобнее добираться по вашей линии метро.</p></div></li><li><span className="step-index" aria-hidden="true">02</span><div><h3>Владимирский проспект, 19</h3><p>Учебный центр находится в ТЦ «Владимирский пассаж». Ссылка на карту поможет построить маршрут до здания.</p></div></li><li><span className="step-index" aria-hidden="true">03</span><div><h3>Третий этаж</h3><p>Поднимитесь на 3-й этаж. Если возникнут вопросы по входу или поиску школы, позвоните: {school.phone}.</p></div></li></ol></section>
    <section className="inner-programs-band"><div className="content-grid wrap section"><div><p className="eyebrow">ПЕРЕД ВИЗИТОМ</p><h2>Согласуйте<br />время занятия.</h2></div><div className="editorial-copy"><p>Перед посещением напишите или позвоните школе. Сообщите, какое направление вас интересует, есть ли опыт и когда удобно прийти.</p><p>Для бесплатного пробного занятия инструмент предоставит школа. Если вы идёте на полный курс, заранее уточните расписание, комплектацию и список того, что нужно взять с собой.</p><a className="text-link" href={pagePath("/vse-kursy")}>Сначала посмотреть программы</a></div></div></section>
    <Questions title="Вопросы о посещении" items={[
      { question: "Где находится школа Beauty Detali?", answer: "В Санкт-Петербурге, на Владимирском проспекте, 19, в ТЦ «Владимирский пассаж», на 3-м этаже. В одной минуте от метро «Владимирская» и «Достоевская»." },
      { question: "По какому номеру записаться на курсы?", answer: "Позвоните +7 911 921-30-19. Также можно написать в сообщество Beauty Detali School во ВКонтакте или на beauty.detali.school@mail.ru." },
      { question: "Можно ли просто прийти на пробное занятие?", answer: "Лучше сначала согласовать время со школой, чтобы преподаватель мог провести занятие и ответить на ваши вопросы." },
    ]} />
  </main></>;
}
