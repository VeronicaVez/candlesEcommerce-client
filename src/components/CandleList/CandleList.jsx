import { useEffect, useState } from "react"
import CandleCard from "../CandleCard/CandleCard"
import { Row, Col } from "react-bootstrap"
import candleServices from "./../../services/candle.services"

function CandleList() {
  const [candles, setCandles] = useState([])

  useEffect(() => {
    getAllCandles()
  }, [])

  const getAllCandles = () => {
    candleServices
      .getAllCandles()
      .then(({ data }) => setCandles(data))
      .catch((err) => console.log(err))
  }

  const deleteCandle = (id) => {
    candleServices
      .deleteCandle(id)
      .then(() => {
        setCandles((prevCandles) =>
          prevCandles.filter((candle) => candle._id !== id)
        )
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="CandleList">
      <Row>
        {candles.map((candle) => (
          <Col key={candle._id} lg={3} md={6}>
            <CandleCard {...candle} deleteCandle={deleteCandle} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CandleList
