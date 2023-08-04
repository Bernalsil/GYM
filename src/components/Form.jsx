import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "./api";
import AuthContext from "../context/AuthContext";
import { toast } from "react-hot-toast";
import bg from "./media/loginbg.jpg";
const Form = () => {
  const [format, setFormat] = useState("Login");
  const { loginUser } = useContext(AuthContext);
  const [clockSelected, setClockSelected] = useState(-1);
  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    if (format === "Login") loginUser(data);
    else {
      axios
        .post(`${api}/signup`, data)
        .then((res) => {
          console.log(res);
          loginUser({ ...data, credential: data.email });
        })
        .catch((err) => {
          console.log(err);
          toast.error("Ups algo salio mal intenta de nuevo");
        });
      console.log({ ...data, credential: data.email });
    }
  });
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center  "
        style={{
          backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
        }}
      >
        <div className="flex justify-center  items-center h-screen">
          <div className="bg-yellow-500 bg-opacity-70 text-black p-10 rounded-lg shadow-md w-80">
            <h1 className="text-3xl text-white font-semibold mb-5">
              {format === "Login" ? "Ingreso" : "Registro"}
            </h1>
            <form onSubmit={onSubmit} className="text-white">
              {format === "Login" && (
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-medium"
                    htmlFor="name"
                  >
                    Email o Celular
                  </label>
                  <input
                    className="w-full px-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    type="text"
                    id="name"
                    name="name"
                    {...register("credential", { required: true })}
                    placeholder="correo o telefono"
                    required
                  />
                </div>
              )}
              {/* {format !== "Login" && (
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="name"
                >
                  Nombre completo
                </label>
                <input
                  className="w-full px-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  type="text"
                  id="name"
                  name="name"
                  {...register("name", { required: true })}
                  placeholder="tu nombre"
                  required
                />
              </div>
            )} */}
              {format !== "Login" && (
                <>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      {...register("email", { required: true })}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-medium"
                      htmlFor="email"
                    >
                      Celular
                    </label>
                    <input
                      className="w-full px-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      type="number"
                      id="email"
                      name="email"
                      placeholder="Numero de celular"
                      {...register("phone", { required: true })}
                      required
                    />
                  </div>
                </>
              )}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-medium"
                  htmlFor="password"
                >
                  Contraseña
                </label>
                <input
                  className="w-full px-3 py-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  type="password"
                  id="password"
                  name="password"
                  {...register("password", { required: true })}
                  placeholder="Contraseña"
                  required
                />
              </div>
              <button
                className="w-full py-2 px-4 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md font-medium"
                type="submit"
              >
                {format === "Login" ? "Ingresar" : "Registrar"}
              </button>
              <button
                onClick={() =>
                  format === "Login" ? setFormat("Signup") : setFormat("Login")
                }
                className="link  text-black pt-1"
              >
                {format === "Login" ? "Registrarme" : "Entrar"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
