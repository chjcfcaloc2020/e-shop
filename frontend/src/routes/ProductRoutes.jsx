import Content from '../data/content.json'

export const loadProductById = ({ params }) => {
  const product = Content?.products?.find((product) => product?.id?.toString() === params?.productId?.toString())
  return { product }
}