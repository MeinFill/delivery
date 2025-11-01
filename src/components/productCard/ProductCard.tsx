import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import buyImage from "../../assets/images/buy-icon.png"
import { cartActions } from "../../store/CartSlice"
import type { AppDispatch } from "../../store/Store"
import "./ProductCard.css"
import type { ProductCardProps } from "./ProductCardProps"
import type { MouseEvent } from "react"

function ProductCard(props: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>()

  const addToCart = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(cartActions.addItem(props.id))
  }

  return (
    <Link to={`/menu/product/${props.id}`} className="product-card">
      <div className="product-image-div">
        <button className="product-button">
          <img className="product-image" src={props.image}></img>
        </button>
        <div className="price">
          <p>{props.price} ₽</p>
        </div>
        <button className="buy-button" onClick={addToCart}>
          <img src={buyImage}></img>
        </button>
        <div className="description">
          <h2>{props.title}</h2>
          <p className="composition">{props.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
