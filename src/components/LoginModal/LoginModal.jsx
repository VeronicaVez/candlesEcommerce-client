import LoginForm from "./../../components/Forms/LoginForm/LoginForm.jsx"
import { Button, Modal } from "react-bootstrap"
import { useState } from "react"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { Link } from "react-router-dom"
import "./LoginModal.css"

function LoginModal() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Button onClick={handleShow} className="loginButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#643843"
          className="bi bi-person"
          viewBox="0 0 16 16"
          stroke="#643843"
          strokeWidth="0.2"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
        </svg>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="login-modal">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="login-modal">
          <LoginForm />
          <Row>
            <Col>
              <p className="signup-phrase">
                Don't have an account yet? No worries,&nbsp;
                <Link to={"/signup"} onClick={handleClose} className="Link">
                  sign up here!
                </Link>
              </p>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default LoginModal
