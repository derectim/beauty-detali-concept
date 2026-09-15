import { pagePath } from "./site-config";

export default function NotFound() {
  return <main id="main" className="section wrap content-grid not-found"><div><p className="eyebrow">СТРАНИЦА НЕ НАЙДЕНА</p><h1>Давайте найдём<br />нужное обучение.</h1></div><div className="editorial-copy"><p>Возможно, в адресе есть ошибка или страница ещё не перенесена. Откройте каталог направлений или свяжитесь со школой — поможем найти программу.</p><div className="inner-actions"><a className="button" href={pagePath("/vse-kursy")}>Перейти к курсам</a><a className="text-link" href={pagePath("/contacts")}>Контакты школы</a></div></div></main>;
}
