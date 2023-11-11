import CartList from "./CartList";

function Cart({
    quantity,
    handleBasketShow,
    deleteFromBasket,
    basketShow,
    orderList,
    changeQuantity,
}) {
    return (
        <div className="cart-wrapper">
            <div className="cart" onClick={() => handleBasketShow()}>
                <button>
                    <i className="material-icons">shopping_cart</i>
                </button>
                <div className="quantity">{quantity}</div>
            </div>
            <CartList
                changeQuantity={changeQuantity}
                basketShow={basketShow}
                handleBasketShow={handleBasketShow}
                orderList={orderList}
                deleteFromBasket={deleteFromBasket}
            />
        </div>
    );
}

export default Cart;
