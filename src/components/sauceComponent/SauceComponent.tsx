//Этот компонент захардкожен, но создан для возможных улучшений ответа бэкенда с разделением меню на разные группы

import ProductCard from "../productCard/ProductCard"
import "./SauceComponent.css"

function SauceComponent() {
  return (
    <>
      <h2>Продукты в дополнительном меню не работоспособны</h2>
      <div className="cards-div">
        <ProductCard
          id={700}
          title="Сырный соус"
          price={160}
          description=""
          image="/src/assets/images/cheese.png"
        />
        <ProductCard
          id={701}
          title="Кетчуп"
          price={520}
          description=""
          image="/src/assets/images/ketchup.png"
        />
      </div>
    </>
  )
}

export default SauceComponent
