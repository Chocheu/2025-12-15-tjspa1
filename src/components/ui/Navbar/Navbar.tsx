import styles from "./Navbar.module.css";
import { Container, Nav, Navbar as NavBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Navbar: React.FC = () => {
  return (
    <div className={styles.Navbar} data-testid="Navbar">
      <NavBar bg="dark" data-bs-theme="dark">
        <Container>
          <NavBar.Brand href="#home">Home</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Thumbnail</Nav.Link>
            <Nav.Link href="#features">New</Nav.Link>
            <Nav.Link href="#pricing">Edit</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
