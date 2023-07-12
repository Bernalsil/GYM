import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { api } from "../api";
import { toast } from "react-hot-toast";
import ReactFileReader from "react-file-reader";
import bg from "../media/adn.jpg";
import SwiperClientImages from "./SwiperClientImages";
const ClientInfo = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [client, setClient] = useState({});
  const [approved, setApproved] = useState(false);
  const [comments, setComments] = useState("");
  const [imageTraining, setImageTraining] = useState("");
  const [img_diet, setImg_diet] = useState("");

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
    getClient();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
      }}
    >
      <div className="pt-20 text-white">
        <h3 className="mb-10 alert alert-info uppercase max-w-lg mx-auto">
          Informacion del cliente{" "}
          <span className="font-bold">{client.nombre}</span>
        </h3>
        <div className="flex justify-between flex-wrap max-w-lg mx-auto">
          <div className="flex flex-col gap-3 ">
            <div className="uppercase font-bold italic">
              Servicio contratado:{" "}
              <span className="font-bold ">{client.service}</span>
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
            </div>
          </div>
          <div className="mt-5">
            <div>Fotos: </div>

            <div>
              <SwiperClientImages user_id={params.user_id} />
            </div>
            <div className="mt-10">
              Pago:
              <img
                src={client.pago}
                onClick={() => window.open(client.pago, "_blank")}
                className="w-48 mt-2 cursor-pointer"
                alt=""
              />
            </div>
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
      </div>
    </div>
  );
};

export default ClientInfo;
