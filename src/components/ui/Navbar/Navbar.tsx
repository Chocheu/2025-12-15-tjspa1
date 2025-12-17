import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import { Link } from "react-router";

import "bootstrap/dist/css/bootstrap.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <Nav className="me-auto">
            <Link className="nav-link" to="/thumbnail">
              Thumbnail
            </Link>
            <Link className="nav-link" to="/editor">
              New
            </Link>
            <Link className="nav-link" to="/editor/1">
              EdiThor 1
            </Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
