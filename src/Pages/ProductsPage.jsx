import React from 'react'
import Products from '../components/products/Products'
import ProductHeader from '../components/product_header/ProductHeader'
import Book from '../components/book_page/Book'

const ProductsPage = () => {
  return (
    <>
     <Products/>
     <ProductHeader/>
     <Book/>
    </>
  )
}

export default ProductsPage