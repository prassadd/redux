import {Outlet,NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux'
const Layout = () => {
    const cart = useSelector((state) => state.cart)
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