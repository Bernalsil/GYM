import { useState } from "react";
import six from "./media/6.jpeg";
import mains from "./media/main.jpg";
import bg from "./media/me.jpg";
const About = () => {
  const [image, setImage] = useState(mains);
  const [text] = useState(
    `Comencé mi camino en la nutrición y el fisioculturismo obteniendo mi licenciatura en Nutrición y Dietética. Durante mis estudios, me sumergí en los principios de la nutrición y la fisiología del ejercicio, aprendiendo sobre los diferentes macronutrientes, micronutrientes y cómo el cuerpo se adapta al entrenamiento. Una vez que obtuve mi licenciatura, decidí especializarme en fisioculturismo. Realicé cursos y certificaciones adicionales en nutrición deportiva y fisiología del ejercicio específicamente orientados hacia el fisioculturismo. Esto me permitió adquirir conocimientos especializados sobre cómo optimizar la nutrición para mejorar el rendimiento atlético, la composición corporal y la recuperación muscular en los fisicoculturistas.`
  );

  return (
    <div id="sobre" class="">
      <div
        className="min-h-screen bg-cover bg-center hero "
        style={{
          backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={six} className="max-w-xl rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl text-white font-bold">Mi trayectoria</h1>
            <p className="py-6 text-white">{text}</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
