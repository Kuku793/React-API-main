import React, { useEffect, useState } from 'react'

const Effect = () => {
const [data, setData] = useState([])



useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>setData(json))
}, [])

  return (
    <div  className='move'>

            <h1>How to fetch and consume API on react</h1>
            {data.map((d)=>{

                const {title, id, description,image, category, price} = d

                return (
                  <div className="text" key={id}>
                    <img src={image} alt="" srcset="" />
                    <p>{title}</p>
                    <p>{description}</p>
                    <p>{category}</p>
                    <h2>Price: ${price}</h2>
                  </div>
                );
            })   }

    </div>
  )
}

export default Effect
