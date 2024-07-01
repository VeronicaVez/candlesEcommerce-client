import Button from "react-bootstrap/Button"
import { Card, CloseButton, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./CandleCard.css"

function CandleCard({
  _id,
  name,
  description,
  price,
  aroma,
  image,
  deleteCandle,
}) {
  return (
    <Container>
      <Card className="candle-card">
        <Card.Body>
          {/*}   <CloseButton
            className="btn-close"
            onClick={() => deleteCandle(_id)}
          /> */}
          <Link to={`/candles/${_id}`} className="link-class">
            <Card.Img variant="top" src={image} className="photo-class" />
            <Card.Title className="title-class">{name}</Card.Title>
            <Card.Subtitle className="subtitle-class">
              €{price} - {aroma}
            </Card.Subtitle>
            <Card.Text className="text-class">{description}</Card.Text>
          </Link>
          <Button className="button-class">Add to cart</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default CandleCard
