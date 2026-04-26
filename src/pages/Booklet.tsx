import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const techniques = [
  {
    number: "01",
    title: "Дыхание 4-7-8",
    tagline: "Быстро снижает пульс",
    description:
      "Техника активирует парасимпатическую нервную систему и переключает тело из режима стресса в режим покоя.",
    steps: [
      "Сядьте удобно, выдохните весь воздух.",
      "Медленно вдохните через нос на счёт 4.",
      "Задержите дыхание на счёт 7.",
      "Выдыхайте через рот на счёт 8.",
      "Повторите цикл 4 раза.",
    ],
  },
  {
    number: "02",
    title: "Метод 5-4-3-2-1",
    tagline: "Возвращает в настоящее",
    description:
      "Техника заземления через органы чувств. Прерывает поток тревожных мыслей и возвращает внимание к реальности.",
    steps: [
      "5 вещей, которые вы ВИДИТЕ вокруг.",
      "4 вещи, которые вы можете ПОТРОГАТЬ.",
      "3 звука, которые вы СЛЫШИТЕ.",
      "2 запаха, которые вы ЧУВСТВУЕТЕ.",
      "1 вкус, который вы ОЩУЩАЕТЕ.",
    ],
  },
  {
    number: "03",
    title: "Диафрагмальное дыхание",
    tagline: "Успокаивает нервную систему",
    description:
      "Глубокое «брюшное» дыхание стимулирует блуждающий нерв и снижает уровень кортизола.",
    steps: [
      "Руку на живот, руку на грудь.",
      "Вдыхайте носом — поднимается живот.",
      "Задержите дыхание на 2–3 секунды.",
      "Медленно выдыхайте через губы 4–6 с.",
      "Повторите 6–10 раз.",
    ],
  },
  {
    number: "04",
    title: "Прогрессивная релаксация",
    tagline: "Снимает мышечное напряжение",
    description:
      "Поочерёдное напряжение и расслабление мышц. Тело расслабляется — тревога отступает.",
    steps: [
      "Лягте или сядьте удобно, закройте глаза.",
      "Ступни: напрягите 5 с, отпустите.",
      "Продвигайтесь вверх: ноги → живот → руки → лицо.",
      "Каждая группа — 5 с напряжения, 15 с отдыха.",
      "Завершите тремя глубокими вдохами.",
    ],
  },
  {
    number: "05",
    title: "Холодная вода",
    tagline: "Мгновенный эффект",
    description:
      "Погружение лица в холодную воду активирует нырятельный рефлекс — моментально снижает пульс.",
    steps: [
      "Наберите миску с холодной водой (со льдом).",
      "Задержите дыхание, погрузите лицо на 15–30 с.",
      "Нет миски — умойтесь очень холодной водой.",
      "Повторите 2–3 раза с небольшим перерывом.",
      "После — выпейте стакан воды.",
    ],
  },
  {
    number: "06",
    title: "Письмо тревоге",
    tagline: "Структурирует хаос мыслей",
    description:
      "Перенос тревожных мыслей на бумагу снижает их эмоциональный заряд. Мозг перестаёт «жевать» одно и то же.",
    steps: [
      "Возьмите бумагу и ручку (не телефон).",
      "Пишите «Я сейчас тревожусь о...» — без остановки 5 минут.",
      "Прочитайте написанное.",
      "Обведите то, на что можете повлиять.",
      "Напишите одно конкретное действие на сегодня.",
    ],
  },
];

const questions = [
  {
    number: "01",
    label: "Тело",
    options: [
      { score: "А", label: "Всё спокойно, мышцы расслаблены" },
      { score: "Б", label: "Лёгкое напряжение в плечах или животе" },
      { score: "В", label: "Учащённый пульс, поверхностное дыхание" },
      { score: "Г", label: "Сильное сердцебиение, дрожь, ком в горле" },
    ],
  },
  {
    number: "02",
    label: "Мысли",
    options: [
      { score: "А", label: "Ясно, легко сосредоточиться" },
      { score: "Б", label: "Немного рассеян, отвлекаюсь" },
      { score: "В", label: "Мысли скачут, трудно остановиться" },
      { score: "Г", label: "Хаос, тревожные мысли не прекращаются" },
    ],
  },
  {
    number: "03",
    label: "Эмоции",
    options: [
      { score: "А", label: "Спокойствие или нейтральность" },
      { score: "Б", label: "Лёгкое беспокойство или раздражение" },
      { score: "В", label: "Выраженная тревога, напряжение" },
      { score: "Г", label: "Страх, паника, потеря контроля" },
    ],
  },
  {
    number: "04",
    label: "Контакт с реальностью",
    options: [
      { score: "А", label: "Полностью в моменте" },
      { score: "Б", label: "Мысли немного уходят" },
      { score: "В", label: "Трудно сфокусироваться" },
      { score: "Г", label: "Ощущение нереальности, отстранённости" },
    ],
  },
];

