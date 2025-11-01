import { useDispatch } from "react-redux"
import { cartActions } from "../../store/CartSlice"
import type { AppDispatch } from "../../store/Store"
import "./BasketItemProduct.css"
import type { BasketItemProps } from "./BasketItemProps"

function BasketItemProduct(props: BasketItemProps) {
  const dispatch = useDispatch<AppDispatch>()

  const subtractButtonClick = () => {
    dispatch(cartActions.subtractItem(parseInt(props.id)))
  }

  const addButtonClick = () => {
    dispatch(cartActions.addItem(parseInt(props.id)))
  }

  const removeButtonClick = () => {
    dispatch(cartActions.removeItem(parseInt(props.id)))
  }
  return (
    <div id={props.id} className="basket-item">
      <img src={props.image} className="basket-item-image"></img>
      <div className="basket-item-description">
        <p>{props.name}</p>
        <p className="basket-item-price">{props.price} ₽</p>
      </div>
      <div className="basket-item-count-div">
        <button className="basket-item-subtract-button" onClick={subtractButtonClick}>
          –
        </button>
        <p>{props.count}</p>
        <button className="basket-item-add-button" onClick={addButtonClick}>
          +
        </button>
        <button className="basket-item-remove-button" onClick={removeButtonClick}>
          ×
        </button>
      </div>
    </div>
  )
}

export default BasketItemProduct
