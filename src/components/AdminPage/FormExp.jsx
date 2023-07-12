import axios from "axios";
import { useState } from "react";
import ReactFileReader from "react-file-reader";
import { useForm } from "react-hook-form";
import { api } from "../api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
const FormExp = () => {
  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const sendData = (data) => {
    const newData = { ...data, image };
    console.log(newData);
    axios
      .post(`${api}/exps`, newData)
      .then((res) => {
        console.log(res);
        toast.success("Agregado correctamente");
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("error en el envio");
      });
  };
  return (
    <form
      onSubmit={handleSubmit(sendData)}
      className="flex items-center  mx-auto max-w-lg flex-col gap-4 mt-10"
    >
      <div className="font-bold text-white text-xl">Agregar Experiencia</div>
      <div>
        <input
          type="text"
          placeholder="Nombre del cliente"
          {...register("name", { required: true })}
          className="input input-bordered input-warning w-full max-w-xs"
        />
      </div>{" "}
      <div>
        <input
          type="text"
          {...register("text", { required: true })}
          placeholder="Texto experiencia"
          className="input input-bordered input-warning w-full max-w-xs"
        />
      </div>
      <ReactFileReader
        handleFiles={(event) => {
          console.log(event.base64);
          setImage(event.base64);
        }}
        base64={true}
      >
        <div className="mt-1 flex w-full justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer">
          <div className="text-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              className="w-20 h-20 mx-auto"
            >
              <path d="M14.5 3a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h13zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" />
              <path d="M3 5.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM3 8a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9A.5.5 0 013 8zm0 2.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" />
            </svg>
            <div>
              {image.length > 0 ? (
                <span className="text-success badge">Imagen seleccionada!</span>
              ) : (
                "Imagen del cliente"
              )}
            </div>
          </div>
        </div>
      </ReactFileReader>
      <button type="submit" className="btn btn-success w-1/4">
        Enviar
      </button>
    </form>
  );
};

export default FormExp;
