
const Footer = props => {
    return(
        <footer>
            <div className="container">
                <div className="footer-title pt-4 text-center">
                    <span className="text-white fw-bold">Contactanos y pregunta por nuestro sistema de BECAS.</span>
                </div>
                <div className="row text-white mt-5">
                    <div className="col">
                        <h5 className="fw-bold text-center">Buscanos en:</h5>
                        <ul className="social-list mt-4">
                            <li><i className="fab fa-facebook-f"></i></li>
                            <li><i className="fab fa-instagram"></i></li>
                            <li><i className="fab fa-linkedin-in"></i></li>
                            <li><i className="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-4 p-4">
                        <span className="d-block text-center d-block text-decoration-underline fw-bold"><i className="fas fa-phone text-white phone-icon"></i> Telefono: 81 3567 6673</span>
                        <span className="d-block fw-bold text-center d-block text-decoration-underline">Whatsapp: 81 3075 3220</span>
                        <span className="d-block fw-bold text-center d-block text-decoration-underline">E-mail: info@udsuniversity.online</span>
                    </div>
                    <div className="col p-4">
                        <span className="text-white">
                            <i className="fas fa-map-marker-alt phone-icon"></i>
                            Ricardo Margáin #575, Parque Corp. Santa Engracia, Edificio C, Piso 4, CP 66267, San Pedro Garza García, Nuevo León, México,
                        </span>
                    </div>
                </div>
            </div>
            <p className="credits text-white text-center">&#169; 2020 udsuniversity.online</p>
        </footer>
    )
}

export default Footer