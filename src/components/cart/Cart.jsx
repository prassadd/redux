import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {getProductList} from '../../slices/ProductsSlice'
import {deccreaseProdQtyInCart,increaseProdQtyInCart,removeItemFromCart,getCartList,getDefCartItems,getCartLoadingError} from '../../slices/CartSlice'
const Cart = () => {
    const cartItems = useSelector(getCartList)
    const products = useSelector(getProductList)
    const error = useSelector(getCartLoadingError)
    const [cartItemsDisplay,setCartItemsDisplay] = useState([])
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDefCartItems())
        return;
    },[])

    useEffect(()=>{
        const items = cartItems.map((element,index)=> {
            const found = products.find((curElement) => curElement.id === element.productId)

            if(found){
                return {...element,
                    'price':found.price,
                    'total':found.price*element.quantity,
                    'image':found.image
                }
            }
        })
        if(items){
            setCartItemsDisplay(items)
        }
        
        return;
    },[cartItems])
    if(error){
        return(
            <h1>{error}</h1>
        )
        
    }
    if(cartItemsDisplay.length){
        return(
            <div className="cart">
                <ul className="cart-list">
                    {cartItemsDisplay.map((element,index) => {
                        return <CartItems element={element} key={index} dispatch={dispatch}/>
                    })}
                </ul>
            </div>
        )
    }
    
}
export default Cart;

const CartItems = ({element,dispatch}) => {
    const {price,image,quantity,productId,total} = element;
    return(
        <li key={productId}>
            <img src={image} width={100}/>
            <p className="price">{price}</p>
            <p className="price"><button onClick={()=>dispatch(deccreaseProdQtyInCart({productId:productId}))}>-</button>{quantity}
            <button onClick={()=>dispatch(increaseProdQtyInCart({productId}))}>+</button>
            </p>
            <p className="price">{total}</p>
            <button onClick={()=>dispatch(removeItemFromCart({productId}))}>Remove</button>
        </li>
        // <h1>5</h1>
    )
}