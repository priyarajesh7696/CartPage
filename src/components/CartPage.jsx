import React from 'react'
import { Button, Card, CardBody, CardImg, Col, Container, InputGroup, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CartPage() {
  return (
    <div className="h-100" style={{ backgroundColor: "info" }}>
   <Container className="py-5 h-100">
    <Row className="justify-content-center align-items-center h-100">
      <Col md="10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </h1>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>
              <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>

        <Card className="rounded-3 mb-4">
          <CardBody className="p-4">
            <Row className="justify-content-between align-items-center">
              <Col md="2" lg="2" xl="2">
                <CardImg className="rounded-3" fluid
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  alt="Cotton T-shirt" />
              </Col>
              <Col md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                <p>
                  <span className="text-muted">Size: </span>M{" "}
                  <span className="text-muted">Color: </span>Grey
                </p>
              </Col>
              <Col md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <Button color="link" className="px-2">
                  <i fas icon="minus" ></i>
                </Button>

                <InputGroup min={0} defaultValue={2} type="number" size="sm" />

                <Button color="link" className="px-2">
                <FontAwesomeIcon icon="fa-solid fa-plus" />
                </Button>
              </Col>
              <Col md="3" lg="2" xl="2" className="offset-lg-1">
                <h1 tag="h5" className="mb-0">
                  $499.00
                </h1>
              </Col>
              <Col md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <i fas icon="trash text-danger" size="lg" />
                </a>
              </Col>
            </Row>
          </CardBody>
        </Card>
        </Col>
    </Row>
  </Container>
  </div>
  )
}

export default CartPage