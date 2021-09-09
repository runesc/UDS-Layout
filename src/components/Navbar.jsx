import { Link } from 'react-router-dom'
import Logo from '@images/logo.png';

const Navbar = props => {
	return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">
		  <img src={Logo} alt="UDS Logo" className="d-inline-block align-text-top app-logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Oferta-Educativa">Oferta Educativa</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Becas">Becas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Admisiones">Admisiones</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contacto">Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
	)
}

export default Navbar

