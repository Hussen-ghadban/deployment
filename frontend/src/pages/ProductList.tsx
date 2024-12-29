import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


interface Product{
_id:string,
name:string,
description:string,
price:number,
category:string
}

const ProductList = () => {
  const [products,setProducts]=useState<Product[]>([]);

  const fetchProducts=async()=>{
    // const response=await axios.get(`${process.env.REACT_APP_API_URL}/api/products`)
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);

    setProducts(response.data.products);
    // console.log(response.data.products);
  }
  const deleteProduct=async(id:string)=>{
    await axios.delete(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
    
    setProducts(products.filter(product=>product._id!=id));
  }
  useEffect(()=>{
    fetchProducts();
  },[products])
  return (
    <div>
      <h1>products</h1>
      <Link to={'/add-product'}>Add Produt</Link>
      <ul>
      {products && products.map((p:any)=>(
        <li key={p._id} >
          <p>{p.name} - {p.price}</p>
          <p>{p.description}</p>
          <button onClick={()=>deleteProduct(p._id)}>Delete</button>
          <Link to={`/update-product/${p._id}`}>edit product</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default ProductList
