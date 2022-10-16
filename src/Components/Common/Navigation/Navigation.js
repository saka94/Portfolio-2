import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import logo from "../../../Logo/Saka-Logo-2.png";
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
  return (
    <>
      <Navbar className={styles.navbar} bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <div className={styles.logoContainer}>
              <a href="/">
                <img className={styles.logo} src={logo} alt="Logo spelling Saka"></img>
              </a>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle className={styles.dropdownColor} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.navstyling}>
              <div className={styles.linkWrap}>
                <NavLink to="/" className={styles.textStyling}>
                  Home
                </NavLink>
                <NavLink to="/projects" className={styles.textStyling}>
                  Projects
                </NavLink>
                <NavLink to="/about" className={styles.textStyling}>
                  About
                </NavLink>
                <NavLink to="/" className={styles.textStyling}>
                  Contact
                </NavLink>
              </div>
              <div>
                <ul className={styles.ulStyling}>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=628825750">
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/sanderkalmer/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sander-kalmer-5aa8841b9/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/saka94">
                      <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                  </li>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
