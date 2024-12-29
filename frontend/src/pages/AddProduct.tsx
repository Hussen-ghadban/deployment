import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {
    
    const [products,setProducts]=useState({
        name:'',
        description:'',
        price:'',
        category:'',
    })

        const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
            setProducts({...products,[e.target.name]:e.target.value})
        }

        const handleSubmit=async(e:React.FormEvent)=>{
            e.preventDefault();
            await axios.post(`${import.meta.env.VITE_API_URL}/api/products`,{...products,price:parseFloat(products.price)});
            
        }
  return (
    <div>
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>
            <input name='name' placeholder='enter name' onChange={handleChange}/>
            <input name='description' placeholder='enter description' onChange={handleChange}/>
            <input name='price' placeholder='enter price' onChange={handleChange}/>
            <input name='category' placeholder='enter category' onChange={handleChange}/>
            <button type='submit'>Add</button>

        </form>
      
    </div>
  )
}

export default AddProduct
