import React,{useState} from 'react'

function AddProductPage()
{
    const [AddProduct,setAddProduct]=useState({
        Name: "",
        product_description: "",
        price: "",
        category_id: "1",
        best_seller: true,
        suppliers_id: 2,
        img: "",
        Current_quantity: ""
    });

    function handleChange(evt)
    {
        const {name,value} = evt.target;

        setAddProduct({
            ...AddProduct,
            [name]:value
        })
        console.log(AddProduct)
    } 
    

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const url = `${process.env.REACT_APP_BACK_END_URL}/api/items`; 
    
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(AddProduct)
        };
    

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Response:', data);


          //Put things in here if the response is successful
          alert("Your product was created!!!!!! ");


          setAddProduct({
            Name: "",
            product_description: "",
            price: "",
            category_id: "1",
            best_seller: true,
            suppliers_id: 2,
            img: "",
            Current_quantity: ""
        });

          //re-director
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };   
   

    return (
        
<div id="BodyVh">
  <form onSubmit={handleSubmit}>
     
        <div>
            <label for="name">Name</label>
            <input type="text" id="Name" name="Name" onChange={handleChange} value={AddProduct.Name}/>
        </div>
        <div>
            <label for="product_description">product description</label>
            <input type="text" id="product_description" name="product_description" onChange={handleChange} value={AddProduct.product_description} />
        </div>
        <div>
            <label for="price">price</label>
            <input type="text" id="price" name="price"  onChange={handleChange} value={AddProduct.price}/>
        </div>
        <div>
        category_id
        <select name="category_id" onChange={handleChange} value={AddProduct.category_id}>
            
        <option value="1"> Technology </option>
        <option value="2"> appliances </option>
        <option value="3"> furniture </option>
        <option value="4"> clothes </option>
        <option value="5"> retro </option>

        </select>

        
            bestseller
        <label for="best_seller"> Yes</label>  <input type = "radio" id="best_seller" name="best_seller" value={true}  onChange={handleChange}/>
        <label for="best_seller"> No</label> <input type = "radio" id="best_seller" name="best_seller" value={false}  onChange={handleChange}/>
        </div>
        
        <div>
            <label for="img">img</label>
            <input type="text" id="img" name="img"  onChange={handleChange} value={AddProduct.img}/>
        </div>
        <div>
            <label for="Current_quantity">Current Quantity</label>
            <input type="text" id="Current_quantity" name="Current_quantity" onChange={handleChange} value={AddProduct.Current_quantity}/>
        </div>
       
        
      <button type="submit">Submit</button>
    </form>
</div>
      
    )
    
}
export default AddProductPage;