import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const techniques = [
  {
    number: "01",
    title: "Дыхание 4-7-8",
    tagline: "Быстро снижает пульс",
    duration: "3–5 минут",
    description:
      "Техника активирует парасимпатическую нервную систему и переключает тело из режима стресса в режим покоя за несколько минут.",
    steps: [
      "Сядьте удобно, спина прямая. Выдохните весь воздух.",
      "Медленно вдохните через нос, считая до 4.",
      "Задержите дыхание на счёт 7.",
      "Медленно выдохните через рот на счёт 8.",
      "Повторите цикл 4 раза. Не торопитесь.",
    ],
  },
  {
    number: "02",
    title: "Метод 5-4-3-2-1",
    tagline: "Возвращает в настоящее",
    duration: "5–7 минут",
    description:
      "Техника заземления через органы чувств. Помогает прервать поток тревожных мыслей и вернуть внимание к реальности здесь и сейчас.",
    steps: [
      "Назовите 5 вещей, которые вы ВИДИТЕ вокруг.",
      "Назовите 4 вещи, которые вы можете ПОТРОГАТЬ.",
      "Назовите 3 звука, которые вы СЛЫШИТЕ.",
      "Назовите 2 запаха, которые вы ЧУВСТВУЕТЕ или помните.",
      "Назовите 1 вкус, который вы ОЩУЩАЕТЕ сейчас.",
    ],
  },
  {
    number: "03",
    title: "Диафрагмальное дыхание",
    tagline: "Успокаивает нервную систему",
    duration: "2–4 минуты",
    description:
      "Глубокое «брюшное» дыхание стимулирует блуждающий нерв и снижает уровень кортизола. Самая простая и доступная техника.",
    steps: [
      "Положите одну руку на грудь, другую — на живот.",
      "Вдохните через нос — поднимается рука на животе, грудь не двигается.",
      "Задержите дыхание на 2–3 секунды.",
      "Медленно выдыхайте через сжатые губы 4–6 секунд.",
      "Повторите 6–10 раз, фокусируясь на животе.",
    ],
  },
  {
    number: "04",
    title: "Прогрессивная релаксация",
    tagline: "Снимает мышечное напряжение",
    duration: "10–15 минут",
    description:
      "Поочерёдное напряжение и расслабление групп мышц. Тело расслабляется — тревога отступает.",
    steps: [
      "Лягте или сядьте максимально удобно. Закройте глаза.",
      "Ступни: напрягите на 5 секунд, резко отпустите.",
      "Продвигайтесь вверх: икры → бёдра → живот → руки → лицо.",
      "На каждую группу — 5 с напряжения, 15 с расслабления.",
      "Завершите тремя глубокими медленными вдохами.",
    ],
  },
  {
    number: "05",
    title: "Холодная вода",
    tagline: "Мгновенный эффект",
    duration: "1–2 минуты",
    description:
      "Погружение лица в холодную воду активирует нырятельный рефлекс — мощный механизм, который моментально снижает ЧСС.",
    steps: [
      "Наберите таз или большую миску с холодной водой (со льдом — лучше).",
      "Задержите дыхание и погрузите лицо на 15–30 секунд.",
      "Нет миски — умойтесь очень холодной водой или приложите лёд к вискам.",
      "Повторите 2–3 раза с небольшим перерывом.",
      "После — выпейте стакан воды, посидите спокойно минуту.",
    ],
  },
  {
    number: "06",
    title: "Письмо тревоге",
    tagline: "Структурирует хаос мыслей",
    duration: "7–10 минут",
    description:
      "Перенос тревожных мыслей на бумагу снижает их эмоциональный заряд. Мозг перестаёт «жевать» одно и то же по кругу.",
    steps: [
      "Возьмите бумагу и ручку. Телефон — не подходит.",
      "Напишите: «Я сейчас тревожусь о...» — и пишите без остановки 5 минут.",
      "Прочитайте написанное.",
      "Обведите кружком то, на что вы реально можете повлиять.",
      "Для каждого пункта напишите одно действие, которое можно сделать сегодня.",
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
      { score: "В", label: "Учащённый пульс или поверхностное дыхание" },
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
      { score: "Г", label: "Страх, паника, ощущение потери контроля" },
    ],
  },
  {
    number: "04",
    label: "Контакт с реальностью",
    options: [
      { score: "А", label: "Полностью в моменте" },
      { score: "Б", label: "Мысли немного уходят" },
      { score: "В", label: "Трудно сфокусироваться на происходящем" },
      { score: "Г", label: "Ощущение нереальности, отстранённости" },
    ],
  },
];

