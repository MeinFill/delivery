//Этот компонент захардкожен, но создан для возможных улучшений ответа бэкенда с разделением меню на разные группы

import ProductCard from "../productCard/ProductCard"
import "./DesertsComponent.css"

function DesertsComponent() {
  return (
    <>
      <h2>Продукты в дополнительном меню не работоспособны</h2>
      <div className="cards-div">
        <ProductCard
          id={500}
          title="Трайфл"
          price={160}
          description=""
          image="/src/assets/images/trifle.png"
        />
        <ProductCard
          id={501}
          title="Малиновый чизкейк"
          price={520}
          description=""
          image="/src/assets/images/chizkeik.png"
        />
        <ProductCard
          id={502}
          title="Мороженое"
          price={1140}
          description=""
          image="/src/assets/images/icecream.png"
        />
      </div>
    </>
  )
}

export default DesertsComponent
