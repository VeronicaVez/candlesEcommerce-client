import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Name-Candle</Card.Title>
        <Card.Subtitle>price</Card.Subtitle>
        {/* when you go over the price, it show to add to the card */}
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  )
}

export default BasicExample
