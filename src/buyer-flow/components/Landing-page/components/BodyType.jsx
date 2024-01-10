import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button, Spin } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const BodyType = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMoreData = () => {
    axios
      .get(`https://staging-api.pridemile.com/public/api/car-info-list`)
      .then((response) => {
        let newData = response.data.data.body_style_one.slice(0, 12); // Limit to 12 items
        setCardData([...cardData, ...newData]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <>
      <section className="makes">
        <div className="container">
          <div className="heading-section">
            <h2>Body Type</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="make-card">
            {loading ? (
              <div className="spin">
                <Spin />
              </div>
            ) : (
              <Row gutter={16}>
                {cardData.map((card, index) => (
                  <Col xs={12} sm={12} md={8} lg={4} key={index}>
                    <Card
                      hoverable
                      style={{ width: "100%", marginBottom: 16 }}
                      cover={
                        <img
                          alt={card.name}
                          src={card.image_url}
                          style={{ width: "75px", margin: "10px auto" }}
                        />
                      }
                    >
                      <Card.Meta
                        title={card.name}
                        style={{ textAlign: "center" }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
          <div className="view-all-btn">
          <Link to="/car-list" > <Button type="primary" ghost >
             View All
            </Button></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BodyType;
