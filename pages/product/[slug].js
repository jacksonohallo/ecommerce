import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import data from '../../utilis/data';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../../utilis/Store';

const ProductScreen = () => {
  const {state,dispatch} =useContext(Store)
const {query} = useRouter();
const {slug} =query;
const product =data.products.find((x)=>x.slug===slug);
if (!product){
    return <div>Product Not Found</div>
}

const addCartHandler=()=> {
  const existItem = state.cart.cartItems.find((x)=>x.slug === product.slug)
  const quantity = existItem? existItem.quantity+1 : 1;
 if ( product.countInStock<quantity){
  alert("Sorry, product is out of stock")
  return;
 }



  dispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity}})

}

  return (
<Layout title={product.name}>
    <div className="py-2">
  <Link href="/">back to products</Link>
   <div className="grid md:grid-cols-4 md:gap-3">
    <div className="md:col-span-2">
      <Image
      src={product.image}
      alt={product.name}
      width={640}
      height={640}
      layout="responsive"

      ></Image>

    </div>
        <div>
  <ul>
<li>

  <h1 className="text-lg">{product.name}</h1>
</li>

<li> Category:{product.category}</li>
<li>Brand:{product.brand}</li>
<li>{product.rating} of {product.numReviews} reviews</li>
<li>Description: {product.description}</li>
</ul>
</div>
<div>
  <div className="card p-5">
    <div className="mb-2 flex justify-between">
      <div>Price</div>
      <div>${product.price}</div>
    </div>

    <div className="mb-2 flex justify-between">
      <div>Status</div>
      <div>{product.countInStock>0? 'In stock': 'unvailable'}</div>
    </div>

<button className="primary-button  w-full" onClick={addCartHandler}>Add to cart</button>

  </div>
</div>

   </div>

    </div>
</Layout>
  )
}

export default ProductScreen