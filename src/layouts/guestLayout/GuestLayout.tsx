import './GuestLayout.css'
import { Outlet } from "react-router-dom"
import logo from "../../assets/images/logo.svg"

function GuestLayout() {
  return (
    <div className='guest-page'>
        <div className='logo'>
            <img src={logo}></img>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default GuestLayout