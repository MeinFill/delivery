import './ProductCard.css'
import buyImage from "../../assets/images/buy-icon.png"
import type { ProductCardProps } from './ProductCardProps';
import { Link } from 'react-router-dom';

function ProductCard(props: ProductCardProps){
    return (
        <Link to={`/menu/product/${props.id}`} className='product-card'>
            <div className='product-image-div'>
                <button className='product-button'>
                    <img className='product-image' src={props.image}></img>
                </button>
                <div className='price'>
                    <p>{props.price} ₽</p>
                </div>
                <button className='buy-button'>
                    <img src={buyImage}></img>
                </button>
                <div className='description'>
                    <h2>{props.title}</h2>
                    <p className='composition'>{props.description}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;