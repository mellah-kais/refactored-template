"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsArray = [
  {
    image: "/img/testimonials/testimonials-1.jpg",
    title: "Saul Goodman",
    jobPosition: "Ceo &amp; Founder",
    description:
      "Proin iaculis purus consequat sem cure digni ssim done porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: "/img/testimonials/testimonials-2.jpg",
    title: "Jena Karlis",
    jobPosition: "Store Owner",
    description:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    image: "/img/testimonials/testimonials-3.jpg",
    title: "Matt Brandon",
    jobPosition: "Freelancer",
    description:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
  },
  {
    image: "/img/testimonials/testimonials-4.jpg",
    title: "Saul Goodman",
    jobPosition: "Ceo &amp; Founder",
    description:
      "Proin iaculis purus consequat sem cure digni ssim done porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: "/img/testimonials/testimonials-5.jpg",
    title: "John Larson",
    jobPosition: "Entrepreneur",
    description:
      "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpanulla illum cillum fugiat legam esse veniam culpa fore nisicillum quid.",
  },
];
const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // 5000 milliseconds (5 seconds)
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsArray.length - 2 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    clearInterval(intervalId);
    setCurrentIndex(index);
  };
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-slider">
          <AnimatePresence initial={false}>
            <motion.div
              className="testimonial-wrap"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
            >
              <div className="testimonial-item">
                <Image
                  width="90"
                  height="90"
                  src={testimonialsArray[currentIndex].image}
                  className="testimonial-img"
                  alt=""
                />
                <h3>{testimonialsArray[currentIndex].title}</h3>
                <h4>{testimonialsArray[currentIndex].jobPosition}</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
              <div className="testimonial-item">
                <Image
                  width="90"
                  height="90"
                  src={testimonialsArray[currentIndex + 1].image}
                  className="testimonial-img"
                  alt=""
                />
                <h3>{testimonialsArray[currentIndex + 1].title}</h3>
                <h4>{testimonialsArray[currentIndex + 1].jobPosition}</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="indicator">
          {testimonialsArray.map(
            (_, index) =>
              index !== testimonialsArray.length - 1 && (
                currentIndex !== index ? <div
                  key={index}
                  className={`dot  `}
                  onClick={() => handleDotClick(index)}
                ></div> :
                <div
                  key={index}
                  className={`dot active`}
                ></div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
