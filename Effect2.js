import React, { useEffect, useState } from 'react'

const Effect2 = () => {
const [data, setData] = useState([])



useEffect(()=>{
    fetch("https://api.coinlore.net/api/tickers")
      .then((res) => res.json())
      .then((json) => setData(json.data));

}, [])

  return (
    <div  className='move2'>

            <h1>Coin exchange API</h1>
            {data.map((d)=>{

                const {name,symbol,price_usd, id} = d

                return(
                    <div className='text' key={id}>
                        <h1>{name}</h1>
                        <h2>{symbol}</h2>
                        <p>${price_usd}</p>

                    </div>
                )
            })   }

    </div>
  )
}

export default Effect2