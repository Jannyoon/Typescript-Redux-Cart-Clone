import { Provider } from 'react-redux'
import ProductForm from './Products/Productform'
import ProductsList from './Products/ProductsList'
import store from './Store/store'
import { Cart } from './Cart/Cart'


function App() {
  return (    
  <Provider store={store}>
    <div>
      <ProductsList/>
      <ProductForm/>
      <Cart/>
    </div>
  </Provider>)
}

export default App
