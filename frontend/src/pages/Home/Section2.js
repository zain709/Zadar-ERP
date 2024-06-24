import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Savor the classic flavors of our Original Pizza. Each slice is a delightful journey, with a crispy crust, rich tomato sauce, and a medley of fresh toppings that bring an authentic taste of tradition to your table`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Indulge in the unmatched quality of our Original Pizza, where every ingredient is carefully selected to deliver an flavor experience. premium ingredients make in every delicious bite!`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `In today’s hustle and bustle, waiting for package feels like eternity. That's why we’re excited to our fastest delivery service yet! fast delivery will have your package at your doorstep before you know it`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>The burger tastes better when you eat it with your family</h2>
              <p>
                Savor the flavor, because every bite is better when shared with loved ones.
                <br />
                Delicious moments are best enjoyed together bring your family and taste the difference!
              </p>
              <Link to="/menu" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
