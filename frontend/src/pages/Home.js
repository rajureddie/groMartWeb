import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"new in store"} heading={"New in store"}/>
      <HorizontalCardProduct category={"fruits& vegetables"} heading={"Fruits& Vegetables"}/>

      <VerticalCardProduct category={"dairy, bread & eggs"} heading={"Dairy, Bread & Eggs"}/>
      <VerticalCardProduct category={"Atta, Rice, Oil & Dals"} heading={"Atta, Rice, Oil & Dals"}/>
      <VerticalCardProduct category={"Meats"} heading={"Meats"}/>
      <VerticalCardProduct category={"Masala& Dry Fruits"} heading={"Masala& Dry Fruits"}/>
      <VerticalCardProduct category={"Tea& Coffee"} heading={"Tea& Coffee"}/>
      <VerticalCardProduct category={"Ice Creams &More"} heading={"Ice Creams &More"}/>
      <VerticalCardProduct category={"Makeup & Beauty"} heading={"Makeup & Beauty"}/>
      <VerticalCardProduct category={"Baby Care"} heading={"Baby Care"}/>
    </div>
  )
}

export default Home