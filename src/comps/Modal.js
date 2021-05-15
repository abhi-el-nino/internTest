import React from "react";
import { motion } from "framer-motion";

const Modal = ({
  setSelectedImg,
  selectedImg,
  selectedPn,
  selectedPd,
  setSelectedPn,
  setSelectedPd,
}) => {
  console.log(selectedPd, selectedPn);
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      console.log(selectedPd, selectedPn);
      setSelectedImg(null);
      setSelectedPn("");
      setSelectedPd("");
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <p
        style={{
          zIndex: 1000,
          position: "relative",
          bottom: "28.3rem",
          backgroundColor: "wheat",
          width: "16%",
          left: "54.6rem",
          height: "12%",
        }}
      >
        <ul>
          <li style={{ marginTop: "15px" }}>
            Name : <i>{selectedPn}</i>
          </li>
          <li style={{ marginTop: "5px" }}>
            Description : <i>{selectedPd}</i>
          </li>
        </ul>
      </p>
    </motion.div>
  );
};

export default Modal;
