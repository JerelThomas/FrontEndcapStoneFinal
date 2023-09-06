import Bestsellercard from "./Bestsellercard";
import {useState,useEffect } from "react";


const BestSellerListing = () => {


  const [AllBestsellers,setAllBestsellers]=useState([]);
  
  
  useEffect(()=>
  {
    async function fetchItem()
    {
      const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/items/itembestseller?best_seller=true`)
      const apiResults =await response.json();  
        setAllBestsellers(apiResults.result);
        console.log(apiResults.result);
    }
    fetchItem();
  },[]);
  
  return (
    <div  className="Page_height">
      {AllBestsellers.map(allBestsellers=>(<Bestsellercard key={allBestsellers.items_id} id={allBestsellers.items_id} item_name={allBestsellers.name}/>))}

    </div>
  )
}

export default BestSellerListing;
