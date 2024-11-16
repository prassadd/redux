import { useSelector, useDispatch } from 'react-redux';
import './productlist.css';
import Product from '../product/Product'
import {addItemToCart} from '../../slices/CartSlice'
import {getProductList,productsLoadingError,productsLoading} from '../../slices/ProductsSlice'

const ProductList = () => {
    const products = useSelector(getProductList);
    const isLoading = useSelector(productsLoading);
    const error = useSelector(productsLoadingError);

  
    if(isLoading){
        return(
            <h1>Loading....please wait!</h1>
        )
    }
    if(error){
        return(
            <h1>{error}</h1>
        )
    }
    if(products){
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

}

export default ProductList;