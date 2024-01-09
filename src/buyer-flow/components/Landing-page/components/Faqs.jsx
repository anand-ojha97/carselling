import React, { useState, useEffect } from "react";
import { Collapse, Row, Col } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Panel } = Collapse;

const Faqs = () => {
  const token = localStorage.getItem("token");
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    // Fetch FAQ data from your API using Axios
    axios
      .get("https://staging-api.pridemile.com/public/api/faq/list-faq", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setFaqData(response.data.data))
      .catch((error) => console.error("Error fetching FAQ data:", error));
  }, [token]);

  const customExpandIcon = ({ isActive }) => {
    return isActive ? <MinusOutlined /> : <PlusOutlined />;
  };

  const customItemRender = (key, { keyPath, node }) => {
    if (keyPath.length === 1) {
      return node;
    }
    return <Panel key={key} header={node.props.header} />;
  };

  return (
    <>
      <div className="FAQS">
        <div className="container">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <div className="heading-section" style={{ textAlign: "left" }}>
                <h2>
                  Frequently <br />
                  asked questions ?
                </h2>
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div className="heading-section" style={{ textAlign: "left" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Accumsan, vitae euismod in turpis. Consequat sit massa nisi,
                  rutrum arcu rhoncus odo. Rhoncus sit mauris magna{" "}
                </p>
              </div>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Collapse
                accordion
                expandIcon={customExpandIcon}
                itemRender={customItemRender}
                style={{ background: "none", border: "none", margin: "0 16px" }}
              >
                {faqData
                  .slice(0, Math.ceil(faqData.length / 2))
                  .map((item, index) => (
                    <Panel key={index} header={item.question}>
                      <p>{item.answer}</p>
                    </Panel>
                  ))}
              </Collapse>
            </Col>
            <Col xs={24} sm={12}>
              <Collapse
                accordion
                expandIcon={customExpandIcon}
                itemRender={customItemRender}
                style={{ background: "none", border: "none", margin: "0 16px" }}
              >
                {faqData
                  .slice(Math.ceil(faqData.length / 2))
                  .map((item, index) => (
                    <Panel key={index} header={item.question}>
                      <p>{item.answer}</p>
                    </Panel>
                  ))}
              </Collapse>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Faqs;
