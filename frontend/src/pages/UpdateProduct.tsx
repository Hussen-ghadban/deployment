import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id}=useParams();

    const [product,setProduct]=useState({
        name:'',
        description:'',
        price:'',
        category:'',
    });
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault();
        await axios.put(`${import.meta.env.VITE_API_URL}/api/products/${id}`,{...product,price:parseFloat(product.price)})
    }
  return (
    <div>
        <h2>update Product</h2>

        <form onSubmit={handleSubmit}>
            <input name='name' placeholder='enter name' onChange={handleChange}/>
            <input name='description' placeholder='enter description' onChange={handleChange}/>
            <input name='price' placeholder='enter price' onChange={handleChange}/>
            <input name='category' placeholder='enter category' onChange={handleChange}/>
            <button type='submit'>update</button>

        </form>
      
    </div>
  )
}

export default UpdateProduct
