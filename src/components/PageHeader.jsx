const PageHeader = props => {
    return(
        <>
            <div className="page-header" style={{backgroundImage: `url(${props.image})`}}>
                <h1 className="page-header-title text-center text-uppercase pt-4">{ props.title }</h1>
            </div>
        </>
    )
}
export default PageHeader;