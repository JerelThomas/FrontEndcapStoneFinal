import React from 'react'
import Stove_pic from"../assests/images/pans.jpg"


const ProductDescriptionCard = ({item_name,Description,price,quantity}) => {
  return (
    <div>
        <div>
        <img src={Stove_pic} alt="stove"/>

        </div>
        <div>
            <p>Name:{item_name}</p><br/>

            <p>Description:{Description}</p><br/>

            <p>Price:{price}</p><br/>

            <p>Amount:{quantity}</p><br/>

        </div>
    </div>
  )
}

export default ProductDescriptionCard