const results = [
  {
    range: "Все ответы А",
    level: "Спокойно",
    description: "Вы в ресурсном состоянии.",
    technique: "Диафрагмальное дыхание",
    page: "стр. 8",
  },
  {
    range: "Преимущественно Б",
    level: "Лёгкое напряжение",
    description: "Есть фоновое беспокойство.",
    technique: "Метод 5-4-3-2-1",
    page: "стр. 7",
  },
  {
    range: "Преимущественно В",
    level: "Выраженная тревога",
    description: "Тревога ощутима, тело напряжено.",
    technique: "Дыхание 4-7-8",
    page: "стр. 6",
  },
  {
    range: "Есть ответы Г",
    level: "Острая тревога",
    description: "Нужна быстрая физиологическая помощь.",
    technique: "Холодная вода",
    page: "стр. 10",
  },
];

const toc = [
  { page: "1", title: "Обложка" },
  { page: "2", title: "Оглавление" },
  { page: "3", title: "Тревожиться — это нормально" },
  { page: "4", title: "Опросник «Как вы себя чувствуете?»" },
  { page: "5", title: "Результат опросника" },
  { page: "6", title: "Техника 01: Дыхание 4-7-8" },
  { page: "7", title: "Техника 02: Метод 5-4-3-2-1" },
  { page: "8", title: "Техника 03: Диафрагмальное дыхание" },
  { page: "9", title: "Техника 04: Прогрессивная релаксация" },
  { page: "10", title: "Техника 05: Холодная вода" },
  { page: "11", title: "Техника 06: Письмо тревоге" },
];

const PAGE_W = "105mm";
const PAGE_H = "148mm";

const pageStyle: React.CSSProperties = {
  width: PAGE_W,
  height: PAGE_H,
  boxSizing: "border-box",
  overflow: "hidden",
  position: "relative",
  fontFamily: "'Inter', sans-serif",
  background: "#fff",
  flexShrink: 0,
};

