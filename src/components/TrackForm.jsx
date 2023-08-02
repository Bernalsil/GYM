import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import TimeKeeper from "react-timekeeper";
import { useToggleList } from "./myHooks/Lists";
import ReactFileReader from "react-file-reader";
import axios from "axios";
import { api } from "./api";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { toast } from "react-hot-toast";
import bg from "./media/bgform.jpg";
const carbs = ["arroz", "papa", "pastas", "tortilla", "camote", "pan"];
const proteins = [
  "res",
  "huevo",
  "pez",
  "muslo pollo",
  "pechuga pollo",
  "lomo cerdo",
];
const services = ["entrenamiento", "dieta", "fármacos"];
const TrackForm = () => {
  const { list: list1, toggleList: toggleList1 } = useToggleList([]);
  const { list: list2, toggleList: toggleList2 } = useToggleList([]);
  const { list: listService, toggleList: toggleListService } = useToggleList(
    []
  );
  const { user } = useContext(AuthContext);
  const [payment, setPayment] = useState("");
  const [hr_training, setHr_training] = useState("12:00");
  const [showTimeTraining, setShowTimeTraining] = useState(false);
  const [hr_wake, setHr_wake] = useState("07:00");
  const [imageBody, setImageBody] = useState("");
  const [showTimeWake, setShowTimeWake] = useState(false);
  const [hr_sleep, setHr_sleep] = useState("10:00");
  const [showTimeSlepp, setShowTimeSlepp] = useState(false);
  const navigate = useNavigate();

  const handleData = (data) => {
    if (listService.length != 0) {
      const newData = {
        ...data,
        user_id: user.id,
        hr_entrenamiento: hr_training,
        hr_despertar: hr_wake,
        hr_dormir: hr_sleep,
        carbohidratos: list1.join(","),
        proteinas: list2.join(","),
        foto_actual: imageBody,
        pago: payment,
        service: listService.join(","),
      };
      console.log(newData);
      axios
        .post(`${api}/track_form`, newData)
        .then((res) => {
          console.log(res.data);
          toast.success("Información enviada con éxito");
          navigate(`/profile/${user.id}`);
        })
        .catch((err) => {
          toast.error("Algo salio mal intenta de nuevo");
          console.log(err);
        });
    } else {
      toast.error("Llena todos los campos");
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  return (
    <>
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
        <form
          className="text-white grid  sm:grid-cols-2 max-w-lg gap-4 mx-auto mt-10"
          // onSubmit={}
        >
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block mb-2 text-lg font-bold "
            >
              Estatura:
            </label>
            <input
              id="inputField"
              type="number"
              className="input input-bordered input-warning w-full max-w-xs"
              {...register("estatura", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block mb-2 text-lg font-bold "
            >
              Peso:
            </label>
            <input
              id="inputField"
              type="number"
              className="input input-bordered input-warning w-full max-w-xs"
              {...register("peso", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block mb-2 text-lg font-bold "
            >
              ¿Enfermedades?:
            </label>
            <input
              id="inputField"
              type="text"
              placeholder="Dejar en blanco si no tienes enfermedades"
              className="input input-bordered input-warning w-full max-w-xs"
              {...register("enfermedades")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block mb-2 text-lg font-bold "
            >
              ¿Alergias?:
            </label>
            <input
              id="inputField"
              type="text"
              placeholder="Dejar en blanco si no tienes alergias"
              className="input input-bordered input-warning w-full max-w-xs"
              {...register("alergias")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="inputField"
              className="block mb-2 text-lg font-bold "
            >
              Preferencia de dulce:
            </label>
            <select
              {...register("dulces", { required: true })}
              className="select select-warning w-full max-w-xs"
            >
              <option disabled selected>
                Elige tipo de dulce
              </option>
              <option value={"salado"}>Salado</option>
              <option value={"dulce"}>Dulce</option>
            </select>
          </div>

          <div>
            <div>Selecciona servicio(s) a contratar</div>
            <div className="flex flex-wrap gap-2 w-3/4 mb-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  onClick={() => toggleListService(service)}
                  className={`badge ${
                    listService.includes(service) && "badge-success"
                  } select-none p-3 cursor-pointer`}
                >
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>Selecciona Carbohidratos</div>
            <div className="flex flex-wrap gap-2 w-3/4 mb-4">
              {carbs.map((carb, i) => (
                <div
                  key={i}
                  onClick={() => toggleList1(carb)}
                  className={`badge ${
                    list1.includes(carb) && "badge-success"
                  } select-none p-3 cursor-pointer`}
                >
                  {carb}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>Selecciona Proteinas</div>
            <div className="flex flex-wrap gap-2 w-3/4 mb-4">
              {proteins.map((protein, i) => (
                <div
                  key={i}
                  onClick={() => toggleList2(protein)}
                  className={`badge ${
                    list2.includes(protein) && "badge-success"
                  } select-none p-3 cursor-pointer`}
                >
                  {protein}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-4" id="object">
            <label
              htmlFor="inputField"
              className="block mb-2 text-lg font-bold "
            >
              objetivo a cumplir:
            </label>
            <input
              id="inputField"
              type="text"
              placeholder="Dejar en blanco si no tienes enfermedades"
              className="input input-bordered input-warning w-full max-w-xs"
              {...register("objetivo", { required: true })}
            />
          </div>
          <div className="mb-4" id="object">
            <label
              htmlFor="inputField"
              className="block mb-2 text-lg font-bold "
            >
              comida favorita:
            </label>
            <input
              id="inputField"
              type="text"
              placeholder=""
              className="input input-bordered input-warning w-full max-w-xs"
              {...register("favorite_meal", { required: true })}
            />
          </div>
          <div id="hr_training" className="">
            <div>
              <button
                onClick={() => setShowTimeTraining(!showTimeTraining)}
                className="btn btn-sm"
                type="button"
              >
                {showTimeTraining
                  ? "ocultar Reloj"
                  : "-Elegir hora de entrenamiento-"}
              </button>
            </div>
            {showTimeTraining && (
              <TimeKeeper
                time={hr_training}
                onChange={(data) => setHr_training(data.formatted12)}
              />
            )}
            <div className="">Hora Seleccionada: {hr_training}</div>
          </div>
          <div id="hr_wake" className="">
            <div>
              <button
                type="button"
                onClick={() => setShowTimeWake(!showTimeWake)}
                className="btn btn-sm"
              >
                {showTimeWake ? "ocultar Reloj" : "-Elegir hora de despertar-"}
              </button>
            </div>
            {showTimeWake && (
              <TimeKeeper
                time={hr_wake}
                onChange={(data) => setHr_wake(data.formatted12)}
              />
            )}
            <div className="">Hora Seleccionada: {hr_wake}</div>
          </div>
          <div id="hr_sleep" className="">
            <div>
              <button
                type="button"
                onClick={() => setShowTimeSlepp(!showTimeSlepp)}
                className="btn btn-sm"
              >
                {showTimeSlepp ? "ocultar Reloj" : "-Elegir hora de dormir-"}
              </button>
            </div>
            {showTimeSlepp && (
              <TimeKeeper
                time={hr_sleep}
                onChange={(data) => setHr_sleep(data.formatted12)}
              />
            )}
            <div className="">Hora Seleccionada: {hr_sleep}</div>
          </div>
          <ReactFileReader
            handleFiles={(event) => setImageBody(event.base64)}
            base64={true}
          >
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
              <div className="text-center">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="w-20 h-20 mx-auto text-rose-300"
                >
                  <path d="M312 56 A56 56 0 0 1 256 112 A56 56 0 0 1 200 56 A56 56 0 0 1 312 56 z" />
                  <path d="M437 128H75a27 27 0 000 54h101.88c6.91 0 15 3.09 19.58 15 5.35 13.83 2.73 40.54-.57 61.23l-4.32 24.45a.42.42 0 01-.12.35l-34.6 196.81A27.43 27.43 0 00179 511.58a27.06 27.06 0 0031.42-22.29l23.91-136.8S242 320 256 320c14.23 0 21.74 32.49 21.74 32.49l23.91 136.92a27.24 27.24 0 1053.62-9.6L320.66 283a.45.45 0 00-.11-.35l-4.33-24.45c-3.3-20.69-5.92-47.4-.57-61.23 4.56-11.88 12.91-15 19.28-15H437a27 27 0 000-54z" />
                </svg>
                <div>
                  {imageBody.length > 0
                    ? "Imagen seleccionada"
                    : "Sube una imagen de tu estrutura corporal "}
                </div>
              </div>
            </div>
          </ReactFileReader>
          <ReactFileReader
            handleFiles={(event) => setPayment(event.base64)}
            base64={true}
          >
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
              <div className="text-center">
                <svg
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="w-20 h-20 mx-auto text-green-400"
                  height="1em"
                  width="1em"
                >
                  <path d="M0 112.5v309.8c0 18 10.1 35 27 41.3 87 32.5 174 10.3 261-11.9 79.8-20.3 159.6-40.7 239.3-18.9 23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3-87-32.5-174-10.3-261 11.9-79.8 20.3-159.6 40.6-239.3 18.8C25.6 72.8 0 88.6 0 112.5zM288 352c-44.2 0-80-43-80-96s35.8-96 80-96 80 43 80 96-35.8 96-80 96zm-224 0c35.3 0 64 28.7 64 64H64v-64zm64-208c0 35.3-28.7 64-64 64v-64h64zm384 160v64h-64c0-35.3 28.7-64 64-64zM448 96h64v64c-35.3 0-64-28.7-64-64z" />
                </svg>
                <div>
                  {payment.length > 0
                    ? "Imagen seleccionada"
                    : "Sube tu comprobante de pago"}
                </div>
              </div>
            </div>
          </ReactFileReader>
        </form>
        <div id="btn-send" className="text-center mx-auto mt-10 max-w-lg ">
          <button
            onClick={handleSubmit(handleData)}
            className="btn w-full btn-success"
            type="submit"
          >
            Enviar Datos
          </button>
        </div>
      </div>
    </>
  );
};

export default TrackForm;
