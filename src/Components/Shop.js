import React, { useState, useEffect } from "react";

import { API_KEY, API_URL } from "../config";
import Preloader from "./Preloader";
import Card from "./Card";
import Cart from "./Cart";
import Alert from "./Alert";

function Shop() {
    const [goods, setGoods] = useState([]);
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [basketShow, setBasketShow] = useState(false);
    const [alertName, setAlert] = useState("");

    const handleBasketShow = () => setBasketShow(!basketShow);

    const getIndex = (elem) => order.findIndex((i) => i.mainId === elem.mainId);

    const addToCart = (findItem) => {
        const itemIndex = getIndex(findItem);
        const item = order[itemIndex];
        if (item) {
            const newOrder = [
                ...order.slice(0, itemIndex),
                ...order.slice(itemIndex + 1),
            ];
            setOrder([...newOrder, { ...item, quantity: item.quantity + 1 }]);
        } else {
            const newItem = { ...findItem, quantity: 1 };
            setOrder([...order, newItem]);
        }
        setAlert(findItem.displayName);
    };

    const deleteFromBasket = (elem) => {
        const itemIndex = getIndex(elem);
        const newOrder = [
            ...order.slice(0, itemIndex),
            ...order.slice(itemIndex + 1),
        ];
        setOrder(newOrder);
    };

    const changeQuantity = (elem, action) => {
        const itemIndex = getIndex(elem);
        let item = order[itemIndex];
        if (item.quantity == 1 && action == "dec") return;
        switch (action) {
            case "inc":
                item = { ...item, quantity: item.quantity + 1 };
                break;
            case "dec":
                item = { ...item, quantity: item.quantity - 1 };
                break;
            default:
                return;
        }

        const newOrder = [
            ...order.slice(0, itemIndex),
            item,
            ...order.slice(itemIndex + 1),
        ];

        setOrder(newOrder);
    };

    const closeAlert = () => setAlert("");
    useEffect(() => {
        if (!alertName) return;
        let timer = setTimeout(() => {
            setAlert("");
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [alertName]);

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Response isn't ok:`, res.status);
                }

                return res.json();
            })
            .then((data) => {
                setGoods(data.shop);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setError(true);
            });
    }, []);
    return (
        <div className="container">
            <div className="shop-wrapper">
                <Cart
                    changeQuantity={changeQuantity}
                    quantity={order.length}
                    handleBasketShow={handleBasketShow}
                    basketShow={basketShow}
                    orderList={order}
                    deleteFromBasket={deleteFromBasket}
                />
                {error ? <div className="error">Error has occured</div> : null}
                {loading ? (
                    <Preloader />
                ) : (
                    goods.map((i) => {
                        return (
                            <Card
                                key={i.mainId}
                                data={{ ...i }}
                                addToCart={addToCart}
                            />
                        );
                    })
                )}
            </div>
            {alertName && <Alert closeAlert={closeAlert} name={alertName} />}
        </div>
    );
}

export default Shop;
