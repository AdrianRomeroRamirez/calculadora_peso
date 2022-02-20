import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Ana from "./Ana.png";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const preciosa = (e) => {
    setShow(true);
  };

  return (
    <div className="App">
      <Form className="p-5">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Introduce tu peso</Form.Label>
          <Form.Control type="text" placeholder="Introduce tu peso" />
          <Form.Text>kg</Form.Text>
        </Form.Group>
        <Button variant="primary" type="button" onClick={() => preciosa()}>
          Calcular
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ERES PRECIOSA!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Ana} className="img-fluid" alt="Diosa"></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Lo sé! ❤️🍀❤️
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
