import React from 'react'
import ProductCards from '../Components/ProductCards'
import {data} from '../Library/stock'
function Home() {
    return (
        <div>
            {/* <h1>Home</h1> */}

            <div className="product_wrapper">
            {data.map(item => (
                <ProductCards
                 image={item.image}
                  price={item.price}
                   product={item.desc} 
                   key={item.id}/>
                   ))}
                   </div>
           

        </div>
    )
}

export default Home
