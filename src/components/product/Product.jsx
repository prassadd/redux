import {useDispatch} from 'react-redux'
const Product = ({element,addItemToCart}) => {
    const {image,price,category,description,title,id} = element;
    const dispatch = useDispatch();
    return (
        <li className='product'>
            <div className='product-details'>
                <img src={image} height={200}/>
                <h2 className='title'>{title}</h2>
                <p className='desc'>{description}</p>
                <p className='category'>{category}</p>
                <h2 className='price'>${price}</h2>
                <button onClick={() => dispatch(addItemToCart({productId:id,quantity :1}))}>Add To Cart</button>
                <button>Buy Now</button>
            </div>
        </li>
    )
}

export default Product;