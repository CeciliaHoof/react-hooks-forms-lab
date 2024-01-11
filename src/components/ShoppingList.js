import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [itemsArr, setItemsArr] = useState([...items])

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(e){
    setSearch(e.target.value)
  }

  function onItemFormSubmit(newItem){
    setItemsArr([...itemsArr, newItem])
  }
  
  const itemsToDisplay = itemsArr.filter((item) => {
    if (selectedCategory === "All" && item.name.toLowerCase().includes(search.toLowerCase())) return true;
    
    return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
