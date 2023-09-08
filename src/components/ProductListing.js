
import ProductCard from '../components/ProductCard'
import {useState,useEffect } from "react";


const ProductListing = () => {


  const [AllItemList,setAllItemList]=useState([]);
  
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/items/`)
        const apiResults =await response.json();
  
        setAllItemList(apiResults.results);
        console.log(apiResults.results);
    }
    fetchItem();
  },[]);
  
  return (
    <div  className="Page_height List_layout" > 
      {AllItemList.map(allItemList=>(<ProductCard key={allItemList.items_id} id={allItemList.items_id} item_name={allItemList.name} img={allItemList.img}/>))}

    </div>
  )
}

export default ProductListing;
