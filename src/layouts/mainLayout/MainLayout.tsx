import './MainLayout.css'
import LeftMenu from '../../components/leftMenu/LeftMenu'
import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div className='main-page'>
        <LeftMenu></LeftMenu>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout