import type { ChangeEvent } from "react"
import search from "../../assets/images/search-icon.svg"
import "./SearchPanel.css"

type SearchPanelProps = {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

function SearchPanel({ filter, setFilter }: SearchPanelProps) {
  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <div className="search-panel">
      <img className="search-image" src={search}></img>
      <input
        className="search-input"
        value={filter}
        placeholder="Введите блюдо или состав"
        onChange={updateFilter}
      ></input>
    </div>
  )
}

export default SearchPanel
