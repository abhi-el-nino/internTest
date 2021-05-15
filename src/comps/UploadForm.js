import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { Badge } from "react-bootstrap";
import { Form } from "react-bootstrap";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const setDefault = () => {
    setFile(null);
    setName("");
    setDescription("");
  };
  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form>
      <Form.Label
        style={{
          textAlign: "left",
          marginLeft: "-200px",
          marginBottom: "0.2rem",
        }}
      >
        Product Name <sup>*</sup>
      </Form.Label>
      <Form.Control
        type="text"
        placeholder=""
        style={{ width: "90%", margin: "auto" }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />

      <Form.Label
        style={{
          textAlign: "left",
          marginLeft: "-175px",
          marginBottom: "0.2rem",
        }}
      >
        Product Description
      </Form.Label>
      <Form.Control
        required
        type="text"
        placeholder=""
        style={{ width: "90%", margin: "auto" }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <label className="ll">
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <br />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && (
          <ProgressBar
            file={file}
            setDefault={setDefault}
            productName={name}
            productDesciption={description}
            setError={setError}
          />
        )}
      </div>
    </form>
  );
};

export default UploadForm;
