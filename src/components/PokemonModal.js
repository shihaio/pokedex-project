import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function PokemonModal(props) {
  // console.log(props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLike = () => setShow(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.name}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        {props.types.length ? (
          props.types.map((item) => {
            return <Modal.Body>{item.type.name}</Modal.Body>;
          })
        ) : (
          <Modal.Body>no TYpe</Modal.Body>
        )}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLike}>
            Like!
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PokemonModal;
