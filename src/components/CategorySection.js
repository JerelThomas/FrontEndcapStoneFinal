import React from 'react'
import CategoryCard from './CategoryCard';
import {useState,useEffect } from "react";


const CategorySection = () => {

    const [AllCategoryList,setAllCategoryList]=useState([]);
    
  useEffect(()=>
  {
    async function fetchItem()
    {
        const response = await fetch (`${process.env.REACT_APP_BACK_END_URL}/api/items/category/title`);
  
  
        const apiResults =await response.json();
  
        console.log("apiResults (Category Section)=",apiResults);
  
        setAllCategoryList(apiResults.message);
        console.log(apiResults.message);
    }
    fetchItem();
  },[]);
  
  if(!AllCategoryList) return <p>Loading.........</p>;
  
    return (
    <div className='Category_background'>

        <div>
          <h2>CatagorySection</h2>
        </div>
      
        <div className='homepage_grid'>
        
        {AllCategoryList.map((allCategoryList)=>(<CategoryCard key={allCategoryList.category_id} category_id={allCategoryList.category_id} item_name={allCategoryList.category_name} img_url={allCategoryList.img_url}/>))}
            
        </div>

      </div>
    )
  }
  
  export default CategorySection
  