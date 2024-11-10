import { useState } from 'react'
import {createStore} from 'redux'
import { productsList } from './productsList'
export function ReducerBasics() {
    let initialState = {
        products:productsList,
        cartItems:[],
        wishList:[]
    }


    console.log(initialState)
    const CART_ADD_ITEM =  'cart/addItem';   
    const CART_REMOVE_ITEM =  'cart/removeItem';
    const CART_INCREASE_QUANTITY = 'cart/increaseQuantity'  
    const CART_DECREASE_QUANTITY = 'cart/decreaseQuantity' 
    
    const WISHLIST_ADD_ITEM =  'wishList/addItem';   
    const WISHLIST_REMOVE_ITEM =  'wishList/removeItem';

    const reducer = (state = initialState,action) => {
    switch(action.type){
        case CART_ADD_ITEM:
        return {...state,cartItems:[...state.cartItems,action.payload]}
        case CART_REMOVE_ITEM:
            return {...state,cartItems:state.cartItems.filter((element,index) => element.productId!== action.payload.productId)}
        case CART_INCREASE_QUANTITY:
        return {...state,cartItems:state.cartItems.map((element,index) => {
            return element.productId === action.payload.productId ? {...element,productQty:element.productQty+1} : element
        })}
        case CART_DECREASE_QUANTITY:
            return {...state,cartItems:state.cartItems.map((element,index) => {
                return element.productId === action.payload.productId ? {...element,productQty:element.productQty-1} : element
            })}
        case WISHLIST_ADD_ITEM:
            return {...state,wishList:[...state.wishList,action.payload]}
        case WISHLIST_REMOVE_ITEM:
            return {...state,wishList:state.wishList.filter((element) => element.productId !== action.payload.productId)}
        default :
        return state; 
    }
    }
    
    const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
    store.subscribe( () => {
        console.log(store.getState())
    })
    store.dispatch({type:CART_ADD_ITEM, payload:{productId:1,productQty:2}})
    // store.dispatch({type:CART_ADD_ITEM, payload:{productId:2,productQty:1}})
    // store.dispatch({type:CART_ADD_ITEM, payload:{productId:3,productQty:1}})
    // store.dispatch({type:CART_REMOVE_ITEM, payload:{productId:2,productQty:1}})
    // store.dispatch({type:CART_INCREASE_QUANTITY, payload:{productId:1}})
    // store.dispatch({type:CART_INCREASE_QUANTITY, payload:{productId:1}})
    // store.dispatch({type:CART_INCREASE_QUANTITY, payload:{productId:1}})
    // store.dispatch({type:CART_DECREASE_QUANTITY, payload:{productId:1}})

    store.dispatch({type:WISHLIST_ADD_ITEM, payload:{productId:10}})
    store.dispatch({type:WISHLIST_ADD_ITEM, payload:{productId:12}})
    store.dispatch({type:WISHLIST_REMOVE_ITEM, payload:{productId:12}})

    

    return (
        <>
        <div className="card">
            <button>count increment</button>
            <p>name is </p>
        </div>
        </>
    )
}

export default ReducerBasics
