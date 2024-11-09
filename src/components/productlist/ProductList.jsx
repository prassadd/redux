import { useSelector, useDispatch } from 'react-redux';
import './productlist.css';
import Product from '../product/Product'
import {removeItemFromCart,addItemToCart,increaseProdQtyInCart,deccreaseProdQtyInCart} from '../../slices/CartSlice'
const ProductList = () => {
    const products = useSelector((state)=>state.products);
    return (
        <div className='wrapper'>
        <div className='products-container'>
            <ul className='products-list'>
                {products.map((element,index) => {
                    return <Product element={element} key={index} addItemToCart={addItemToCart}/>
                })}
            </ul>
        </div>
        </div>
    )
}

export default ProductList;