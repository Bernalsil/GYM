import axios from "axios";
import { api } from "../api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bg from "../media/adn.jpg";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
const Tracking = () => {
  const [trackings, setTrackings] = useState([]);
  const { user } = useContext(AuthContext);
  const getTrackings = () => {
    axios.get(`${api}/track_form/${user.id}`).then((res) => {
      //   console.log(res.tracking.tracks);
      setTrackings(res.data.tracks);
    });
  };
  useEffect(() => {
    getTrackings();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
      }}
    >
      <div>
        <h3 className="text-white text-center font-extrabold text-2xl">
          Seguimiento del cliente {user.nombre}
        </h3>
        <div>
          <Swiper
            navigation={true}
            spaceBetween={50}
            modules={[Pagination, Navigation, Autoplay]}
            className="max-w-lg p-10"
          >
            {trackings.map((tracking, i) => (
              <SwiperSlide key={i}>
                <div key={tracking.id}>
                  <div className="p-4 text-white">
                    <h1 className="text-2xl font-bold">Estadísticas</h1>

                    {/* <div className="mt-4">
                    <span className="font-bold">ID:</span>
                    <span>{tracking.id}</span>
                  </div> */}
                    {/* 
                  <div className="mt-2">
                    <span className="font-bold">User ID:</span>
                    <span>{tracking.user_id}</span>
                  </div> */}

                    <div className="mt-2">
                      <span className="font-bold">Estatura:</span>
                      <span>{tracking.estatura}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Peso:</span>
                      <span>{tracking.peso}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Enfermedades:</span>
                      <span>{tracking.enfermedades}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Alergias:</span>
                      <span>{tracking.alergias}</span>
                    </div>
                    {tracking.foto_actual.length > 0 && (
                      <div className="mt-2">
                        <span className="font-bold">Foto Actual:</span>

                        <img
                          src={tracking.foto_actual}
                          alt="User's photo"
                          className="w-32 h-32"
                        />
                      </div>
                    )}

                    <div className="mt-2">
                      <span className="font-bold">Dulces:</span>
                      <span>{tracking.dulces}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Hora de Entrenamiento:</span>
                      <span>{tracking.hr_entrenamiento}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Hora de Despertar:</span>
                      <span>{tracking.hr_despertar}</span>
                    </div>
                    {tracking.length > 0 && (
                      <div className="mt-2">
                        <span className="font-bold">Pago:</span>
                        <span>{tracking.pago}</span>
                      </div>
                    )}

                    <div className="mt-2">
                      <span className="font-bold">Hora de Dormir:</span>
                      <span>{tracking.hr_dormir}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Proteínas:</span>
                      <span>{tracking.proteinas}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Carbohidratos:</span>
                      <span>{tracking.carbohidratos}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Objetivo:</span>
                      <span>{tracking.objetivo}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Servicio:</span>
                      <span>{tracking.service}</span>
                    </div>

                    <div className="mt-2">
                      <span className="font-bold">Comida favorita:</span>
                      <span>{tracking.favorite_meal}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between font-bold italic max-w-lg mx-auto">
            <div className="badge badge-info">Mas reciente</div>
            <div className="badge badge-info">Mas antigua</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
