import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import { Container, Row, Col } from "react-bootstrap";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedPd, setSelectedPd] = useState("");
  const [selectedPn, setSelectedPn] = useState("");

  return (
    <div className="App">
      <Title />
      <Container>
        <Row>
          <Col md={{ span: 7 }}>
            <ImageGrid
              setSelectedImg={setSelectedImg}
              setSelectedPd={setSelectedPd}
              setSelectedPn={setSelectedPn}
            />
            {selectedImg && (
              <Modal
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
                selectedPn={selectedPn}
                setSelectedPn={setSelectedPn}
                setSelectedPd={setSelectedPd}
                selectedPd={selectedPd}
              />
            )}
          </Col>
          <Col md={{ span: 1 }}>
            <div className="v1"></div>
          </Col>
          <Col md={{ span: 4 }}>
            <UploadForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
