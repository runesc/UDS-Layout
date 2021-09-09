import PageHeader from "../components/PageHeader";


const Admisions = props => {
    return(
        <div className="container-fluid p-0">
            <PageHeader title="Registrate ahora" image="https://ik.imagekit.io/kummiktgaiq/UDS/contact_aj6CVZbLE.jpg"/>
            <div className="careeers pt-5">
                <h1 className="text-white fw-bold text-center m-0 scohlariship-apply">¿Quieres registrarte ahora mismo?</h1>
                <h5 className="w-50 text-center m-auto text-white p-4 green-text col-12-w-100">Completa los siguientes datos para los tramites de incorporación ante la SEP.</h5>

                <div className="beca-form-area">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfgD8zQmlAqonNy-5CZGBFozYECEwJRKi0KRp81MZcJBLuYqQ/viewform?embedded=true" width="50%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" style={{height: '100vh', display: 'block', margin: 'auto'}}>Cargando…</iframe>
                </div>
            </div>
        </div>
    )
}

export default Admisions;