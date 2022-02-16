import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';
import { Col, Row, Typography } from 'antd'

const { Title } = Typography
Chart.register(...registerables);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = []
  const coinTimeStamp = []

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i]?.price)
    coinTimeStamp.push(new Date(coinHistory?.data?.history[i]?.timestamp).toLocaleDateString())
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: 'Price in USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd', 
        borderColor: '#0071bd'
      }
    ]
  }

  // const options = {
  //   scales: {
      // yAxes: [
      //   {
      //     ticks: {
      //       beginAtZero: true
      //     }
      //   }
      // ]
  //     yAxes: [{
  //       gridLines: {
  //         color: "black",
  //         borderDash: [2, 5],
  //       },
  //       scaleLabel: {
  //         display: true,
  //         labelString: "Speed in Miles per Hour",
  //         fontColor: "green"
  //       }
  //     }]
  //   }
  // }

  return (
    <React.Fragment>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart</Title>
        <Col className="chart-container">
          <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-pirce">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data}/>
    </React.Fragment>
  )
}

export default LineChart