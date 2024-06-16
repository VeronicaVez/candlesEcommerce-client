import CandleCard from "./../components/CandleCard"
import { Container } from "react-bootstrap"

const CandlesPage = () => {
  return (
    <Container className="CandlesPage">
      <h1> Our candles</h1>
      <CandleCard />
    </Container>
  )
}

export default CandlesPage
