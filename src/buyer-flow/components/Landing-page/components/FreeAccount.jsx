import React from "react";
import { Form, Input, Button, Select, Row, Col } from "antd";

const FreeAccount = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission logic here
  };

  return (
    <>
      <div className="FreeAcc">
        <div className="container">
          <div className="white-heading">
            <p>Stay Updated, get discounts & many more.</p>
            <h3>Create a free account</h3>
          </div>
          <Form onFinish={onFinish} layout="horizontal">
            <Row gutter={20}>
              <Col xs={24} sm={24} md={12} lg={7}>
                <Form.Item
                  name="country"
                  rules={[
                    { required: true, message: "Please select your country!" },
                  ]}
                >
                  <Select
                    className="FreeAcc_inputs"
                    placeholder="Please select country"
                    showSearch
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    style={{ height: "60px" }}
                  >
                    <Select.Option value="usa">USA</Select.Option>
                    <Select.Option value="canada">Canada</Select.Option>
                    {/* Add more countries as needed */}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={7}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    { type: "email", message: "Invalid email address!" },
                  ]}
                >
                  <Input
                    className="FreeAcc_inputs"
                    placeholder="Please enter email"
                    style={{ height: "60px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={8}>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password
                    className="FreeAcc_inputs"
                    placeholder="Please enter password"
                    style={{ height: "60px" }}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={2}>
                <Button htmlType="submit" style={{ height: "60px" }}>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </>
  );
};

export default FreeAccount;
