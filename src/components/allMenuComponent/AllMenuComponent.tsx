import './AllMenuComponent.css'
import ProductCard from '../productCard/ProductCard';

function AllMenuComponent(){
    return (
        <div className='cards-div'>
                <ProductCard
                    id={1}
                    title='Чизбургер'
                    price='160'
                    description='Булочка, котлета свиная, огурец, соус спайси, сыр чеддар'
                    image='/src/assets/images/cheesburger.png'
                    />
                <ProductCard
                    id={2}
                    title='Бигмак'
                    price='520'
                    description='Булочка, котлета куриная, соус цезарь, сыр чеддар, листья салата, помидоры'
                    image='/src/assets/images/bigmak.png'
                    />
                <ProductCard
                    id={3}
                    title='Гамбургер'
                    price='1140'
                    description='Булочка, 2 котлеты куриная, огурец, соус цезарь + сырный, сыр чеддар, листья салата, помидоры, лук'
                    image='/src/assets/images/gamburger.png'
                    />
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

export default AllMenuComponent;