import "./instagram.css";

const images = [
  "assets/image-1.jpg",
  "assets/image-2.jpg",
  "assets/image-3.jpg",
  "assets/image-4.jpg",
  "assets/image-5.jpg",
  "assets/image-6.jpg",
  "assets/image-7.jpg",
  "assets/image-8.jpg",
];

const Instagram = () => {
  return (
    <section className="section__container instagram__container">
      <h2 className="section__header">~ INSTAGRAM ~</h2>
      <div className="instagram__flex">
        {[...images, ...images].map((src, index) => (
          <img
            src={src}
            alt="instagram"
            key={index}
            aria-hidden={index >= images.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Instagram;
