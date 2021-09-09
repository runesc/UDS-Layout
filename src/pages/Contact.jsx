import PageHeader from "../components/PageHeader";
import { Link } from 'react-router-dom'

const Contact = props => {
    return(
        <div className="container-fluid p-0">
            <PageHeader title="Contacto" image="https://ik.imagekit.io/kummiktgaiq/UDS/contact_aj6CVZbLE.jpg"/>

            <div className="careeers pt-5 pb-5">
                <h1 className="text-white fw-bold text-center m-0 scohlariship-apply">¿Necesitas hablar con nosotros?</h1>
                <h5 className="w-50 text-center m-auto text-white p-4 green-text col-12-w-100">Contactate con nosotros y un asesor educativo te apoyara.</h5>

                <div className="container pt-4">
                <div className="row w-100">
                    <div className="col-xs-12 col-sm-4 pb-4">
                        <h5 className="green-text text-center fw-bold">Dirección:</h5>
                        <span className="green-text text-center d-block m-auto">Ricardo Margáin #575, Parque Corp. Santa Engracia, Edificio C, Piso 4, CP 66267, San Pedro Garza García, Nuevo León, México,</span>
                    </div>
                    <div className="col-xs-12 col-sm-4 pb-4">
                        <span className="d-block green-text text-center d-block text-decoration-underline fw-bold"><i className="fas fa-phone text-white phone-icon"></i> Telefono: 81 3567 6673</span>
                        <span className="d-block fw-bold green-text text-center d-block text-decoration-underline">Whatsapp: 81 3075 3220</span>
                    </div>
                    <div className="col-xs-12 col-sm-4 p-0 pb-4">
                        <span className="green-text text-center d-block text-decoration-underline fw-bold"><i className="fas fa-envelope text-white phone-icon"></i> info@udsuniversity.online</span>
                    </div>
                </div>
                </div>
                <div className="container pt-5">
                    <div className="row pt-5 pb-5">
                        <div className="col-xs-12 col-sm-6">
                            <iframe scrolling="no" allowtransparency="true" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fudsuniversity&amp;tabs=&amp;locale=es_ES&amp;small_header=false&amp;hide_cover=false&amp;show_facepile=true&amp;tabs=&amp;width=435&amp;height=170&amp;adapt_container_width=true" frameBorder="0" width="435" height="170" style={{width: "435px", height: "170px"}}></iframe>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <h1 className="text-white fw-bold text-center m-0 scohlariship-apply">¡ APLICA PARA UNA BECA !</h1>
                            <h4 className="text-white pt-4">Estudia tu bachillerato, una licenciatura, maestría o un doctorado con las mejores BECAS Deja aquí tus datos y un asesor te contactará.</h4>
                            <Link className="badge rounded-pill bg-light btn-pill text-uppercase mt-5 d-block m-auto text-decoration-none w-70" to="/Becas">Aplicar para una beca</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;