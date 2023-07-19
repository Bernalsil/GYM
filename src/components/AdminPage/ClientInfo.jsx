import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { api } from "../api";
import { toast } from "react-hot-toast";
import ReactFileReader from "react-file-reader";
import bg from "../media/adn.jpg";
import SwiperClientImages from "./SwiperClientImages";
import { Link } from "react-router-dom";
const ClientInfo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState({});
  const [approved, setApproved] = useState(false);
  const [comments, setComments] = useState("");
  const [imageTraining, setImageTraining] = useState("");
  const [img_diet, setImg_diet] = useState("");
  const [tracking, setTracking] = useState({});
  const getTrackings = () => {
    axios.get(`${api}/track_form/${params.user_id}`).then((res) => {
      console.log(res.data.tracks);
      setTracking(res.data.tracks[0]);
    });
  };
  const getClient = () => {
    axios
      .get(`${api}/clients/${params.user_id}`)
      .then((res) => {
        console.log(res);
        setClient(res.data.client);
        setApproved(res.data.client.accept_payment);
        setComments(res.data.client.trainer_comments);
      })
      .catch((err) => console.log(err));
  };
  const sendChanges = () => {
    axios
      .put(`${api}/clients/${params.user_id}`, {
        comments,
        approved,
        imageTraining,
        img_diet,
      })
      .then((res) => {
        console.log(res);
        toast.success("Cambios realizados correctamente");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("algo salio mal intenta de nuevo");
      });
  };
  useEffect(() => {
    getTrackings();
    getClient();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
      }}
    >
      <h3 className="mb-10 alert alert-info uppercase max-w-lg mx-auto">
        Informacion del cliente{" "}
        <span className="font-bold">{client.nombre}</span>
      </h3>
      <Link to="/admin/client/tracking">
        <div className="mb-3 btn ">
          Seguimiento
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            className="w-5 h-5 ml-1"
          >
            <path d="M536.1 273H488c-4.4 0-8 3.6-8 8v275.3c0 2.6 1.2 5 3.3 6.5l165.3 120.7c3.6 2.6 8.6 1.9 11.2-1.7l28.6-39c2.7-3.7 1.9-8.7-1.7-11.2L544.1 528.5V281c0-4.4-3.6-8-8-8zm219.8 75.2l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3L752.9 334.1a8 8 0 003 14.1zm167.7 301.1l-56.7-19.5a8 8 0 00-10.1 4.8c-1.9 5.1-3.9 10.1-6 15.1-17.8 42.1-43.3 80-75.9 112.5a353 353 0 01-112.5 75.9 352.18 352.18 0 01-137.7 27.8c-47.8 0-94.1-9.3-137.7-27.8a353 353 0 01-112.5-75.9c-32.5-32.5-58-70.4-75.9-112.5A353.44 353.44 0 01171 512c0-47.8 9.3-94.2 27.8-137.8 17.8-42.1 43.3-80 75.9-112.5a353 353 0 01112.5-75.9C430.6 167.3 477 158 524.8 158s94.1 9.3 137.7 27.8A353 353 0 01775 261.7c10.2 10.3 19.8 21 28.6 32.3l59.8-46.8C784.7 146.6 662.2 81.9 524.6 82 285 82.1 92.6 276.7 95 516.4 97.4 751.9 288.9 942 524.8 942c185.5 0 343.5-117.6 403.7-282.3 1.5-4.2-.7-8.9-4.9-10.4z" />
          </svg>
        </div>
      </Link>
      <div>
        <div>
          <div className="p-4 text-white">
            <h1 className="text-2xl font-bold">Estadísticas</h1>

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
            {tracking.foto_actual && tracking.foto_actual.length > 0 && (
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
      </div>
      <div className="mt-5">
        <div>
          <SwiperClientImages user_id={params.user_id} />
        </div>
      </div>
      <div className="flex gap-3 flex-col items-center justify-center mt-5">
        <div>¿Aprovado?</div>
        <input
          type="checkbox"
          onChange={() => setApproved(!approved)}
          checked={approved}
          className="toggle toggle-warning"
        />
        <div className="flex flex-wrap gap-4">
          <ReactFileReader
            handleFiles={(event) => setImageTraining(event.base64)}
            base64={true}
          >
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
              <div className="text-center mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="w-24 h-24  mx-auto"
                >
                  <path d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2 2-.89 2-2-.89-2-2-2m10-4v5h-2V4H4v2H2V1h2v2h16V1h2m-7 10.26V23h-2v-5h-2v5H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5h2v.5C7.5 8 9.5 10 12 10s4.5-2 4.5-4.5V5h2v.5c0 2.5-1.43 4.67-3.5 5.76z" />
                </svg>
                <div>
                  {imageTraining.length > 0
                    ? "Imagen seleccionada"
                    : "Subir imagen entrenamiento"}
                </div>
              </div>
            </div>
          </ReactFileReader>
          <ReactFileReader
            handleFiles={(event) => setImg_diet(event.base64)}
            base64={true}
          >
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
              <div className="text-center mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  className="w-24 h-24 mx-auto"
                  width="1em"
                >
                  <path d="M20 10c2 3-3 12-5 12s-2-1-3-1-1 1-3 1-7-9-5-12 5-3 7-2V5C5.38 8.07 4.11 3.78 4.11 3.78S6.77.19 11 5V3h2v5c2-1 5-1 7 2z" />
                </svg>
                <div>
                  {img_diet.length > 0
                    ? "Imagen seleccionada"
                    : "Subir imagen dieta"}
                </div>
              </div>
            </div>
          </ReactFileReader>
        </div>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="textarea textarea-warning"
          placeholder="Comentarios"
        ></textarea>
        <button onClick={sendChanges} className="btn btn-info">
          guardar y Enviar
        </button>
      </div>
      <div className="text-center mt-20 text-white">
        -----------Estado inicial-------------
      </div>
      <div className="pt-20 text-white">
        <div className="flex justify-between flex-wrap max-w-lg mx-auto">
          <div className="flex flex-col gap-3 ">
            <div className="uppercase font-bold italic">
              Servicio contratado:{" "}
              <span className="font-bold text-success">{client.service}</span>
            </div>
            <div>
              Nombre: <span className="font-bold">{client.nombre}</span>
            </div>
            <div>
              Comentarios:{" "}
              <span className="font-bold break-words">
                {client.my_comments}
              </span>
            </div>
            <div>
              Peso: <span className="font-bold">{client.peso} </span>kgs
            </div>{" "}
            <div>
              Estatura: <span className="font-bold">{client.estatura} </span>mts
            </div>
            <div>
              Enfermedades:{" "}
              <span className="font-bold">
                {client.enfermedades === ""
                  ? "Sin enfermedades"
                  : client.enfermedades}{" "}
              </span>
            </div>{" "}
            <div>
              Alergias:{" "}
              <span className="font-bold">
                {client.alergias === "" ? "Sin alergias" : client.enfermedades}{" "}
              </span>
            </div>
            <div>
              Dulce: <span className="font-bold">{client.dulces}</span>
            </div>
            <div>
              Proteinas: <span className="font-bold">{client.proteinas}</span>
            </div>
            <div>
              carbohidratos:{" "}
              <span className="font-bold">{client.carbohidratos}</span>
            </div>{" "}
            <div>
              comida favorita:{" "}
              <span className="font-bold">{client.favorite_meal}</span>
            </div>
            <div>
              Hora entrenar:{" "}
              <span className="font-bold">{client.hr_entrenamiento}</span>
            </div>{" "}
            <div>
              Hora Deperetar:{" "}
              <span className="font-bold">{client.hr_despertar}</span>
            </div>{" "}
            <div>
              Hora Dormir: <span className="font-bold">{client.hr_dormir}</span>
            </div>{" "}
            <div>
              Objetivo a cumplir:{" "}
              <span className="font-bold">{client.objetivo}</span>
            </div>
          </div>
          <div>
            {client.pago && client.pago.length > 0 && (
              <div className="mt-10">
                Pago:
                <img
                  src={client.pago}
                  onClick={() => window.open(client.pago, "_blank")}
                  className="w-48 mt-2 cursor-pointer"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientInfo;
