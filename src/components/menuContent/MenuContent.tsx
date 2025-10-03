import './MenuContent.css'
import SearchPanel from '../searchPanel/SearchPanel';
import { NavLink, Outlet } from 'react-router-dom'
import cart from "../../assets/images/cart.png"

function MenuContent(){
    return (
        <div className='menu'>
            <div className='menu-head-style'>
                <h1 className='title'>Меню</h1>
                <div className='basket-and-search'>
                    <NavLink to='/basket'>
                        <button className='basket'>
                            <img className='basket-icon' src={cart}></img>
                            <p className='menu-and-cart-paragraph'>Корзина</p>
                        </button>
                    </NavLink>
                    <SearchPanel></SearchPanel>
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    )
}

export default MenuContent;