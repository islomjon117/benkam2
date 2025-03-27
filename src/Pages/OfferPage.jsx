import React from 'react'
import Offer from '../components/offer/Offer'
import Offer_info from '../components/offerinfo/Offer_info'
import OfferButton from '../components/offer_buttons/OfferButton'
import Book from '../components/book_page/Book'

const OfferPage = () => {
  return (
    <>
       <Offer/> 
       <Offer_info/> 
       <OfferButton/>
       <Book/>
    </>
  )
}

export default OfferPage