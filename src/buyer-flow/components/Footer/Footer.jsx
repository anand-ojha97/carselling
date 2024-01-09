import React from "react";
import { Layout, Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <Layout className="footer-layout">
          <Row gutter={[16, 16]} className="footer-row">
            <Col xs={24} sm={24} md={24} lg={8} xl={5}>
              <div className="ctc-div">
                <p>PRIDE MILE</p>
                <div className="mail">
                  <MailOutlined />
                  <span>ask@pridemile.com</span>
                </div>
                <div className="mail">
                  <PhoneOutlined />
                  <span>+81 50 31710 3983</span>
                </div>
                <div className="mail">
                  <MailOutlined />
                  <span>
                    Iwamotocho 3-10-7-7F Tojiki Building, Chiyoda, Tokyo, Japan
                    101-0032.
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={14} className="listing">
              <Row gutter={[16, 16]}>
                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                  <span>Company</span>
                  <ul>
                    <li>About PRIDE MILE</li>
                    <li>Bank Information</li>
                    <li>Why Choose Us</li>
                  </ul>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                  <span>Sell at pride mile</span>
                  <ul>
                    <li>Join our Seller membership</li>
                  </ul>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                  <span>Help & Support</span>
                  <ul>
                    <li>How to buy</li>
                    <li>Car Blog</li>
                    <li>FAQ</li>
                  </ul>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                  <span>Quick Links</span>
                  <ul>
                    <li>Search Cars</li>
                    <li>Pride mile partner</li>
                    <li>Pride mile partner</li>
                    <li>Local page</li>
                    <li>Testimonials </li>
                    <li>Search by dealer</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={5}>
              <div className="footer-img">
                <span className="title">PRIDE MILE</span>
                <p className="subtitle">Car from pride mile</p>
                <div className="fb">
                  <img src="images/fb.png" alt="Facebook" />
                  <p>
                    <ExclamationCircleOutlined /> Learn more
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="icons-row">
            <div className="follow-us">
                <p>Follow Us on</p>
                <div className="pay-icons">
                    <img src="images/fb.png" alt="fb" />
                    <img src="images/instagram.png" alt="instagram" />
                    <img src="images/youtube.png" alt="youtube" />
                    <img src="images/linkedin.png" alt="linkedin" />
                    <img src="images/twitter.png" alt="twitter" />
                </div>
            </div>
           
            <div className="follow-us">
                <p>Our Payment Methods</p>
                <div className="pay-icons">
                    <img src="images/payment6.png" alt="fb" />
                    <img src="images/payment5.png" alt="fb" />
                    <img src="images/payment4.png" alt="instagram" />
                    <img src="images/payment3.png" alt="youtube" />
                    <img src="images/payment2.png" alt="linkedin" />
                    <img src="images/payment1.png" alt="twitter" />
                </div>
            </div>
       
          </Row>
        </Layout>
      </div>
    </div>
  );
};

export default Footer;
