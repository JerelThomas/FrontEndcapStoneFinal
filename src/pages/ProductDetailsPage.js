import ProductDescriptionCard from'../components/ProductDescriptionCard'
import {useState,useEffect } from "react";
import {useParams} from "react-router-dom";


const ProductDetailsPage = () => {

  const params=useParams();

  const [ItemList,setItemList]=useState([]);
  
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/items/`+params.id)
        const apiResults =await response.json();
  
        setItemList(apiResults.result);
        console.log(apiResults.result);
        
    }
    fetchItem();
  },[]);


  return (
    <div className="Page_height Page_background" id="BodyVh">
      <ProductDescriptionCard key={ItemList.items_id} item_name={ItemList.name} Description={ItemList.product_description} price={ItemList.price} quantity={ItemList.current_quantity} img={ItemList.img}/>
    </div>
  )
}

export default ProductDetailsPage;