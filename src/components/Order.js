import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
    transition: {
      staggerChildren: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: "beforeChildren",
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        <h2>Спасибо за заказ :)</h2>
      </AnimatePresence>
      <motion.p variants={childVariants}>Ваша "{pizza.base}" пицца с:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
