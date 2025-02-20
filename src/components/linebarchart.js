import { DualAxes } from '@ant-design/plots';
import React from 'react';
import {Row,Col} from "antd";

const DemoLine = () => {
  const data = [
    {
      Month: 'Jan',
      Evaporation: 2,
      Precipitation: 2.6,
      Temperature: 2,
    },
    {
      Month: 'Feb',
      Evaporation: 4.9,
      Precipitation: 5.9,
      Temperature: 2.2,
    },
    {
      Month: 'Mar',
      Evaporation: 7,
      Precipitation: 9,
      Temperature: 3.3,
    },
    {
      Month: 'Apr',
      Evaporation: 23.2,
      Precipitation: 26.4,
      Temperature: 4.5,
    },
    {
      Month: 'May',
      Evaporation: 25.6,
      Precipitation: 28.7,
      Temperature: 6.3,
    },
    {
      Month: 'Jun',
      Evaporation: 76.7,
      Precipitation: 70.7,
      Temperature: 10.2,
    },
    {
      Month: 'Jul',
      Evaporation: 135.6,
      Precipitation: 175.6,
      Temperature: 20.3,
    },
    {
      Month: 'Aug',
      Evaporation: 162.2,
      Precipitation: 182.2,
      Temperature: 23.4,
    },
    {
      Month: 'Sep',
      Evaporation: 32.6,
      Precipitation: 48.7,
      Temperature: 23,
    },
    {
      Month: 'Oct',
      Evaporation: 20,
      Precipitation: 18.8,
      Temperature: 16.5,
    },
    {
      Month: 'Nov',
      Evaporation: 6.4,
      Precipitation: 6,
      Temperature: 12,
    },
    {
      Month: 'Dec',
      Evaporation: 3.3,
      Precipitation: 2.3,
      Temperature: 6.2,
    },
  ];

  const config = {
    data,
    xField: 'Month',
    scale: { y: { nice: false } },
    children: [
      {
        type: 'line',
        yField: 'Temperature',
        shapeField: 'smooth',
        colorField: '#EE6666',
        scale: { y: { domainMax: 30 } },
        axis: {
          y: {
            title: 'Temperature (°C)',
            style: { titleFill: '#EE6666' },
          },
        },
      },
      {
        type: 'interval',
        yField: 'Evaporation',
        colorField: '#5470C6',
        scale: { y: { domainMax: 200 } },
        style: { fillOpacity: 0.8 },
        axis: {
          y: {
            position: 'right',
            title: 'Evaporation (ml)',
            style: { titleFill: '#5470C6' },
          },
        },
      },
      {
        type: 'line',
        yField: 'Precipitation',
        shapeField: 'smooth',
        colorField: '#91CC75',
        style: {
          lineWidth: 2,
          lineDash: [2, 2],
        },
        axis: {
          y: {
            position: 'right',
            title: 'Precipitation (ml)',
            style: { titleFill: '#91CC75' },
          },
        },
      },
    ],
  };
  return<div>
    <Row>
      <Col lg={12}>
      <DualAxes {...config} />;
      </Col>
    </Row>

  </div> 
};

export default DemoLine;
