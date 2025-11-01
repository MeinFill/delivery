import { Link, useLoaderData } from "react-router-dom"
import left from "../../assets/images/left.png"
import type { Product } from "../../interfaces/ProductInterface"
import "./ProductContent.css"

function ProductContent() {
  const data = useLoaderData() as Product

  return (
    <>
      <Link to="/menu">
        <div className="back-div">
          <img src={left} className="back-image"></img>
          <button className="back-to-menu-button">Вернуться</button>
        </div>
      </Link>
      <div className="product-information">
        <div>
          <img src={data.image} className="product-content-image"></img>
        </div>
        <div className="product-text-information">
          <p className="product-name">{data.name}</p>
          <div className="product-text-div">
            <p>Цена</p>
            <p>{data.price} ₽</p>
          </div>
          <div className="product-text-div">
            <p>Рейтинг</p>
            <p>{data.rating}★</p>
          </div>
          <div className="product-compound-div">
            <p>Состав:</p>
            <ul>
              {data.ingredients.map((i) => {
                return <li>{i}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductContent
