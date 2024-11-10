const initialState = [];
const CART_ADD_ITEM =  'cart/addItem';   
const CART_REMOVE_ITEM =  'cart/removeItem';
const CART_INCREASE_QUANTITY = 'cart/increaseQuantity'  
const CART_DECREASE_QUANTITY = 'cart/decreaseQuantity' 
const CartReducer = (state = initialState,action) => {
    console.log(action)
    switch(action.type){
        case CART_ADD_ITEM:
        return [...state,action.payload]
        case CART_REMOVE_ITEM:
            return state.filter((element,index) => element.productId!== action.payload.productId)
        case CART_INCREASE_QUANTITY:
        return state.map((element,index) => {
            return element.productId === action.payload.productId ? {...element,productQty:element.productQty+1} : element
        })
        case CART_DECREASE_QUANTITY:
            return state.map((element,index) => {
                return element.productId === action.payload.productId ? {...element,productQty:element.productQty-1} : element
            })
        default :
        return state; 
    }

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