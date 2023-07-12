import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { api } from "../api";
import { useEffect, useState } from "react";
const SwiperClientImages = ({ user_id }) => {
  const [images, setImages] = useState([]);
  const getImages = () => {
    axios
      .get(`${api}/user_images/${user_id}`)
      .then((res) => {
        console.log(res);
        setImages(res.data.user_images);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      <Swiper
        navigation={true}
        spaceBetween={50}
        modules={[Pagination, Navigation, Autoplay]}
        className="max-w-[350px]"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i} className="">
            <div className="w-full  ">
              <img
                onClick={() => window.open(image.image, "_blank")}
                src={image.image}
                className="w-full"
                alt=""
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="flex justify-between font-bold italic">
          <div className="badge badge-info">Mas reciente</div>
          <div className="badge badge-info">Mas antigua</div>
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperClientImages;
