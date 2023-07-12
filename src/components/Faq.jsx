import { useState } from "react";
import vid from "./media/video.mp4";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Faq = () => {
  const [showInfo, setShowInfo] = useState(-1);

  const questions = [
    {
      question: "¿Con qué frecuencia debo hacer ejercicio?",
      answer:
        "La frecuencia de ejercicio recomendada varía según tus objetivos y nivel de condición física. En general, se sugiere realizar actividades cardiovasculares de intensidad moderada durante al menos 150 minutos a la semana, junto con ejercicios de fuerza dos o más días a la semana. Sin embargo, es importante escuchar a tu cuerpo y ajustar la frecuencia según tus necesidades y capacidad de recuperación",
    },
    {
      question: "¿Cuál es la mejor manera de perder grasa y ganar músculo?",
      answer:
        "Para perder grasa y ganar músculo, es importante combinar entrenamiento de fuerza con ejercicio cardiovascular y una alimentación equilibrada. El entrenamiento de fuerza ayuda a aumentar la masa muscular y acelerar el metabolismo, mientras que el ejercicio cardiovascular quema calorías y promueve la pérdida de grasa. Una dieta adecuada debe incluir un déficit calórico moderado, junto con suficiente proteína para apoyar la construcción muscular.",
    },
    {
      question: "¿Cuánto tiempo llevará ver resultados?",
      answer:
        "La velocidad de los resultados varía según la persona y sus circunstancias individuales. Es importante tener en cuenta que el progreso es gradual y que los resultados visibles pueden llevar varias semanas o incluso meses. Mantén la consistencia en tu entrenamiento y dieta, y verás mejoras con el tiempo. Recuerda que cada persona es diferente y los resultados pueden variar.",
    },
    {
      question: "¿Necesito tomar suplementos alimenticios?",
      answer:
        "Los suplementos alimenticios no son esenciales para la mayoría de las personas, especialmente para los principiantes. Una dieta equilibrada y adecuada en nutrientes puede proporcionar todos los elementos necesarios para una buena salud y rendimiento.",
    },
    {
      question: "¿Cuánta agua debo beber durante el entrenamiento?",
      answer:
        "La cantidad de agua que debes beber durante el entrenamiento puede variar según tu nivel de sudoración y la intensidad del ejercicio. En general, se recomienda beber agua antes, durante y después del ejercicio para mantenerse hidratado. Escucha a tu cuerpo y bebe agua cuando tengas sed.",
    },
  ];
  const handleInfo = (key) => {
    showInfo === key ? setShowInfo(-1) : setShowInfo(key);
  };
  return (
    <div>
      <NavBar />
      <h2 className="text-3xl text-center mt-24">Preguntas frecuentes</h2>
      <div className="flex flex-wrap mt-16 justify-center gap-5  items-center">
        <div className="w-3/4 sm:w-1/4">
          <video className="mx-auto rounded-md" src={vid} controls />
        </div>
        <div className="w-[400px] text-gray-300 text-lg text-justify">
          Es importante saber si tienes alguna enfermedad o condición médica
          antes de iniciar un programa de fitness por varias razones: Algunas
          enfermedades o condiciones médicas pueden afectar la forma en que tu
          cuerpo responde al ejercicio y aumentar el riesgo de lesiones. Conocer
          tu estado de salud te permitirá tomar precauciones adicionales,
          ajustar tus entrenamientos y evitar actividades que podrían ser
          perjudiciales para ti. Siempre es recomendable consultar a un médico o
          a un profesional de la salud antes de comenzar cualquier programa de
          ejercicio, especialmente si tienes alguna preocupación o condición
          médica preexistente.
          <p className="text-center mt-3 text-white">¡Consulta a tu médico!</p>
        </div>
      </div>
      <section className="mt-32 mb-24">
        <div
          id="accordion-collapse"
          className="w-1/2 mx-auto bg-black p-12 rounded-md "
          data-accordion="collapse"
        >
          {questions.map((question, key) => (
            <div>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  data-accordion-target="#accordion-collapse-body-1"
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                  onClick={() => handleInfo(key)}
                >
                  <span className="text-xl">{question.question}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1em"
                    width="1em"
                    className="w-8 h-8"
                    //   {...props}
                  >
                    <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                  </svg>
                </button>
              </h2>
              <div
                id="accordion-collapse-body-1"
                class={showInfo === key ? "" : "hidden"}
                aria-labelledby="accordion-collapse-heading-1"
              >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">
                    {question.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Faq;
