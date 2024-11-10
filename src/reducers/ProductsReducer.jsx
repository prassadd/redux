import { productsList } from '../productsList'
import { useSelector } from 'react-redux';
// const data = useSelector((state) => state)
    // console.log(data)
const ProductsReducer = (state = productsList) => {
    // console.log(data)
    return state;
}

export default ProductsReducer;