// import {configureStore} from '@reduxjs/toolkit'
import { useSelector,useDispatch } from "react-redux";
import {getDefCart,addItemToCart} from '../slices/CartSlice'
import {getProducts} from '../slices/ProductsSlice'
const midd = ({dispatch,getState}) => (next) => (action) => {
    if(typeof action=='function'){
        action(dispatch,getState);
    }else{
        next(action)
    }
}

export {midd}