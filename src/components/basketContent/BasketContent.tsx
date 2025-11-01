import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../../store/CartSlice"
import type { AppDispatch, RootState } from "../../store/Store"
import BasketItemProduct from "../basketItemProduct/BasketItemProduct"
import "./BasketContent.css"

const DELIVERY_AMOUNT = 158450

export type CartItem = {
  id: string
  name: string
  img: string
  price: string
  count: number
}

function BasketContent() {
  const items = useSelector((S: RootState) => S.cart.items)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [totalAmount, setTotalAmount] = useState<number>(0)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    async function loadCartItems() {
      const newCartItems = await Promise.all(
        items.map(async (i) => {
          try {
            const { data } = await axios.get(
              `https://purpleschool.ru/pizza-api-demo/products/${i.id}`
            )

            return {
              id: i.id.toString(),
              name: data.name,
              img: data.image,
              price: data.price,
              count: i.count,
            }
          } catch (error) {
            dispatch(cartActions.removeItem(i.id))
            console.error(`Ошибка загрузки товара ${i.id}:`, error)
            return null
          }
        })
      )

      // Убираем неудавшиеся запросы
      const validItems = newCartItems.filter((item): item is CartItem => item !== null)

      const sum = validItems.reduce((acc, item) => acc + Number(item.price) * Number(item.count), 0)
      setTotalAmount(sum)
      setCartItems(validItems)
    }

    loadCartItems()
  }, [items])

  const removeBasket = () => {
    dispatch(cartActions.clearCart())
  }

  const buyClick = () => {
    alert("Купил! Все товары сброшены")
    dispatch(cartActions.clearCart())
  }

  return (
    <div className="basket-content">
      <div className="basket-head-style">
        <h1 className="title">Корзина</h1>
        <div className="basket-items">
          {cartItems.map((i) => (
            <BasketItemProduct
              id={i.id}
              image={i.img}
              name={i.name}
              price={i.price}
              count={i.count}
            />
          ))}
        </div>
        <div className="basket-buy-button-div">
          <button className="basket-buy-button" onClick={removeBasket}>
            Очистить корзину
          </button>
        </div>
        <div className="total-amount-div">
          <div className="positions-amount">
            <p>Сумма позиций</p>
            <p>{totalAmount} ₽</p>
          </div>
          <div className="delivery-amount">
            <p>Доставка</p>
            <p>{DELIVERY_AMOUNT} ₽</p>
          </div>
          <div className="total-amount">
            <p>Итог</p>
            <p>{DELIVERY_AMOUNT + totalAmount} ₽</p>
          </div>
        </div>
        <div className="basket-buy-button-div">
          <button className="basket-buy-button" onClick={buyClick}>
            ОФОРМИТЬ
          </button>
        </div>
      </div>
    </div>
  )
}

export default BasketContent
