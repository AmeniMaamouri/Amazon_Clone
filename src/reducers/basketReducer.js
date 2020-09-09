
export const basketReducer = (state, action) => {
   
    switch (action.type) {
        case 'ADD_BASKET':
            return [action.product, ...state]
        case 'REMOVE_BASKET':
            return state.filter(product => product.id != action.id)
        default:
            return state
    }
}