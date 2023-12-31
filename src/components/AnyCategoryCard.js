import React from 'react'
import {Link} from "react-router-dom"
import Stove_pic from"../assests/images/pans.jpg"

const AnyCategoryCard = ({CategoryId,item_name,id,img}) => {
  return (
    <div >
      <div className="Category_Card">
        <p>{item_name} {CategoryId}</p>

        <img src={img} alt="stove"/>

        <Link to={"/product/"+id}>see more</Link>
       </div>
    </div>
  )
}

export default AnyCategoryCard