const results = [
  { range: "Все ответы А", level: "Спокойно", technique: "Диафрагмальное дыхание", page: "стр. 8" },
  { range: "Преимущественно Б", level: "Лёгкое напряжение", technique: "Метод 5-4-3-2-1", page: "стр. 7" },
  { range: "Преимущественно В", level: "Выраженная тревога", technique: "Дыхание 4-7-8", page: "стр. 6" },
  { range: "Есть ответы Г", level: "Острая тревога", technique: "Холодная вода", page: "стр. 10" },
];

const toc = [
  { page: "1", title: "Обложка" },
  { page: "2", title: "Оглавление" },
  { page: "3", title: "Тревожиться — это нормально" },
  { page: "4", title: "Как вы себя чувствуете? (опросник)" },
  { page: "5", title: "Результат опросника" },
  { page: "6", title: "Техника: Дыхание 4-7-8" },
  { page: "7", title: "Техника: Метод 5-4-3-2-1" },
  { page: "8", title: "Техника: Диафрагмальное дыхание" },
  { page: "9", title: "Техника: Прогрессивная релаксация" },
  { page: "10", title: "Техника: Холодная вода" },
  { page: "11", title: "Техника: Письмо тревоге" },
];

export default function Booklet() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .bk-page {
          width: 105mm;
          min-height: 148mm;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          background: #fff;
          position: relative;
        }

        .bk-serif {
          font-family: 'Playfair Display', serif;
        }

        @media print {
          .no-print { display: none !important; }
          html, body { margin: 0; padding: 0; background: #fff; }

          .bk-grid {
            display: grid;
            grid-template-columns: 105mm 105mm;
            width: 210mm;
            gap: 0;
          }

          .bk-page {
            border: 0.4mm dashed #aaa;
            page-break-inside: avoid;
          }

          .screen-hint { display: none !important; }
        }

        @media screen {
          .bk-grid {
            display: grid;
            grid-template-columns: repeat(2, 380px);
            gap: 20px;
            max-width: 820px;
            margin: 0 auto;
            padding: 32px 20px;
          }

          .bk-page {
            border: 1.5px dashed #c5c5c5;
            border-radius: 4px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          }
        }
      `}</style>

      {/* Nav — screen only */}
      <div className="no-print border-b border-stone-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
        <button
          onClick={() => navigate("/")}
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors flex items-center gap-1.5"
        >
          <Icon name="ArrowLeft" size={12} />
          Назад
        </button>
        <span className="text-xs text-stone-400">✂ Вырежьте каждую карточку по пунктирной линии</span>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 text-xs bg-stone-900 text-white px-4 py-2 rounded-sm hover:bg-stone-700 transition-colors"
        >
          <Icon name="Printer" size={12} />
          Распечатать
        </button>
      </div>

      <div style={{background: '#f0eeeb', minHeight: '100vh', paddingBottom: '40px'}}>
        <div className="bk-grid">

          {/* ─── СТРАНИЦА 1 · Обложка ─── */}
          <div className="bk-page" style={{background: '#111', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div>
              <p style={{color: '#666', fontSize: '7.5px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '28px'}}>
                Страница 1 · Мини-книжка
              </p>
              <div style={{width: '36px', height: '2px', background: '#c9a84c', marginBottom: '18px'}} />
              <p style={{color: '#c9a84c', fontSize: '8.5px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px'}}>
                Острая тревога
              </p>
              <h1 className="bk-serif" style={{color: '#fff', fontSize: '19px', lineHeight: '1.3', marginBottom: '18px'}}>
                Снижение тревожности у подростков за счёт эффективных практик
              </h1>
              <p style={{color: '#777', fontSize: '9.5px', lineHeight: '1.65'}}>
                Практическое пособие с опросником, техниками самопомощи и рекомендациями
              </p>
            </div>
            <div>
              <div style={{width: '100%', height: '1px', background: '#2a2a2a', marginBottom: '14px'}} />
              <p style={{color: '#888', fontSize: '9px', marginBottom: '3px'}}>Зуева Дарья</p>
              <p style={{color: '#555', fontSize: '8.5px'}}>Великий Новгород · 2026</p>
            </div>
          </div>

          {/* ─── СТРАНИЦА 2 · Оглавление ─── */}
          <div className="bk-page" style={{padding: '24px', display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '7.5px', letterSpacing: '3px', textTransform: 'uppercase', color: '#bbb', marginBottom: '14px'}}>
              Страница 2
            </p>
            <div className="bk-serif" style={{fontSize: '20px', color: '#111', marginBottom: '16px', paddingBottom: '10px', borderBottom: '2px solid #111'}}>
              Оглавление
            </div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '7px'}}>
              {toc.map((item) => (
                <div key={item.page} style={{display: 'flex', alignItems: 'baseline', gap: '6px'}}>
                  <span style={{fontSize: '8px', color: '#bbb', minWidth: '16px', fontWeight: 500}}>{item.page}</span>
                  <div style={{flex: 1, borderBottom: '1px dotted #ddd', marginBottom: '2px'}} />
                  <span style={{fontSize: '9px', color: '#333', textAlign: 'right', maxWidth: '220px'}}>{item.title}</span>
                </div>
              ))}
            </div>
            <p style={{fontSize: '8px', color: '#ccc', marginTop: '14px', lineHeight: '1.55'}}>
              ✂ Вырежьте карточки и сложите в порядке страниц.
            </p>
          </div>

          {/* ─── СТРАНИЦА 3 · Тревожиться — нормально ─── */}
          <div className="bk-page" style={{padding: '24px', display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '7.5px', letterSpacing: '3px', textTransform: 'uppercase', color: '#bbb', marginBottom: '14px'}}>
              Страница 3
            </p>
            <div className="bk-serif" style={{fontSize: '17px', color: '#111', marginBottom: '14px', paddingBottom: '10px', borderBottom: '2px solid #111', lineHeight: '1.3'}}>
              Тревожиться — это нормально
            </div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '11px'}}>
              <p style={{fontSize: '10px', color: '#444', lineHeight: '1.7'}}>
                Тревога — это не слабость и не болезнь. Это природный механизм защиты, который помогал людям выживать тысячи лет.
              </p>
              <p style={{fontSize: '10px', color: '#444', lineHeight: '1.7'}}>
                Когда ты тревожишься, мозг посылает сигнал опасности — тело готовится действовать. Сердце бьётся чаще, мышцы напрягаются. Это просто реакция, а не катастрофа.
              </p>
              <div style={{background: '#faf9f5', borderLeft: '3px solid #c9a84c', padding: '10px 12px', borderRadius: '2px'}}>
                <p style={{fontSize: '9.5px', color: '#555', lineHeight: '1.65', fontStyle: 'italic'}}>
                  Проблема не в тревоге, а в том, что она мешает жить. Техники в этой книжке помогут снизить её до комфортного уровня.
                </p>
              </div>
              <p style={{fontSize: '10px', color: '#444', lineHeight: '1.7'}}>
                По данным ВОЗ, каждый четвёртый подросток переживает тревогу регулярно. Ты не один — и это можно изменить.
              </p>
            </div>
          </div>

          {/* ─── СТРАНИЦА 4 · Опросник ─── */}
          <div className="bk-page" style={{padding: '24px', display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '7.5px', letterSpacing: '3px', textTransform: 'uppercase', color: '#bbb', marginBottom: '12px'}}>
              Страница 4 · Опросник
            </p>
            <div className="bk-serif" style={{fontSize: '17px', color: '#111', marginBottom: '6px', paddingBottom: '8px', borderBottom: '2px solid #111'}}>
              Как вы себя чувствуете?
            </div>
            <p style={{fontSize: '8.5px', color: '#999', marginBottom: '12px', lineHeight: '1.5'}}>
              Обведите один ответ в каждом блоке — тот, что ближе к вашему состоянию прямо сейчас.
            </p>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '9px'}}>
              {questions.map((q) => (
                <div key={q.number} style={{borderLeft: '2px solid #e5e5e5', paddingLeft: '9px'}}>
                  <p style={{fontSize: '7.5px', letterSpacing: '2px', textTransform: 'uppercase', color: '#bbb', marginBottom: '5px', fontWeight: 600}}>{q.label}</p>
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px 6px'}}>
                    {q.options.map((opt) => (
                      <div key={opt.score} style={{display: 'flex', alignItems: 'flex-start', gap: '5px'}}>
                        <div style={{width: '11px', height: '11px', borderRadius: '50%', border: '1px solid #ccc', flexShrink: 0, marginTop: '1px'}} />
                        <p style={{fontSize: '8px', color: '#555', lineHeight: '1.45'}}>
                          <span style={{color: '#bbb', fontWeight: 600}}>{opt.score}. </span>
                          {opt.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{fontSize: '8px', color: '#ccc', marginTop: '10px'}}>→ Результаты на следующей странице (стр. 5)</p>
          </div>

          {/* ─── СТРАНИЦА 5 · Результат ─── */}
          <div className="bk-page" style={{padding: '24px', display: 'flex', flexDirection: 'column'}}>
            <p style={{fontSize: '7.5px', letterSpacing: '3px', textTransform: 'uppercase', color: '#bbb', marginBottom: '12px'}}>
              Страница 5 · Результат
            </p>
            <div className="bk-serif" style={{fontSize: '20px', color: '#111', marginBottom: '16px', paddingBottom: '10px', borderBottom: '2px solid #111'}}>
              Результат
            </div>
            <p style={{fontSize: '9px', color: '#888', marginBottom: '14px', lineHeight: '1.5'}}>
              Найдите свой вариант и перейдите к рекомендованной технике.
            </p>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '9px'}}>
              {results.map((r) => (
                <div key={r.level} style={{border: '1px solid #ebebeb', borderRadius: '3px', overflow: 'hidden'}}>
                  <div style={{background: '#f8f8f6', borderBottom: '1px solid #ebebeb', padding: '5px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '8px', color: '#aaa'}}>{r.range}</span>
                    <span className="bk-serif" style={{fontSize: '12px', color: '#111'}}>{r.level}</span>
                  </div>
                  <div style={{padding: '6px 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '9.5px', color: '#222', fontWeight: 500}}>→ {r.technique}</span>
                    <span style={{fontSize: '8px', color: '#bbb'}}>{r.page}</span>
                  </div>
                </div>
              ))}
            </div>
            <p style={{fontSize: '8px', color: '#ccc', marginTop: '14px', lineHeight: '1.5'}}>
              Если тревога не проходит несколько недель — обратитесь к специалисту.
            </p>
          </div>

          {/* ─── СТРАНИЦЫ 6–11 · Техники ─── */}
          {techniques.map((t, i) => (
            <div key={t.number} className="bk-page" style={{padding: '24px', display: 'flex', flexDirection: 'column'}}>
              <p style={{fontSize: '7.5px', letterSpacing: '3px', textTransform: 'uppercase', color: '#bbb', marginBottom: '12px'}}>
                Страница {i + 6} · Техника {t.number}
              </p>
              <div style={{marginBottom: '13px', paddingBottom: '10px', borderBottom: '2px solid #111'}}>
                <p style={{fontSize: '8px', letterSpacing: '2px', textTransform: 'uppercase', color: '#bbb', marginBottom: '5px'}}>{t.tagline}</p>
                <div className="bk-serif" style={{fontSize: '20px', color: '#111', lineHeight: '1.2'}}>{t.title}</div>
              </div>
              <p style={{fontSize: '10px', color: '#666', lineHeight: '1.65', marginBottom: '13px'}}>{t.description}</p>
              <div style={{flex: 1}}>
                <p style={{fontSize: '7.5px', letterSpacing: '2px', textTransform: 'uppercase', color: '#bbb', marginBottom: '9px', fontWeight: 600}}>Шаги</p>
                <ol style={{listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px'}}>
                  {t.steps.map((step, idx) => (
                    <li key={idx} style={{display: 'flex', gap: '9px', alignItems: 'flex-start'}}>
                      <span style={{
                        minWidth: '19px', height: '19px', borderRadius: '50%',
                        background: '#111', color: '#fff', fontSize: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, flexShrink: 0
                      }}>{idx + 1}</span>
                      <span style={{fontSize: '10px', color: '#333', lineHeight: '1.6', paddingTop: '2px'}}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div style={{marginTop: '14px', borderTop: '1px solid #efefef', paddingTop: '9px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <span style={{fontSize: '7.5px', color: '#ccc'}}>Зуева Дарья · Великий Новгород</span>
                <span style={{fontSize: '7.5px', color: '#ccc'}}>2026</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
