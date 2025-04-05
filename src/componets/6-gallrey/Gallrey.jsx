import "./gallrey.css";

const Gallrey = () => {
  return (
    <section className="section__container gallrey__container">
      <h2 className="section__header">~ GALLERY ~</h2>
      <div className="gallrey__grid">
        <img src="assets/image-1.jpg" alt="gallery" />
        <img src="assets/image-2.jpg" alt="gallery" />
        <img src="assets/image-3.jpg" alt="gallery" />
        <img src="assets/image-4.jpg" alt="gallery" />
        <img src="assets/image-5.jpg" alt="gallery" />
        <img src="assets/image-6.jpg" alt="gallery" />
        <img src="assets/image-7.jpg" alt="gallery" />
        <img src="assets/image-8.jpg" alt="gallery" />
      </div>

      <div className="gallrey__btn">
        <button className="btn">VIEW GALLERY</button>
      </div>
    </section>
  );
};

export default Gallrey;
