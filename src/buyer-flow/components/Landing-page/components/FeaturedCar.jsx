import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Spin, message } from "antd";
import axios from "axios";

const FeaturedCar = () => {
  const [carsBtn, setCarsBtn] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [filterBtn, setFilterBtn] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Set the first button as default initially
    if (carsBtn.length > 0) {
      handleButtonClick(carsBtn[0]);
    }
  }, [carsBtn]);

  useEffect(() => {
    if (loading) {
      message.loading({ content: "Data is being loaded...", key: "loading" });
    } else {
      message.destroy("loading");
    }
  }, [loading]);

  useEffect(() => {
    if (filteredCars.length > 0) {
      message.success("Data loaded successfully");
    } else {
      message.error("No cars match the selected filter");
    }
  }, [filteredCars]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://staging-api.pridemile.com/public/api/car-type-speciality"
      );
      setCarsBtn(response.data.data);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };

  const handleButtonClick = async (buttonData) => {
    setFilterBtn(buttonData.id);
    setLoading(true);
    try {
      const response = await axios.post(
        "https://staging-api.pridemile.com/public/api/car/car-details",
        { filters: { car_type_speciality: [buttonData.id] } }
      );
      setFilteredCars(response.data.data || []);
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="featuredCars">
      <div className="container">
        <div className="heading-section">
          <h2>Featured Cars</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        </div>
        <div className="button-container">
          {carsBtn.map((buttonData) => (
            <Button
              key={buttonData.id}
              onClick={() => handleButtonClick(buttonData)}
              style={{
                width: "auto",
                height: "50px",
                margin: "5px",
                backgroundColor:
                  filteredCars.length > 0 &&
                  filteredCars[0].id === buttonData.id
                    ? "#4CAF50" // Background color for active state
                    : undefined,
                borderColor:
                  filteredCars.length > 0 &&
                  filteredCars[0].id === buttonData.id
                    ? "#4CAF50" // Border color for active state
                    : undefined,
                // Add any other styles you need
              }}
            >
              {buttonData.name}
            </Button>
          ))}
        </div>

        <Row gutter={16}>
          {loading ? (
            <Col span={24}>
              <div className="spin">
                <Spin />
              </div>
            </Col>
          ) : filteredCars.length > 0 ? (
            filteredCars.map((carData) => (
              <Col key={carData.id} xs={24} sm={12} md={8} lg={6} xl={6}>
                <Card
                  className="cars-card"
                  cover={
                    carData.car_images.length > 0 ? (
                      <img
                        alt={`${carData.name}-0`}
                        src={carData.car_images[0].image} // Display only the first image
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          padding: 10,
                          borderRadius: 20,
                        }}
                      />
                    ) : (
                      <img
                        alt={`${carData.name}-default`}
                        src="https://staging.pridemile.com/_next/static/media/carImg1.d333bc04.png"
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          padding: 10,
                          borderRadius: 20,
                        }}
                      />
                    )
                  }
                  style={{ margin: "20px 0" }}
                >
                  <Card.Meta
                    title={<p className="car-title">{carData.title}</p>}
                    description={
                      <div className="car-details">
                        <div className="carInfo">
                          <p>{carData.mileage}</p>
                          <span>mileage</span>
                        </div>
                        <div className="carInfo">
                          <p>
                            {carData.manufacture_year}/
                            {carData.manufacture_month}
                          </p>
                          <span>year</span>
                        </div>
                        <div className="carInfo">
                          <p>{carData.engine_cc}cc</p>
                          <span>Engine</span>
                        </div>
                      </div>
                    }
                  />
                  <div className="price">
                    Price: <span>$ {carData.price}</span>
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <Col span={24}></Col>
          )}
        </Row>
      </div>
    </section>
  );
};

export default FeaturedCar;
