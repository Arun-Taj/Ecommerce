import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Breadcrum/Breadcrum'
import { ShopContext } from '../../ShopContext/ShopContext'
import DisplayProducts from './DisplayProducts'
import DescriptionBox from './DescriptionBox'
import RelatedProducts from './RelatedProducts'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id==Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <DisplayProducts product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product