import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import GuestLayout from "./layouts/guestLayout/GuestLayout"
import MainLayout from "./layouts/mainLayout/MainLayout"
import ErrorRout from "./routes/error/ErrorRout"
import LoginRout from "./routes/login/LoginRout"
import RegistrationRout from "./routes/registration/RegistrationRout"

import axios from "axios"
import { lazy, Suspense } from "react"
import AllMenuComponent from "./components/allMenuComponent/AllMenuComponent"
import BurgerComponent from "./components/burgerComponent/BurgerComponent"
import DesertsComponent from "./components/desertsComponent/DesertsComponent"
import DrinksComponent from "./components/drinksComponent/DrinksComponent"
import MainCourseComponent from "./components/mainCourseComponent/MainCourseComponent"
import PizzaComponent from "./components/pizzaComponent/PizzaComponent"
import SauceComponent from "./components/sauceComponent/SauceComponent"
import SoupComponent from "./components/soupComponent/SoupComponent"
import { RequireAuth } from "./helpers/RequireAuth"
import BasketRout from "./routes/basket/BasketRout"
import ProductRout from "./routes/productRout/ProductRout"

import { Provider } from "react-redux"
import { InitComponent } from "./components/initComponent/initComponent"
import { store } from "./store/Store"

const Menu = lazy(() => import("./routes/menu/MenuRout"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitComponent />,
    children: [
      {
        element: <GuestLayout />,
        children: [
          {
            path: "/registration",
            element: <RegistrationRout />,
          },
          {
            path: "/login",
            element: <LoginRout />,
          },
        ],
      },
      {
        element: (
          <RequireAuth>
            <MainLayout />
          </RequireAuth>
        ),
        children: [
          {
            path: "/menu",
            element: (
              <Suspense fallback={<>Загрузка...</>}>
                <Menu />
              </Suspense>
            ),
            children: [
              {
                index: true,
                element: <AllMenuComponent />,
              },
              {
                path: "pizza",
                element: <PizzaComponent />,
              },
              {
                path: "burgers",
                element: <BurgerComponent />,
              },
              {
                path: "soup",
                element: <SoupComponent />,
              },
              {
                path: "main-course",
                element: <MainCourseComponent />,
              },
              {
                path: "deserts",
                element: <DesertsComponent />,
              },
              {
                path: "drinks",
                element: <DrinksComponent />,
              },
              {
                path: "sauce",
                element: <SauceComponent />,
              },
              {
                path: "product/:id",
                element: <ProductRout />,
                errorElement: <>Ошибка</>,
                loader: async ({ params }) => {
                  const { data } = await axios.get(
                    `https://purpleschool.ru/pizza-api-demo/products/${params.id}`
                  )
                  return data
                },
              },
            ],
          },
          {
            path: "/basket",
            element: <BasketRout />,
          },
        ],
      },
      {
        path: "*",
        element: <ErrorRout />,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  )
}

export default App
