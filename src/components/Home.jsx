// import "../index.css";
import food from "./media/food.png";
import pesa from "./media/pesa.png";
import agenda from "./media/agenda.png";
import "./styles/home.css";
import Experiences from "./Experiences";
import NavBar from "./NavBar";
import bg from "./media/main.jpg";
import About from "./About";
// import { Link } from "react-router-dom";
import Footer from "./Footer";
// import Video from "./Video";
import img1 from "./media/7.jpeg";
import img2 from "./media/8.jpeg";
import img3 from "./media/9.jpeg";
// import Form from "./Form";
import axios from "axios";
import { api } from "./api";
import { useEffect, useState } from "react";
const Home = () => {
  const [prices, setPrices] = useState({});
  const getPrices = () => {
    axios
      .get(`${api}/prices`)
      .then((res) => {
        console.log(res.data);
        setPrices(res.data.prices);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPrices();
  }, []);
  return (
    <>
      <NavBar />
      <section className="relative bg-gray-200">
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-800">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    OBSESSION GYM
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-lg text-center text-white">Elige tu plan:</div> */}

        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4  ">
            <div className="flex flex-wrap justify-center">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 lmd:w-1/4   px-4 text-center">
                <div
                  className="card-container bg-center bg-cover"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${img3})`,
                  }}
                >
                  <div className="px-4 py-5 flex-auto ">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <img src={food} alt="" />
                    </div>
                    <h6 className="text-xl text-white font-semibold">Dieta</h6>
                    <p className="mt-2 mb-4 text-white">
                      Mejora tu dieta con menús y recetas saludables diseñadas
                      para ti, con un plan mensual.
                    </p>
                    {/* <Link to="/contacto">
                      <div className="btn btn-warning">Contáctame</div>
                    </Link> */}
                    <div className="mt-1 text-white">Por tiempo limitado:</div>
                    <div className="text-white w-3/4 mx-auto font-bold text-2xl mt-1  bg-orange-600 rounded-full ">
                      ${prices.diet}
                      <span className="text-sm">/mes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  md:w-4/12 lmd:w-1/4 px-4 text-center">
                <div
                  className="card-container bg-opacity-100 bg-center bg-cover"
                  // style={{ backgroundImage: `url(${img2})` }}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url(${img2})`,
                  }}
                >
                  <div className="px-4 py-5 flex-auto bg-opacity-100">
                    <div className="text-white p-3 bg-opacity-100 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-600">
                      <img src={pesa} alt="" />
                    </div>
                    <h6 className="text-xl font-semibold text-white">
                      Dieta y Entrenamiento
                    </h6>
                    <p className="mt-2 mb-4 text-white">
                      El entrenamiento personal debe ir acompañado de una dieta,
                      esto es lo que debes saber sobre cómo lograr esta
                      conjunción.
                    </p>
                    <div className="mt-1 text-white">Por tiempo limitado:</div>
                    <div className="text-white font-bold w-3/4 mx-auto text-2xl mt-1  bg-orange-600 rounded-full ">
                      ${prices.training}
                      <span className="text-sm">/mes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 lmd:w-1/4 px-4 text-center">
                <div
                  className="card-container bg-center bg-cover"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 1)), url(${img1})`,
                  }}
                >
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-600">
                      <img src={agenda} alt="" />
                    </div>
                    <h6 className="text-xl font-semibold text-white">
                      Farmacologia
                    </h6>
                    <p className="mt-2 mb-4 text-white">
                      Permite ampliar las posibilidades de adaptación del
                      organismo a cargas extremadamente altas de deportes de
                      alto rendimiento.
                    </p>
                    <div className="mt-1 text-white">Por tiempo limitado:</div>
                    <div className="text-white font-bold text-2xl mt-1 w-3/4 mx-auto bg-orange-600 rounded-full ">
                      ${prices.drugs}
                      <span className="text-sm">/mes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="alert  shadow-lg w-1/2 mx-auto">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <h3 className="font-bold text-xl text-yellow-500">
                  Esta página está dirigida para personas sanas y activas en
                  algún deporte.
                </h3>
                {/* <div className="text-xs">You have 1 unread message</div> */}
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <Video /> */}
      <About></About>
      <Experiences />
      <div className="m-24">
        <div className="text-center mb-10 text-white font-bold text-3xl">
          Visita nuestra instalacion
        </div>
        <svg
          className="mx-auto mb-8 w-12 h-12 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
        >
          <path
            fill="currentColor"
            d="M20.274 9.869l-3.442-4.915 1.639-1.147 3.441 4.915-1.638 1.147zM18.39 12.409L16.67 9.95l-8.192 5.736 1.72 2.457-1.638 1.148-4.588-6.554 1.638-1.147 1.72 2.458 8.192-5.736-1.72-2.458 1.638-1.147 4.588 6.553-1.638 1.148zM20.765 7.083l1.638-1.147-1.147-1.638-1.638 1.147 1.147 1.638zM7.168 19.046l-3.442-4.915-1.638 1.147 3.441 4.915 1.639-1.147zM4.382 18.555l-1.638 1.147-1.147-1.638 1.638-1.147 1.147 1.638z"
          />
        </svg>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.974597977901!2d-99.76350878597749!3d19.370252547692694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d279a4115cc0bd%3A0x342cdd5fe0e1f0ef!2sAv.%20Miguel%20Hidalgo%2C%2050900%20Villa%20de%20Almoloya%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses!2smx!4v1681227787748!5m2!1ses!2smx"
          width="450"
          height="450"
          className="rounded-md mx-auto"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default Home;
