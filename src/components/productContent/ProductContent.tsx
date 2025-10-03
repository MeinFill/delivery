import { Link, useParams } from 'react-router-dom';
import './ProductContent.css'

function ProductContent(){
    const {id} = useParams();
    return (
        <>
            <Link to='/menu'>
                <button>
                    Вернуться в меню
                </button>
            </Link>
            <div>
                Продукт - {id}
            </div>
        </>
    )
}

export default ProductContent;