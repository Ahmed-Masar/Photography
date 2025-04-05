import "./protfolio.css";

const Protfolio = () => {
  return (
    <section className="section__container prot__container">
      <h2 className="section__header">~ PORTFOLIO ~</h2>
      <div className="prot__grid">
        <div className="prot__card">
          <img src="./assets/portfolio-1.jpg" alt="portfolio" />

          <div className="prot__content">
            <button className="btn">VIEW PPORTFOLIO</button>
          </div>
        </div>

        <div className="prot__card">
          <img src="./assets/portfolio-2.jpg" alt="portfolio" />

          <div className="prot__content">
            <button className="btn">VIEW PPORTFOLIO</button>
          </div>
        </div>

        <div className="prot__card">
          <img src="./assets/portfolio-3.jpg" alt="portfolio" />

          <div className="prot__content">
            <button className="btn">VIEW PPORTFOLIO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protfolio;
