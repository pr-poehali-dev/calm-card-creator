import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const techniques = [
  {
    id: 1,
    number: "01",
    title: "Дыхание 4-7-8",
    tagline: "Быстро снижает пульс",
    description:
      "Техника активирует парасимпатическую нервную систему и переключает тело из режима стресса в режим покоя за несколько минут.",
    duration: "3–5 минут",
    steps: [
      "Сядьте удобно, спина прямая. Выдохните весь воздух через рот.",
      "Закройте рот и медленно вдохните через нос, считая до 4.",
      "Задержите дыхание на счёт 7.",
      "Медленно выдохните через рот со звуком на счёт 8.",
      "Повторите цикл 4 раза. Не торопитесь.",
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Метод 5-4-3-2-1",
    tagline: "Возвращает в настоящее",
    description:
      "Техника заземления через органы чувств. Помогает прервать поток тревожных мыслей и вернуть внимание к реальности здесь и сейчас.",
    duration: "5–7 минут",
    steps: [
      "Назовите 5 вещей, которые вы видите прямо сейчас вокруг вас.",
      "Назовите 4 вещи, которые вы можете потрогать. Ощутите их текстуру.",
      "Назовите 3 звука, которые вы слышите в данный момент.",
      "Назовите 2 запаха, которые вы чувствуете или помните.",
      "Назовите 1 вкус, который вы ощущаете сейчас.",
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Прогрессивная релаксация",
    tagline: "Снимает мышечное напряжение",
    description:
      "Поочерёдное напряжение и расслабление групп мышц. Тело расслабляется — тревога отступает. Эффективно при физических симптомах стресса.",
    duration: "10–15 минут",
    steps: [
      "Лягте или сядьте максимально удобно. Закройте глаза.",
      "Начните со ступней: напрягите мышцы на 5 секунд, затем резко отпустите. Почувствуйте разницу.",
      "Продвигайтесь вверх: икры → бёдра → живот → руки → плечи → лицо.",
      "На каждую группу мышц — 5 секунд напряжения, потом 15 секунд расслабления.",
      "Закончите, сделав три глубоких медленных вдоха.",
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Диафрагмальное дыхание",
    tagline: "Успокаивает нервную систему",
    description:
      "Глубокое «брюшное» дыхание стимулирует блуждающий нерв и снижает уровень кортизола. Самая простая и доступная техника.",
    duration: "2–4 минуты",
    steps: [
      "Положите одну руку на грудь, другую на живот.",
      "Вдохните медленно через нос так, чтобы поднялась рука на животе — грудь остаётся почти неподвижной.",
      "Задержите дыхание на 2–3 секунды.",
      "Медленно выдыхайте через слегка сжатые губы 4–6 секунд.",
      "Повторите 6–10 раз. Сосредоточьтесь только на движении живота.",
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Холодная вода",
    tagline: "Мгновенный эффект",
    description:
      "Погружение лица в холодную воду активирует нырятельный рефлекс — мощный физиологический механизм, который моментально снижает ЧСС.",
    duration: "1–2 минуты",
    steps: [
      "Наберите таз или большую миску с холодной водой (с кубиками льда — лучше).",
      "Задержите дыхание и погрузите лицо в воду на 15–30 секунд.",
      "Если нет возможности — умойтесь очень холодной водой или приложите лёд к запястьям и вискам.",
      "Повторите 2–3 раза с небольшим перерывом.",
      "После — выпейте стакан воды и посидите спокойно минуту.",
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Письмо тревоге",
    tagline: "Структурирует хаос мыслей",
    description:
      "Перенос тревожных мыслей на бумагу снижает их эмоциональный заряд. Мозг перестаёт «жевать» одно и то же по кругу.",
    duration: "7–10 минут",
    steps: [
      "Возьмите бумагу и ручку. Телефон — не подходит.",
      "Напишите заголовок: «Я сейчас тревожусь о...» — и дайте себе полную свободу.",
      "Пишите без остановки 5 минут всё, что приходит в голову. Не редактируйте.",
      "Прочитайте написанное. Обведите кружком то, на что вы реально можете повлиять.",
      "Для каждого обведённого пункта напишите одно конкретное действие, которое можно сделать сегодня.",
    ],
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-body">
      {/* Header */}
      <header className="border-b border-stone-200 px-6 py-8 md:px-16">
        <div className="max-w-3xl mx-auto flex items-end justify-between gap-4">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-2 font-medium">
              Инструменты
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-stone-900 leading-tight">
              Острая тревога
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-stone-400 hidden sm:block">{techniques.length} техник</p>
            <button
              onClick={() => navigate("/quiz")}
              className="flex items-center gap-2 text-xs border border-stone-300 text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-all duration-150 px-3 py-2 rounded-sm"
            >
              <Icon name="ClipboardList" size={12} />
              Не знаю с чего начать
            </button>
          </div>
        </div>
      </header>

      {/* Cover */}
      <section className="px-6 md:px-16 pt-10 pb-0">
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden rounded-sm border border-stone-100 bg-stone-50" style={{ height: '320px' }}>
            <img
              src="https://cdn.poehali.dev/projects/f94ff583-a233-4cc8-8b1c-42e4becbc0df/files/7db0b20f-8db6-4e6e-b8b5-edde02e1c820.jpg"
              alt="Техники снижения тревоги"
              className="w-full h-full object-cover object-center opacity-80 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
            <div className="absolute bottom-6 left-7">
              <p className="font-display text-stone-400 text-sm italic">
                первая помощь при тревоге
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 md:px-16 py-10 border-b border-stone-100">
        <div className="max-w-3xl mx-auto">
          <p className="text-stone-500 text-base leading-relaxed max-w-xl">
            Когда тревога нарастает — тело переходит в режим угрозы. Эти
            техники работают с физиологией напрямую: они переключают нервную
            систему и возвращают контроль.
          </p>
        </div>
      </section>

      {/* Techniques list */}
      <main className="px-6 md:px-16 py-8">
        <div className="max-w-3xl mx-auto divide-y divide-stone-100">
          {techniques.map((t) => {
            const isOpen = openId === t.id;
            return (
              <div key={t.id} className="py-6">
                <button
                  onClick={() => toggle(t.id)}
                  className="w-full text-left group"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-display text-xs text-stone-300 pt-1 w-6 shrink-0 select-none">
                      {t.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="font-display text-xl text-stone-900 group-hover:text-stone-600 transition-colors duration-200">
                            {t.title}
                          </h2>
                          <p className="text-xs text-stone-400 mt-0.5 font-medium">
                            {t.tagline} · {t.duration}
                          </p>
                        </div>
                        <div
                          className={`shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}
                        >
                          <Icon name="Plus" size={16} className="text-stone-400" />
                        </div>
                      </div>
                      <p
                        className={`text-stone-500 text-sm leading-relaxed mt-2 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-70"}`}
                      >
                        {t.description}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Steps — expandable */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="ml-11 mt-6">
                    <ol className="space-y-4">
                      {t.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                          <span className="shrink-0 w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center text-xs text-stone-400 font-medium mt-0.5">
                            {idx + 1}
                          </span>
                          <p className="text-stone-700 text-sm leading-relaxed">
                            {step}
                          </p>
                        </li>
                      ))}
                    </ol>

                    <button
                      onClick={() => toggle(t.id)}
                      className="mt-6 text-xs text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ChevronUp" size={12} />
                      Свернуть
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-100 px-6 md:px-16 py-8 mt-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-stone-300 leading-relaxed">
            Эти техники — первая помощь при тревоге. Они не заменяют работу со
            специалистом при хронической тревоге или тревожном расстройстве.
          </p>
        </div>
      </footer>
    </div>
  );
}