import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const questions = [
  {
    id: "body",
    label: "Тело",
    question: "Что сейчас происходит в теле?",
    options: [
      { value: 0, label: "Всё спокойно" },
      { value: 1, label: "Лёгкое напряжение" },
      { value: 2, label: "Учащённый пульс или дыхание" },
      { value: 3, label: "Сильное сердцебиение, дрожь, ком в горле" },
    ],
  },
  {
    id: "thoughts",
    label: "Мысли",
    question: "Как ведут себя мысли?",
    options: [
      { value: 0, label: "Ясно, сосредоточен" },
      { value: 1, label: "Немного рассеян" },
      { value: 2, label: "Мысли скачут, трудно сосредоточиться" },
      { value: 3, label: "Хаос, не могу остановить тревожные мысли" },
    ],
  },
  {
    id: "emotions",
    label: "Эмоции",
    question: "Что чувствуете прямо сейчас?",
    options: [
      { value: 0, label: "Спокойствие" },
      { value: 1, label: "Лёгкое беспокойство" },
      { value: 2, label: "Тревога, раздражение" },
      { value: 3, label: "Страх, паника, ощущение потери контроля" },
    ],
  },
  {
    id: "present",
    label: "Контакт с реальностью",
    question: "Насколько вы здесь и сейчас?",
    options: [
      { value: 0, label: "Полностью в моменте" },
      { value: 1, label: "Немного «в голове»" },
      { value: 2, label: "Трудно сфокусироваться на происходящем" },
      { value: 3, label: "Ощущение нереальности, отстранённости" },
    ],
  },
];

type Result = {
  level: string;
  color: string;
  bg: string;
  description: string;
  technique: string;
  techniqueDesc: string;
  techniqueId: number;
};

function getResult(total: number): Result {
  if (total <= 2) {
    return {
      level: "Спокойно",
      color: "text-stone-500",
      bg: "bg-stone-50",
      description: "Тревога на минимальном уровне. Вы в ресурсном состоянии.",
      technique: "Диафрагмальное дыхание",
      techniqueDesc: "Для поддержания этого состояния — 2 минуты глубокого дыхания.",
      techniqueId: 4,
    };
  }
  if (total <= 5) {
    return {
      level: "Лёгкое напряжение",
      color: "text-amber-600",
      bg: "bg-amber-50",
      description: "Есть фоновое беспокойство. Тело и мысли немного взволнованы.",
      technique: "Метод 5-4-3-2-1",
      techniqueDesc: "Верните себя в настоящий момент через органы чувств.",
      techniqueId: 2,
    };
  }
  if (total <= 8) {
    return {
      level: "Выраженная тревога",
      color: "text-orange-600",
      bg: "bg-orange-50",
      description: "Тревога ощутима. Тело напряжено, мысли трудно контролировать.",
      technique: "Дыхание 4-7-8",
      techniqueDesc: "Регулирует нервную систему за 3–4 минуты. Начните прямо сейчас.",
      techniqueId: 1,
    };
  }
  return {
    level: "Острая тревога",
    color: "text-red-600",
    bg: "bg-red-50",
    description: "Сильное возбуждение. Нужна быстрая физиологическая помощь.",
    technique: "Холодная вода",
    techniqueDesc: "Активирует нырятельный рефлекс и моментально снижает пульс.",
    techniqueId: 5,
  };
}

export default function Quiz() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = questions.every((q) => answers[q.id] !== undefined);
  const total = Object.values(answers).reduce((s, v) => s + v, 0);
  const result = getResult(total);

  const handleSelect = (qId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="border-b border-stone-200 px-6 py-8 md:px-16">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-2 font-medium">
              Опросник
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-stone-900 leading-tight">
              Как вы сейчас?
            </h1>
          </div>
          <button
            onClick={() => navigate("/")}
            className="text-xs text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1.5"
          >
            <Icon name="ArrowLeft" size={12} />
            Техники
          </button>
        </div>
      </header>

      <main className="px-6 md:px-16 py-10">
        <div className="max-w-3xl mx-auto">
          {!submitted ? (
            <>
              {/* Questions */}
              <div className="divide-y divide-stone-100">
                {questions.map((q, qi) => (
                  <div key={q.id} className="py-7">
                    <div className="flex items-start gap-5">
                      <span className="text-xs text-stone-300 font-display pt-0.5 w-6 shrink-0">
                        0{qi + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-xs tracking-widest uppercase text-stone-400 mb-1 font-medium">
                          {q.label}
                        </p>
                        <h2 className="font-display text-xl text-stone-900 mb-4">
                          {q.question}
                        </h2>
                        <div className="space-y-2">
                          {q.options.map((opt) => {
                            const selected = answers[q.id] === opt.value;
                            return (
                              <button
                                key={opt.value}
                                onClick={() => handleSelect(q.id, opt.value)}
                                className={`w-full text-left px-4 py-3 rounded-sm border text-sm transition-all duration-150 ${
                                  selected
                                    ? "border-stone-900 bg-stone-900 text-white"
                                    : "border-stone-200 text-stone-600 hover:border-stone-400 hover:text-stone-900"
                                }`}
                              >
                                {opt.label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit */}
              <div className="pt-4 pb-10">
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!allAnswered}
                  className={`w-full py-4 text-sm font-medium rounded-sm transition-all duration-200 ${
                    allAnswered
                      ? "bg-stone-900 text-white hover:bg-stone-700"
                      : "bg-stone-100 text-stone-300 cursor-not-allowed"
                  }`}
                >
                  {allAnswered ? "Показать рекомендацию" : `Ответьте на все вопросы (${Object.keys(answers).length}/${questions.length})`}
                </button>
              </div>
            </>
          ) : (
            /* Result */
            <div className="py-6">
              <div className={`rounded-sm border border-stone-100 ${result.bg} px-7 py-8 mb-8`}>
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-2 font-medium">
                  Состояние
                </p>
                <h2 className={`font-display text-3xl mb-3 ${result.color}`}>
                  {result.level}
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>

              {/* Recommended technique */}
              <div className="border-t border-stone-100 pt-7">
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-4 font-medium">
                  Рекомендуемая техника
                </p>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-stone-900 mb-1">
                      {result.technique}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-md">
                      {result.techniqueDesc}
                    </p>
                  </div>
                  <button
                    onClick={() => navigate("/")}
                    className="shrink-0 flex items-center gap-2 text-sm text-stone-900 border border-stone-900 px-4 py-2 rounded-sm hover:bg-stone-900 hover:text-white transition-all duration-150"
                  >
                    Открыть
                    <Icon name="ArrowRight" size={14} />
                  </button>
                </div>
              </div>

              {/* Answers summary */}
              <div className="mt-8 border-t border-stone-100 pt-6">
                <p className="text-xs tracking-widest uppercase text-stone-400 mb-4 font-medium">
                  Ваши ответы
                </p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {questions.map((q) => {
                    const val = answers[q.id];
                    const label = q.options.find((o) => o.value === val)?.label;
                    return (
                      <div key={q.id} className="border border-stone-100 rounded-sm px-3 py-3">
                        <p className="text-xs text-stone-400 mb-1">{q.label}</p>
                        <p className="text-xs text-stone-700 leading-snug">{label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleReset}
                className="mt-8 text-xs text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1.5"
              >
                <Icon name="RotateCcw" size={12} />
                Пройти заново
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
