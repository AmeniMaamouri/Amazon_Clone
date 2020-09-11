
export const basketReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_BASKET':
            let basket = state
            console.log('here')
            const i = basket.findIndex(_item => _item.id === action.product.id);
            if (i > -1) {
                basket[i].amount++; 
                return basket
            }
            else{
                return [action.product, ...state];
            } 

        case 'REMOVE_BASKET':
          
            return state.filter(product => product.id != action.id)
        case 'EDIT_BASKET_AMOUNT':
            let updatedamount = state.map(product => {
                if (product.id === action.id) {
                    product.amount = action.amount
                }
                return product
            })
            return updatedamount
        default:
            return state
    }
}