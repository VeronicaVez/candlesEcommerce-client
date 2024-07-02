import Button from "react-bootstrap/Button"
import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./CandleCard.css"

function CandleCard({ _id, name, description, price, aroma, image }) {
  return (
    <Container>
      <Card className="candle-card">
        <Card.Body>
          <Link to={`/candles/${_id}`} className="link-class">
            <Card.Img variant="top" src={image} className="photo-class" />
            <Card.Title className="title-class">{name}</Card.Title>
            <Card.Subtitle className="subtitle-class">
              €{price} - {aroma}
            </Card.Subtitle>
          </Link>
        </Card.Body>
        <div className="profile-overlay">
          <Card.Body className="description-overlay">
            <Card.Text>{description}</Card.Text>
            <Button className="button-class">Add to cart</Button>
          </Card.Body>
        </div>
      </Card>
    </Container>
  )
}

export default CandleCard
