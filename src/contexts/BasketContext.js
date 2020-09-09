import React, {createContext, useReducer} from 'react'
import { basketReducer } from '../reducers/basketReducer';

export const BasketContext = createContext();

const BasketContextProvider = (props) => {

    const [basketItems, dispatch] = useReducer(basketReducer, []);
   
    return (
        <BasketContext.Provider value={{basketItems, dispatch}}>
            {props.children}
        </BasketContext.Provider>
    )

}

export default BasketContextProvider