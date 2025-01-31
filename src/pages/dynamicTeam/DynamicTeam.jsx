import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NewImg from "../../assets/images/Frame 1.jpg";
import NewImg2 from "../../assets/images/Frame 2.jpg";
import NewImg3 from "../../assets/images/Frame 3.jpg";
import NewImg4 from "../../assets/images/Frame 4.jpg";

const DynamicTeam = () => {
  const [clicked, setClicked] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const images = [
    { id: 1, image: NewImg },
    { id: 2, image: NewImg2 },
    { id: 3, image: NewImg3 },
    { id: 4, image: NewImg4 },
  ];

  return (
    <div className="bg-blue-950 min-h-screen flex flex-col justify-center items-center">
      <p className="text-4xl font-bold text-white mb-15">
        <span className="text-sky-400">Our Dynamic Team</span> Behind Our
        Successful Project!
      </p>
      <motion.div
        ref={ref}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: inView ? 1 : 0.9, opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="cursor-pointer"
        onClick={() => setClicked(!clicked)}
      >
        {!clicked ? (
          <img src={NewImg} alt="Team" className="rounded-xl shadow-lg w-100 h-80 object-contain" />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 
            {images.map((item, index) => (
              <motion.img
                key={item.id}
                src={item.image}
                alt={`Team Member ${index + 1}`}
                className="rounded-xl shadow-lg w-48 h-48 md:w-80 md:h-80 object-contain"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default DynamicTeam;