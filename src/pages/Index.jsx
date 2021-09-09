import Card from '@components/Card'
import { Link } from 'react-router-dom'

const Index = props => {

    return(
        <>
            <header>
                <div className="container">
                    <div className="header-text w-50 text-center">
                        <h1>Estudia en cualquier momento</h1>
                        <h1>y desde cualquier lugar</h1>
                        <h1>100% en linea</h1>
                    </div>
                </div>
            </header>
            <section className="info">
                <div className="info-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="text-area">
                                    <span>Con los avances  tecnológicos, la educación bajo esta modalidad elimina la necesidad de la interacción física, por lo tanto resulta más autónoma e interactiva de la tradicional, y en su lugar crea ambientes de aprendizaje virtual a través de videotutoriales, mensajes directos y foros virtuales para interactuar con los profesores y el resto de los estudiantes.</span>
                                    <span>Si bien una parte trascendental de nuestro modelo UDS Universidad Global son los profesores, es por ello que tienen la capacidad de utilizar metodologías y recursos didácticos para establecer contacto con los estudiantes y buscar su atención, motivación e interés a lo largo de todo el programa.</span>
                                </div>
                            </div>

                            <div className="col">
                                <img src="https://ik.imagekit.io/kummiktgaiq/UDS/info-section_kSUxkW39ZMa.jpg" className="w-80 womens-image" alt="Womens in table" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <Card image="https://ik.imagekit.io/kummiktgaiq/UDS/bachillerato_F21Z0fbJ7.jpg" title="Bachillerato"/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Card image="https://ik.imagekit.io/kummiktgaiq/UDS/licenciatura_mPfHyHj4c.jpg" title="Licenciaturas"/>
                        </div>
                        <div className="col-12 col-lg-4">
                            <Card image="https://ik.imagekit.io/kummiktgaiq/UDS/posgrados_bRAd_S4iQ.jpg" title="Posgrados"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ventajas pt-5 pb-5">
                <div className="container h-100">
                    <div className="image-container h-100"></div>
                </div>
            </section>
            <section className="apply">
                <div className="apply-bg">
                    <div className="bg-filter">
                        <div className="container apply-message">
                            <div className="w-50 text-center apply-container">
                                <h1 className="text-uppercase text-white apply-title">Aplica para una beca</h1>
                                <span className="d-block text-white apply-subtitle">Registrate y un asesor educativo te apoyara en el proceso para adquirir tu BECA.</span>
                                <Link className="badge rounded-pill bg-light btn-pill text-uppercase mt-5 text-decoration-none" to="/Becas">Aplicar para una beca</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index