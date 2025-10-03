import './SearchPanel.css'
import search from "../../assets/images/search-icon.svg"

function SearchPanel(){
    return (
        <div className='search-panel'>
            <img className='search-image' src={search}></img>
            <input className='search-input' placeholder='Введите блюдо или состав'></input>
        </div>
    )
}

export default SearchPanel;