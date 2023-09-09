import React,{useState} from 'react'

function SignUpPage()
{
    const [AddUser,setAddUser]=useState({
    username:"",
	email:"",
	phone_number:"",
	password:"",
	location:"",
    first_name: "",
	last_name: ""
    });

    function handleChange(evt)
    {
        const {name,value} = evt.target;

        setAddUser({
            ...AddUser,
            [name]:value
        })
        console.log(AddUser)
    } 
    

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const url = `${process.env.REACT_APP_BACK_END_URL}/api/users/`; 
    
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(AddUser)
        };
    

        fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log('Response:', data);


          //Put things in here if the response is successful
          alert("Your product was created!!!!!! ");


          setAddUser({
            username:"",
            email:"",
            phone_number:"",
            password:"",
            location:"",
            first_name: "",
            last_name: ""
        });

          //re-director
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };   
   

    return (
        
<div id="BodyVh" className='Page_background'>
    <form onSubmit={handleSubmit}>
     
    <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" onChange={handleChange} value={AddUser.username}/>
    </div>

    <div>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" onChange={handleChange} value={AddUser.email}/>
    </div>

    <div>
        <label for="phone_number">Phone Number</label>
        <input type="text" id="phone_number" name="phone_number" onChange={handleChange} value={AddUser.phone_number}/>
    </div>

    <div>
        <label for="password">Password</label>
        <input type="text" id="password" name="password" onChange={handleChange} value={AddUser.password}/>
    </div>

    <div>
        <label for="location">Location</label>
        <input type="text" id="location" name="location" onChange={handleChange} value={AddUser.location}/>
    </div>

    <div>
        <label for="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name" onChange={handleChange} value={AddUser.first_name}/>
    </div>

    <div>
        <label for="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" onChange={handleChange} value={AddUser.last_name}/>
    </div>

    
      <button type="submit">Submit</button>
    </form>
</div>
      
    )
    
}
export default SignUpPage;