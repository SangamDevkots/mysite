
import React, { useEffect, useState } from 'react';

const Post = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

useEffect(()=>{
  fetchData()
},[products])

  return (
    <div>
      {products.map((item, index) => (
        <>
        <div key={index}>
          {item.title} <br />
          {item.price}
          <img src={item.image} alt="" />
        
        </div>
        
        </>
      ))}
    </div>
  );
}

export default Post;
