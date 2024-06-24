import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                Gather round the table and sink your teeth into the ultimate comfort food
                a juicy, mouthwatering burger. With each savory bite, bonds are strengthened,
                laughter fills the air, and memories are made. Because when it comes to bringing
                people together, nothing quite rivals the simple joy of sharing a delicious burger with loved ones
              </p>
              <ul>
                <li>
                  <p>
                    Bite into bliss with our classic beef burger, lovingly crafted with premium cuts of meat
                  </p>
                </li>
                <li>
                  <p>Elevate your burger experience with our gourmet selection</p>
                </li>
                <li>
                  <p>
                    Veggie lovers rejoice with our mouthwatering plant-based burger option, packed with bursting flavor, proving that burgers are for everyone to enjoy.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
