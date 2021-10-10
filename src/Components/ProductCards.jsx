import React from 'react'

function ProductCards({image, price, product}) {
    return (
        <div class="card m-2" style={{width: "18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product}</h5>
    <p class="card-text">Shs.{price}</p>
    <a href="/" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
    )
}

export default ProductCards
