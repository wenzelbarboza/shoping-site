

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

export const productFilterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload }
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock }
        case "FILTER_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery }
        case "FILTER_BY_RATING":
            return { ...state, byRating: action.payload }
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload }
        case "CLEAR_FILTER":
            return {
                byStock: false,
                byFastDelivery: false,
                byRating: 0,
                searchQuery: "",
            }
        default:
            return state
    }
}