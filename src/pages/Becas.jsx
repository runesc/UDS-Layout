/* eslint-disable jsx-a11y/iframe-has-title */
import PageHeader from "../components/PageHeader";


const Becas = props => {
    return(
        <div className="container-fluid p-0">
            <PageHeader title="Sistema de becas" image="https://ik.imagekit.io/kummiktgaiq/UDS/sistemaBecas_5Xg75YxJCshO.jpg"/>

            <div className="careeers pt-4">
                <h1 className="text-white fw-bold text-center m-0 scohlariship-apply">¡Aplica para una beca!</h1>
                <h4 className="w-50 text-center m-auto text-white p-4 col-12-w-100">Estudia tu bachillerato, una licenciatura, maestría o un doctorado a los mejores Deja aquí tus datos y un asesor te contactará de inmediato.</h4>

                <div className="beca-form-area">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScn5kUWGAMtdvVhE1WYZH-b5V3JYnV4aQ7KsEaxEnEJNLqKFg/viewform?embedded=true" width="50%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" style={{height: '100vh', display: 'block', margin: 'auto'}}>Cargando…</iframe>
                </div>
            </div>
        </div>
    )
}

export default Becas;