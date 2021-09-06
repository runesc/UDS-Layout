
const Card = props => {
    return(
        <div class="card" >
            <div class="card-body text-center">
                <h1 class="card-title">{props.title}</h1>
            </div>
            <img src={props.image} class="card-img-top" alt="photocard" />
        </div>
    )
}

export default Card