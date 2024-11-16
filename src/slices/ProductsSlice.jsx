import {createSlice,createAsyncThunk } from '@reduxjs/toolkit'


export const getAllProducts = createAsyncThunk('getProductsFromApi', async (dispatch) => {
    try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;
    }catch(error){
        return error;
    }
})

const productSlice = createSlice({
    name:'products',
    initialState:{
        isLoading:false,
        error:null,
        data:[]
    },
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.pending,(state,action) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(getAllProducts.rejected,(state,action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        })
        .addCase(getAllProducts.fulfilled,(state,action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = action.payload.message;
        })
    }
})

// export const {getProducts} = productSlice.actions;

export const getProductList = (state) => state.products.data;
export const productsLoading = (state)=>state.products.isLoading;
export const productsLoadingError = (state)=>state.products.error;
// export default ProductsReducer;
export default productSlice.reducer;

// export const getAllProducts = () => async (dispatch) => {
//     try{
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json()
//         console.log(data)
//         if(data){
//             dispatch(getProducts({data:data,isLoading:false}))
//         }
//     }catch(error){
//         dispatch(getProducts({error:error.message,isLoading:false}))
//     }
// }