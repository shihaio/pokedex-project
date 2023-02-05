import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import ModalBody from "react-bootstrap/ModalBody";
import Figure from "react-bootstrap/Figure";

import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function PokemonModal(props) {
  // console.log(props);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLike = () => setShow(false);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        {props.name}
        {props.types.length ? (
          props.types.map((item) => {
            return <Modal.Body>{item.type.name}</Modal.Body>;
          })
        ) : (
          <Modal.Body>No Type!</Modal.Body>
        )}
      </Button> */}
      <Card className="bg-dark text-white" onClick={handleShow} border="light">
        <Card.Img src={props.imgUrl} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.name}</Card.Title>
          {props.types.length ? (
            props.types.map((item) => {
              return <Modal.Body>{item.type.name}</Modal.Body>;
            })
          ) : (
            <Modal.Body>No Type!</Modal.Body>
          )}
          <Card.Text>id:#{props.id}</Card.Text>
        </Card.ImgOverlay>
      </Card>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={props.imgUrl}
            />
          </Figure>
          <h2>About</h2>
          <Container>
            <Row xs={2} md={4} lg={6}>
              <Col>Species</Col>
              <Col>
                {props.types.length ? (
                  props.types.map((item) => {
                    return <Col>{item.type.name}</Col>;
                  })
                ) : (
                  <Col>No Type!</Col>
                )}
              </Col>
            </Row>
            <Row xs={2} md={4} lg={6}>
              <Col>Height</Col>
              <Col>{props.height * 10} cm</Col>
            </Row>{" "}
            <Row xs={2} md={4} lg={6}>
              <Col>Weight</Col>
              <Col>{props.weight / 10} kg</Col>
            </Row>{" "}
            <Row xs={2} md={4} lg={6}>
              <Col>Abilities</Col>
              <Col>
                {/* {props.abilites.lenght ? (
                  props.abilites.map((item) => {
                    return <Col>{item.ability.name}</Col>;
                  })
                ) : (
                  <Col>No Ability!</Col>
                )} */}
              </Col>
            </Row>
          </Container>
        </Modal.Body>

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
