function Card(props) {
    const { displayName, displayDescription, granted, price } = props.data;

    return (
        <div className="shop-card">
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src={granted[0].images.full_background} />
                        <button
                            onClick={() => props.addToCart(props.data)}
                            className="btn-floating halfway-fab waves-effect waves-light red"
                        >
                            <i className="material-icons">add</i>
                        </button>
                    </div>

                    <div className="card-content">
                        <div className="card-title">{displayName}</div>
                        <p>{displayDescription || "No Description"}</p>
                        <div className="card-price">
                            {price.regularPrice + "$"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
