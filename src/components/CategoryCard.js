import React from 'react'
import {Link} from "react-router-dom"
import Stove_pic from"../assests/images/pans.jpg"

const CategoryCard = ({item_name,category_id}) => {
    return (
      <div>
         <div className="Category_Card">
          <p>{item_name}</p>
  
          <img src={Stove_pic} alt="stove"/>
  
          <Link to={"/anycategory/"+category_id}>see more</Link>
         </div>
      </div>
    )
  }
  
  export default CategoryCard;