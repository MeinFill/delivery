import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom"
import type { Product } from "../../interfaces/ProductInterface"
import ProductCard from "../productCard/ProductCard"
import "./AllMenuComponent.css"

type MenuOutletContext = {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

function AllMenuComponent() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | undefined>()
  const { filter } = useOutletContext<MenuOutletContext>()

  useEffect(() => {
    getMenu(filter)
  }, [filter])

  const getMenu = async (name?: string) => {
    try {
      setLoading(true)
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve()
        }, 200)
      })
      const { data } = await axios.get<Product[]>(
        `https://purpleschool.ru/pizza-api-demo/products`,
        {
          params: { name },
        }
      )
      setProducts(data)
      setLoading(false)
    } catch (e) {
      console.log(e)
      if (e instanceof AxiosError) {
        setError(e.message)
      }
      setLoading(false)
      return
    }
  }

  return (
    <div className="cards-div">
      {error && <>{error}</>}
      {!isLoading &&
        products.length > 0 &&
        products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.name}
            description={p.ingredients.join(", ")}
            price={p.price}
            image={p.image}
          />
        ))}
      {isLoading && <>Идет загрузка...</>}
      {!isLoading && products.length === 0 && <>Ничего не найдено</>}
    </div>
  )
}

export default AllMenuComponent
