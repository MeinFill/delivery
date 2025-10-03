import './PizzaComponent.css'
import ProductCard from '../productCard/ProductCard';

function PizzaComponent(){
    return (
        <div className='cards-div'>
                <ProductCard
                    id={4}
                    title='Курица-терияки 30 см'
                    price='640'
                    description='Курица, лук красный, соус терияки, соус сливочный, сыр чеддар, кунжут'
                    image='/src/assets/images/chicken-ter.png'
                    />
                <ProductCard
                    id={5}
                    title='Пепперони 30 см'
                    price='710'
                    description='Колбаса, сыр чеддар, лук красный'
                    image='/src/assets/images/pepperoni.png'
                    />
                <ProductCard
                    id={6}
                    title='Фермерская экстра'
                    price='1140'
                    description='Сыр моцарелла, куриса, соус сливочный, ветчина, бекон, шампиньоны, лук красный, зеленый перец, орегано'
                    image='/src/assets/images/fermerextra.png'
                    />
        </div>
    )
}

export default PizzaComponent;