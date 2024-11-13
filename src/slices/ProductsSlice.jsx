import { productsList } from '../productsList'
import { useSelector } from 'react-redux';
import { useEffect,useState } from 'react';

import {createSlice} from '@reduxjs/toolkit'
// const data = useSelector((state) => state)
    // console.log(data)

const ProductsReducer = (state = productsList) => {
    // console.log(data)
    return state;
}
const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:true,
        error:'',
        data:[]
    },
    reducers:{
        getProducts(state,action){
            if(action.payload.error){
                state.error = action.payload.error;
                state.isLoading = action.payload.isLoading;
                return state;
            }
            state.data = action.payload.data;
            state.isLoading = action.payload.isLoading;
            // return state;
        }
    }
})

export const {getProducts} = productSlice.actions;

export const getProductList = (state) => state.products.data;
export const productsLoading = (state)=>state.products.isLoading;
export const productsLoadingError = (state)=>state.products.error;
// export default ProductsReducer;
export default productSlice.reducer;