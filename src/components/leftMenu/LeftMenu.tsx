import './LeftMenu.css'
import { Link, NavLink } from 'react-router-dom'
import avatar from "../../assets/images/avatar.png"
import menu from "../../assets/images/menu.png"
import pizza from "../../assets/images/pizza-icon.png"
import burger from "../../assets/images/burger-icon.png"
import soup from "../../assets/images/soup-icon.png"
import steak from "../../assets/images/main-course-icon.png"
import deserts from "../../assets/images/deserts-icon.png"
import drinks from "../../assets/images/drinks-icon.png"
import sauce from "../../assets/images/sauce-icon.png"

function LeftMenu(){
    return (
        <div className='left-menu'>
            <img className='avatar' src={avatar}></img>
            <div className='user-info'>
                <h2 className='name'>Долбоеб Долбоебов</h2>
                <p className='email'>dolboeb@yandex.ru</p>
                <Link to='/Login'><a className='exit-link'>Выйти</a></Link>
            </div>
            <div>
                <button className='menu-button'>
                    <img className='menu-icon' src={menu}></img>
                    <NavLink to='/menu'>
                        <p className='menu-and-cart-paragraph'>Меню</p>
                    </NavLink>
                </button>
                <ul className='menu-list'>
                    <li>
                        <NavLink to="/menu/pizza" className='menu-link'>
                            {({ isActive }) => (
                                <>
                                    <div  className={`${isActive ? 'active-icon' : ''}`}>
                                        <img src={pizza} className='menu-list-icon'></img>
                                    </div>
                                    <button className={`menu-list-button ${isActive ? 'active-button' : ''}`}>Пиццы</button>
                                </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu/burgers" className='menu-link'>
                            {({ isActive }) => (
                                <>
                                    <div  className={`${isActive ? 'active-icon' : ''}`}>
                                        <img src={burger} className='menu-list-icon'></img>
                                    </div>
                                    <button className={`menu-list-button ${isActive ? 'active-button' : ''}`}>Бургеры</button>
                                </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu/soup" className='menu-link'>
                            {({ isActive }) => (
                                <>
                                    <div  className={`${isActive ? 'active-icon' : ''}`}>
                                        <img src={soup} className='menu-list-icon'></img>
                                    </div>
                                    <button className={`menu-list-button ${isActive ? 'active-button' : ''}`}>Супы</button>
                                </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu/main-course" className='menu-link'>
                            {({ isActive }) => (
                                <>
                                    <div  className={`${isActive ? 'active-icon' : ''}`}>
                                        <img src={steak} className='menu-list-icon'></img>
                                    </div>
                                    <button className={`menu-list-button ${isActive ? 'active-button' : ''}`}>Второе</button>
                                </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu/deserts" className='menu-link'>
                            {({ isActive }) => (
                                <>
                                    <div  className={`${isActive ? 'active-icon' : ''}`}>
                                        <img src={deserts} className='menu-list-icon'></img>
                                    </div>
                                    <button className={`menu-list-button ${isActive ? 'active-button' : ''}`}>Десерты</button>
                                </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu/drinks" className='menu-link'>
                            {({ isActive }) => (
                                <>
                                    <div  className={`${isActive ? 'active-icon' : ''}`}>
                                        <img src={drinks} className='menu-list-icon'></img>
                                    </div>
                                    <button className={`menu-list-button ${isActive ? 'active-button' : ''}`}>Напитки</button>
                                </>)}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu/sauce" className='menu-link'>
                            {({ isActive }) => (
                                <>
                                    <div  className={`${isActive ? 'active-icon' : ''}`}>
                                        <img src={sauce} className='menu-list-icon'></img>
                                    </div>
                                    <button className={`menu-list-button ${isActive ? 'active-button' : ''}`}>Соусы</button>
                                </>)}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftMenu;