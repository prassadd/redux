import {Outlet,NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {getProducts,getAllProducts} from '../slices/ProductsSlice'
import { useEffect } from 'react';
import {getCartList} from '../slices/CartSlice'
const Layout = () => {
    const cart = useSelector(getCartList)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getAllProducts()) 
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