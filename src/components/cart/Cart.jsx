import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import {getProductList} from '../../slices/ProductsSlice'
import {deccreaseProdQtyInCart,increaseProdQtyInCart,removeItemFromCart,getDefCart,getCartList} from '../../slices/CartSlice'
const Cart = () => {
    const cartItems = useSelector(getCartList)
    const products = useSelector(getProductList)
    const [cartItemsDisplay,setCartItemsDisplay] = useState([])

    const dispatch = useDispatch()
    useEffect(()=>{
        const addDefCart = async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/carts/1')
                const data = await response.json();
                dispatch(getDefCart({cartData:data.products}))
            }catch(error){
                console.log(error)
            }
        }
        addDefCart()
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
    )
}