import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import logo from "./../../images/logo-candles1.png"
import "./Navbar.css"
import { useContext } from "react"
import { AuthContext } from "./../../context/auth.context"
import LoginModal from "./../LoginModal/LoginModal"
import { useState } from "react"
import Offcanvas from "react-bootstrap/Offcanvas"

function NavBar() {
  const { isLoggedIn, user, logout } = useContext(AuthContext)
  const [showOffcanvas, setShowOffcanvas] = useState(false)

  const handleOffcanvasClose = () => setShowOffcanvas(false)

  const expand = "md"

  return (
    <Navbar expand="md" className="NavBar">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Body className="modal-menu" placement="end">
          <Nav>
            <Nav.Link as={Link} to="/candles">
              Candles
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {!isLoggedIn && (
              <>
                <LoginModal />
              </>
            )}

            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth="0.2"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                </Nav.Link>
                <Nav.Link as={Link} to="/shop">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    strokeWidth="0.2"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                </Nav.Link>
                <Link onClick={logout} className="logout">
                  <Nav.Link as="span">Log Out</Nav.Link>
                </Link>
              </>
            )}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  )
}

export default NavBar
