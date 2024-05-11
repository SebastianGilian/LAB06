import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return <header>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQZqn2rhrBpyEa-FNRBB-rblutSaej-NKqgiz5Ez4o3lEBDt5pq"
              width="50"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            NFTS
          </Navbar.Brand>
        </Container>
      </Navbar>
      <br></br><br></br>
    </header>;
}

export default Header;