

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
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((prod) => prod.id === action.payload.id ? prod.qty = action.payload.qty : true)
            }
        default:
            return state
    }
}

export default cartReducer