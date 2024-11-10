const initialState = [];
//action types
const WISHLIST_ADD_ITEM =  'wishList/addItem';   
const WISHLIST_REMOVE_ITEM =  'wishList/removeItem';
//reducer
const WishListReducer = (state = initialState,action) => {
    switch(action.type){
        case WISHLIST_ADD_ITEM:
            return [...state,action.payload]
        case WISHLIST_REMOVE_ITEM:
            return state.filter((element) => element.productId !== action.payload.productId)
        default :
        return state; 
    }
}
//action creators
export const addTOWishlist = (productId) => {
    console.log(productId)
    return {type:WISHLIST_ADD_ITEM, payload:{productId:productId}}
}

export const removeFromWishlist = (productId) => {
    return {type:WISHLIST_REMOVE_ITEM, payload:{productId:productId}}
}

export default WishListReducer;