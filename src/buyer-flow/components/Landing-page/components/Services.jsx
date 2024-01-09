import React from "react";
import { Card, Row, Col } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const cardData = [
  {
    title: "New Cars Added Daily ",
    imageSrc: "images/car1.png",
    description: "Access to more than 200,000 used cars in Japan",
  },
  {
    title: "Cars condition Check",
    imageSrc: "images/car-repair.png",
    description: "Thorough vehicle check by qualified mechanics and technicians",
  },
  {
    title: "Aution Service",
    imageSrc: "images/car1.png",
    description: "Access to auction all over Japan and bid on more than 50,000 vehicle per week",
  },
  // Add data for the remaining three cards
];

const Services = () => {
  return (
    <section className="makes">
      <div className="container">
        <div className="heading-section">
          <h2>Comprehensive services just a few clicks away</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>

        <Row gutter={[16, 16]}>
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card
                style={{
                  textAlign: "center",
                  borderRadius: 20,
                  background: "#FFF",
                  boxShadow: "0 0 7px 0 #F3EFFF",
                  border: "1px solid rgba(93, 32, 211, 0.20)",
                  padding: '40px 66px',
                }}
              >
                <img
                  alt="example"
                  src={card.imageSrc}
                  style={{
                    width: "100px",
                    padding: "20px",
                    borderRadius: 20,
                    background: "#96D320",
                  }}
                />
                <Card.Meta
                  title={<div style={{ margin: "20px 0 35px 0" }}>{card.title}</div>}
                  description={
                    <div>
                      {" "}
                      <CheckCircleOutlined style={{ color: "#96D320",marginRight:15 }} />
                      {card.description}
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Services;
