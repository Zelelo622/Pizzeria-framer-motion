import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>Хотите сделать другую пиццу?</p>
            <Link to="/">
              <button>Начать заново</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
