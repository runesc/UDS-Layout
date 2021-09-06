import Card from '@components/Card'
import Info from '@images/info-section.jpg'
import bachillerato from '@images/bachillerato.jpg'
import licenciatura from '@images/licenciatura.jpg'
import posgrado from '@images/posgrados.jpg'

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
                            <div className="col">
                                <div className="text-area">
                                    <span>Con los avances  tecnológicos, la educación bajo esta modalidad elimina la necesidad de la interacción física, por lo tanto resulta más autónoma e interactiva de la tradicional, y en su lugar crea ambientes de aprendizaje virtual a través de videotutoriales, mensajes directos y foros virtuales para interactuar con los profesores y el resto de los estudiantes.</span>
                                    <span>Si bien una parte trascendental de nuestro modelo UDS Universidad Global son los profesores, es por ello que tienen la capacidad de utilizar metodologías y recursos didácticos para establecer contacto con los estudiantes y buscar su atención, motivación e interés a lo largo de todo el programa.</span>
                                </div>
                            </div>

                            <div className="col">
                                <img src={Info} className="w-80" alt="Womans in table" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="cards">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Card image={bachillerato} title="Bachillerato"/>
                        </div>
                        <div className="col">
                            <Card image={licenciatura} title="Licenciaturas"/>
                        </div>
                        <div className="col">
                            <Card image={posgrado} title="Posgrados"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ventajas">
                <div className="container h-100">
                    <div className="image-container h-100"></div>
                </div>
            </section>
        </>
    )
}

export default Index