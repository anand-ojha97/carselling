import React, { useEffect, useState } from "react";
import { Card, Row, Col, Button,Spin } from "antd";
import axios from "axios";

const Makes = () => {
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 12;
  const fetchMoreData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.access_token : null;
    
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const nextPage = page + 1;

    axios
      .get(
        `https://staging-api.pridemile.com/public/api/car-maker?limit=${limit}&pagination=true&page=${nextPage}`,
        { headers }
      )
      .then((response) => {
        if (Array.isArray(response.data.data)) {
          setCardData([...cardData, ...response.data.data]);
          setPage(nextPage);
        } else {
          console.error("API response is not an array:", response.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMoreData();
  }, []); // Fetch initial data

  return (
    <>
      <section className="makes">
        <div className="container">
          <div className="heading-section">
            <h2>Makes</h2>
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
                          alt={card.car_maker_name}
                          src={card.image_url}
                          style={{ width: "75px", margin: "10px auto" }}
                        />
                      }
                    >
                      <Card.Meta
                        title={card.car_maker_name}
                        description={card.cars_count}
                        style={{ textAlign: "center" }}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
          <div className="view-all-btn">
            <Button type="primary" ghost onClick={fetchMoreData}>
              View All
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Makes;
