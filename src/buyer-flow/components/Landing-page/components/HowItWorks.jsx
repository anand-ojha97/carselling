import React from "react";
import { Card, Col, Row } from "antd";

const HowItWorks = () => {
  let counter = 0;
  const stepData = [
    {
      stepDescription: "Select the perfect car for you",
    },
    {
      stepDescription: "Confirm & Get an invoice",
    },
    {
      stepDescription: "Complete payment & Share proof",
    },
    {
      stepDescription: "Shipment & Delivery",
    },
  ];

  return (
    <>
      <div className="howitworks">
        <div className="container">
          <div className="heading-section">
            <h2>How it works - Overview of transaction.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Accumsan, vitae euismod in turpis.
            </p>
          </div>
          <Row gutter={[16, 16]}>
            {stepData.map((step, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card style={{ textAlign: "center", padding: "25px 38px" }}>
                  <span>{++counter}</span>
                  <h3>{step.stepDescription}</h3>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
