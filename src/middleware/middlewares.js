// import {configureStore} from '@reduxjs/toolkit'
const midd = (store) => (next) => (action) => {
    console.log(store)
    const result = next(action);
    console.log(result)
}
const abc = (store) => (next) => (action) => {
    console.log(222)
    const result = next(action);
    console.log(result)
}
const fd = (store) => (next) => async(action) => {
    // try{
    //     const response = await fetch('https://fakestoreapi.com/products');
    //     const data = await response.json()
    //     console.log(response)
    //     if(data){
    //         dispatch(getProducts({data:data,isLoading:false}))
    //         next({data:data,isLoading:false});
    //     }
    // }catch(error){
    //     // dispatch(getProducts({error:error.message,isLoading:false}))
    // }
    next(action)
    
}

export {abc,midd,fd}