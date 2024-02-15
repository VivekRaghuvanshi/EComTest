import React from 'react'
import "./ProductItem.css"
function Productitem({item}) {
  return (
    <div className='productItem'>
        <img style= {{width:200,heigth:200,marginLeft:"auto",marginRight:"auto"}} src = {item.image}/>

        <p>{item?.title.length > 30 ? item.title.substr(0,30) : item.title}</p>

        <p>{item?.category.length > 60 ? item.category.substr(0,60) : item.category}</p>

        <p>{item?.description.length > 60 ? item.description.substr(0,60) : item.description}</p>

        <button className="productItemButton">Add To Cart</button>

        <button className="productItemButton">Buy Now</button>
        </div>
  )
}

export default Productitem