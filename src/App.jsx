import {store} from './ReducerBasics.js'
import {Provider} from 'react-redux'
import ProductList from './components/productlist/ProductList.jsx'
import Cart from './components/cart/Cart.jsx'
import Layout from './layout/Layout.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
function App() {
  const router = createBrowserRouter([{
    path:"",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<ProductList />
      }
      ,{
      path:"/cart",
      element:<Cart />
    }]
  }])
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
     </Provider>
    </>
  )
}

export default App
