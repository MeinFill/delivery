//Этот компонент захардкожен, но создан для возможных улучшений ответа бэкенда с разделением меню на разные группы

import ProductCard from "../productCard/ProductCard"
import "./SoupComponent.css"

function SoupComponent() {
  return (
    <>
      <h2>Продукты в дополнительном меню не работоспособны</h2>
      <div className="cards-div">
        <ProductCard
          id={300}
          title="Том Ям"
          price={160}
          description="Курица, креветки, рис жасмин, помидоры, лайм, шампиньоны, паста Том Ям, кокосовое молоко, азиатские приправы"
          image="/src/assets/images/tomYam.png"
        />
        <ProductCard
          id={301}
          title="Борщ"
          price={520}
          description="Капуста, картофель, курица, свекла, морковь, лук, уксус, сметана"
          image="/src/assets/images/borsch.png"
        />
        <ProductCard
          id={302}
          title="Сливочный грибной суп"
          price={1140}
          description="Шампиньоны, лисички, сливки 15%, картофель, сыр, морковь, чеснок, укроп, масло оливковое"
          image="/src/assets/images/mushroomSoup.png"
        />
      </div>
    </>
  )
}

export default SoupComponent
