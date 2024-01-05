import React from "react";
import { Select, Button, Image, Row, Col } from "antd";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-heading">
              <h1>Your search for your car ends here!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
            <div className="selection">
              <Row gutter={[16, 16]}>
                {/* Options Above Input Groups */}
                <Col span={24}>
                  <Select
                    style={{ width: "20%", marginRight: 16, height: 40 }}
                    placeholder="Maker"
                  >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    {/* Add more options as needed */}
                  </Select>

                  <Select
                    style={{ width: "20%", marginRight: 16, height: 40 }}
                    placeholder="Model"
                  >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>

                  <Select
                    style={{ width: "20%", marginRight: 16, height: 40 }}
                    placeholder="Body Type"
                  >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>

                  <Select
                    style={{ width: "20%", height: 40 }}
                    placeholder="Steering"
                  >
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                  </Select>
                </Col>
              </Row>
              <Button ghost>Explore Cars</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="image-section">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          <Image width={366} src="images/offer-img5.png" />
          <Image width={366} src="images/offer-img3.png" />
          <Image width={366} src="images/offer-img4.png" />
          <Image width={366} src="images/offer-img2.png" />
          <Image width={366} src="images/offer-img1.png" />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default Banner;
