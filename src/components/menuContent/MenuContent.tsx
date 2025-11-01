import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import cart from "../../assets/images/cart.png"
import SearchPanel from "../searchPanel/SearchPanel"
import "./MenuContent.css"

function MenuContent() {
  const [filter, setFilter] = useState<string>("")

  return (
    <div className="menu">
      <div className="menu-head-style">
        <h1 className="title">Меню</h1>
        <div className="basket-and-search">
          <NavLink to="/basket">
            <button className="basket">
              <img className="basket-icon" src={cart}></img>
              <p className="menu-and-cart-paragraph">Корзина</p>
            </button>
          </NavLink>
          <SearchPanel filter={filter} setFilter={setFilter}></SearchPanel>
        </div>
      </div>
      <Outlet context={{ filter, setFilter }}></Outlet>
    </div>
  )
}

export default MenuContent
