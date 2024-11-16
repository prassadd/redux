const initialState = [];
const CART_ADD_ITEM =  'cart/addItem';   
const CART_REMOVE_ITEM =  'cart/removeItem';
const CART_INCREASE_QUANTITY = 'cart/increaseQuantity'  
const CART_DECREASE_QUANTITY = 'cart/decreaseQuantity' 
import {produce} from 'immer'
const CartReducer = (state = [],action) => {
    return produce(state,(dummyState)=>{
        const itemIndex = state.findIndex((element,index) => element.productId === action.payload.productId)
        switch(action.type){
            case CART_ADD_ITEM:
                dummyState.push(action.payload)
            break;
            case CART_REMOVE_ITEM:
                dummyState.splice(itemIndex,1)
            break;
            case CART_INCREASE_QUANTITY:
                dummyState.forEach((element,index) => {
                    if(element.productId === action.payload.productId)  element.productQty += 1 
                })
            break;
            case CART_DECREASE_QUANTITY:
                dummyState.forEach((element,index) => {
                    if(element.productId === action.payload.productId)  element.productQty -= 1 
                })
            break;
            default:
            break;
        }
        return state;
    })
}
export const addItemToCart = (productId,productQty=1) => {
    if(productId)   return {type:CART_ADD_ITEM , payload:{productId:productId,productQty:productQty}}
}

export const removeItemFromCart = (productId) => {
    if(productId)   return {type:CART_REMOVE_ITEM , payload:{productId:productId}}
}
export const increaseProdQtyInCart = (productId,productQty) => {
    return {type:CART_INCREASE_QUANTITY, payload:{productId:productId}};
}
export const deccreaseProdQtyInCart = (productId,productQty) => {
    console.log(productId)
    return {type:CART_DECREASE_QUANTITY, payload:{productId:productId}};
}
export default CartReducer;