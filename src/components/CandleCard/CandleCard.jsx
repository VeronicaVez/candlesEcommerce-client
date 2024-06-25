import Button from "react-bootstrap/Button"
import { Card, CloseButton } from "react-bootstrap"
import { Link } from "react-router-dom"

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
    <>
      <Card>
        <Card.Body>
          {/*}   <CloseButton
            className="btn-close"
            onClick={() => deleteCandle(_id)}
          /> */}
          <Link to={`/candles/${_id}`} className="link-class">
            <Card.Img variant="top" src={image} />
            <Card.Title>
              {name} - {aroma}
            </Card.Title>
            <Card.Subtitle>{price}</Card.Subtitle>
            <Card.Text>{description}</Card.Text>
          </Link>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CandleCard
