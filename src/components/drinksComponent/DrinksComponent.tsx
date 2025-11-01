//Этот компонент захардкожен, но создан для возможных улучшений ответа бэкенда с разделением меню на разные группы

import ProductCard from "../productCard/ProductCard"
import "./DrinksComponent.css"

function DrinksComponent() {
  return (
    <>
      <h2>Продукты в дополнительном меню не работоспособны</h2>
      <div className="cards-div">
        <ProductCard
          id={600}
          title="Яблочный сок"
          price={160}
          description=""
          image="/src/assets/images/apple.png"
        />
        <ProductCard
          id={601}
          title="Апельсиновый сок"
          price={520}
          description=""
          image="/src/assets/images/apelsin.png"
        />
      </div>
    </>
  )
}

export default DrinksComponent
