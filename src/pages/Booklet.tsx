import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const questions = [
  {
    number: "01",
    label: "Тело",
    question: "Что сейчас происходит в теле?",
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
    question: "Как ведут себя мысли?",
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
    question: "Что чувствуете прямо сейчас?",
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
    question: "Насколько вы здесь и сейчас?",
    options: [
      { score: "А", label: "Полностью в моменте" },
      { score: "Б", label: "Немного «в голове», мысли уходят" },
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
    tip: "Для поддержания — 2 минуты глубокого дыхания животом.",
  },
  {
    range: "Преимущественно Б",
    level: "Лёгкое напряжение",
    description: "Есть фоновое беспокойство.",
    technique: "Метод 5-4-3-2-1",
    tip: "Верните себя в настоящий момент через органы чувств.",
  },
  {
    range: "Преимущественно В",
    level: "Выраженная тревога",
    description: "Тревога ощутима, тело напряжено.",
    technique: "Дыхание 4-7-8",
    tip: "Регулирует нервную систему за 3–4 минуты.",
  },
  {
    range: "Есть ответы Г",
    level: "Острая тревога",
    description: "Нужна быстрая физиологическая помощь.",
    technique: "Холодная вода",
    tip: "Активирует нырятельный рефлекс, моментально снижает пульс.",
  },
];

export default function Booklet() {
  const navigate = useNavigate();

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; }
          .print-page {
            width: 210mm;
            min-height: 297mm;
            padding: 20mm 18mm;
            box-sizing: border-box;
            page-break-after: always;
          }
        }
        @media screen {
          .print-page {
            max-width: 720px;
            margin: 0 auto;
            padding: 48px 40px;
          }
        }
      `}</style>

      {/* Nav bar — screen only */}
      <div className="no-print border-b border-stone-200 px-6 py-4 flex items-center justify-between bg-white sticky top-0 z-10">
        <button
          onClick={() => navigate("/")}
          className="text-xs text-stone-400 hover:text-stone-700 transition-colors flex items-center gap-1.5"
        >
          <Icon name="ArrowLeft" size={12} />
          Назад
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 text-xs bg-stone-900 text-white px-4 py-2 rounded-sm hover:bg-stone-700 transition-colors"
        >
          <Icon name="Printer" size={12} />
          Распечатать
        </button>
      </div>

      {/* Booklet content */}
      <div className="bg-stone-50 min-h-screen py-8 no-print-bg font-body">
        <div className="print-page bg-white shadow-sm">

          {/* Header */}
          <div className="border-b-2 border-stone-900 pb-6 mb-8">
            <p className="text-xs tracking-[0.25em] uppercase text-stone-400 mb-2 font-medium">
              Буклет-опросник
            </p>
            <h1 className="font-display text-4xl text-stone-900 leading-tight mb-1">
              Как вы сейчас?
            </h1>
            <p className="text-sm text-stone-500">
              Обведите один ответ в каждом блоке — тот, что ближе всего к вашему состоянию прямо сейчас.
            </p>
          </div>

          {/* Questions */}
          <div className="space-y-7 mb-10">
            {questions.map((q) => (
              <div key={q.number} className="border border-stone-200 rounded-sm p-5">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-display text-xs text-stone-300 pt-0.5 shrink-0 w-5">{q.number}</span>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-stone-400 font-medium mb-0.5">{q.label}</p>
                    <h2 className="font-display text-lg text-stone-900">{q.question}</h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 ml-9">
                  {q.options.map((opt) => (
                    <div key={opt.score} className="flex items-start gap-3">
                      {/* Checkbox circle */}
                      <div className="shrink-0 w-5 h-5 rounded-full border border-stone-400 mt-0.5" />
                      <p className="text-sm text-stone-700 leading-snug">
                        <span className="font-medium text-stone-400 mr-1">{opt.score}.</span>
                        {opt.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t-2 border-stone-900 pt-8 mb-6">
            <p className="text-xs tracking-[0.25em] uppercase text-stone-400 font-medium mb-4">
              Результат — найдите свой вариант
            </p>
          </div>

          {/* Results table */}
          <div className="space-y-3 mb-10">
            {results.map((r) => (
              <div key={r.level} className="flex items-start gap-0 border border-stone-200 rounded-sm overflow-hidden">
                <div className="shrink-0 w-36 bg-stone-50 border-r border-stone-200 px-4 py-4 flex flex-col justify-center">
                  <p className="text-xs text-stone-400 leading-tight mb-1">{r.range}</p>
                  <p className="font-display text-base text-stone-900">{r.level}</p>
                </div>
                <div className="flex-1 px-4 py-4">
                  <p className="text-xs text-stone-500 mb-1">{r.description}</p>
                  <p className="text-sm font-medium text-stone-900 mb-0.5">→ {r.technique}</p>
                  <p className="text-xs text-stone-500">{r.tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="border-t border-stone-100 pt-5">
            <p className="text-xs text-stone-300 leading-relaxed">
              Эти техники — первая помощь при тревоге. Они не заменяют работу со специалистом при хронической тревоге или тревожном расстройстве.
            </p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-stone-400 italic">Зуева Дарья · Великий Новгород · 2026</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}