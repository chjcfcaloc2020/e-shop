import { useState, useMemo, useEffect } from "react"
import { useLoaderData, Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"
import Content from '../data/content.json'
import Rating from "../components/Rating"
import SizeFilter from '../components/Filters/SizeFilter'
import ProductColors from "../components/ProductColors"
import SvgCreditCard from '../components/common/SvgCreditCard'
import SvgCloth from '../components/common/SvgCloth'
import SvgShipping from '../components/common/SvgShipping'
import SvgReturn from '../components/common/SvgReturn'
import SectionHeading from '../components/sections/SectionHeading'
import ProductCard from '../components/ProductCard'

const extraSections = [
  {
    icon: <SvgCreditCard />,
    label: 'Secure payment'
  },
  {
    icon: <SvgCloth />,
    label: 'Size & Fit'
  },
  {
    icon: <SvgShipping />,
    label: 'Free shipping'
  },
  {
    icon: <SvgReturn />,
    label: 'Free Shipping & Returns'
  }
]

const categories = Content?.categories

const ProductDetail = () => {
  const { product } = useLoaderData()
  const [image, setImage] = useState()
  const [breadCrumbLinks, setBreadCrumbLinks] = useState([])

  // return category of product
  const productCategory = useMemo(() => {
    return categories?.find((category) => category?.id === product?.category_id)
  }, [product])

  // get similar products
  const productSimilarList = useMemo(() => {
    return Content?.products?.filter((item) => item?.type_id === product?.type_id && item?.id !== product?.id)
  }, [product])

  useEffect(() => {
    setImage(product?.images[0]?.startsWith('http') ? product?.images[0] : product?.thumbnail)
    setBreadCrumbLinks([])
    const arrayLinks = [
      {title: 'Shop', path: '/'}, {title: productCategory?.name, path: productCategory?.path}
    ]
    const productType = productCategory?.types?.find((item) => item?.type_id === product?.type_id)
    if (productType) {
      arrayLinks?.push({
        title: productType?.name,
        path: productType?.name
      })
    }
    setBreadCrumbLinks(arrayLinks)
  }, [productCategory, product])

  return (
    <>
      <div className="flex flex-col md:flex-row p-10">
        <div className="w-[100%] lg:w-[50%] md:w-[40%]">
          {/* Image */}
          <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]">
              {/* Stack Image */}
              <div className="flex flex-col justify-center h-full">
                {
                  product?.images?.map((item, index) => (
                    <button onClick={() => setImage(item)} className="rounded-lg w-fit p-2 mb-1">
                      <img src={item} className="h-[60px] w-[60px] bg-cover bg-center rounded-lg border border-gray-300 hover:scale-105 hover:border-2 transition" alt={'sample-' + index} />
                    </button>
                  ))
                }
              </div>
            </div>
            <div className="w-full md:w-[80%] flex justify-center md:pt-0 pt-10">
              <img src={image} className="h-full w-full max-h-[520px] border border-gray-300
              rounded-lg cursor-pointer object-cover" alt={product?.title}/>
            </div>
          </div>
        </div>  
        <div className="w-[60%] px-10">
          <Breadcrumb links={breadCrumbLinks}/>
          <p className='text-3xl pt-4'>{product?.title}</p>
          <Rating rating={product?.rating}/>
          {/* Price Tag */}
          <p className='text-xl bold py-2'>${product?.price}</p>
          <div className='flex flex-col py-2'>
            <div className='flex gap-2'>
              <p className='text-sm bold'>Select Size</p>
              <Link className='text-sm text-gray-500 hover:text-gray-900' to={'https://en.wikipedia.org/wiki/Clothing_sizes'} target='_blank'>{'Size Guide ->'}</Link>
            </div>
          </div>
          <div className='mt-2'>
            <SizeFilter sizes={product?.size} hidleTitle />
          </div>
          <div>
            <p className='text-lg bold'>Colors Available</p>
            <ProductColors colors={product?.color} />
          </div>
          <div className='flex py-4'>
          <button className='bg-black rounded-lg hover:bg-gray-700'><div className='flex h-[42px] rounded-lg w-[150px] px-2 items-center justify-center bg-black text-white hover:bg-gray-700'><svg width="17" height="16" className='me-2' viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.33325H2.00526C2.85578 1.33325 3.56986 1.97367 3.6621 2.81917L4.3379 9.014C4.43014 9.8595 5.14422 10.4999 5.99474 10.4999H13.205C13.9669 10.4999 14.6317 9.98332 14.82 9.2451L15.9699 4.73584C16.2387 3.68204 15.4425 2.65733 14.355 2.65733H4.5M4.52063 13.5207H5.14563M4.52063 14.1457H5.14563M13.6873 13.5207H14.3123M13.6873 14.1457H14.3123M5.66667 13.8333C5.66667 14.2935 5.29357 14.6666 4.83333 14.6666C4.3731 14.6666 4 14.2935 4 13.8333C4 13.373 4.3731 12.9999 4.83333 12.9999C5.29357 12.9999 5.66667 13.373 5.66667 13.8333ZM14.8333 13.8333C14.8333 14.2935 14.4602 14.6666 14 14.6666C13.5398 14.6666 13.1667 14.2935 13.1667 13.8333C13.1667 13.373 13.5398 12.9999 14 12.9999C14.4602 12.9999 14.8333 13.373 14.8333 13.8333Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>Add to cart</div></button>
          </div>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            {
              extraSections?.map((section,index)=>(
                <div key={index} className='flex items-center'>
                  {section?.icon}
                  <p className='px-2'>{section?.label}</p>
                </div>
              ))
            }
          </div>
        </div>  

        {/* Product Description */}
      </div>
      <SectionHeading title={"Product Description"}/>
      <div className='md:w-[50%] w-full p-2'>
        <p className='px-12 font-light'>{product?.description}</p>
      </div>
      <SectionHeading title={'Similar Products'}/>
      <div className="flex px-12">
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 px-2 pb-10">
          {
            productSimilarList?.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))
          }
          {!productSimilarList?.length && <p className="text-red-500">No product found!</p>}
        </div>
      </div>
    </>
  )
}

export default ProductDetail