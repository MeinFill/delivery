//Этот компонент захардкожен, но создан для возможных улучшений ответа бэкенда с разделением меню на разные группы

import ProductCard from "../productCard/ProductCard"
import "./MainCourseComponent.css"

function MainCourse() {
  return (
    <>
      <h2>Продукты в дополнительном меню не работоспособны</h2>
      <div className="cards-div">
        <ProductCard
          id={400}
          title="Сибас в цветной капусте"
          price={160}
          description="Сибас, оливковое масло, розмарин, цветная капуста, тимьян, тахини, сливки, оливки в масле"
          image="/src/assets/images/sibas.png"
        />
        <ProductCard
          id={401}
          title="Говядина по-сибирски"
          price={520}
          description="Говядина, растительное масло, лук, сельдирей, морковь, картофель, кукурузный крахмал, пастернак, метрушка, тимьян, томатная паста"
          image="/src/assets/images/sibir.png"
        />
        <ProductCard
          id={402}
          title="Свиная шейка су-вид с соусом из печёного яблока и горчицы"
          price={1140}
          description="Свиная шейка, черный перец, чеснок, тимьян, розмарин, оливковое масло, яблоки, мед, горчица, белое сухое вино, масло сливочное, лимонный сок, сливки 33%, мускатный орех, сельдерей"
          image="/src/assets/images/steik.png"
        />
      </div>
    </>
  )
}

export default MainCourse
