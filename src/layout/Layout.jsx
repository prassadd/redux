import {Outlet,NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../slices/ProductsSlice'
import { useEffect } from 'react';
import {getCartList} from '../slices/CartSlice'
const Layout = () => {
    const cart = useSelector(getCartList)
    const dispatch = useDispatch()
    useEffect(()=>{
        const getData = async() => {
            try{
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json()
                if(data){
                    dispatch(getProducts({data:data,isLoading:false}))
                }
            }catch(error){
                dispatch(getProducts({error:error.message,isLoading:false}))
            }
        }
        getData()
        return;
    },[])



    return(
        <>
        <header>
            <NavLink to="/cart"><h1>{cart.length}</h1></NavLink>
        </header>
        <Outlet />
        </>
    )
}
export default Layout;