import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {deccreaseProdQtyInCart,increaseProdQtyInCart,removeItemFromCart} from '../../reducers/CartReducer'
const Cart = () => {
    const cartItems = useSelector((state) => state.cart)
    const products = useSelector((state) => state.products)
    const [cartItemsDisplay,setCartItemsDisplay] = useState([])
    useEffect(()=>{
        console.log(products)
        console.log(cartItems)
        const items = cartItems.map((element,index)=> {
            const found = products.find((curElement) => curElement.id === element.productId)
            if(found){
                return {...element,
                    'price':found.price,
                    'total':found.price*element.productQty,
                    'image':found.image
                }
            }
        })
        if(items){
            setCartItemsDisplay(items)
        }
        
        return;
    },[cartItems])
    return(
        <div className="cart">
            <ul className="cart-list">
                {cartItemsDisplay.map((element,index) => {
                    return <CartItems element={element} key={index}/>
                })}
            </ul>
        </div>
    )
}
export default Cart;

const CartItems = ({element}) => {
    const dispatch = useDispatch()
    const {price,image,productQty,productId,total} = element;
    return(
        <li key={productId}>
            <img src={image} width={100}/>
            <p className="price">{price}</p>
            <p className="price"><button onClick={()=>dispatch(deccreaseProdQtyInCart(productId))}>-</button>{productQty}
            <button onClick={()=>dispatch(increaseProdQtyInCart(productId))}>+</button>
            </p>
            <p className="price">{total}</p>
            <button onClick={()=>dispatch(removeItemFromCart(productId))}>Remove</button>
        </li>
    )
}