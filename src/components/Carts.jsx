import React,{useState,useContext,useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import {ProductContext} from "../utils/ProductContextComponents";
import Cards from "./Cards";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  Row,
} from "react-bootstrap";


function Carts() {
  let {products,setProducts}= useContext(ProductContext);
 
  
  let navigate = useNavigate()
  
 return <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <Container className="h-100 py-5">
        <Row className="justify-content-center align-items-center h-100">
          <Col>
            <Card className="shopping-cart " style={{ borderRadius: "15px" }}>
              <CardBody className="text-black">
                <h2 className="mb-5 pt-2 text-center fw-bold text-uppercase bg-info rounded ">
                  Shopping cart
                </h2>
                {
                  products.map((e,i)=>
                  {
                  return <Cards e={e} key={i} />
                  })
                }
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>                
}

export default Carts;
