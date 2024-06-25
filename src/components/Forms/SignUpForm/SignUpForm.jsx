import { useState } from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import Button from "react-bootstrap/Button"
import { useNavigate } from "react-router-dom"
import authServices from "./../../../services/auth.services.js"
import "./SignUpForm.css"

function SignupForm() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  })

  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { value, name } = e.target
    setSignupData((prevSignup) => ({ ...prevSignup, [name]: value }))
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()

    const { email, password } = signupData
    const requestBody = { email, password }

    authServices
      .signupUser(requestBody)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        setErrorMessage(
          "It seemes there is an error in your request, try again."
        )
      })
  }

  return (
    <div className="SignupForm">
      <Form onSubmit={handleSignupSubmit}>
        <h2>Sign up here</h2>
        <Form.Group className="mb-3">
          <Form.Label className="signup-label">Email Address</Form.Label>
          <Form.Control
            type="email"
            id="inputEmail"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
          <Form.Label className="signup-label">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            placeholder="Enter password"
            name="password"
            onChange={handleInputChange}
          />
          <Button type="submit" className="signup-button">
            Sign up
          </Button>
        </Form.Group>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </Form>
      <Row>
        <Col>
          <p>Join our incredible and relaxing world.</p>
        </Col>
      </Row>
    </div>
  )
}

export default SignupForm
