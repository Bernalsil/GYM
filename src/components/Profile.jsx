import axios from "axios";
import { api } from "./api";
import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import bg from "./media/lockers.jpg";
import SwiperClientImages from "./AdminPage/SwiperClientImages";
import { toast } from "react-hot-toast";
const Profile = () => {
  const [client, setClient] = useState({});
  const [comments, setComments] = useState("");
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
        <div className="max-w-lg mx-auto text-center">
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
          className="textarea textarea-warning"
          placeholder="dudas/comentarios"
        ></textarea>
        <button onClick={sendComments} className="btn btn-success">
          Enviar
        </button>
      </div>
      <div className="mt-12">
        <SwiperClientImages user_id={params.user_id} />
      </div>
      <div className="text-center mt-5">
        <Link to="/contact-form">
          <button className="link link-info ">Formato seguimiento</button>
        </Link>
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
