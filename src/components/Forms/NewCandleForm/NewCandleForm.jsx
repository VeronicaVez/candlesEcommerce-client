import { useContext, useState } from "react"
import { AuthContext } from "./../../../context/auth.context"
import CandleServices from "../../../services/candle.services"
import { useNavigate } from "react-router-dom"
import { Form, Button } from "react-bootstrap"
import uploadServices from "./../../../services/upload.services"
import "./NewCandleForm.css"

function CandleForm() {
  const { user } = useContext(AuthContext)

  const [newCandle, setNewCandle] = useState({
    name: "",
    description: "",
    price: "",
    aroma: "",
    image: "",
  })

  const navigate = useNavigate()

  const [loadingImg, setLoadingImg] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()

    CandleServices.createCandle(newCandle)
      .then(() => navigate(`/candles`))
      .catch((err) => console.log(err))
  }

  const handleChangeCandle = (e) => {
    const { value, name } = e.target
    setNewCandle((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFileUpload = (e) => {
    setLoadingImg(true)

    const formData = new FormData()
    formData.append("imageData", e.target.files[0])

    uploadServices
      .uploadimage(formData)
      .then((res) => {
        setNewCandle({ ...newCandle, image: res.data.cloudinary_url })
        setLoadingImg(false)
      })
      .catch((err) => console.log(err))
    setLoadingImg(false)
  }

  return (
    <Form onSubmit={handleFormSubmit} className="NewCandleForm">
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Name"
          onChange={handleChangeCandle}
          value={newCandle.name}
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Description"
          onChange={handleChangeCandle}
          value={newCandle.description}
          name="description"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Price"
          onChange={handleChangeCandle}
          value={newCandle.price}
          name="price"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select
          onChange={handleChangeCandle}
          value={newCandle.aroma}
          name="aroma"
        >
          <option value="Lavender">Lavender</option>
          <option value="Rose">Rose</option>
          <option value="Citrus">Citrus</option>
          <option value="Berry">Berry</option>
          <option value="Coco">Coco</option>
          <option value="Cinnamon">Cinnamon</option>
          <option value="Chocolate">Chocolate</option>
          <option value="Coffee">Coffee</option>
          <option value="Vanilla">Vanilla</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="file"
          onChange={handleFileUpload}
          className="mb-3"
        />
      </Form.Group>
      <Button type="submit" disabled={loadingImg} className="button-class">
        {loadingImg ? "Loading Image..." : "Create review"}
      </Button>
    </Form>
  )
}

export default CandleForm
