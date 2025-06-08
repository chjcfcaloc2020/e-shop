import React from 'react'
import SectionHeading from './SectionHeading'
import Card from '../Card'
import Jeans from '../../assets/images/jeans.jpg'
import Shirts from '../../assets/images/shirts.jpg'
import Tshirt from '../../assets/images/tshirts.jpeg'
import Dresses from '../../assets/images/dresses.jpg'
import Carousel from 'react-multi-carousel'
import '../../assets/css/NewArrivals.css'
import { responsive } from '../../utils/section.constants'

const items = [
  {
    title: "Jeans",
    imagePath: Jeans,
  },
  {
    title: "Shirts",
    imagePath: Shirts,
  },
  {
    title: "T-Shirt",
    imagePath: Tshirt,
  },
  {
    title: "Dresses",
    imagePath: Dresses,
  },
  {
    title: "Shirts",
    imagePath: Shirts,
  },
  {
    title: "T-Shirt",
    imagePath: Tshirt,
  },
]

const NewArrivals = () => {
  return (
    <div>
      <SectionHeading title={"New Arrivals"}/>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={'react-slider-custom-item'}
        className='px-8'
      >
        {items && items?.map((item,index) => (
          <Card
            key={item?.title + index}
            title={item.title}
            imagePath={item.imagePath}
          />
        ))}
      </Carousel>
    </div>
  )
}

export default NewArrivals