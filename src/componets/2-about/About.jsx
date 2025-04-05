import "./about.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section
      className="section__container about__container"
      id="about"
      ref={ref}
    >
      <motion.h2
        className="section__header"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5 }}
      >
        WE CAPTURE THE MOMENTS
      </motion.h2>
      <motion.p
        className="section__subHeader"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        At Capturer, we specialize in freezing those fleeting moments in time
        that hold immense significance for you. With our passion for photography
        and keen eye for detail, we transform ordinary moments into
        extraordinary memories.
      </motion.p>

      <motion.p
        className="section__subHeader"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5, delay: 1 }}
      >
        Whether it's a milestone event, a candid portrait, or the breathtaking
        beauty of nature, we strive to encapsulate the essence of every moment,
        ensuring that your cherished memories last a lifetime. Trust us to
        capture the magic of your life's journey, one frame at a time
      </motion.p>

      <motion.img
        src="./assets/logo-dark.png"
        alt="logo"
        initial={{ opacity: 0, transform: "translateY(40px)" }}
        animate={
          hasAnimated ? { opacity: 1, transform: "translateY(0)" } : undefined
        }
        transition={{ duration: 0.5, delay: 1.5 }}
      />
    </section>
  );
};

export default About;
