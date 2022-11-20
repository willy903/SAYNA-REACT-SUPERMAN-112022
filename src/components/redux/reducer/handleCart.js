import Products from "../../products";

 const cart  = [];

const handleCart = (state = cart, action) => {
    switch (action.type) {
        case "ADDITEM":
            //verifier si le product exist
            const exist = state.find((x) => x.id === Products.id);
            if (exist) {
                console.log(exist);
                return state.map((x) =>
                    x.id === Products.id ? {...x, qty: x.qty + 1 } : x

                );
            } else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
        break
        case "DELITEM":
            const exist1 = state.find((x) => x.id === Products.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            } else {
                return state.map((x) =>
                    x.id === Products.id ? {...x, qty: x.qty - 1 } : x
                )
            }
        break
        default:
        return state;
        break
    }
}
export default handleCart;