import "./service.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

let serviceCardData = [
  {
    title: "Portrait Sessions",
    text: "Our portrait sessions are designed to showcase your personality and style in stunning imagery.",
  },
  {
    title: "Maternity Sessions",
    text: "Embrace the beauty and miracle of new life with our maternity and newborn photography sessions",
  },
  {
    title: "Family Sessions",
    text: "Cherish the bond of family with our custom-designed playful candid moments and portrait sessions.",
  },
];

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const serviceList = serviceCardData.map((card, index) => {
    return (
      <motion.div
        className="service__card"
        key={index}
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h4>{card.title}</h4>
        <p>{card.text}</p>
      </motion.div>
    );
  });
  return (
    <section className="service" id="service" ref={ref}>
      <div className="section__container service__container">
        <motion.h2
          className="section__header"
          initial={{ opacity: 0, transform: "translateY(40px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5 }}
        >
          ~ SERVICES ~
        </motion.h2>
        <motion.p
          className="section__subHeader"
          initial={{ opacity: 0, transform: "translateY(40px)" }}
          animate={
            hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
          }
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          At Capturer, we offer a range of professional photography services
          tailored to meet your unique needs. With a commitment to excellence
          and creativity, we strive to exceed your expectations, delivering
          captivating visuals that tell your story with authenticity and
          passion.
        </motion.p>

        <div className="service__grid">{serviceList}</div>
      </div>
    </section>
  );
};

export default Service;
