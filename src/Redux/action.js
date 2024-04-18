import { ADD_TO_CART, REMOVE_FROM_CART, SELECTED_DATA } from "./constant"
export const addToCart = (data,id) => {
    return {
        type: ADD_TO_CART,
        data,
        id
    }
}
export const removeToCart = (data) => {
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const product_filter=(selectedData)=>{
        return {
            type:SELECTED_DATA,
            selectedData
        }
}