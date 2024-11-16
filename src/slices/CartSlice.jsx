import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
export const getDefCartItems = createAsyncThunk('cart/getDefCart',async (dispatch) => {
    try{
        const response = await fetch('https://fakestoreapi.com/carts/1')
        const data = await response.json();
        return data;
    }catch(error){
        return error
    }
})

const cartSlice = createSlice({ 
    name:'cart',
    initialState:{
        data:[],
        isLoading:false,
        error:null
    },
    reducers:{
        addItemToCart(state,action){
            console.log()
            state.data = [...state.data,action.payload]
            return state;
        },
        removeItemFromCart(state,action){
            const itemIndex = (state.data).findIndex((element,index) => element.productId === action.payload.productId)
            state.data.splice(itemIndex,1)
        },
        increaseProdQtyInCart(state,action){
            state.data.forEach((element,index) => {
                if(element.productId === action.payload.productId)  element.quantity += 1 
            })
        },
        deccreaseProdQtyInCart(state,action){
            state.data.forEach((element,index) => {
                if(element.productId === action.payload.productId)  element.quantity -= 1 
            })
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getDefCartItems.pending,(state,action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getDefCartItems.rejected,(state,action) => {
            state.error = action.payload.message;
            state.isLoading=false;
        })
        .addCase('cart/getDefCart/fulfilled',(state,action) => {
            console.log(action)
            state.error = action.payload.message;
            state.data = action.payload.products;
            state.isLoading= false;
            console.log(state)
        })
    }

})
export default cartSlice.reducer;

//action creators
export const  {addItemToCart,removeItemFromCart,deccreaseProdQtyInCart,increaseProdQtyInCart} = cartSlice.actions;
export const getCartList = (state) => state.cart.data;
export const  getCartLoadingError = (state) => state.cart.error;

//dispatch fn to get default cart
// export const getDefCartItems = () => async (dispatch) => {
//     try{
//         const response = await fetch('https://fakestoreapi.com/carts/1')
//         const data = await response.json();
//         dispatch(getDefCart({cartData:data.products}))
//     }catch(error){
//         console.log(error)
//     }
// }

// const CartReducer = (state = [],action) => {
//     return produce(state,(dummyState)=>{
//         const itemIndex = state.findIndex((element,index) => element.productId === action.payload.productId)
//         switch(action.type){
//             case CART_ADD_ITEM:
//                 dummyState.push(action.payload)
//             break;
//             case CART_REMOVE_ITEM:
//                 dummyState.splice(itemIndex,1)
//             break;
//             case CART_INCREASE_QUANTITY:
//                 dummyState.forEach((element,index) => {
//                     if(element.productId === action.payload.productId)  element.productQty += 1 
//                 })
//             break;
//             case CART_DECREASE_QUANTITY:
//                 dummyState.forEach((element,index) => {
//                     if(element.productId === action.payload.productId)  element.productQty -= 1 
//                 })
//             break;
//             default:
//             break;
//         }
//         return state;
//     })
// }

//action creators
// export const addItemToCart = (productId,productQty=1) => {
//     if(productId)   return {type:CART_ADD_ITEM , payload:{productId:productId,productQty:productQty}}
// }

// export const removeItemFromCart = (productId) => {
//     if(productId)   return {type:CART_REMOVE_ITEM , payload:{productId:productId}}
// }
// export const increaseProdQtyInCart = (productId,productQty) => {
//     return {type:CART_INCREASE_QUANTITY, payload:{productId:productId}};
// }
// export const deccreaseProdQtyInCart = (productId,productQty) => {
//     console.log(productId)
//     return {type:CART_DECREASE_QUANTITY, payload:{productId:productId}};
// }
// export default CartReducer;