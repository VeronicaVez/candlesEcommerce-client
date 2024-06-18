import { useContext, useState } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/Button"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "./../../../context/auth.context"
import authServices from "./../../../services/auth.services"

function LoginForm() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const { storeToken, authenticateUser } = useContext(AuthContext)
  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { value, name } = e.target
    setLoginData((prevLogin) => ({ ...prevLogin, [name]: value }))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    const { email, password } = loginData
    const requestBody = { email, password }

    authServices
      .loginUser(requestBody)
      .then(({ data }) => {
        storeToken(data.authToken)
        authenticateUser()
        navigate("/")
      })
      .catch((error) => {
        setErrorMessage(
          "It seemes there is an error in your request, try again."
        )
      })
  }

  return (
    <div className="LoginForm">
      <Form onSubmit={handleLoginSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            id="inputEmail"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            placeholder="Enter password"
            name="password"
            onChange={handleInputChange}
          />
          <Button type="submit">Login</Button>
        </Form.Group>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Form>
      <Row>
        <Col>
          <p>
            Don't have an account yet? No worries,
            <Link to={"/signup"} className="Link">
              sign up here!
            </Link>
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default LoginForm
