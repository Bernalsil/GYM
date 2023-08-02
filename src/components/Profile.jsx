import axios from "axios";
import { api } from "./api";
import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import bg from "./media/lockers.jpg";
import SwiperClientImages from "./AdminPage/SwiperClientImages";
import { toast } from "react-hot-toast";
import { faL } from "@fortawesome/free-solid-svg-icons";
const Profile = () => {
  const [client, setClient] = useState({});
  const [comments, setComments] = useState("");
  const [ableComments, setableComments] = useState(true);
  const { logoutUser } = useContext(AuthContext);
  const params = useParams();
  const getClient = () => {
    axios
      .get(`${api}/clients/${params.user_id}`)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.client.imageTraining.length);
        setClient(res.data.client);
      })
      .catch((err) => console.log(err));
  };
  const sendComments = () => {
    axios
      .post(`${api}/user_comments/${params.user_id}`, { comments: comments })
      .then((res) => {
        console.log(res);
        toast.success("Envio exitoso");
        setableComments(false);
        setComments("");
      })
      .catch((err) => console.log(err));
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
      <div className="m-2">
        <Link to="/">
          <button className="btn">
            Regresar
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M14.5 1.5a.5.5 0 01.5.5v4.8a2.5 2.5 0 01-2.5 2.5H2.707l3.347 3.346a.5.5 0 01-.708.708l-4.2-4.2a.5.5 0 010-.708l4-4a.5.5 0 11.708.708L2.707 8.3H12.5A1.5 1.5 0 0014 6.8V2a.5.5 0 01.5-.5z"
              />
            </svg>
          </button>
        </Link>
      </div>
      <h1 className=" text-2xl text-center text-white mt-2 mb-10 font-bold ">
        MI Casillero
      </h1>

      <div className="text-center mb-10 font-bold">
        {client.accept_payment ? (
          <div className="badge badge-success p-4">
            Tu pago e informacion han sido aceptados
          </div>
        ) : (
          <div className="badge badge-error p-4 ">
            Tu pago e informacion no han sido aceptados
          </div>
        )}
      </div>

      <div className="max-w-lg text-white flex flex-wrap justify-center mx-auto ">
        <div className="flex mb-10 flex-wrap gap-3 justify-center items-center  text-center">
          {client.imageTraining && client.imageTraining.length > 0 && (
            <div>
              <div className="font-bold">Entrenamiento</div>
              <img className="w-[250px]" src={client.imageTraining} alt="" />
              <a href={client.imageTraining} download>
                <button className="btn btn-sm mt-2">Descargar</button>
              </a>
            </div>
          )}
          {client.img_diet && client.img_diet.length > 0 && (
            <div>
              <div className="font-bold">Dieta</div>
              <img
                // onClick={() => window.open(client.img_diet, "_blank")}
                className="w-[250px]"
                src={client.img_diet}
                alt=""
              />
              <a href={client.img_diet} download>
                <button className="btn btn-sm mt-2">Descargar</button>
              </a>
            </div>
          )}
        </div>
        <div className="text-center mt-5 mb-10 ">
          <Link to="/contact-form">
            <button className="link link-info ">
              Ingresa al siguiente link y ingresa la información que se te pide
            </button>
          </Link>
        </div>
        <div className="w-full mx-auto text-center">
          <div className="font-bold ">Observaciones del entrenador </div>
          <p className="italic">{client.trainer_comments}</p>
        </div>
      </div>

      <div className="flex justify-center mx-auto gap-3 flex-col max-w-lg items-center">
        <div className="text-white font-bold mt-5">
          Enviar commentarios/dudas
        </div>
        <textarea
          onChange={(e) => setComments(e.target.value)}
          value={comments}
          className="textarea textarea-warning"
          placeholder="dudas/comentarios"
        ></textarea>
        {ableComments ? (
          <button
            onClick={sendComments}
            disabled={comments.length === 0}
            className="btn btn-success"
          >
            Enviar
          </button>
        ) : (
          <div className="bg-teal-500 flex items-center gap-3 text-black p-3 rounded-lg">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1em"
              width="1em"
              className="w-5 h-5"
            >
              <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
            </svg>
            <span>Comentarios enviados!</span>
          </div>
        )}
      </div>
      <div className="mt-12">
        <SwiperClientImages user_id={params.user_id} />
      </div>

      <div className="text-center mt-5">
        <button onClick={logoutUser} className="btn btn-error capitalize">
          Cerrar Sesion
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            height="1em"
            width="1em"
            className=" ml-2 w-6 h-6"
          >
            <path d="M336 376V272H191a16 16 0 010-32h145V136a56.06 56.06 0 00-56-56H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h192a56.06 56.06 0 0056-56zM425.37 272l-52.68 52.69a16 16 0 0022.62 22.62l80-80a16 16 0 000-22.62l-80-80a16 16 0 00-22.62 22.62L425.37 240H336v32z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Profile;
