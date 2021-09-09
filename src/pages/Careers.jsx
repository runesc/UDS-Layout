import { useState } from 'react';
import { Link } from 'react-router-dom'
import PageHeader from '@components/PageHeader';



const Careers = props => {

	// eslint-disable-next-line no-unused-vars
	const [careeers, setCareer] = useState({
		'bachillerato': [
			{title: 'Bachillerato en Recursos Humanos', link: 'https://udsuniversity.online/gallery/Bach_admin_rec%202%20a%C3%B1os%20UDS.pdf'},
			{title: 'Bachillerato en Gericultura', link: 'https://udsuniversity.online/gallery/Bach_gericultura%203%20a%C3%B1os%20UDS.pdf'},
			{title: 'Bachillerato en Programación', link: 'https://udsuniversity.online/gallery/Bach_program%202%20a%C3%B1os%20UDS.pdf'},
			{title: 'Bachillerato en Puericultura', link: 'https://udsuniversity.online/gallery/Bach_puericult%203a%C3%B1os%20UDS.pdf'}
		],
		'licenciaturas': [
			{title: 'Administración y Estrategias de Negocios', link: 'https://udsuniversity.online/gallery/Lic_adminyest.pdf'},
			{title: 'Contaduría Pública y Finanzas', link: 'https://udsuniversity.online/gallery/Lic_contapubyfin.pdf'},
			{title: 'Ciencias de la Educación', link: 'https://udsuniversity.online/gallery/Lic_cieneduca.pdf'},
			{title: 'Derecho', link: 'https://udsuniversity.online/gallery/Lic_derecho.pdf'},
			{title: 'Mercadotecnia', link: 'https://udsuniversity.online/gallery/Lic_merca.pdf'},
			{title: 'Trabajo social y gestión comunitaria', link: 'https://udsuniversity.online/gallery/Lic_trabajosoc.pdf'},
			{title: 'Puericultura', link: 'https://udsuniversity.online/gallery/Lic_puericult.pdf'},
			{title: 'Ciencias de la Comunicación', link: 'https://udsuniversity.online/gallery/Lic_ciencomun.pdf'},
			{title: 'Ing. Químico Petrolero', link: 'https://udsuniversity.online/gallery/Ing_equimpetro.pdf'},
			{title: 'Ing. en Sistemas Computacionales', link: 'https://udsuniversity.online/gallery/Ing_sistcomp.pdf'},
			{title: 'Admin. y Tecnología de la Información', link: 'https://udsuniversity.online/gallery/Lic_adminytec.pdf'},
			{title: 'informática administrativa', link: 'https://udsuniversity.online/gallery/Lic_infoadmin.pdf'},
			{title: 'Mercadotecnia', link: 'https://udsuniversity.online/gallery/Lic_dise%C3%B1ograf.pdf'},
			{title: 'Diseño Grafico', link: 'https://udsuniversity.online/gallery/Lic_dise%C3%B1imag.pdf'},
			{title: 'Diseño e Imagen', link: 'https://udsuniversity.online/gallery/Lic_dise%C3%B1imag.pdf'},
			{title: 'Psicología', link: 'https://udsuniversity.online/gallery/Lic_psicologia.pdf'},
			{title: 'Turismo', link: 'https://udsuniversity.online/gallery/Lic_turismo.pdf'},
			{title: 'Arquitectura', link: 'https://udsuniversity.online/gallery/Lic_arquitectura.pdf'},
			{title: 'Gastronomía', link: 'https://udsuniversity.online/gallery/Lic_gastro.pdf'},
			{title: 'Nutrición', link: 'https://udsuniversity.online/gallery/Lic_nutricion.pdf'},
		],
		'maestrias':[
			{title: 'Administración en Sistemas de Salud', link: 'https://udsuniversity.online/gallery/Maest_admin_sistsalud.pdf'},
			{title: 'Ciencias Jurídico Penales y Criminológicas', link: 'https://udsuniversity.online/gallery/Maest_ciencjur_penalesycrim.pdf'},
			{title: 'Educación Especial', link: 'https://udsuniversity.online/gallery/Maest_edu_esp.pdf'},
			{title: 'Psicopedagogía', link: 'https://udsuniversity.online/gallery/Maest_psicoped.pdf'},
			{title: 'Administración', link: 'https://udsuniversity.online/gallery/Maest_admin.pdf'}
		],
		'doctorados': [
			{title: 'Administración', link: 'https://udsuniversity.online/gallery/Doct_admin.pdf'},
			{title: 'Educación', link: 'https://udsuniversity.online/gallery/Doct-educacion.pdf'}
		],
		'diplomados': [
			{title: 'Medicina Estética y Anti-envejecimiento', link: '/'},
		]
	});

	return(
		<div className="container-fluid p-0">
			<PageHeader title="Oferta educativa" image="https://ik.imagekit.io/kummiktgaiq/UDS/oferta_Z8eBkIAPQR.jpg"/>

			<div className="careeers p-5">
				<div className="row">
					<div className="col-sm-12 col-md-4 text-center">
						<h5 className="text-uppercase text-white fw-bold">Bachillerato</h5>
						<ul className="p-0">
							{ careeers.bachillerato.map( (careeer, index) => (
								<li className="nav-item overflow-hidden">
									<a className="green-link" key={index} href={careeer.link}>{careeer.title}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="col-sm-12 col-md-4 text-center">
						<h5 className="text-uppercase text-white fw-bold">Licenciaturas</h5>
						<ul className="p-0">
							{ careeers.licenciaturas.map( (careeer, index) => (
								<li className="nav-item overflow-hidden">
									<a className="green-link" key={index} href={careeer.link}>{careeer.title}</a>
								</li>
							))}
						</ul>
					</div>
					<div className="col-sm-12 col-md-4 text-center">
						<h5 className="text-uppercase text-white fw-bold">Maestrías</h5>
						<ul className="p-0">
								<li className="nav-item overflow-hidden">
									<a className="green-link" href='https://udsuniversity.online/gallery/Maest_compet_prof.pdf'>Educación con Formación en Competencias <br/> Profesionales</a>
								</li>
							{ careeers.maestrias.map( (careeer, index) => (
								<li className="nav-item overflow-hidden">
									<a className="green-link" key={index} href={careeer.link}>{careeer.title}</a>
								</li>
							))}
						</ul>
						<h5 className="text-uppercase text-white fw-bold">Doctorados</h5>
						<ul className="p-0">
							{ careeers.doctorados.map( (careeer, index) => (
								<li className="nav-item overflow-hidden">
									<a className="green-link" key={index} href={careeer.link}>{careeer.title}</a>
								</li>
							))}
						</ul>
						<h5 className="text-uppercase text-white fw-bold">Diplomados</h5>
						<ul className="p-0">
							{ careeers.diplomados.map( (careeer, index) => (
								<li className="nav-item overflow-hidden">
									<a className="green-link" key={index} href={careeer.link}>{careeer.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<section className="apply">
                <div className="apply-bg-2">
                    <div className="bg-filter">
                        <div className="container apply-message">
                            <div className="w-50 text-center apply-container">
                                <h1 className="text-uppercase text-white apply-title">Aplica para una beca</h1>
                                <span className="d-block text-white apply-subtitle">Estudia tu bachillerato, una licenciatura, maestría o un doctorado con las mejores BECAS Deja aquí tus datos y un asesor te contactará de inmediato.</span>
                                <Link className="badge rounded-pill bg-light btn-pill text-uppercase mt-5 text-decoration-none" to="/Becas" >Aplicar para una beca</Link>
                            </div>
                        </div>
                    </div>
                </div>
      </section>
		</div>
	)
}

export default Careers;