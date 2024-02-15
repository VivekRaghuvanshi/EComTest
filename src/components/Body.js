import React, { useEffect, useState } from 'react'
import "./Body.css"
import Productitem from './Productitem';
function Body() {
    const [products,setProducts] = useState([]);
    useEffect(() =>{
        const fetchProducts = async() => {
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data));
        };
        fetchProducts();
    },[])
  return <div className="body">
    <div className="bodyItems">
        {products.map((item,index) => (
           <Productitem item={item} key={item.id}/>
        ))}
    </div>
    </div>

}

export default Body