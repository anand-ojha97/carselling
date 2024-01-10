import { Row, Col, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const { Option } = Select;

const TotalPriceCalculator = () => {
  const [countryPort, setCountryPort] = useState([]);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchData = async (url, setter) => {
      try {
        const response = await axios.get(url);
        setter(response.data.data);
      } catch (error) {
        console.error(`Error fetching data for ${url}:`, error);
      }
    };

    fetchData('https://staging-api.pridemile.com/public/api/country-port', setCountryPort);
    fetchData('https://staging-api.pridemile.com/public/api/country-list', setCountryList);
  }, []);

  return (
    <div className="calc-section">
      <div className="container">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="calc-title">
              <h2>Total Price Calculator</h2>
              <p>Estimate the price of the vehicles based on your destination.<br />
                <span>Note:</span> In some cases, the total price cannot be estimated</p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div className="calc-title">
              <h2>Total Price Calculator</h2>
              <div className="dropdown-section">
                <Select placeholder="Select a country" style={{ width: '100%' }}>
                {countryList.map(country => (
                  <Option key={country.id} value={country.name}>
                    {country.port_names && country.port_names.map(port => (
                      <span key={port.id}>{port.name}</span>
                    ))}
                  </Option>
                ))}
              </Select>
              <Select placeholder="Select a country" style={{ width: '100%' }}>
                  {countryPort.map(option => (
                    <Option key={option.country_id} value={option.country.name}>
                      {option.country.name}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="calc-title">
              <h2>Total Price Calculator</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TotalPriceCalculator;
