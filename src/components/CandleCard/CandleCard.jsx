import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import { CloseButton } from "react-bootstrap"
import Link from "react"

function CandleCard({ id, name, description, price, aroma, image }) {
  return (
    <>
      {/*  <Card style={{ width: "18rem" }}>
        < Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <CloseButton
          className="btn-close"
          onClick={() => {
            removeCard(id)
          }}
        />
        <Link to={`/candles/${id}`} className="link-class">
          <Card.Img variant="top" src={image} />
          <Card.Title>
            {name} - {aroma}
          </Card.Title>
          <Card.Subtitle>{price}</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Link>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card > */}
    </>
  )
}

export default CandleCard
