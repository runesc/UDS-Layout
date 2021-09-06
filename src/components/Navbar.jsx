/* eslint-disable jsx-a11y/anchor-is-valid */

import Logo from '@images/logo.png';

const Navbar = props => {
	return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">
		<img src={Logo} alt="UDS Logo" class="d-inline-block align-text-top app-logo"/>
	</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Oferta Educativa</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Becas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Admisiones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	)
}

export default Navbar

