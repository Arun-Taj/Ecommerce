import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offer from '../Offers/Offer'
import NewCollections from '../NewCollections'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offer/>
      <NewCollections/>
    </div>
  )
}

export default Shop