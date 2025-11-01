//Этот компонент захардкожен, но создан для возможных улучшений ответа бэкенда с разделением меню на разные группы

import ProductCard from "../productCard/ProductCard"
import "./PizzaComponent.css"

function PizzaComponent() {
  return (
    <>
      <h2>Продукты в дополнительном меню не работоспособны</h2>
      <div className="cards-div">
        <ProductCard
          id={100}
          title="Курица-терияки 30 см"
          price={640}
          description="Курица, лук красный, соус терияки, соус сливочный, сыр чеддар, кунжут"
          image="/src/assets/images/chicken-ter.png"
        />
        <ProductCard
          id={101}
          title="Пепперони 30 см"
          price={710}
          description="Колбаса, сыр чеддар, лук красный"
          image="/src/assets/images/pepperoni.png"
        />
        <ProductCard
          id={102}
          title="Фермерская экстра"
          price={1140}
          description="Сыр моцарелла, куриса, соус сливочный, ветчина, бекон, шампиньоны, лук красный, зеленый перец, орегано"
          image="/src/assets/images/fermerextra.png"
        />
      </div>
    </>
  )
}

export default PizzaComponent
