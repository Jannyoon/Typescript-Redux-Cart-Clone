import { Provider } from 'react-redux'
import ProductForm from './Products/Productform'
import ProductsList from './Products/ProductsList'
import store from './Store/store'


function App() {
  return (    
  <Provider store={store}>
    <div>
      <ProductsList/>
      <ProductForm/>
    </div>
  </Provider>)
}

export default App
