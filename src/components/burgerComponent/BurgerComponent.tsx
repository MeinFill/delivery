//Этот компонент захардкожен, но создан для возможных улучшений ответа бэкенда с разделением меню на разные группы

import ProductCard from "../productCard/ProductCard"
import "./BurgerComponent.css"

function BurgerComponent() {
  return (
    <>
      <h2>Продукты в дополнительном меню не работоспособны</h2>
      <div className="cards-div">
        <ProductCard
          id={200}
          title="Чизбургер"
          price={160}
          description="Булочка, котлета свиная, огурец, соус спайси, сыр чеддар"
          image="/src/assets/images/cheesburger.png"
        />
        <ProductCard
          id={201}
          title="Бигмак"
          price={520}
          description="Булочка, котлета куриная, соус цезарь, сыр чеддар, листья салата, помидоры"
          image="/src/assets/images/bigmak.png"
        />
        <ProductCard
          id={202}
          title="Гамбургер"
          price={1140}
          description="Булочка, 2 котлеты куриная, огурец, соус цезарь + сырный, сыр чеддар, листья салата, помидоры, лук"
          image="/src/assets/images/gamburger.png"
        />
      </div>
    </>
  )
}

export default BurgerComponent
