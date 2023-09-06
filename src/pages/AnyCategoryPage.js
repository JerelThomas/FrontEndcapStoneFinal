import React from 'react';
import AnyCategoryCard from '../components/AnyCategoryCard';
import {useState,useEffect } from "react";
import {useParams} from "react-router-dom";

const AnyCategoryPage = () => {

  const params=useParams();

  const [ItemList,setItemList]=useState([]);
  
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/items/Categoryid_for_item/`+params.id)
        const apiResults =await response.json();
  
        setItemList(apiResults.result);
        console.log(apiResults.result);
    }
    fetchItem();
  },[]);
  

  return (
    <div className="Page_height" id="BodyVh">
      
      {ItemList.map(itemList=>(<AnyCategoryCard key={itemList.items_id} id={itemList.items_id} CategoryId={params.id} item_name={itemList.name}/>))}

    </div>
  )
}



export default AnyCategoryPage