export default function Booklet() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        .bk-grid {
          display: grid;
          grid-template-columns: 105mm 105mm;
          gap: 0;
        }

        .bk-page {
          border: 0.5mm dashed #b0b0b0;
        }

        @media print {
          .no-print { display: none !important; }
          html, body {
            margin: 0;
            padding: 0;
            background: #fff;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .bk-wrapper {
            padding: 0;
            background: #fff;
            min-height: unset;
          }
          .bk-grid {
            width: 210mm;
          }
        }

        @media screen {
          .bk-wrapper {
            background: #e8e5e0;
            min-height: 100vh;
            padding: 32px 0 48px;
            display: flex;
            justify-content: center;
          }
          .bk-grid {
            max-width: 210mm;
            box-shadow: 0 4px 32px rgba(0,0,0,0.12);
          }
          .bk-page {
            box-sizing: border-box;
          }
        }
      `}</style>

      {/* Навбар — только на экране */}
      <div className="no-print border-b border-stone-200 px-6 py-3 flex items-center justify-between bg-white sticky top-0 z-10">
        <button
          onClick={() => navigate("/")}
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors flex items-center gap-1.5"
        >
          <Icon name="ArrowLeft" size={12} />
          Назад
        </button>
        <span className="text-xs text-stone-400">✂ Вырежьте карточки по пунктирной линии после печати</span>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 text-xs bg-stone-900 text-white px-4 py-2 rounded-sm hover:bg-stone-700 transition-colors"
        >
          <Icon name="Printer" size={12} />
          Распечатать
        </button>
      </div>

      <div className="bk-wrapper">
        <div className="bk-grid">

          {/* ══ СТРАНИЦА 1 — Обложка ══ */}
          <div
            className="bk-page"
            style={{ ...pageStyle, background: "#111", padding: "26px 22px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
          >
            <div>
              <p style={{ color: "#555", fontSize: "7px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "26px" }}>
                Страница 1 из 11
              </p>
              <div style={{ width: "34px", height: "2px", background: "#c9a84c", marginBottom: "16px" }} />
              <p style={{ color: "#c9a84c", fontSize: "8px", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" }}>
                Острая тревога
              </p>
              <h1 style={{ color: "#fff", fontSize: "18px", lineHeight: "1.35", marginBottom: "16px", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                Снижение тревожности у подростков за счёт эффективных практик
              </h1>
              <p style={{ color: "#666", fontSize: "9.5px", lineHeight: "1.65" }}>
                Практическое пособие с опросником, техниками самопомощи и рекомендациями
              </p>
            </div>
            <div>
              <div style={{ width: "100%", height: "1px", background: "#2a2a2a", marginBottom: "12px" }} />
              <p style={{ color: "#888", fontSize: "9px", marginBottom: "3px" }}>Зуева Дарья</p>
              <p style={{ color: "#555", fontSize: "8.5px" }}>Великий Новгород · 2026</p>
            </div>
          </div>

          {/* ══ СТРАНИЦА 2 — Оглавление ══ */}
          <div
            className="bk-page"
            style={{ ...pageStyle, padding: "22px 22px", display: "flex", flexDirection: "column" }}
          >
            <p style={{ fontSize: "7px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "14px" }}>
              Страница 2 из 11
            </p>
            <div style={{ fontSize: "20px", color: "#111", marginBottom: "16px", paddingBottom: "10px", borderBottom: "2px solid #111", fontFamily: "'Playfair Display', serif" }}>
              Оглавление
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "7px" }}>
              {toc.map((item) => (
                <div key={item.page} style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontSize: "8px", color: "#bbb", minWidth: "16px", fontWeight: 600 }}>{item.page}</span>
                  <div style={{ flex: 1, borderBottom: "1px dotted #ddd", marginBottom: "2px", marginLeft: "2px", marginRight: "4px" }} />
                  <span style={{ fontSize: "9px", color: "#333" }}>{item.title}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "7.5px", color: "#ccc", marginTop: "14px", lineHeight: "1.55" }}>
              ✂ После печати вырежьте карточки и сложите по порядку.
            </p>
          </div>

          {/* ══ СТРАНИЦА 3 — Тревожиться — нормально ══ */}
          <div
            className="bk-page"
            style={{ ...pageStyle, padding: "22px 22px", display: "flex", flexDirection: "column" }}
          >
            <p style={{ fontSize: "7px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "14px" }}>
              Страница 3 из 11
            </p>
            <div style={{ fontSize: "17px", color: "#111", marginBottom: "14px", paddingBottom: "10px", borderBottom: "2px solid #111", fontFamily: "'Playfair Display', serif", lineHeight: "1.3" }}>
              Тревожиться —<br />это нормально
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
              <p style={{ fontSize: "10px", color: "#444", lineHeight: "1.7" }}>
                Тревога — это не слабость и не болезнь. Это природный механизм защиты, который помогал людям выживать тысячи лет.
              </p>
              <p style={{ fontSize: "10px", color: "#444", lineHeight: "1.7" }}>
                Когда ты тревожишься, мозг посылает сигнал тревоги — и тело готовится действовать. Сердце бьётся чаще, мышцы напрягаются. Это просто реакция, не катастрофа.
              </p>
              <div style={{ background: "#faf9f5", borderLeft: "3px solid #c9a84c", padding: "9px 11px" }}>
                <p style={{ fontSize: "9.5px", color: "#555", lineHeight: "1.65", fontStyle: "italic" }}>
                  Проблема не в тревоге, а в том, что она мешает жить. Техники этой книжки помогут снизить её до комфортного уровня.
                </p>
              </div>
              <p style={{ fontSize: "10px", color: "#444", lineHeight: "1.7" }}>
                По данным ВОЗ, каждый четвёртый подросток переживает тревогу регулярно. Ты не один — и это можно изменить.
              </p>
            </div>
          </div>

          {/* ══ СТРАНИЦА 4 — Опросник ══ */}
          <div
            className="bk-page"
            style={{ ...pageStyle, padding: "22px 22px", display: "flex", flexDirection: "column" }}
          >
            <p style={{ fontSize: "7px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "12px" }}>
              Страница 4 из 11 · Опросник
            </p>
            <div style={{ fontSize: "17px", color: "#111", marginBottom: "6px", paddingBottom: "8px", borderBottom: "2px solid #111", fontFamily: "'Playfair Display', serif" }}>
              Как вы себя чувствуете?
            </div>
            <p style={{ fontSize: "8.5px", color: "#999", marginBottom: "11px", lineHeight: "1.5" }}>
              Обведите один ответ в каждом блоке — ближайший к вашему состоянию прямо сейчас.
            </p>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
              {questions.map((q) => (
                <div key={q.number} style={{ borderLeft: "2px solid #e5e5e5", paddingLeft: "9px" }}>
                  <p style={{ fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: "#bbb", marginBottom: "5px", fontWeight: 600 }}>{q.label}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px 8px" }}>
                    {q.options.map((opt) => (
                      <div key={opt.score} style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
                        <div style={{ width: "11px", height: "11px", borderRadius: "50%", border: "1px solid #ccc", flexShrink: 0, marginTop: "1px" }} />
                        <p style={{ fontSize: "8px", color: "#555", lineHeight: "1.4" }}>
                          <span style={{ color: "#bbb", fontWeight: 600 }}>{opt.score}. </span>
                          {opt.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "7.5px", color: "#ccc", marginTop: "10px" }}>
              → Результат на стр. 5
            </p>
          </div>

          {/* ══ СТРАНИЦА 5 — Результат ══ */}
          <div
            className="bk-page"
            style={{ ...pageStyle, padding: "22px 22px", display: "flex", flexDirection: "column" }}
          >
            <p style={{ fontSize: "7px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "12px" }}>
              Страница 5 из 11 · Результат
            </p>
            <div style={{ fontSize: "20px", color: "#111", marginBottom: "14px", paddingBottom: "10px", borderBottom: "2px solid #111", fontFamily: "'Playfair Display', serif" }}>
              Ваш результат
            </div>
            <p style={{ fontSize: "9px", color: "#888", marginBottom: "13px", lineHeight: "1.5" }}>
              Найдите свой вариант и перейдите к рекомендованной технике.
            </p>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
              {results.map((r) => (
                <div key={r.level} style={{ border: "1px solid #ebebeb", overflow: "hidden" }}>
                  <div style={{ background: "#f8f8f6", borderBottom: "1px solid #ebebeb", padding: "5px 10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "7.5px", color: "#aaa" }}>{r.range}</span>
                    <span style={{ fontSize: "12px", color: "#111", fontFamily: "'Playfair Display', serif" }}>{r.level}</span>
                  </div>
                  <div style={{ padding: "5px 10px" }}>
                    <p style={{ fontSize: "8px", color: "#888", marginBottom: "3px" }}>{r.description}</p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "9.5px", color: "#222", fontWeight: 500 }}>→ {r.technique}</span>
                      <span style={{ fontSize: "8px", color: "#bbb" }}>{r.page}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "7.5px", color: "#ccc", marginTop: "12px", lineHeight: "1.5" }}>
              Если тревога не проходит несколько недель — обратитесь к специалисту.
            </p>
          </div>

          {/* ══ СТРАНИЦЫ 6–11 — Техники ══ */}
          {techniques.map((t, i) => (
            <div
              key={t.number}
              className="bk-page"
              style={{ ...pageStyle, padding: "22px 22px", display: "flex", flexDirection: "column" }}
            >
              <p style={{ fontSize: "7px", letterSpacing: "3px", textTransform: "uppercase", color: "#bbb", marginBottom: "12px" }}>
                Страница {i + 6} из 11 · Техника {t.number}
              </p>
              <div style={{ marginBottom: "12px", paddingBottom: "9px", borderBottom: "2px solid #111" }}>
                <p style={{ fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: "#bbb", marginBottom: "4px" }}>
                  {t.tagline} · {t.duration}
                </p>
                <div style={{ fontSize: "19px", color: "#111", lineHeight: "1.2", fontFamily: "'Playfair Display', serif" }}>
                  {t.title}
                </div>
              </div>
              <p style={{ fontSize: "9.5px", color: "#666", lineHeight: "1.65", marginBottom: "12px" }}>
                {t.description}
              </p>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "7.5px", letterSpacing: "2px", textTransform: "uppercase", color: "#bbb", marginBottom: "8px", fontWeight: 600 }}>
                  Шаги
                </p>
                <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
                  {t.steps.map((step, idx) => (
                    <li key={idx} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{
                        minWidth: "18px", height: "18px", borderRadius: "50%",
                        background: "#111", color: "#fff", fontSize: "8px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontWeight: 700, flexShrink: 0,
                      }}>{idx + 1}</span>
                      <span style={{ fontSize: "9.5px", color: "#333", lineHeight: "1.6", paddingTop: "2px" }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div style={{ marginTop: "12px", borderTop: "1px solid #efefef", paddingTop: "8px", display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "7.5px", color: "#ccc" }}>Зуева Дарья · Великий Новгород</span>
                <span style={{ fontSize: "7.5px", color: "#ccc" }}>2026</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
