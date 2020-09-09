
export const basketReducer = (state, action) => {
   
    switch (action.type) {
        case 'ADD_BASKET':
            return [action.product, ...state]
        default:
            return state
    }
}