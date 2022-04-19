import React from "react";
import "./testimonials.css";
import AVT1 from "../../assests/avatar1.jpg";
import AVT2 from "../../assests/avatar2.jpg";
import AVT3 from "../../assests/avatar3.jpg";
import AVT4 from "../../assests/avatar4.avif";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVT1} alt=""></img>
          </div>
          <h5 className="client__name">Rae Cligy</h5>
          <small className="client__review">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </small>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVT2} alt=""></img>
          </div>
          <h5 className="client__name">Rae Cligy</h5>
          <small className="client__review">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </small>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVT3} alt=""></img>
          </div>
          <h5 className="client__name">Rae Cligy</h5>
          <small className="client__review">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </small>
        </article>
        <article className="testimonials">
          <div className="client__avatar">
            <img src={AVT4} alt=""></img>
          </div>
          <h5 className="client__name">Rae Cligy</h5>
          <small className="client__review">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
