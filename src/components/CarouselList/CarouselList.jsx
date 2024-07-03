import { useEffect, useState } from "react"
import homepageServices from "./../../services/homepage.services"
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel"

function CarouselList() {
  const [candlesCarousel, setCandlesCarousel] = useState([])

  useEffect(() => {
    getAllCandlesCarousel()
  }, [])

  const getAllCandlesCarousel = () => {
    homepageServices
      .getAllCandlesCarousel()
      .then(({ data }) => setCandlesCarousel(data))
      .catch((err) => console.log(err))
  }

  return (
    <div className="CarouselList">
      <ProductsCarousel products={candlesCarousel} />
    </div>
  )
}

export default CarouselList
