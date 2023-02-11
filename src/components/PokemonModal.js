import React, { useState, useEffect } from "react";
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
  const [show, setShow] = useState(false); // this is for modal display
  const handleClose = () => setShow(false); // this is for modal display
  const handleShow = () => setShow(true); // this is for modal display

  const [buttonName, setButtonName] = useState("Like");

  useEffect(() => {
    // get data from Local Storage:
    const nameListLocal = localStorage.getItem("pokemonNameList"); // Json format , is string format "{pokemonNameList: ["pikachu","ivy"]}"
    // console.log("nameListLocal is: ", typeof JSON.parse(nameListLocal));
    let localStorageArray;
    if (nameListLocal === null) {
      localStorageArray = [];
    } else {
      localStorageArray = JSON.parse(nameListLocal); // javascript object {pokemonNameList: ["pikachu","ivy"]}
    }

    if (localStorageArray.includes(props.name)) { // condition to set button name
      setButtonName("Unlike");
    } else {
      setButtonName("Like");
    }
  }, [buttonName]);

  const handleLike = (event) => {
    // get data from Local Storage:
    const nameListLocal = localStorage.getItem("pokemonNameList"); // Json format , is string format "{pokemonNameList: ["pikachu","ivy"]}"
    // console.log("nameListLocal is: ", typeof JSON.parse(nameListLocal));
    let localStorageArray;
    if (nameListLocal === null) {
      localStorageArray = [];
    } else {
      localStorageArray = JSON.parse(nameListLocal); // javascript object {pokemonNameList: ["pikachu","ivy"]}
    }

    // define the button value
    if (buttonName === "Like") {
      // Toggle of like button
      setButtonName("Unlike"); // toggle the button function
    } else setButtonName("Like");

    if (buttonName === "Like") {
      // add it into the array
      localStorageArray.push(props.name);
      // console.log("localStorageArray is :", typeof props.name);
    } else {
      const indexOfName = localStorageArray.indexOf(props.name); // to find the index of pokemon name } give index!
      localStorageArray.splice(indexOfName, 1); // remove the value at index from the array.
    }
    console.log(localStorageArray);
    // get the final value and update it into the local storage.
    localStorage.setItem("pokemonNameList", JSON.stringify(localStorageArray));
  };

  // props.name === localStorageArray.includes(props.name) ? "Unlike":"Like”

  return (
    <>
      <Card className="bg-dark text-white" onClick={handleShow} border="light">
        <Card.Img src={props.imgUrl} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.name}</Card.Title>
          {props.types.length ? (
            props.types.map((item, index) => {
              return <Modal.Body key={index}>{item.type.name}</Modal.Body>;
            })
          ) : (
            <Modal.Body>No Type!</Modal.Body>
          )}
          <Card.Text>id:#{props.id}</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Button variant="primary" onClick={handleLike} className="w-100">
        {buttonName}
      </Button>

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
                  props.types.map((item, index) => {
                    return <Col key={index}>{item.type.name}</Col>;
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
                {props.abilities.length ? (
                  props.abilities.map((item, index) => {
                    return <Col key={index}>{item.ability.name}</Col>;
                  })
                ) : (
                  <Col>No Ability!</Col>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleLike}>
            {buttonName}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PokemonModal;
