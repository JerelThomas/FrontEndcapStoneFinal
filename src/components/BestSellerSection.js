import React from 'react'
import {useState,useEffect } from "react";
import Bestsellercard from './Bestsellercard';


const BestSellerSection = () => {

    const [AllBestSellerList,setAllBestSellerList]=useState([]);
    
    useEffect(()=>
    {
      async function fetchItem()
      {
          const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/items/itembestseller?best_seller=true`)
          const apiResults =await response.json();
    
          setAllBestSellerList(apiResults.result);
          console.log(apiResults.result);
      }
      fetchItem();
    },[]);
  
    return (
      <div className='Bestseller_background'>
        <div>
          <h2>BestSellerSection</h2>
        </div>
              
              <div className='homepage_grid' >
                {AllBestSellerList.slice(0,4).map(allBestSellerList=>(<Bestsellercard key={allBestSellerList.items_id} id={allBestSellerList.items_id} item_name={allBestSellerList.name} img={allBestSellerList.img}/>))}
              </div>
      </div>
    )
  }
  
  export default BestSellerSection
  