
function Card(props) {
    return (
        <div className="card" style={{ width: "18rem" }}>
                <img src={props.img ? props.img : "https://cdn-icons-png.flaticon.com/512/29/29508.png"}
                className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title} за {props.price}$</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">ПОДРОБНЕЕ</a>
            </div>
        </div>
    )
}

export default Card;