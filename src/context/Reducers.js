

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            }
            break;
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((prod) => prod.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer