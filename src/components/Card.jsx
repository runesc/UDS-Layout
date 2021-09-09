
const Card = props => {
    return(
        <div className="card pb-3" >
            <div className="card-body text-center">
                <h1 className="card-title">{props.title}</h1>
            </div>
            <img src={props.image} className="card-img-top" alt="photocard" />
        </div>
    )
}

export default Card