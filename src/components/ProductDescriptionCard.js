import React from 'react'
import Stove_pic from"../assests/images/pans.jpg"


const ProductDescriptionCard = ({item_name,Description,price,quantity,img}) => {
  return (
    <div className="Category_Card">
        <div>
        <img src={img} alt="stove"/>

        </div>
        <div className='item_data'>
            <p>Name:{item_name}</p><br/>

            <p>Description:{Description}</p><br/>

            <p>Price:{price}</p><br/>

            <p>Amount:{quantity}</p><br/>

        </div>
    </div>
  )
}

export default ProductDescriptionCard
