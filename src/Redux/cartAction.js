import { DECREASE_QUENTITY, INCREASE_QUENTITY, REMOVE_PRODUCT } from "./constant"

export const increaseProduct=(e,InitialPrice)=>{
    return {
        type:INCREASE_QUENTITY,
        id:e,
        InitialPrice
    }
}
export const decrementProduct=(e,InitialPrice)=>{
    return {
        type:DECREASE_QUENTITY,
        id:e,
        InitialPrice
    }
}
export const RemoveCartData=(id,price)=>{
    return{
        type: REMOVE_PRODUCT,
        id,
        price
    }
}