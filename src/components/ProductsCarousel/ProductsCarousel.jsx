import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./ProductsCarousel.css"

function ProductsCarousel({ products }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="ProductsCarousel">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((product) => (
          <div key={product._id} className="carousel-part">
            <Card className="card-carousel">
              <Link to={`/candles/${product._id}`}>
                <Card.Body className="card-body">
                  <Card.Img src={product.image} className="img-carousel" />
                  <Card.Title className="text1-carousel">
                    {product.name}
                  </Card.Title>
                  <Card.Subtitle className="text2-carousel">
                    €{product.price} - {product.aroma}
                  </Card.Subtitle>
                </Card.Body>
              </Link>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default ProductsCarousel
