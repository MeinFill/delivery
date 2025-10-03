import './BurgerComponent.css'
import ProductCard from '../productCard/ProductCard';

function BurgerComponent(){
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
        </div>
    )
}

export default BurgerComponent;