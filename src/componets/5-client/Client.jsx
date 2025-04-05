import "./client.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "./card/Card";

const data = [
  {
    imgSrc: "./assets/client-1.jpg",
    body: "Capturer exceeded all our expectations! Their attention to detail and ability to capture the essence of our special day was truly remarkable. Every time we look at our wedding photos, were transported back to those magical moments. Thank you for preserving our memories so beautifully!",
    name: "Sarah and Michael",
  },
  {
    imgSrc: "./assets/client-2.jpg",
    body: "We couldn't be happier with our family portrait session with Capturer. They made us feel relaxed and comfortable throughout the entire shoot, resulting in natural and candid photos that perfectly reflect our family dynamic. These images will be cherished for years to come!",
    name: "The Johnson Family",
  },
  {
    imgSrc: "./assets/client-3.jpg",
    body: "Capturer's maternity and newborn sessions captured the most precious moments of our lives with such tenderness and care. From the anticipation of pregnancy to the joy of welcoming our little one, every photo tells a story that we'll cherish forever. Thank you for creating beautiful memories for our family!",
    name: "Emily and David",
  },
];

const Client = () => {
  return (
    <section className="section__container client__container" id="client">
      <h2 className="section__header">~ TESTIMONIALS ~</h2>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {data.map((item) => {
          return (
            <SwiperSlide key={item.imgSrc}>
              <Card imgSrc={item.imgSrc} body={item.body} name={item.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Client;
