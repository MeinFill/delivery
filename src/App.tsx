import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import './App.css'
import RegistrationRout from './routes/registration/RegistrationRout'
import ErrorRout from './routes/error/ErrorRout'
import LoginRout from './routes/login/LoginRout'
import GuestLayout from './layouts/guestLayout/GuestLayout'
import MainLayout from './layouts/mainLayout/MainLayout'
import MenuRout from './routes/menu/MenuRout'
import BasketRout from './routes/basket/BasketRout'
import AllMenuComponent from './components/allMenuComponent/AllMenuComponent'
import PizzaComponent from './components/pizzaComponent/PizzaComponent'
import BurgerComponent from './components/burgerComponent/BurgerComponent'
import ProductRout from './routes/productRout/ProductRout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/registration" replace />,
  },
  {
    element: <GuestLayout />,
    children: [
      {
        path: '/registration',
        element: <RegistrationRout />,
      },
      {
        path: '/login',
        element: <LoginRout />,
      },
    ],
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: '/menu',
        element: <MenuRout />,
        children: [
          {
            index: true,
            element: <AllMenuComponent/>
          },
          {
            path: 'pizza',
            element: <PizzaComponent/>
          },
          {
            path: 'burgers',
            element: <BurgerComponent/>
          },
          {
            path: 'soup',
            element: <PizzaComponent/>
          },
          {
            path: 'main-course',
            element: <BurgerComponent/>
          },
          {
            path: 'deserts',
            element: <PizzaComponent/>
          },
          {
            path: 'drinks',
            element: <BurgerComponent/>
          },
          {
            path: 'sauce',
            element: <BurgerComponent/>
          },
          {
            path: 'product/:id',
            element: <ProductRout/>
          }
        ],
      },
      {
        path: '/basket',
        element: <BasketRout />
      }
    ],
  },
  {
    path: '*',
    element: <ErrorRout />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
