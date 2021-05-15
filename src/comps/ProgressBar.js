import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { projectFirestore, timestamp } from "../firebase/config";
import {} from "../firebase/config";
const ProgressBar = ({
  file,
  productName,
  productDesciption,
  setDefault,
  setError,
}) => {
  const { progress, url } = useStorage(file);

  const submitHandler = async () => {
    try {
      const collectionRef = projectFirestore.collection("images");
      const createdAt = timestamp();
      if (productName !== "") {
        await collectionRef.add({
          url,
          createdAt,
          name: productName,
          description: productDesciption,
        });

        setDefault();
      } else {
        setError("name field is required");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}
      ></motion.div>
      {url && (
        <Button
          style={{ marginTop: "15px" }}
          variant="success"
          onClick={submitHandler}
        >
          Add Product
        </Button>
      )}
    </React.Fragment>
  );
};

export default ProgressBar;
