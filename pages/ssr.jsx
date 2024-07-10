// client side rendering

import { getProducts } from "@/lib/api"
import { useEffect, useState } from 'react'

export default function SSR({ products }) {

  function clickHandler() {
    const x = localStorage.getItem('x')
    console.log('x:')
  }
  
  return (
    <main>
      <h1>Products</h1>

      <button onClick={clickHandler} >Click Me To Life</button>
      {
        products.map((product, idx) => {
          return (
            <article key={`prod-${idx}`} >
              <img src={product.thumbnail} alt="" />
              <p>{product.title}</p>
            </article>
          )
        })
      }
    </main>
  )
}

export async function getServerSideProps() {
  console.log('Hola desde getServerSideProps')

  const products = await getProducts()
  return {
    props: {
      message: 'Hello, from server',
      text: 'random text here',
      products: products
    }
  }
}