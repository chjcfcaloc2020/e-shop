import { createBrowserRouter } from 'react-router-dom'
import { loadProductById } from './routes/ProductRoutes'
import App from './App'
import ProductListPage from './pages/ProductListPage'
import ShopApplicationWrapper from './pages/ShopApplicationWrapper'
import ProductDetail from './pages/ProductDetail'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/women",
        element: <ProductListPage categoryType={"WOMEN"}/>
      },
      {
        path: "/men",
        element: <ProductListPage categoryType={"MEN"}/>
      },
      {
        path: "/product/:productId",
        loader: loadProductById,
        element: <ProductDetail />
      },
    ]
  },
])