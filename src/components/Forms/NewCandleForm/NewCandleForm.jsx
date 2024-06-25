import { useContext } from "react"
import { AuthContext } from "./../../../context/auth.context"
import candleServices from "../../../services/candle.services"

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

    candleServices
      .newCandle(newCandle)
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
        setCoasterData({ ...coasterData, imageUrl: res.data.cloudinary_url })
      })
      .catch((err) => console.log(err))
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="image">
        <Form.Control
          as="textarea"
          rows={1}
          placeholder="Title"
          onChange={handleChangeCandle}
          value={newCandle.title}
          name="title"
        />
      </Form.Group>
    </Form>
  )
}

export default CandleForm
