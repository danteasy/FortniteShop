function CartList({
    basketShow,
    orderList,
    handleBasketShow,
    deleteFromBasket,
    changeQuantity,
}) {
    return (
        <div
            className="cart-list"
            style={basketShow ? { display: "block" } : { display: "none" }}
        >
            <div>
                <button
                    style={{
                        marginLeft: "auto",
                        display: "block",
                        padding: 0,
                    }}
                    onClick={() => handleBasketShow()}
                >
                    <i className="material-icons">close</i>
                </button>
            </div>
            <div>
                <ul>
                    {orderList.length ? (
                        orderList.map((i) => {
                            return (
                                <li className="list-item" key={i.mainId}>
                                    <div>
                                        <span
                                            style={{
                                                marginRight: "7px",
                                                padding: "1px 5px",
                                                backgroundColor:
                                                    "rgb(208,208, 208)",
                                            }}
                                        >
                                            x{i.quantity}
                                        </span>
                                        <span style={{ marginRight: "5px" }}>
                                            {i.displayName}
                                        </span>
                                        <div className="manage-quantity">
                                            <button
                                                onClick={() =>
                                                    changeQuantity(i, "inc")
                                                }
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() =>
                                                    changeQuantity(i, "dec")
                                                }
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>

                                    <div className="price">
                                        <span>
                                            {" "}
                                            {i.quantity * i.price.regularPrice +
                                                "$"}
                                        </span>
                                        <button
                                            onClick={() => deleteFromBasket(i)}
                                            style={{
                                                cursor: "pointer",
                                                background: "transparent",
                                                padding: "0",
                                                border: "none",
                                                opacity: "70%",
                                            }}
                                        >
                                            <i className="material-icons">
                                                remove
                                            </i>
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <div style={{ fontSize: "1.5rem" }}>
                            Your cart is empty
                        </div>
                    )}
                </ul>
            </div>
            <div
                className="sum"
                style={
                    orderList.length
                        ? {
                              display: "flex",
                              justifyContent: "space-between",
                              border: "1px solid gray",
                              padding: "0.5rem 5px",
                          }
                        : { display: "none" }
                }
            >
                <span>Total:</span>
                <span className="price">
                    {orderList.length
                        ? orderList.reduce(
                              (acc, i) =>
                                  +i.price.regularPrice * i.quantity + acc,
                              0
                          ) + "$"
                        : ""}
                </span>
            </div>
            <div>
                <button
                    className="btn "
                    style={
                        orderList.length
                            ? {
                                  marginTop: "10px",
                                  display: "block",
                                  marginLeft: "auto",
                              }
                            : { display: "none" }
                    }
                >
                    To Checkout
                </button>
            </div>
        </div>
    );
}

export default CartList;
