import CandleCard from "./../../components/CandleCard/CandleCard"
import { Row, Col } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { useState } from "react"

const CandlesPage = () => {
  return (
    <>
      <h1> Our candles</h1>
      <CandleCard />
    </>
  )
}

export default CandlesPage
