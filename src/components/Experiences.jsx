import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { api } from "./api";

const Experiences = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [exps, setExps] = useState([]);
  const getExperiences = () => {
    axios
      .get(`${api}/exps`)
      .then((res) => {
        setExps(res.data.exps);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getExperiences();
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section id="experiencias" className="pt-[50px]">
      <div className="text-white text-center font-bold text-4xl py-4 ">
        Experiencias
      </div>
      <Swiper
        slidesPerView={windowWidth < 1070 ? 1 : 3}
        spaceBetween={1}
        // pagination={{
        //   type: "bullets",
        // }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        className="mil500:w-4/6 "
      >
        {exps &&
          exps.map((exp, key) => {
            return (
              <SwiperSlide className="mx-auto" key={key}>
                <div className="mx-auto">
                  <div className="bg-white mx-auto border-gradient-to-r from-blue-500 shadow-xl rounded-lg py-3 min-w-[265px] max-w-[265px]  h-[340px]">
                    <div className="photo-wrapper p-2">
                      <img
                        className="w-32 h-32 rounded-full mx-auto"
                        src={exp.image}
                        alt=""
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                        {exp.name}
                      </h3>
                      {/* <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Web Developer</p>
              </div> */}
                      <div className="w-full">
                        <p className="text-center overflow-y-auto text-gray-600 break-words">
                          {exp.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default Experiences;
