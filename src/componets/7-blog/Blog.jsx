import "./blog.css";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="blog" id="blog" ref={ref}>
      <div className="section__container blog__container">
        <div className="blog__content">
          <motion.h2
            className="section__header"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5 }}
          >
            ~ LATEST BLOG ~
          </motion.h2>
          <motion.h4
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Capturing Emotion in Every Frame
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 1 }}
          >
            This blog post delves into the importance of storytelling in
            photography and how Capturer approaches capturing emotion and
            narrative in their work. Readers will discover the techniques and
            strategies used by professional photographers to evoke emotion,
            convey meaning, and create compelling visual narratives that
            resonate with viewers on a deep level.
          </motion.p>

          <motion.div
            className="blog__btn"
            initial={{ opacity: 0, transform: "translateY(40px)" }}
            animate={
              hasAnimated
                ? { opacity: 1, transform: "translateY(0)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <button className="btn">Read More</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
